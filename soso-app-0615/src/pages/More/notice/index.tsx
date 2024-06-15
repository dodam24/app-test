import AppLayout from "@/components/layout/AppLayout";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import AppBackHeader from "@/components/header/AppBackHeader";

const Notice = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="공지사항" /> }}>
            {/* NoticeList 컴포넌트 안에 NoticeItem 넣기 */}
            <StyledNoticeItem>
                <StyledNoticeItemInner>
                    <h5>2023년 4월 정기 점검 시간 안내</h5>
                    <p>2023. 03. 01</p>
                </StyledNoticeItemInner>
            </StyledNoticeItem>
        </AppLayout>
    );
};

export default Notice;

const StyledNoticeItem = styled.div`
    display: inline-block;
    width: 100%;
    padding: 0 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    /* 클릭하면 background 들어가도록 */
    background: ${Styles.colors.systemBackground};
`;

const StyledNoticeItemInner = styled.div`
    display: flex;
    width: 100%;
    padding: 1.5rem 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    border-bottom: 0.05rem solid ${Styles.colors.natural10};

    h5 {
        align-self: stretch;
        color: ${Styles.colors.natural90};
        font-size: 0.8rem;
        font-weight: ${Styles.font.weight.regular};
    }

    p {
        align-self: stretch;
        color: ${Styles.colors.natural50};
        font-size: 0.65rem;
        font-weight: ${Styles.font.weight.semibold};
    }
`;
