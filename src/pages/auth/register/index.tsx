import styled from "styled-components";
import { Styles } from "@/style/Styles";

import { useState } from "react";
import EnabledButton from "@/components/button/EnabledButton";
import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import { useNavigate } from "react-router-dom";
import { Owner, Staff, CheckIcon } from "./registerImg";

const Register = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate();

    const handleClick = (option: string) => {
        setSelectedOption(option);
    };

    const handleSubmit = () => {
        if (selectedOption === "owner") {
            navigate("/register/owner");
        } else if (selectedOption === "staff") {
            navigate("/register/staff");
        }
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="가입유형 선택" /> }}>
            <StyledRegisterInner>
                <h3>
                    소소상점과 함께
                    <br />더 즐거운 사업을 시작해 볼까요?
                </h3>
                <StyledOptionListWrapper>
                    <StyledOptionListItem onClick={() => handleClick("owner")}>
                        <StyledInnerWrapper
                            className={selectedOption === "owner" ? "selected" : ""}
                        >
                            <StyledTextWithIcon>
                                <p>점주</p>
                                {selectedOption === "owner" && <img src={CheckIcon} alt="선택됨" />}
                            </StyledTextWithIcon>
                            <img src={Owner} alt="점주" className="icon" />
                        </StyledInnerWrapper>
                    </StyledOptionListItem>
                    <StyledOptionListItem onClick={() => handleClick("staff")}>
                        <StyledInnerWrapper
                            className={selectedOption === "staff" ? "selected" : ""}
                        >
                            <StyledTextWithIcon>
                                <p>직원</p>
                                {selectedOption === "staff" && <img src={CheckIcon} alt="선택됨" />}
                            </StyledTextWithIcon>
                            <img src={Staff} alt="직원" className="icon" />
                        </StyledInnerWrapper>
                    </StyledOptionListItem>
                </StyledOptionListWrapper>
                <EnabledButton
                    type="button"
                    title="회원가입 신청"
                    onClick={handleSubmit}
                    disabled={!selectedOption}
                />
            </StyledRegisterInner>
        </AppLayout>
    );
};

const StyledRegisterInner = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem 1rem 0;
    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 140%;
        width: 100%;
        text-align: left;
        margin-bottom: 1.5rem;
    }
`;

const StyledOptionListWrapper = styled.ul`
    display: flex;
    gap: 0.75rem;
    width: 100%;
`;

const StyledOptionListItem = styled.li`
    cursor: pointer;
    flex: 1;
`;

const StyledInnerWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 8.55rem;
    padding: 0.6rem 1rem;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.4rem;
    background: ${Styles.colors.systemBackground};
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;

    p {
        width: 100%;
        text-align: left;
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        height: 1.2rem;
    }

    .icon {
        margin-left: auto;
        width: 4.25rem;
        height: 4.25rem;
        mix-blend-mode: luminosity;
    }

    &.selected .icon {
        mix-blend-mode: normal;
    }
`;

const StyledTextWithIcon = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    img {
        width: 1.2rem;
        height: 1.2rem;
    }
`;

export default Register;
