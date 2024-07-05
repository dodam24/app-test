import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";

import { Styles } from "@/style/Styles";

import { PartyIcon } from "@/pages/insurance/_images/insurance";
import FixedButton from "@/components/button/FixedButton";
import { useNavigate } from "react-router-dom";

const InsuranceComplete = () => {
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`/`);
    };
    return (
        <AppLayout props={{ header: <AppBackHeader title="대출상품" /> }}>
            <StyledCompleteWrapper>
                <img src={PartyIcon} alt="" />
                <h2>보험 요청 완료</h2>
                <p>
                    보험요청이 완료되었습니다.
                    <br /> 상세보기는 마이 메뉴에서 확인하실 수 있습니다.
                </p>
            </StyledCompleteWrapper>
            <FixedButton onClick={handleItemClick}>메인으로 가기</FixedButton>
        </AppLayout>
    );
};

const StyledCompleteWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;
    text-align: center;
    img {
        margin: 3.5rem 0 2rem;
        width: 8rem;
        height: 8rem;
    }
    h2 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize24};
        font-weight: ${Styles.font.weight.medium};
        margin-bottom: 1.2rem;
    }
    p {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize16};
        font-weight: ${Styles.font.weight.regular};
    }
`;
export default InsuranceComplete;
