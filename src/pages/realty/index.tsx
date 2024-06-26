import { useRef, useState } from "react";
import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import EnabledButton from "@/components/button/EnabledButton";

import { Styles } from "@/style/Styles";

import { PlusIcon, SearchIcon, TrashIcon } from "@/pages/realty/_images/realtyImg";

const Realty = () => {
    const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [previews, setPreviews] = useState<(string | null)[]>(Array(2).fill(null));

    const handleClick = (index: number) => {
        fileInputRefs.current[index]?.click();
    };

    const handleFileChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreviews((prev) => {
                const newPreviews = [...prev];
                newPreviews[index] = objectUrl;
                return newPreviews;
            });
        }
    };

    const handleReset = (index: number) => {
        setPreviews((prev) => {
            const newPreviews = [...prev];
            newPreviews[index] = null;
            return newPreviews;
        });
        const fileInput = fileInputRefs.current[index];
        if (fileInput) {
            fileInput.value = "";
        }
    };

    const documents = ["신분증", "임대차 계약서"];

    return (
        <AppLayout props={{ header: <AppBackHeader title="서류등록" /> }}>
            <StyledRealtyWrapper>
                <h2>
                    업로드 버튼을 눌러 <br />
                    선명한 사진으로 등록해주세요.
                </h2>

                {documents.map((doc, index) => (
                    <StyledDocumentContainer key={index}>
                        <p>{doc}</p>
                        <StyledDocumentInner>
                            <StyledCustomFileInput>
                                {previews[index] ? (
                                    <img
                                        src={previews[index]!}
                                        alt="미리보기"
                                        className="pull_image"
                                    />
                                ) : (
                                    <img src={PlusIcon} alt="파일 선택" className="input_image" />
                                )}
                                <input
                                    type="file"
                                    ref={(el) => (fileInputRefs.current[index] = el)}
                                    className="file_input"
                                    onChange={(e) => handleFileChange(index, e)}
                                />
                            </StyledCustomFileInput>
                            <StyledDocumentBtn>
                                <button onClick={() => handleClick(index)}>
                                    <img src={SearchIcon} alt="" />
                                </button>
                                <button onClick={() => handleReset(index)}>
                                    <img src={TrashIcon} alt="" />
                                </button>
                            </StyledDocumentBtn>
                        </StyledDocumentInner>
                        <span>3MB 이하 업로드 가능</span>
                    </StyledDocumentContainer>
                ))}
            </StyledRealtyWrapper>
            <EnabledButton title="서류등록" />
        </AppLayout>
    );
};

const StyledRealtyWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;
    h2 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        margin-bottom: 1rem;
    }
`;
const StyledDocumentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 1.2rem;
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

    .input_image {
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        object-fit: cover;
    }
    .pull_image {
        width: 4rem;
        height: 4rem;
        object-fit: cover;
    }
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
export default Realty;
