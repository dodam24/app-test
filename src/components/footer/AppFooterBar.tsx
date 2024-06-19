import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Styles } from "@/style/Styles";

const AppMenus = [
    {
        to: "/",
        name: "홈",
        enableIcon: "src/assets/images/icons/icon_home_on.png",
        disableIcon: "src/assets/images/icons/icon_home_off.png",
    },
    {
        to: "/payment",
        name: "결제정보",
        enableIcon: "src/assets/images/icons/icon_payment_on.png",
        disableIcon: "src/assets/images/icons/icon_payment_off.png",
    },
    {
        to: "/calculate",
        name: "정산정보",
        enableIcon: "src/assets/images/icons/icon_calculate_on.png",
        disableIcon: "src/assets/images/icons/icon_calculate_off.png",
    },
    {
        to: "/come",
        name: "매입매출",
        enableIcon: "src/assets/images/icons/icon_come_on.png",
        disableIcon: "src/assets/images/icons/icon_come_off.png",
    },
    {
        to: "/more",
        name: "더보기",
        enableIcon: "src/assets/images/icons/icon_more_on.png",
        disableIcon: "src/assets/images/icons/icon_more_off.png",
    },
];

const AppFooterBar = () => {
    return (
        <>
            <StyledAppFooterBar>
                <StyledAppFooterBarInner>
                    {AppMenus.map((menu, index) => (
                        <li key={index}>
                            <StyledAppFooterBarLink
                                to={menu.to}
                                enable={menu.enableIcon}
                                disable={menu.disableIcon}
                            >
                                {menu.name}
                            </StyledAppFooterBarLink>
                        </li>
                    ))}
                </StyledAppFooterBarInner>
            </StyledAppFooterBar>
            <Fill />
        </>
    );
};

export default AppFooterBar;

const StyledAppFooterBar = styled.nav`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 9999;
`;
const StyledAppFooterBarInner = styled.ul`
    display: flex;
    width: 100%;
    background: ${Styles.colors.systemWhite};
    border-radius: 0.9rem 0.9rem 0 0;
    box-shadow: 0px -0.2rem 0.6rem 0px rgba(0, 0, 0, 0.04);
    li {
        flex: 1;
    }
`;
const StyledAppFooterBarLink = styled(NavLink)<{ enable: string; disable: string }>`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 3.2rem;
    padding: 0.5rem;
    font-size: ${Styles.font.size.fontsize11};
    font-weight: ${Styles.font.weight.regular};
    color: ${Styles.colors.natural40};

    background-image: url(${(props) => props.disable});
    background-size: 1.2rem 1.2rem;
    background-repeat: no-repeat;
    background-position: center 20%;

    &.active {
        background-image: url(${(props) => props.enable});
        color: ${Styles.colors.primary100};
    }
`;

const Fill = styled.div`
    padding-bottom: 3.2rem;
`;