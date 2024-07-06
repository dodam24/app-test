import { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";
import { PlusIcon, SearchIcon, TrashIcon } from "@/pages/realty/_images/realtyImg";
import { Styles } from "@/style/Styles";
import Button from "@/components/button/Button";

interface ImgFileInputProps {
    label: string;
}

const MAX_FILE_SIZE_MB = 3;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

function ImgFileInput({ label }: ImgFileInputProps) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [preview, setPreview] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const fileSizeInMB = file.size / (1024 * 1024);
            if (file.size > MAX_FILE_SIZE_BYTES) {
                setErrorMessage(
                    `선택한 "${label}" 파일 크기가 ${fileSizeInMB.toFixed(2)}MB로 ${MAX_FILE_SIZE_MB}MB를 초과합니다.`,
                );
                return;
            }

            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
            setErrorMessage("");
        }
    };

    const handleReset = () => {
        setPreview("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <StyledDocumentContainer>
            <Label>{label}</Label>
            <StyledDocumentInner>
                <StyledCustomFileInput onClick={handleClick}>
                    {preview ? (
                        <PreviewImage src={preview} alt="미리보기" className="pull_image" />
                    ) : (
                        <InputImage src={PlusIcon} alt="파일 선택" className="input_image" />
                    )}
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="file_input"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                </StyledCustomFileInput>
                <StyledDocumentBtn>
                    <Button onClick={handleClick}>
                        <img src={SearchIcon} alt="" />
                    </Button>
                    <Button onClick={handleReset}>
                        <img src={TrashIcon} alt="" />
                    </Button>
                </StyledDocumentBtn>
            </StyledDocumentInner>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <Description>3MB 이하 업로드 가능</Description>
        </StyledDocumentContainer>
    );
}

const StyledDocumentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    p {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
    span {
        color: ${Styles.colors.natural50};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const StyledDocumentInner = styled.div`
    padding: 0.6rem;
    background-color: ${Styles.colors.systemBackground};
    border-radius: 0.4rem;
    border: 1px solid ${Styles.colors.natural10};
    display: flex;
    justify-content: space-between;
    gap: 0.6rem;
`;

const StyledCustomFileInput = styled.div`
    width: 100%;
    background-color: ${Styles.colors.systemWhite};
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;

    .file_input {
        display: none;
    }
`;

const InputImage = styled.img`
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    object-fit: cover;
`;

const PreviewImage = styled.img`
    width: 4rem;
    height: 4rem;
    object-fit: cover;
`;

const StyledDocumentBtn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    button {
        padding: 0.5rem;
        background-color: ${Styles.colors.systemWhite};
        border-radius: 0.2rem;
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
        img {
            width: 1.2rem;
            height: 1.2rem;
        }
    }
`;

const Label = styled.p`
    color: ${Styles.colors.natural80};
    font-size: ${Styles.font.size.fontsize14};
    font-weight: ${Styles.font.weight.regular};
`;

const Description = styled.span`
    color: ${Styles.colors.natural50};
    font-size: ${Styles.font.size.fontsize13};
    font-weight: ${Styles.font.weight.regular};
`;

const ErrorMessage = styled.em`
    font-style: normal;
    color: ${Styles.colors.systemError};
    font-size: ${Styles.font.size.fontsize13};
    font-weight: ${Styles.font.weight.regular};
`;

export default ImgFileInput;
