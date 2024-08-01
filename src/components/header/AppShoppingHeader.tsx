import { Styles } from "@/style/Styles";
import styled from "styled-components";
import Logo from "@/assets/images/icons/icon_logo.png";
import Shopping from "@/assets/images/icons/icon_employee_shopping_c.png";
import { Link, useNavigate } from "react-router-dom";

interface AppShoppingHeaderProps {
    url: string;
}
export const SHOP_MAIN_URL = "/shop";
const AppShoppingHeader = ({ url }: AppShoppingHeaderProps) => {
    const navigate = useNavigate();

    const handlePrimaryBtnClick = () => {
        navigate("/shop");
    };
    const handleBtnMenuClick = () => {
        navigate("/shop/list/:id", { replace: true });
    };

    return (
        <>
            <StyledAppHeader>
                <StyledAppHeaderInner>
                    <div className="header_view">
                        <Link to={url} className="logo">
                            <img src={Logo} alt="소소상점" />
                        </Link>
                        <button className="primary_btn" onClick={handlePrimaryBtnClick}>
                            쇼핑
                        </button>
                    </div>
                    <button className="btn_menu" onClick={handleBtnMenuClick}>
                        <img src={Shopping} alt="쇼핑" />
                    </button>
                </StyledAppHeaderInner>
            </StyledAppHeader>
            <Fill />
        </>
    );
};

export default AppShoppingHeader;

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
        height: inherit;
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
        .primary_btn {
            display: flex;
            width: 2.3rem;
            padding: 0.2rem;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 4.55rem;
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
