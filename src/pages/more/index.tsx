import AppLayout from "@/components/layout/AppLayout";
import AppHeader, { MAIN_URL } from "@/components/header/AppHeader";
import styled from "styled-components";
import AppFooterBar from "@/components/footer/AppFooterBar";
import MoreServiceMenu from "./MoreServiceMenu";
import MoreUser from "./MoreUser";
import DynamicModal from "@/components/modal/DynamicModal";
import useModal from "@/hooks/useModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import { useNavigate } from "react-router-dom";

const More = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const navigate = useNavigate();

    const handleLogout = () => {
        // 로그아웃 처리 필요 (인증 토큰 제거, 사용자 상태 초기화 등)
        navigate("/login", { replace: true });
    };

    return (
        <AppLayout
            props={{
                header: <AppHeader url={MAIN_URL} title="더보기" />,
                footer: <AppFooterBar />,
            }}
        >
            <StyledMoreWrap>
                <MoreUser openModal={openModal} />
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
                    handler={handleLogout}
                />
            </DynamicModal>
        </AppLayout>
    );
};

const StyledMoreWrap = styled.section`
    width: 100%;
`;

export default More;
