import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import { ToggleIcon, CheckIcon } from "@/pages/auth/register/_images/register_img";

interface Props {
    options: string[];
    onSelect: (domain: string) => void;
}

const SelectInput = ({ options, onSelect }: Props) => {
    const [emailDomain, setEmailDomain] = useState("");
    const [isEmailInputEnabled, setIsEmailInputEnabled] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (event.target instanceof Element && !event.target.closest(".select-dropdown")) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    const handleEmailOptionClick = (e: MouseEvent<HTMLLIElement>) => {
        const value = e.currentTarget.getAttribute("data-value") || "";
        if (value === "직접입력") {
            setIsEmailInputEnabled(true);
            setEmailDomain("");
            onSelect("");
        } else {
            setIsEmailInputEnabled(false);
            setEmailDomain(value);
            onSelect(value);
        }
        setSelectedOption(value);
        setIsDropdownVisible(false);
    };

    const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmailDomain(value);
        onSelect(value);
    };

    const handleInputClick = (e: MouseEvent<HTMLInputElement>) => {
        if (!isEmailInputEnabled) {
            e.stopPropagation();
        }
    };

    const handleIconClick = () => {
        setIsDropdownVisible((prev) => !prev);
    };

    return (
        <StyledSelectInner className="select-dropdown">
            <input
                className="email_modal_input"
                type="text"
                placeholder="선택하세요."
                value={emailDomain}
                onChange={handleEmailInputChange}
                onClick={handleInputClick}
                disabled={!isEmailInputEnabled}
            />
            <span onClick={handleIconClick}>
                <img src={ToggleIcon} alt="이메일 토글" />
            </span>
            {isDropdownVisible && (
                <ul>
                    {options.map((domain) => (
                        <li key={domain} data-value={domain} onClick={handleEmailOptionClick}>
                            {domain}
                            {selectedOption === domain && <img src={CheckIcon} alt="체크 표시" />}
                        </li>
                    ))}
                </ul>
            )}
        </StyledSelectInner>
    );
};

const StyledSelectInner = styled.div`
    position: relative;
    width: 100%;
    background-color: ${Styles.colors.systemBackground};
    border-radius: 0.4rem;
    input {
        width: 100%;
        height: 2.3rem;
        padding: 0 0.8rem;
        align-items: center;
        background-color: ${Styles.colors.systemBackground};
        border: 0.05rem solid transparent;
        border-radius: 0.4rem;
        caret-color: ${Styles.colors.primary100};
        outline: none;
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
        top: -1.9rem;
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
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            border-bottom: 1px solid var(--Natural-N10, #e8e8e9);
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &:hover {
                background: ${Styles.colors.systemBackground};
            }

            img {
                width: 1.2rem;
                height: 1.2rem;
            }
        }
    }
`;

export default SelectInput;
