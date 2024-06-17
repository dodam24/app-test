import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import { useState } from "react";
import styled from "styled-components";
import Chat from "@/assets/images/icons/icon_emptychat.png";
// import useModal from "@/hooks/useModal";
// import DynamicModal from "@/components/modal/DynamicModal";
// import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";

const InquiryEmptyList = () => {
    // const { isOpen, openModal, closeModal } = useModal();

    const [isActive] = useState<boolean>(true);
    return (
        <AppLayout props={{ header: <AppBackHeader title="E-mail 상담" /> }}>
            <StyledInquiryEmptyListWrap>
                <TabMenuContainer>
                    <TabMenuButton className={isActive ? "active" : ""}>상담 접수</TabMenuButton>
                    <TabMenuButton>상담 내역</TabMenuButton>
                </TabMenuContainer>
                <TabMenuContent>
                    {/* <button onClick={openModal}>버튼</button>

                    <DynamicModal open={isOpen} close={closeModal}>
                        <ConfirmationModal
                            title="등록 완료"
                            message={`답변은 입력하신 이메일로 발송될 예정입니다.`}
                            cancelButtonText="취소"
                            buttonText="확인"
                            close={closeModal}
                            optionCancel
                        />
                    </DynamicModal> */}
                    <div>
                        <span>
                            <img src={Chat} />
                        </span>
                        <p>조회된 상담 내역이 없어요.</p>
                    </div>
                </TabMenuContent>
            </StyledInquiryEmptyListWrap>
        </AppLayout>
    );
};

const StyledInquiryEmptyListWrap = styled.main`
    width: 100%;
    padding: 0.5rem 1rem;
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
    height: calc(100vh - 14rem);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;

        /* tab content 내용 가운데 정렬 */
        /* position: absolute;
        top: 30%; */
        span {
            width: 4.5rem;
            height: 4.5rem;
            img {
                width: 100%;
            }
        }
        p {
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
        }
    }
`;
// 이미지 모달 CSS (임시)

export default InquiryEmptyList;
