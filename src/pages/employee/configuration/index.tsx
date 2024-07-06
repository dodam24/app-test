import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import Toggle from "@/components/toggle/Toggle";
import useModal from "@/hooks/useModal";
import { Link } from "react-router-dom";
import { Styles } from "@/style/Styles";
import RightArrow from "@/assets/images/icons/icon_right_arrow_g.png";
import styled from "styled-components";

// 버전 (임시)
const currentVersion = "1.1.600";
const latestVersion = "1.1.600";

const menuItem = [
    { type: "link", title: "내 정보 확인", to: "/setting/me" },
    { type: "link", title: "비밀번호 변경", to: "/setting/change_password" },
    { type: "toggle", title: "자동 로그인", id: "auto_login" },
    { type: "toggle", title: "알림 설정", id: "alarm_setting" },
];

const Configuration = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const isLatestVersion = currentVersion === latestVersion;

    return (
        <AppLayout props={{ header: <AppBackHeader title="설정" /> }}>
            <StyledConfigurationMenuContainer>
                <StyledConfigurationList>
                    {menuItem.map((item, index) => (
                        <StyledConfigurationListItem key={index}>
                            {item.type === "link" && item.to ? (
                                <Link to={item.to}>
                                    <span>{item.title}</span>
                                    <img src={RightArrow} alt="더보기" />
                                </Link>
                            ) : (
                                <>
                                    <span>{item.title}</span>
                                    <Toggle id={item.id} />
                                </>
                            )}
                        </StyledConfigurationListItem>
                    ))}
                </StyledConfigurationList>
            </StyledConfigurationMenuContainer>

            <StyledConfigurationOptionContainer>
                <div className="logout">
                    <button onClick={openModal}>로그아웃</button>
                </div>
                <div className="version">
                    <span>v {currentVersion}</span>
                    {isLatestVersion ? (
                        <p>최신 버전 입니다.</p>
                    ) : (
                        <>
                            <p>현재 최신 버전이 아닙니다.</p>
                            <button>업데이트</button>
                        </>
                    )}
                </div>
            </StyledConfigurationOptionContainer>
            <DynamicModal open={isOpen} close={closeModal}>
                <ConfirmationModal
                    title="로그아웃"
                    message="정말 로그아웃을 진행하시겠습니까?"
                    optionCancel
                    buttonText="로그아웃"
                    close={closeModal}
                />
            </DynamicModal>
        </AppLayout>
    );
};

export default Configuration;

const StyledConfigurationMenuContainer = styled.section`
    display: flex;
    flex-direction: column;
`;
const StyledConfigurationList = styled.ul`
    padding: 0.5rem 1rem;
    border-bottom: 0.6rem solid ${Styles.colors.systemBackground};
`;
const StyledConfigurationListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 0;

    span {
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        color: ${Styles.colors.natural80};
    }
    a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            display: block;
            width: 1.2rem;
            height: 1.2rem;
        }
    }
`;
const StyledConfigurationOptionContainer = styled.section`
    padding: 0 1rem 4.85rem;

    .logout {
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
    .version {
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
