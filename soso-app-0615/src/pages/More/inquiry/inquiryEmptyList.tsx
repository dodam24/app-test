import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import { useState } from "react";
import styled from "styled-components";
import EmptyChat from "@/assets/images/icons/icon_emptychat.png";
// import useModal from "@/hooks/useModal";
// import DynamicModal from "@/components/modal/DynamicModal";
// import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";

const InquiryEmptyList = () => {
    const [isActive] = useState(true);
    // const { isOpen, openModal, closeModal } = useModal();

    return (
        <AppLayout props={{ header: <AppBackHeader title="E-mail 상담" /> }}>
            <StyledInquiryEmptyListWrap>
                <TabMenuContainer>
                    <TabMenuButton>상담 접수</TabMenuButton>
                    <TabMenuButton className={isActive ? "active" : ""}>상담 내역</TabMenuButton>
                </TabMenuContainer>
                <TabMenuContent>
                    <div>
                        <img src={EmptyChat} alt="빈 상담내역" />
                        <p>조회된 상담 내역이 없어요.</p>
                    </div>

                    {/* <DynamicModal open={isOpen} close={closeModal}>
                        <ConfirmationModal
                            title="좌석을 예매하시겠습니까?"
                            message={`공연시간 10분 전에는\n 좌석을 변경하실 수 없습니다.`}
                            buttonText="예매하기"
                            handler={() => {
                                alert("ddd");
                            }}
                            close={closeModal}
                        />
                    </DynamicModal> */}
                </TabMenuContent>
            </StyledInquiryEmptyListWrap>
        </AppLayout>
    );
};

const StyledInquiryEmptyListWrap = styled.main`
    width: 100%;
    padding: 1rem;
`;
const TabMenuContainer = styled.div`
    display: flex;
    width: 100%;
`;
const TabMenuButton = styled.button`
    width: 50%;
    padding: 1rem 1.7rem 0.5rem 1.7rem;
    border-bottom: 0.1rem solid ${Styles.colors.primary100};
    color: ${Styles.colors.natural40};
    font-size: ${Styles.font.size.fontsize15};
    font-weight: ${Styles.font.weight.medium};
    border-bottom: 1px solid ${Styles.colors.natural10};

    &.active {
        color: ${Styles.colors.primary100};
        border-bottom: 2px solid ${Styles.colors.primary100};
    }
`;
const TabMenuContent = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;

        img {
            width: 4.5rem;
            height: 4.5rem;
            flex-shrink: 0;
        }

        p {
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
        }
    }
`;
export default InquiryEmptyList;
