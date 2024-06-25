import styled from "styled-components";
import useModal from "@/hooks/useModal";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";

import { Styles } from "@/style/Styles";

const SettingsOption = () => {
    const { isOpen, openModal, closeModal } = useModal();
    return (
        <>
            <StyledSettingApp>
                <div className="logout">
                    <button onClick={openModal}>로그아웃</button>
                </div>
                <div className="version">
                    <span>v 1.1.600</span>
                    <p>최신 버전 입니다.</p>
                    <button>업데이트</button>
                </div>
            </StyledSettingApp>
            <DynamicModal open={isOpen} close={closeModal}>
                <ConfirmationModal
                    title="로그아웃"
                    message="정말 로그아웃을 진행하시겠습니까?"
                    optionCancel
                    buttonText="로그아웃"
                    close={closeModal}
                />
            </DynamicModal>
        </>
    );
};

export default SettingsOption;

const StyledSettingApp = styled.div`
    padding: 0 1rem 4.85rem;
    & > .logout {
        padding: 0.8rem 0;
        border-bottom: 0.05rem solid ${Styles.colors.natural10};
        button {
            width: fit-content;
            height: 2.1rem;
            font-size: ${Styles.font.size.fontsize13};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.natural60};
        }
    }
    & > .version {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        margin-top: 3.9rem;
        span {
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.natural80};
        }
        p {
            font-size: ${Styles.font.size.fontsize13};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.natural40};
        }
        button {
            margin-top: 1rem;
            padding: 0.5rem 0.9rem;
            border-radius: 0.4rem;
            border: 0.05rem solid ${Styles.colors.primary100};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.primary100};
        }
    }
`;
