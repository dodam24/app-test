import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";

import { Styles } from "@/style/Styles";
import { StyledStateBox } from "@/style/StateBoxStyle";

const RealtyExamine = () => {
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`/realty/payment`, { replace: true });
    };
    return (
        <AppLayout props={{ header: <AppBackHeader title="서류검토" /> }}>
            <AppBaseWrapper
                title={`서류 등록이 완료되었어요.\n결제하기를 통해 임대료를 납입할 수 있어요!`}
            >
                <StyledExamineContainer>
                    <StyledStateBox>
                        <h3>서류 검토</h3>
                        <p>완료</p>
                    </StyledStateBox>
                    <button>서류 추가하기</button>
                </StyledExamineContainer>
                <FixedButton onClick={handleItemClick}>결제하기</FixedButton>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const StyledExamineContainer = styled.div`
    text-align: center;
    margin: 1.5rem 0 4rem;
    button {
        color: ${Styles.colors.primary100};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        margin-top: 1.2rem;
        padding: 0.5rem 0.9rem;
        display: inline-block;
        border-radius: 0.4rem;
        border: 1px solid ${Styles.colors.primary100};
        background-color: ${Styles.colors.systemWhite};
    }
`;

export default RealtyExamine;
