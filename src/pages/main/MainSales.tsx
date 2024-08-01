import styled from "styled-components";
import { Styles } from "@/style/Styles";

import Refresh from "@/assets/images/icons/icon_refresh_l.png";
import Money from "@/assets/images/icons/icon_money_l.png";
import Cacul from "@/assets/images/icons/icon_cacul_l.png";
import { useState } from "react";
import useModal from "@/hooks/useModal";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import { useNavigate } from "react-router-dom";

const SalesList = [
    {
        icon: Money,
        title: "결제 금액",
        value: "2,100,000,000원",
    },
    {
        icon: Cacul,
        title: "정산 금액",
        value: "1,980,660,000원",
    },
];

// todo: li refactoring to compoenent
const MainSales = () => {
    // role값 받아서 대기회원, basic회원 구분
    const [isBasicMember, setIsBasicMember] = useState(false);
    const [isApplicationComplete, setIsApplicationComplete] = useState(false);
    console.log(setIsBasicMember, setIsApplicationComplete);

    const navigate = useNavigate();

    const { isOpen, openModal, closeModal } = useModal();
    const {
        isOpen: isApplicationOpen,
        openModal: openApplicationModal,
        closeModal: closeApplicationModal,
    } = useModal();
    // 회원전환 절차 진행중 모달
    const {
        isOpen: isProgressOpen,
        openModal: openProgressModal,
        closeModal: closeProgressModal,
    } = useModal();

    const handleBlurClick = () => {
        if (!isBasicMember) {
            if (isApplicationComplete) {
                openProgressModal();
            } else {
                openModal();
            }
        }
    };
    const handleApplyMembership = () => {
        closeModal();
        navigate("/basic");
        openApplicationModal();
    };

    return (
        <StyledSalesContainer>
            <div className="title">
                <h4>오늘의 매출이에요!</h4>
                <button>
                    <img src={Refresh} alt="새로고침" />
                </button>
            </div>
            <StyledSales isBasicMember={isBasicMember} onClick={handleBlurClick}>
                {SalesList.map((item, index) => (
                    <li key={index}>
                        <div>
                            <div>
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <h6>{item.title}</h6>
                        </div>
                        <span>{item.value}</span>
                    </li>
                ))}
            </StyledSales>
            <DynamicModal open={isOpen} close={closeModal}>
                <ConfirmationModal
                    title="basic회원 전용 메뉴"
                    message={`basic회원 전용 메뉴입니다.\nbasic회원으로 전환 신청하시겠습니까?`}
                    optionCancel
                    close={closeModal}
                    handler={handleApplyMembership}
                />
            </DynamicModal>
            {/* basic회원 신청 완료 모달 */}
            <DynamicModal open={isApplicationOpen} close={closeApplicationModal}>
                <ConfirmationModal
                    title="basic회원 신청 완료"
                    message={`basic회원 신청이 완료되었습니다.\n\n곧 전자계약 안내가 [알림톡]으로 발송될\n예정입니다. 확인 후 진행해주세요.`}
                    close={closeApplicationModal}
                />
            </DynamicModal>

            {/* 회원전환 절차 진행중 모달 */}
            <DynamicModal open={isProgressOpen} close={closeProgressModal}>
                <ConfirmationModal
                    title="basic회원 전용 메뉴"
                    message={`아직 basic회원 전환 절차가\n진행중입니다.`}
                    close={closeProgressModal}
                />
            </DynamicModal>
        </StyledSalesContainer>
    );
};

export default MainSales;

const StyledSalesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 1.15rem;
    .title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > h4 {
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.medium};
            color: ${Styles.colors.natural90};
        }

        & > button img {
            display: block;
            width: 1.2rem;
            height: 1.2rem;
        }
    }
`;
const StyledSales = styled.ul<{ isBasicMember: boolean }>`
    background: ${Styles.colors.systemWhite};
    padding: 0 0.8rem;
    border-radius: 0.4rem;
    box-shadow: 0px 0.1rem 0.6rem 0px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    position: relative;
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.6rem 0;
        border-bottom: 0.05rem solid ${Styles.colors.natural00};
        & > span {
            font-size: ${Styles.font.size.fontsize16};
            font-weight: ${Styles.font.weight.medium};
            color: ${Styles.colors.natural80};
        }
        & > div {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            h6 {
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
                color: ${Styles.colors.natural60};
            }
            & > div {
                padding: 0.35rem;
                border-radius: 0.4rem;
                background: ${Styles.colors.systemBackground};
                img {
                    display: block;
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
        }
    }
    ${(props) =>
        !props.isBasicMember &&
        `
        &:before {
            content: "Basic 회원 전용 메뉴";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width:100%;
            height:100%;
            z-index: 1;
            background: rgba(52, 52, 55, 0.7);
            backdrop-filter: blur(1.5px);
            color:${Styles.colors.systemWhite};
            font-size:${Styles.font.size.fontsize15};
            font-weight:${Styles.font.weight.medium};
            cursor: pointer;
            
            
        }
    `}
`;
