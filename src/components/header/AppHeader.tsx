import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SideBar from "@/components/sidebar/SideBar";
import { Styles } from "@/style/Styles";
import Logo from "@/assets/images/icons/icon_logo.png";
import Menu from "@/assets/images/btns/btn_menu.png";
import { useNavigate } from "react-router-dom";

interface AppHeaderProps {
    title?: string | undefined;
    url: string;
}

export const MAIN_URL = "/";

const AppHeader = ({ title, url }: AppHeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleIsMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const handlePrimaryBtnClick = () => {
        navigate("/employee/employeeMain", { replace: true });
    };

    return (
        <>
            <StyledAppHeader>
                <StyledAppHeaderInner>
                    <div className="header_view">
                        {title ? (
                            <Link to={url} className="title">
                                {title}
                            </Link>
                        ) : (
                            <>
                                <Link to={url} className="logo">
                                    <img src={Logo} alt="소소상점" />
                                </Link>
                                {/* role값 받아와서 직원이면 primary_btn 표시 */}
                                <button className="primary_btn" onClick={handlePrimaryBtnClick}>
                                    직원용
                                </button>
                            </>
                        )}
                    </div>
                    <button className="btn_menu" onClick={handleIsMenuOpen}>
                        <img src={Menu} alt="메뉴" />
                    </button>
                </StyledAppHeaderInner>
                <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
    z-index: 99999;
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
            padding: 0 0.35rem 0 1rem;
            & > img {
                display: block;
                width: 3.2rem;
                height: 1.8rem;
            }
        }
        .primary_btn {
            display: flex;
            width: 2.3rem;
            padding: 0.2rem;
            justify-content: center;
            align-items: center;
            bottom: 0.85rem;
            border-radius: 1.5rem;
            background: ${Styles.colors.primary100};
            color: ${Styles.colors.systemWhite};
            font-size: ${Styles.font.size.fontsize12};
            font-weight: ${Styles.font.weight.regular};
            line-height: 1.4;
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
