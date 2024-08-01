import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PartyIcon } from "@/pages/insurance/_images/insurance";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import FixedButton from "@/components/button/FixedButton";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";

import { Styles } from "@/style/Styles";

const InsuranceComplete = () => {
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`/`, { replace: true });
    };
    return (
        <AppLayout props={{ header: <AppBackHeader title="보험 서비스" /> }}>
            <AppBaseWrapper>
                <StyledCompleteWrapper>
                    <img src={PartyIcon} alt="" />
                    <h2>보험 요청 완료</h2>
                    <p>
                        보험요청이 완료되었습니다.
                        <br /> 상세보기는 마이 메뉴에서 확인하실 수 있습니다.
                    </p>
                </StyledCompleteWrapper>
                <FixedButton onClick={handleItemClick}>메인으로 가기</FixedButton>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const StyledCompleteWrapper = styled.div`
    text-align: center;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    width: 100%;
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
        text-align: center;
    }
    p {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize16};
        font-weight: ${Styles.font.weight.regular};
    }
`;
export default InsuranceComplete;
