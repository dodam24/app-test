import { useState, ChangeEvent, MouseEvent } from "react";
import { ToggleIcon } from "../registerImg";
import styled from "styled-components";
import { Styles } from "@/style/Styles";

const emailDomains = ["naver.com", "gmail.com", "nate.com", "daum.net", "icloud.com", "직접입력"];

const OwnerRegisterEmail = () => {
    const [emailDomain, setEmailDomain] = useState("");
    const [isEmailInputEnabled, setIsEmailInputEnabled] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleEmailToggleClick = () => {
        setIsDropdownVisible((prev) => !prev);
    };

    const handleEmailOptionClick = (e: MouseEvent<HTMLLIElement>) => {
        const value = e.currentTarget.getAttribute("data-value") || "";
        if (value === "직접입력") {
            setIsEmailInputEnabled(true);
            setEmailDomain("");
        } else {
            setIsEmailInputEnabled(false);
            setEmailDomain(value);
        }
        setIsDropdownVisible(false);
    };

    const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailDomain(e.target.value);
    };

    return (
        <StyledEmailWrapper>
            <label htmlFor="email">이메일</label>
            <div className="flex">
                <input className="email_input" type="text" placeholder="이메일 아이디" id="email" />
                <label>@</label>
                <StyledEmailInner>
                    <input
                        className="email_modal_input"
                        type="text"
                        placeholder="선택하세요."
                        value={emailDomain}
                        onChange={handleEmailInputChange}
                        onClick={handleEmailToggleClick}
                        disabled={!isEmailInputEnabled}
                    />
                    <span onClick={handleEmailToggleClick}>
                        <img src={ToggleIcon} alt="이메일 토글" />
                    </span>
                    {isDropdownVisible && (
                        <ul>
                            {emailDomains.map((domain) => (
                                <li
                                    key={domain}
                                    data-value={domain}
                                    onClick={handleEmailOptionClick}
                                >
                                    {domain}
                                </li>
                            ))}
                        </ul>
                    )}
                </StyledEmailInner>
            </div>
        </StyledEmailWrapper>
    );
};

const StyledEmailWrapper = styled.div`
    margin-top: 1.2rem;
    label {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
    input {
        width: 45%;
        height: 2.3rem;
        padding: 0 0.8rem;
        align-items: center;
        background-color: ${Styles.colors.systemBackground};
        border: none;
        border-radius: 0.4rem;
        caret-color: ${Styles.colors.primary100};

        &::placeholder {
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
        }

        &:focus {
            border: 0.05rem solid ${Styles.colors.primary100};
            outline: none;
        }
    }
    .flex {
        display: flex;
        gap: 0.3rem;
        align-items: center;
        justify-content: center;
        margin: 0.4rem 0 1.2rem;
    }
`;

const StyledEmailInner = styled.div`
    position: relative;
    width: 55%;

    input {
        width: 100%;
        padding-right: 0.8rem;
    }
    span {
        position: absolute;
        top: 50%;
        right: 0.8rem;
        transform: translateY(-50%);
        cursor: pointer;
        display: flex;
        justify-content: end;
        align-items: center;

        img {
            width: 1.2rem;
            height: 1.2rem;
            margin: 0;
        }
    }
    ul {
        position: absolute;
        display: inline-flex;
        right: 0;
        top: -1.65rem;
        flex-direction: column;
        box-shadow:
            0px 20px 25px -5px rgba(51, 65, 85, 0.1),
            0px 10px 10px -5px rgba(51, 65, 85, 0.04);
        border: 1px solid var(--Natural-N10, #e8e8e9);
        border-radius: 0.4rem;
        overflow: hidden;
        z-index: 333;

        li {
            padding: 0.75rem 0.8rem;
            width: 9.1rem;
            background-color: ${Styles.colors.systemWhite};
            color: ${Styles.colors.natural80};
            font-family: Pretendard;
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            border-bottom: 1px solid var(--Natural-N10, #e8e8e9);
            cursor: pointer;
            &:hover {
                background: ${Styles.colors.systemBackground};
            }
        }
    }
`;

export default OwnerRegisterEmail;
