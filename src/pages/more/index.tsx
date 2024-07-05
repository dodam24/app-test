import AppLayout from "@/components/layout/AppLayout";
import AppHeader from "@/components/header/AppHeader";
import styled from "styled-components";
import AppFooterBar from "@/components/footer/AppFooterBar";
import { Styles } from "@/style/Styles";
import MoreServiceMenu from "./MoreServiceMenu";
import MoreUser from "./MoreUser";
import DynamicModal from "@/components/modal/DynamicModal";
import useModal from "@/hooks/useModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";

const More = () => {
    // 로그아웃 modal 띄웠을 때 header(더보기) background 처리 X
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <AppLayout props={{ header: <AppHeader title="더보기" />, footer: <AppFooterBar /> }}>
            <StyledMoreWrap>
                <MoreUser openModal={openModal} />
                <div className="border" />
                <MoreServiceMenu />
            </StyledMoreWrap>

            {/* modal */}
            <DynamicModal open={isOpen} close={closeModal}>
                <ConfirmationModal
                    title="로그아웃"
                    message={`정말 로그아웃을 진행하시겠습니까?`}
                    close={closeModal}
                    optionCancel
                    buttonText="로그아웃"
                    // 로그아웃 처리: handler={}
                />
            </DynamicModal>
        </AppLayout>
    );
};

const StyledMoreWrap = styled.section`
    width: 100%;

    .border {
        background: ${Styles.colors.systemBackground};
        width: 100%;
        height: 0.6rem;
    }
`;

export default More;
