import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import OptionInput from "@/components/input/OptionInput";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";

import { StyledBaseInputWrapper, StyledLabelRadioInputWrapper } from "@/style/InputStyle";
import { StyledBottomText } from "@/style/FixedStyle";

const RealtyPayment = () => {
    const [value, setValue] = useState({
        username: "",
        name: "",
        amount: "",
        fee_rate: "1.5",
    });

    const handle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`/realty/deposit`, { replace: true });
    };
    return (
        <AppLayout props={{ header: <AppBackHeader title="결제하기" /> }}>
            <AppBaseWrapper title={`소소상점과 함께\n간편한 결제를 시작해 볼까요?`}>
                <StyledBaseInputWrapper>
                    <OptionInput
                        type="text"
                        name="username"
                        value={value.username}
                        onChange={handle}
                        placeholder="예) 소소상점"
                        label="아이디"
                        id="username"
                    />
                    <OptionInput
                        type="text"
                        name="name"
                        value={value.name}
                        onChange={handle}
                        placeholder="예) 김소소"
                        label="결제자명"
                        id="name"
                    />
                    <StyledLabelRadioInputWrapper>
                        <label>결제항목 선택</label>
                        <div className="select_radio">
                            <label>
                                <input type="radio" name="insurance" />
                                임대료
                            </label>
                            <label>
                                <input type="radio" name="insurance" />
                                관리비
                            </label>
                            <label>
                                <input type="radio" name="insurance" />
                                수리비
                            </label>
                        </div>
                    </StyledLabelRadioInputWrapper>
                    <OptionInput
                        type="text"
                        name="amount"
                        value={value.amount}
                        onChange={handle}
                        placeholder="금액을 입력해주세요."
                        label="결제액"
                        id="amount"
                    />
                    <OptionInput
                        type="text"
                        name="fee_rate"
                        value={value.fee_rate}
                        onChange={handle}
                        label="수수료"
                        disabled
                        id="fee_rate"
                    />

                    <StyledBottomText>
                        <p>
                            ※ 오늘 결제시, <span>20일 13:00에 입금</span>될 예정입니다.
                        </p>
                    </StyledBottomText>
                    <FixedButton onClick={handleItemClick}>결제하기</FixedButton>
                </StyledBaseInputWrapper>
            </AppBaseWrapper>
        </AppLayout>
    );
};

export default RealtyPayment;
