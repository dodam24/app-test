import styled from "styled-components";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import useModal from "@/hooks/useModal";

import { Styles } from "@/style/Styles";

const MeOption = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <StyledMeOption>
            <div>
                <button>서비스탈퇴</button>
                <button onClick={openModal}>세무대리해지</button>
            </div>
            <DynamicModal open={isOpen} close={closeModal}>
                <ConfirmationModal
                    title="세무대리해지"
                    message="해지를 진행하시겠습니까?"
                    optionCancel
                    buttonText="동의"
                    close={closeModal}
                />
            </DynamicModal>
        </StyledMeOption>
    );
};

export default MeOption;

const StyledMeOption = styled.div`
    margin-top: 1rem;
    padding: 0 1rem;
    & > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.8rem 0 2.5rem;
        border-bottom: 0.05rem solid ${Styles.colors.natural10};
        button {
            width: fit-content;
            height: 2.1rem;
            font-size: ${Styles.font.size.fontsize13};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.natural40};
        }
    }
`;
