import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import styled from "styled-components";
import NoticeListItem from "../component/NoticeListItem";

const Notice = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="공지사항" /> }}>
            <StyledNoticeListWrap>
                <NoticeListItem />
            </StyledNoticeListWrap>
        </AppLayout>
    );
};

const StyledNoticeListWrap = styled.section`
    width: 100%;
`;
export default Notice;
