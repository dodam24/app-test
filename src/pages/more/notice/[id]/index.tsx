import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

const NoticeDetails = () => {
    // FaqDetails 컴포넌트와 동일 -> Details 컴포넌트로 뺄 것! (date 옵션 유무)
    return (
        <AppLayout props={{ header: <AppBackHeader /> }}>
            <StyledNoticeDetailsWrap>
                <StyledNoticeDetailsTitle>
                    <h3>2023년 3월 정기 점검 시간 안내</h3>
                    <span>2023. 03. 01</span>
                </StyledNoticeDetailsTitle>
                <StyledNoticeDetailsContent>
                    <p className="content_message">
                        소소상점을 이용해주시는 고객님들께 감사드립니다.
                        <br />
                        <br /> 원활한 서비스 제공을 위하여 국내 금융기관들의 야간 정기 점검 시간에
                        맞추어 소소상점도 아래와 같이 서비스 점검 시간을 운영하고 있습니다.
                        <br />
                        <br /> 해당 시간대에는 서비스 이용이 불가하오니 아래 내용 확인하셔서 이용에
                        불편 없으시기 바랍니다. 감사합니다.
                    </p>
                    <p className="message_details">
                        ■ 결제내역 서비스 점검 운영 시간
                        <br /> - 2023. 03. 10(금) 23:30 ~ 02:00 <br />
                        <br />■ 정산내역 서비스 점검 운영 시간
                        <br /> - 2023. 03. 10(금) 23:30 ~ 02:00
                    </p>
                </StyledNoticeDetailsContent>
            </StyledNoticeDetailsWrap>
        </AppLayout>
    );
};

const StyledNoticeDetailsWrap = styled.main`
    width: 100%;
    padding: 1rem;
`;
const StyledNoticeDetailsTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 0.05rem solid ${Styles.colors.natural10};

    /* h3: 단어 별로 끊어서 표시 (속성 찾아서 적용) */
    h3 {
        color: #000;
        font-size: ${Styles.font.size.fontsize20};
        font-weight: ${Styles.font.weight.medium};
        line-height: 1.4;
    }
    span {
        color: ${Styles.colors.natural50};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
    }
`;
const StyledNoticeDetailsContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 2rem;
    font-size: ${Styles.font.size.fontsize15};
    font-weight: ${Styles.font.weight.regular};
    line-height: 1.4;
    .content_message {
        color: ${Styles.colors.natural80};
    }
    .message_details {
        color: ${Styles.colors.natural90};
    }
`;

export default NoticeDetails;
