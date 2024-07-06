import {
    useState,
    useEffect,
    ChangeEvent,
    MouseEvent,
    InputHTMLAttributes,
    MouseEventHandler,
} from "react";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import { ToggleIcon, CheckIcon } from "@/pages/auth/register/_images/register_img";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "onSelect"> {
    label?: string;
    options: string[];
    onSelect: (domain: string) => void;
}

interface ValueState {
    selectDomain: string;
    isSelectInputEnabled: boolean;
    isDropdownVisible: boolean;
    selectedOption: string | "";
}

const SelectInput = ({ label, options, onSelect, ...rest }: Props) => {
    const [value, setValue] = useState<ValueState>({
        selectDomain: "",
        isSelectInputEnabled: false,
        isDropdownVisible: false,
        selectedOption: "",
    });

    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (event.target instanceof Element && !event.target.closest(".select-dropdown")) {
                setValue((prev) => ({
                    ...prev,
                    isDropdownVisible: false,
                }));
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    const handleSelectOptionClick: MouseEventHandler<HTMLLIElement> = (e) => {
        const selectedValue = e.currentTarget.getAttribute("data-value") || "";
        if (selectedValue === "직접입력") {
            setValue((prev) => ({
                ...prev,
                isSelectInputEnabled: true,
                selectDomain: "",
                selectedOption: "",
            }));
            onSelect("");
        } else {
            setValue((prev) => ({
                ...prev,
                isSelectInputEnabled: false,
                selectDomain: selectedValue,
                selectedOption: selectedValue,
            }));
            onSelect(selectedValue);
        }
        setValue((prev) => ({
            ...prev,
            isDropdownVisible: false,
        }));
    };

    const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value: selectDomain } = e.target;
        setValue((prev) => ({
            ...prev,
            selectDomain,
        }));
        onSelect(selectDomain);
    };

    const handleInputClick = (e: MouseEvent<HTMLInputElement>) => {
        if (!value.isSelectInputEnabled) {
            e.preventDefault();
        }
    };

    const handleIconClick = () => {
        setValue((prev) => ({
            ...prev,
            isDropdownVisible: !prev.isDropdownVisible,
        }));
    };

    return (
        <StyledSelectWrapper>
            {label && <label>{label}</label>}
            <StyledSelectInner className="select-dropdown">
                <input
                    value={value.selectDomain}
                    onChange={handleEmailInputChange}
                    onClick={handleInputClick}
                    disabled={!value.isSelectInputEnabled}
                    {...rest}
                />
                <span onClick={handleIconClick}>
                    <img src={ToggleIcon} alt="이메일 토글" />
                </span>
                {value.isDropdownVisible && (
                    <ul>
                        {options.map((domain) => (
                            <li
                                key={domain}
                                data-value={domain}
                                onClick={handleSelectOptionClick}
                                className={value.selectedOption === domain ? "selected" : ""}
                            >
                                {domain}
                                {value.selectedOption === domain && (
                                    <img src={CheckIcon} alt="체크 표시" />
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </StyledSelectInner>
        </StyledSelectWrapper>
    );
};

const StyledSelectWrapper = styled.div`
    label {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;
const StyledSelectInner = styled.div`
    position: relative;
    width: 100%;
    background-color: ${Styles.colors.systemBackground};
    border-radius: 0.4rem;
    margin-top: 0.4rem;
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
        width: 100%;

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
            height: 2.4rem;
            background-color: ${Styles.colors.systemWhite};
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            border-bottom: 1px solid ${Styles.colors.natural10};
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &.selected {
                background-color: ${Styles.colors.systemBackground};
            }

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
