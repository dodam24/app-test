import styled from "styled-components";
import { Styles } from "@/style/Styles";

import Logo from "@/assets/images/icons/icon_logo.png";
import Menu from "@/assets/images/btns/btn_menu.png";

interface AppHeaderProps {
    title?: string | undefined;
}

const AppHeader = ({ title }: AppHeaderProps) => {
    return (
        <>
            <StyledAppHeader>
                <StyledAppHeaderInner>
                    <div className="header_view">
                        {title ? (
                            <h1 className="title">{title}</h1>
                        ) : (
                            <a href="/" className="logo">
                                <img src={Logo} alt="소소상점" />
                            </a>
                        )}
                    </div>
                    <button className="btn_menu">
                        <img src={Menu} alt="메뉴" />
                    </button>
                </StyledAppHeaderInner>
            </StyledAppHeader>
            <Fill />
        </>
    );
};

export default AppHeader;

const StyledAppHeader = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: ${Styles.colors.systemWhite};
    border-radius: 0 0 0.9rem 0.9rem;
    box-shadow: 0px 0.1rem 0.6rem 0px rgba(0, 0, 0, 0.06);
    z-index: 9999;
`;
const StyledAppHeaderInner = styled.div`
    position: relative;
    height: 3rem;
    .header_view {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: inherit;
        & > .title {
            font-size: 0.9rem;
            font-weight: ${Styles.font.weight.medium};
            color: ${Styles.colors.natural90};
            padding: 0 1rem;
        }
        & > .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            height: inherit;
            padding: 0 1rem;
            & > img {
                display: block;
                width: 3.2rem;
                height: 1.8rem;
            }
        }
    }
    .btn_menu {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: inherit;
        padding: 0 1rem;
        & > img {
            display: block;
            width: 1.2rem;
            height: 1.2rem;
        }
    }
`;
const Fill = styled.div`
    padding-bottom: 3rem;
`;
