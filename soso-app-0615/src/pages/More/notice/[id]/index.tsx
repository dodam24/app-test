// import { useParams } from "react-router-dom";
//     const params = useParams();

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

const index = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader /> }}>
            <StyledNoticeDetailWrap>
                <StyledNoticeDetailTitle>
                    <h3>
                        2023년 3월 정기
                        <br />
                        점검 시간 안내
                    </h3>
                    <p>2023. 03. 01</p>
                </StyledNoticeDetailTitle>
                {/* ContentContainer 꼭 넣어야 되는지 확인받을 것 */}
                <StyledNoticeDetailContentContainer>
                    <StyledNoticeDetailContent>
                        <p>여기는 내용</p>
                    </StyledNoticeDetailContent>
                </StyledNoticeDetailContentContainer>
            </StyledNoticeDetailWrap>
        </AppLayout>
    );
};

export default index;

const StyledNoticeDetailWrap = styled.main`
    padding: 1rem;
    width: 100%;
`;
const StyledNoticeDetailTitle = styled.div`
    display: flex;
    padding-bottom: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    border-bottom: 0.05rem solid ${Styles.colors.natural10};

    h3 {
        color: #000;
        font-size: 1rem;
        font-weight: ${Styles.font.weight.medium};
        line-height: 1.4;
    }

    p {
        color: ${Styles.colors.natural50};
        font-size: 0.65rem;
        font-weight: ${Styles.font.weight.regular};
    }
`;
const StyledNoticeDetailContentContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
`;
const StyledNoticeDetailContent = styled.div`
    padding: 2rem 0 2rem 0;

    p {
        color: ${Styles.colors.natural80};
        font-size: 0.75rem;
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
    }
`;
