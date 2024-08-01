import { noticeList } from "@/apis/more/notice";
import { Styles } from "@/style/Styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface NoticeList {
    page: number;
    size: number;
    sort: "ASC" | "DESC";
    total_pages: number;
    total_count: number;
    contents: NoticeContents[];
    message: string;
}

interface NoticeContents {
    id: string;
    title: string;
    created_at: string;
    view_count: number;
}

const NoticeListItem = () => {
    const [noticeData, setNoticeData] = useState<NoticeList>({
        page: 0,
        size: 0,
        sort: "ASC",
        total_pages: 0,
        total_count: 0,
        contents: [],
        message: "",
    });

    useEffect(() => {
        const NoticeData = async () => {
            try {
                const data = await noticeList();
                setNoticeData(data);
            } catch (error) {
                console.error("공지사항 데이터 불러오기 오류:", error);
            }
        };

        NoticeData();
    }, []);

    return (
        <ul>
            {noticeData.contents.length > 0 &&
                noticeData.contents.map((item) => {
                    return (
                        <Link to={`/more/notice/${item.id}`} key={item.id}>
                            <StyledNoticeListItem>
                                <StyledNoticeListItemInner>
                                    <h5>{item.title}</h5>
                                    <span>{item.created_at}</span>
                                </StyledNoticeListItemInner>
                            </StyledNoticeListItem>
                        </Link>
                    );
                })}
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
