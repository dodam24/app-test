import styled from "styled-components";
import { Styles } from "@/style/Styles";
import LabelInput from "@/components/input/LabelInput";

const RealtyPaymentInput = () => {
    const idList = [{ title: "임대료" }, { title: "관리비" }, { title: "수리비" }];
    return (
        <StyledPaymentInputWrapper>
            <LabelInput option="아이디" placeholder="아이디를 입력해주세요." id="username" />
            <LabelInput option="결제자명" placeholder="결제자명을 입력해주세요." id="name" />

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

            <LabelInput option="결제액" placeholder="결제액을 입력해주세요." name="pay" />
            <LabelInput option="수수료" id="charge" />
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
export default RealtyPaymentInput;
