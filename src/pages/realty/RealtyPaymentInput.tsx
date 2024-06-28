import { useState, ChangeEvent } from "react";
import styled from "styled-components";

import OptionInput from "@/components/input/OptionInput";
import { Styles } from "@/style/Styles";

const RealtyPaymentInput = () => {
    const [value, setValue] = useState({
        username: "",
        name: "",
        amount: "",
        fee_rate: "",
    });

    const handle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };
    const idList = [{ title: "임대료" }, { title: "관리비" }, { title: "수리비" }];
    return (
        <StyledPaymentInputWrapper>
            <StyledInputContainer>
                <OptionInput
                    type="text"
                    name="username"
                    value={value.username}
                    onChange={handle}
                    placeholder="예) 소소상점"
                    label="아이디"
                />
                <OptionInput
                    type="text"
                    name="name"
                    value={value.name}
                    onChange={handle}
                    placeholder="예) 김소소"
                    label="결제자명"
                />
                <StyledSelectButton>
                    <label>결제항목 선택</label>
                    <StyledPaymentSelect>
                        {idList.map((item, index) => (
                            <li key={index}>
                                <input type="radio" name="idList" />
                                <p>{item.title}</p>
                            </li>
                        ))}
                    </StyledPaymentSelect>
                </StyledSelectButton>
                <OptionInput
                    type="text"
                    name="amount"
                    value={value.amount}
                    onChange={handle}
                    placeholder="금액을 입력해주세요."
                    label="결제액"
                />
                <OptionInput
                    type="text"
                    name="fee_rate"
                    value={value.fee_rate}
                    onChange={handle}
                    placeholder="1.5"
                    label="수수료"
                />
            </StyledInputContainer>
        </StyledPaymentInputWrapper>
    );
};

const StyledPaymentInputWrapper = styled.div``;
const StyledSelectButton = styled.div`
    margin-bottom: 1.2rem;
    label {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;
const StyledPaymentSelect = styled.ul`
    margin-top: 0.4rem;
    display: flex;
    gap: 1rem;
    li {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        input {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            width: 1rem;
            height: 1rem;
            margin: 0;
            border: 0.1rem solid ${Styles.colors.natural30};
            border-radius: 50%;
            outline: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;

            &:checked {
                background-color: ${Styles.colors.systemWhite};
                border-color: ${Styles.colors.primary100};
            }

            &:checked::before {
                content: "";
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;
                background-color: ${Styles.colors.primary100};
            }
        }
        p {
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
            margin: 0;
        }
    }
`;

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;
export default RealtyPaymentInput;
