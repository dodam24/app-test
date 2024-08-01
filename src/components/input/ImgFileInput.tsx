import { ChangeEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PlusIcon, SearchIcon, TrashIcon } from "@/pages/realty/_images/realtyImg";
import { Styles } from "@/style/Styles";
import Button from "@/components/button/Button";

interface ImgFileInputProps {
    label?: string;
    isDescription?: boolean;
    isReset?: boolean;
    imgSrc?: string;
    name: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MAX_FILE_SIZE_MB = 3;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

function ImgFileInput({
    label,
    isDescription,
    isReset,
    imgSrc,
    name,
    handleInputChange,
}: ImgFileInputProps) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [preview, setPreview] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isOverlay, setIsOverlay] = useState<boolean>(false);
    const [isEnvironment, setIsEnvironment] = useState(false);

    const hideOverlay = () => {
        setIsOverlay(false);
    };

    const showOverlay = () => {
        setIsOverlay(true);
    };

    const handleClick = (isEnvironment: boolean) => {
        setIsEnvironment(isEnvironment);
        fileInputRef.current?.click();
    };

    const handleReset = () => {
        setPreview("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
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
            hideOverlay();
        }
    };

    useEffect(() => {
        if (imgSrc) {
            setPreview(imgSrc);
        }

        return () => {};
    }, [imgSrc]);

    return (
        <StyledDocumentContainer>
            {label && <Label>{label}</Label>}
            <StyledDocumentInner>
                <StyledCustomFileInput onClick={showOverlay}>
                    {preview ? (
                        <PreviewImage src={preview} alt="미리보기" className="pull_image" />
                    ) : (
                        <InputImage src={PlusIcon} alt="파일 선택" className="input_image" />
                    )}
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="file_input"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleFileChange(e);
                            handleInputChange(e);
                        }}
                        name={name}
                        accept="image/*"
                        capture={isEnvironment ? "environment" : undefined}
                    />
                </StyledCustomFileInput>
                <StyledDocumentBtn>
                    <Button onClick={showOverlay}>
                        <img src={SearchIcon} alt="이미지 탐색" />
                    </Button>
                    {isReset && (
                        <Button onClick={handleReset}>
                            <img src={TrashIcon} alt="이미지 삭제" />
                        </Button>
                    )}
                </StyledDocumentBtn>
            </StyledDocumentInner>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {isDescription && <Description>3MB 이하 업로드 가능</Description>}
            <div className={`overlay ${isOverlay ? `active` : ``}`}>
                <div className={`choice ${isOverlay ? `active` : ``}`}>
                    <div onClick={() => handleClick(true)}>카메라</div>
                    <div onClick={() => handleClick(false)}>사진 첨부하기</div>
                </div>
                <div className={`choice cancel ${isOverlay ? `active` : ``}`}>
                    <div onClick={hideOverlay}>취소</div>
                </div>
            </div>
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

    & > div.overlay {
        background-color: rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99999;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s;
        padding: 0 0.5rem 0.6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        gap: 0.6rem;

        &.active {
            opacity: 1;
            visibility: visible;
        }

        & > .choice {
            width: 100%;
            height: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: ${Styles.colors.primary100};
            font-size: ${Styles.font.size.fontsize16};
            font-weight: ${Styles.font.weight.regular};
            background-color: ${Styles.colors.systemBackground};
            border-radius: 0.75rem;
            opacity: 0;
            visibility: hidden;
            transition: height 0.3s;

            &.active {
                height: auto;
                opacity: 1;
                visibility: visible;
            }

            > div {
                width: 100%;
                position: relative;
                padding: 0.9rem 0.8rem;
                text-align: center;
                cursor: pointer;

                &:first-child::before {
                    content: "";
                    position: absolute;
                    height: 1px;
                    width: 100%;
                    background-color: rgba(0, 0, 0, 0.2);
                    bottom: 0;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            &.cancel {
                & > div:first-child::before {
                    content: unset;
                }
            }
        }
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
    justify-content: center;
    button {
        padding: 0.5rem;
        background-color: ${Styles.colors.systemWhite};
        border-radius: 0.2rem;
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
        width: 2.2rem;
        height: 2.2rem;
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
