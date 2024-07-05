import styled from "styled-components";

import useModal from "@/hooks/useModal";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";

import { Styles } from "@/style/Styles";
import { StyleDoubleFixedBotton } from "@/components/styles/ButtonSytle";
import FixedButton from "@/components/button/FixedButton";

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
            <StyledButtonFlex>
                <FixedButton className="custom_btn" onClick={openModal}>
                    승인 반려
                </FixedButton>
                <FixedButton>승인 시작</FixedButton>
            </StyledButtonFlex>
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
            gap: 1.2rem;
            h4 {
                color: ${Styles.colors.natural60};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
                min-width: fit-content;
            }
            span {
                color: ${Styles.colors.natural80};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
                text-align: right;
            }
            .status_span {
                color: ${Styles.colors.systemError};
            }
        }
    }
`;

const StyledButtonFlex = styled(StyleDoubleFixedBotton)``;
