import { Styles } from "@/style/Styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface noticeList {
    page: number;
    size: number;
    sort: "ASC" | "DESC";
    total_pages: number;
    total_count: number;
    contents: noticeContents[];
    message: string;
}

interface noticeContents {
    id: string;
    title: string;
    created_at: string;
    view_count: number;
}

const NoticeListItem = () => {
    const [noticeData, setNoticeData] = useState<noticeList>({
        page: 0,
        size: 0,
        sort: "ASC",
        total_pages: 0,
        total_count: 0,
        contents: [],
        message: "",
    });

    useEffect(() => {
        setNoticeData({
            ...noticeData,
            ...{
                page: 0,
                size: 0,
                sort: "ASC",
                total_pages: 0,
                total_count: 0,
                contents: [
                    {
                        id: "1",
                        title: "2023년 1월 정기 점검 시간 안내",
                        created_at: "2023. 03. 01",
                        view_count: 0,
                    },
                    {
                        id: "2",
                        title: "2023년 2월 정기 점검 시간 안내",
                        created_at: "2023. 03. 01",
                        view_count: 0,
                    },
                    {
                        id: "3",
                        title: "2023년 3월 정기 점검 시간 안내",
                        created_at: "2023. 03. 01",
                        view_count: 0,
                    },
                    {
                        id: "4",
                        title: "2023년 4월 정기 점검 시간 안내",
                        created_at: "2023. 03. 01",
                        view_count: 0,
                    },
                ],
                message: "",
            },
        });
    }, []);

    return (
        <ul>
            {noticeData.contents.map((item) => {
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
