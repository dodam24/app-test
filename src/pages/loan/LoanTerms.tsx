import { useState } from "react";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import EnabledButton from "@/components/button/EnabledButton";
import { CheckedOff, CheckedOn } from "@/pages/auth/register/_images/register_img";

const LoanTerms = () => {
    const [checkboxStates, setCheckboxStates] = useState([
        {
            label: "이용약관에 동의합니다. (필수)",
            checked: false,
            detailLink: "#",
            id: "consent1",
        },
        {
            label: "개인(신용)정보 조회 동의 (필수)",
            checked: false,
            detailLink: "#",
            id: "consent2",
        },
        {
            label: "개인(신용) 정보 수집·이용·제공 동의 (필수)",
            checked: false,
            detailLink: "#",
            id: "consent3",
        },
        {
            label: "상품서비스 안내수단에 동의 (필수)",
            checked: false,
            detailLink: "",
            id: "consent4",
        },
        {
            label: "보증보험사 약관 동의 (필수)",
            checked: false,
            detailLink: "",
            id: "consent5",
        },
    ]);

    const handleCheckboxChange = (index: number) => {
        const newCheckboxStates = [...checkboxStates];
        newCheckboxStates[index].checked = !newCheckboxStates[index].checked;
        setCheckboxStates(newCheckboxStates);
    };

    const toggleAllCheckboxes = () => {
        const allChecked = checkboxStates.every((checkbox) => checkbox.checked);
        const newCheckboxStates = checkboxStates.map((checkbox) => ({
            ...checkbox,
            checked: !allChecked,
        }));
        setCheckboxStates(newCheckboxStates);
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="대출상품" /> }}>
            <StyledTermsWrapper>
                <h2>대출 서비스 인증/동의</h2>
                <StyledTermsInner>
                    <div>
                        <p>[서비스 이용을 위한 필수 약관 동의]</p>
                        <StyledTermsAllBtn>
                            <input
                                id="consentAll"
                                type="checkbox"
                                checked={checkboxStates.every((checkbox) => checkbox.checked)}
                                onChange={() => toggleAllCheckboxes()}
                                onClick={toggleAllCheckboxes}
                            />
                            <label htmlFor="consentAll">모두 동의</label>
                        </StyledTermsAllBtn>
                    </div>
                    <ConsentContainer>
                        {checkboxStates.map((checkbox, index) => (
                            <ConsentList key={checkbox.id}>
                                <StyledTermsAllBtn>
                                    <input
                                        id={checkbox.id}
                                        type="checkbox"
                                        checked={checkbox.checked}
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                    <label htmlFor={checkbox.id}>{checkbox.label}</label>
                                </StyledTermsAllBtn>
                                {checkbox.detailLink && (
                                    <a
                                        href={checkbox.detailLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        상세
                                    </a>
                                )}
                            </ConsentList>
                        ))}
                    </ConsentContainer>
                </StyledTermsInner>
                <EnabledButton title="확인" />
            </StyledTermsWrapper>
        </AppLayout>
    );
};

const StyledTermsWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;
    h2 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 140%;
        margin-bottom: 1.2rem;
    }
`;
const StyledTermsInner = styled.div`
    div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    p {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const StyledTermsAllBtn = styled.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;

    input {
        width: 1rem;
        height: 1rem;
        border-radius: 0.2rem;
        background: url(${CheckedOff}) no-repeat center;
        background-size: 1rem 1rem;
        appearance: none;
        margin: 0;

        &:checked {
            background: url(${CheckedOn}) no-repeat center;
            background-size: 1rem 1rem;
        }
    }

    label {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;
const ConsentContainer = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 0.4rem;
    background-color: ${Styles.colors.systemBackground};
    margin-top: 0.4rem;
    padding: 0.85rem 0.8rem;
`;

const ConsentList = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize12};
        font-weight: ${Styles.font.weight.regular};
        line-height: 140%;
        text-decoration: underline;
        text-underline-position: under;
    }
`;

export default LoanTerms;
