import { Styles } from "@/style/Styles";
import styled from "styled-components";

const NoticeListItem = () => {
    const noticeList = [
        {
            title: "2023년 1월 정기 점검 시간 안내",
            created_at: "2023. 03. 01",
            content: "내용 1",
        },
        {
            title: "2023년 2월 정기 점검 시간 안내",
            created_at: "2023. 03. 01",
            content: "내용 2",
        },
        {
            title: "2023년 3월 정기 점검 시간 안내",
            created_at: "2023. 03. 01",
            content: "내용 3",
        },
        {
            title: "2023년 4월 정기 점검 시간 안내",
            created_at: "2023. 03. 01",
            content: "내용 4",
        },
    ];

    return (
        <ul>
            {noticeList &&
                noticeList.map((item, index) => (
                    <StyledNoticeListItem key={index}>
                        <StyledNoticeListItemInner>
                            <h5>{item.title}</h5>
                            <span>{item.created_at}</span>
                        </StyledNoticeListItemInner>
                    </StyledNoticeListItem>
                ))}
        </ul>
    );
};

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

export default NoticeListItem;
