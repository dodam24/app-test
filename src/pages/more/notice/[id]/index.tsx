import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import styled from "styled-components";
import Details from "../../component/Details";

const NoticeDetails = () => {
    const noticeTempData = [
        {
            id: "1",
            title: "2023년 3월 정기\n점검 시간 안내",
            content:
                "소소상점을 이용해주시는 고객님들께 감사드립니다. 원활한 서비스 제공을 위하여 국내 금융기관들의 야간 정기 점검 시간에 맞추어 소소상점도 아래와 같이 서비스 점검 시간을 운영하고 있습니다. 해당 시간대에는 서비스 이용이 불가하오니 아래 내용 확인하셔서 이용에 불편 없으시기 바랍니다. 감사합니다.",
            message:
                "■ 결제내역 서비스 점검 운영 시간\n- 2023. 03. 10(금) 23:30 ~ 02:00\n\n■ 정산내역 서비스 점검 운영 시간\n- 2023. 03. 10(금) 23:30 ~ 02:00",
            created_at: "2023. 03. 01",
        },
    ];

    return (
        <AppLayout props={{ header: <AppBackHeader /> }}>
            <StyledNoticeDetailsWrap>
                {noticeTempData.map(({ id, title, content, message, created_at }, index) => (
                    <Details
                        key={index}
                        id={id}
                        title={title}
                        content={content}
                        message={message}
                        created_at={created_at}
                    />
                ))}
            </StyledNoticeDetailsWrap>
        </AppLayout>
    );
};

const StyledNoticeDetailsWrap = styled.section`
    width: 100%;
    padding: 1rem;
`;

export default NoticeDetails;
