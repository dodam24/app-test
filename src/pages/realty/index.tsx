import { useRef } from "react";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import EnabledButton from "@/components/button/EnabledButton";
import { PlusIcon, SearchIcon, TrashIcon } from "@/pages/realty/_images/realtyImg";

const Realty = () => {
    const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleClick = (index: number) => {
        fileInputRefs.current[index]?.click();
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
                                <img
                                    src={PlusIcon}
                                    alt="파일 선택"
                                    onClick={() => handleClick(index)}
                                    className="input_image"
                                />
                                <input
                                    type="file"
                                    ref={(el) => (fileInputRefs.current[index] = el)}
                                    className="file_input"
                                />
                            </StyledCustomFileInput>
                            <StyledDocumentBtn>
                                <button>
                                    <img src={SearchIcon} alt="" />
                                </button>
                                <button>
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

    .file_input {
        display: none;
    }

    .input_image {
        cursor: pointer;
        width: 2rem;
        height: 2rem;
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
