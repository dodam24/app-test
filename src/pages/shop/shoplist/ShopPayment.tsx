import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import styled from "styled-components";
import EnabledButton from "@/components/button/EnabledButton";
import LabelInput from "@/components/input/LabelInput";
import ButtonInput from "@/components/input/ButtonInput";
import CustomInput from "@/components/input/CustomInput";
import OwnerRegisterEmail from "@/pages/auth/register/option/OwnerRegisterEmail";
import ConsentComponent from "@/pages/auth/register/ConsentComponent";

const ShopPayment = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="서류등록" /> }}>
            <StyledRealtyWrapper>
                <LabelInput option="이름" placeholder="주문자명을 입력해주세요." />
                <ButtonInput
                    option="배송지"
                    buttonTitle="주소검색"
                    placeholder="주소를 입력해주세요."
                    type="text"
                    className="phoneInput"
                />
                <CustomInput placeholder="상세주소를 입력해주세요" className="adressInput" />
                <LabelInput option="휴대폰번호" placeholder="번호를 입력해주세요." />
                <OwnerRegisterEmail />
                <LabelInput option="배송 요청 메시지" placeholder="요청 메시지를 입력해 주세요." />
                <ConsentComponent />
            </StyledRealtyWrapper>
            <EnabledButton title="원 결제하기" />
        </AppLayout>
    );
};

const StyledRealtyWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;
    .phoneInput {
        height: 2.3rem;
        margin-bottom: 0; /* 마진 값 해결해야함  */
    }
    .adressInput {
        height: 2.3rem;
        margin-bottom: 1.2rem;
    }
`;

export default ShopPayment;
