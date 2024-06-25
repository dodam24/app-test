import { Styles } from "@/style/Styles";
import { useState } from "react";
import styled from "styled-components";
import Cancel from "@/assets/images/icons/icon_cancel_c.png";

interface InquiryTextFieldProps {
    maxLength: number;
    placeholder: string;
    isTextArea?: boolean;
}

const InquiryTextField: React.FC<InquiryTextFieldProps> = ({
    maxLength,
    placeholder,
    isTextArea = false,
}) => {
    // text count
    const [currentLength, setCurrentLength] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCurrentLength(e.target.value.length);
        setInputValue(e.target.value);
    };
    // textarea 초기화
    const handleClear = () => {
        setInputValue("");
        setCurrentLength(0);
    };

    return (
        <StyledTextFieldWrap>
            {isTextArea ? (
                <div className="text_area">
                    <textarea
                        placeholder={placeholder}
                        maxLength={maxLength}
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button className="close_btn" onClick={handleClear}></button>
                </div>
            ) : (
                <input
                    type="text"
                    placeholder={placeholder}
                    maxLength={maxLength}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            )}
            <StyledTextLimit>
                <span>{currentLength}</span>
                <span>/ {maxLength}자</span>
            </StyledTextLimit>
        </StyledTextFieldWrap>
    );
};

const StyledTextLimit = styled.div`
    display: flex;
    padding: 0 0.8rem;
    align-items: center;
    align-self: stretch;
    justify-content: end;
    gap: 0.1rem;

    span {
        text-align: right;
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize12};
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
    }
`;

const StyledTextFieldWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 0.6rem 0;
    gap: 0.1rem;

    input {
        width: 100%;
        border-radius: 0.4rem;
        border: none;
        background: ${Styles.colors.systemBackground};
        height: 2.3rem;
        padding: 0.55rem 0.8rem;
        outline: none;
        &::placeholder {
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            line-height: 1.4;
        }
    }

    .text_area {
        width: 100%;
        position: relative;
        textarea {
            width: 100%;
            height: 9rem;
            outline: none;
            border: none;
            background: ${Styles.colors.systemBackground};
            border-radius: 0.4rem;
            resize: none;
            padding: 0.8rem;

            &::placeholder {
                color: ${Styles.colors.natural40};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
                line-height: 1.4;
            }
            &:focus {
                border: 0.05rem solid ${Styles.colors.primary100};
            }

            &:focus + .close_btn {
                opacity: 1;
            }
        }
        & > .close_btn {
            display: block;
            opacity: 0;
            background: url(${Cancel}) no-repeat;
            width: 1rem;
            height: 1rem;
            background-size: 1rem 1rem;
            position: absolute;
            right: 5%;
            top: 45%;
        }
    }
`;

export default InquiryTextField;
