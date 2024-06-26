import styled from "styled-components";

import useModal from "@/hooks/useModal";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import EnabledButton from "@/components/button/EnabledButton";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";

import { Styles } from "@/style/Styles";

const staffinfoData = [
    {
        date: "2023.02.24 14:33:23",
        id: "sunflower",
        name: "오태식",
        phone: "010-1234-5678",
        status: "승인대기",
    },
];

const StaffManageInfo = () => {
    const staff = staffinfoData[0];
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <AppLayout props={{ header: <AppBackHeader title="직원 상세정보" /> }}>
            <StyledManageInfoWrapper>
                <ul>
                    <li>
                        <h4>신청일시</h4>
                        <span>{staff.date}</span>
                    </li>
                    <li>
                        <h4>ID</h4>
                        <span>{staff.id}</span>
                    </li>
                    <li>
                        <h4>이름</h4>
                        <span>{staff.name}</span>
                    </li>
                    <li>
                        <h4>휴대폰번호</h4>
                        <span>{staff.phone}</span>
                    </li>
                    <li>
                        <h4>상태</h4>
                        <span className="status_span">{staff.status}</span>
                    </li>
                </ul>
            </StyledManageInfoWrapper>
            <EnabledButtonInner>
                <EnabledButton className="firstBtn" title="승인 반려" onClick={openModal} />
                <EnabledButton className="secondBtn" title="승인 시작" />
            </EnabledButtonInner>
            <DynamicModal open={isOpen} close={closeModal}>
                <ConfirmationModal
                    title="승인 반려"
                    message={`${staff.name} 직원의 가입승인을\n 반려하시겠습니까?`}
                    optionCancel
                    buttonText="확인"
                    close={closeModal}
                />
            </DynamicModal>
        </AppLayout>
    );
};

export default StaffManageInfo;

const StyledManageInfoWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;
    height: calc(100vh - 2.4rem);

    ul {
        li {
            display: flex;
            justify-content: space-between;
            padding: 0.8rem 0;
            h4 {
                color: ${Styles.colors.natural60};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
            }
            span {
                color: ${Styles.colors.natural80};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
            }
            .status_span {
                color: ${Styles.colors.systemError};
            }
        }
    }
`;
const EnabledButtonInner = styled.div`
    display: flex;
    gap: 0.75rem;
    width: 100%;
    position: fixed;
    bottom: 0.6rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 1rem;
    .firstBtn {
        width: 50%;
        position: static;
        left: initial;
        transform: translateX(0);
        background-color: ${Styles.colors.systemWhite};
        color: ${Styles.colors.primary100};
        border: 1px solid ${Styles.colors.primary100};
    }
    .secondBtn {
        position: static;
        width: 50%;
        right: initial;
        transform: translateX(0);
    }
`;
