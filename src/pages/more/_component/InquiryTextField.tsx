import { Styles } from "@/style/Styles";
import { useState } from "react";
import styled from "styled-components";

interface InquiryTextFieldProps {
    maxLength: number;
    placeholder: string;
    value: string | undefined;
    name: string;
    isTextArea?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InquiryTextField: React.FC<InquiryTextFieldProps> = ({
    maxLength,
    placeholder,
    value,
    name,
    isTextArea = false,
    onChange,
}) => {
    const [currentLength, setCurrentLength] = useState<number>(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCurrentLength(e.target.value.length);
        onChange(e);
    };

    return (
        <StyledTextFieldWrap>
            {isTextArea ? (
                <div className="text_area">
                    <textarea
                        name={name}
                        placeholder={placeholder}
                        maxLength={maxLength}
                        value={value}
                        onChange={handleInputChange}
                    />
                </div>
            ) : (
                <input
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    value={value}
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
            border: 0.05rem solid transparent;
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
        }
    }
`;

export default InquiryTextField;
