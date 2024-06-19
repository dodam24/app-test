import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const Notice = () => {
    // data 테스트
    const noticeList: { title: string; created_at: string; content: string }[] = [
        {
            title: "2023년 1월 정기 점검 시간 안내",
            created_at: "2023. 03. 01",
            content: "내용 test",
        },
        {
            title: "2023년 2월 정기 점검 시간 안내",
            created_at: "2023. 03. 01",
            content: "내용 test",
        },
        {
            title: "2023년 3월 정기 점검 시간 안내",
            created_at: "2023. 03. 01",
            content: "내용 test",
        },
        {
            title: "2023년 4월 정기 점검 시간 안내",
            created_at: "2023. 03. 01",
            content: "내용 test",
        },
    ];

    return (
        <AppLayout props={{ header: <AppBackHeader title="공지사항" /> }}>
            <StyledNoticeListWrap>
                {noticeList ? (
                    noticeList.map((item, index) => (
                        <StyledNoticeListItem key={index}>
                            <StyledNoticeListItemInner>
                                {/* <Link to={`/notice/${id}`}>{item.title}</Link> */}
                                <h5>{item.title}</h5>
                                <span>{item.created_at}</span>
                            </StyledNoticeListItemInner>
                        </StyledNoticeListItem>
                    ))
                ) : (
                    <div>No notices available</div>
                )}
            </StyledNoticeListWrap>
        </AppLayout>
    );
};

const StyledNoticeListWrap = styled.main`
    width: 100%;
`;
const StyledNoticeListItem = styled.li`
    list-style: none;
    padding: 0 1rem;

    cursor: pointer;
    &:hover {
        background-color: #f7f7fa;
    }
`;
const StyledNoticeListItemInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1.5rem 0;
    border-bottom: 0.05rem solid ${Styles.colors.natural10};
    gap: 0.5rem;

    h5 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize16};
        font-weight: ${Styles.font.weight.regular};
    }
    span {
        color: ${Styles.colors.natural50};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
    }
`;

export default Notice;
