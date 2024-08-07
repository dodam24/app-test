import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Owner, Staff, CheckIcon } from "@/pages/auth/register/_images/register_img";
import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import FixedButton from "@/components/button/FixedButton";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";

import { Styles } from "@/style/Styles";

const Register = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate();

    const handleClick = (option: string) => {
        setSelectedOption(option);
    };

    const handleSubmit = () => {
        if (selectedOption === "owner") {
            navigate("/register/owner", { replace: true });
        } else if (selectedOption === "staff") {
            navigate("/register/staff", { replace: true });
        }
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="가입유형 선택" /> }}>
            <AppBaseWrapper
                title={`소소상점과 함께\n더 즐거운 사업을 시작해 볼까요?\n가입 유형을 선택해 주세요!`}
            >
                <StyledOptionListWrapper>
                    <StyledOptionListItem onClick={() => handleClick("owner")}>
                        <StyledInnerWrapper
                            className={selectedOption === "owner" ? "selected" : ""}
                        >
                            <div className="selectIcon">
                                <p>점주</p>
                                {selectedOption === "owner" && <img src={CheckIcon} alt="선택됨" />}
                            </div>
                            <img src={Owner} alt="점주" className="icon" />
                        </StyledInnerWrapper>
                    </StyledOptionListItem>
                    <StyledOptionListItem onClick={() => handleClick("staff")}>
                        <StyledInnerWrapper
                            className={selectedOption === "staff" ? "selected" : ""}
                        >
                            <div className="selectIcon">
                                <p>직원</p>
                                {selectedOption === "staff" && <img src={CheckIcon} alt="선택됨" />}
                            </div>
                            <img src={Staff} alt="직원" className="icon" />
                        </StyledInnerWrapper>
                    </StyledOptionListItem>
                </StyledOptionListWrapper>

                <FixedButton onClick={handleSubmit} disabled={!selectedOption}>
                    회원가입 신청
                </FixedButton>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const StyledOptionListWrapper = styled.ul`
    display: flex;
    gap: 0.75rem;
    width: 100%;
    margin-top: 2.5rem;
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

    .selectIcon {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;

        img {
            width: 1.2rem;
            height: 1.2rem;
        }
    }
`;

export default Register;
