import { useState, ChangeEvent } from "react";
import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";

import OptionInput from "@/components/input/OptionInput";
import { Styles } from "@/style/Styles";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";
import { useNavigate } from "react-router-dom";
import { StyledBaseInputWrapper, StyledInputRadioWrapper } from "@/components/styles/InputStyle";

const RealtyPayment = () => {
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
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`/realty/deposit`);
    };
    return (
        <AppLayout props={{ header: <AppBackHeader title="결제하기" /> }}>
            <AppBaseWrapper title={`소소상점과 함께\n간편한 결제를 시작해 볼까요?`}>
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

                    <StyledBottomText>
                        <p>
                            ※ 오늘 결제시, <span>20일 13:00에 입금</span>될 예정입니다.
                        </p>
                    </StyledBottomText>
                    <FixedButton onClick={handleItemClick}>결제하기</FixedButton>
                </StyledInputContainer>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const StyledInputContainer = styled(StyledBaseInputWrapper)``;

const StyledSelectButton = styled.div`
    margin-bottom: 1.2rem;
    label {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;
const StyledPaymentSelect = styled(StyledInputRadioWrapper)`
    margin-top: 0.4rem;
    display: flex;
    gap: 1rem;
    li {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        p {
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
            margin: 0;
        }
    }
`;

const StyledBottomText = styled.div`
    position: fixed;
    bottom: 4.7rem;
    p {
        margin-top: 3.1rem;
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
        span {
            color: ${Styles.colors.systemError};
        }
    }
`;
export default RealtyPayment;
