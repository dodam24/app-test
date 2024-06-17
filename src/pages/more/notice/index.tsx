import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

const Notice = () => {
    const noticeData = [
        // 최신글이 맨 위에 오도록 설정
        { id: 1, title: "2023년 1월 정기 점검 시간 안내", date: "2023. 03. 01" },
        { id: 2, title: "2023년 2월 정기 점검 시간 안내", date: "2023. 03. 01" },
        { id: 3, title: "2023년 3월 정기 점검 시간 안내", date: "2023. 03. 01" },
        { id: 4, title: "2023년 4월 정기 점검 시간 안내", date: "2023. 03. 01" },
    ];

    return (
        <AppLayout props={{ header: <AppBackHeader title="공지사항" /> }}>
            <StyledNoticeListWrap>
                {noticeData.map((item) => (
                    // key 부분에 id값 확인
                    <StyledNoticeListItem key={item.id}>
                        <StyledNoticeListItemInner>
                            <h5>{item.title}</h5>
                            <span>{item.date}</span>
                        </StyledNoticeListItemInner>
                    </StyledNoticeListItem>
                ))}
            </StyledNoticeListWrap>
        </AppLayout>
    );
};

const StyledNoticeListWrap = styled.main`
    width: 100%;
`;
const StyledNoticeListItem = styled.li`
    list-style: none;
    border-bottom: 0.05rem solid ${Styles.colors.natural10};
    cursor: pointer;
    &:hover {
        background-color: #f7f7fa;
    }
`;
const StyledNoticeListItemInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1.5rem 1rem;
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
