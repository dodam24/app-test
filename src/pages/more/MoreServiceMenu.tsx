import { Link } from "react-router-dom";
import { Styles } from "@/style/Styles";
import { styled } from "styled-components";
import ArrowIcon from "@/assets/images/icons/icon_right_arrow_c.png";

const MoreServiceMenu = () => {
    // 직원관리, 세무서비스, 중고거래 페이지 링크는 추후에 수정 필요(임시)
    const ServiceMenus = [
        {
            title: "직원관리",
            to: "/manage/staff/register",
        },
        { title: "세무서비스", to: "/payment" },
        { title: "보험서비스", to: "/insurance" },
        { title: "중고거래", to: "/" } /* 중고거래 페이지 없음 */,
        { title: "부동산", to: "/realty" },
    ];
    return (
        <StyledServiceMenuContainer>
            {ServiceMenus.map((menu, index) => (
                <StyledServiceMenuItem key={index} to={menu.to}>
                    <h5>{menu.title}</h5>
                    <button>
                        <img src={ArrowIcon} alt="오른쪽 화살표" />
                    </button>
                </StyledServiceMenuItem>
            ))}
        </StyledServiceMenuContainer>
    );
};

const StyledServiceMenuContainer = styled.ul`
    padding: 0.5rem 1rem;
`;
const StyledServiceMenuItem = styled(Link)`
    display: flex;
    padding: 0.8rem 0;
    justify-content: space-between;
    align-items: center;

    & > h5 {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
    }
    button {
        & > img {
            width: 1.2rem;
            height: 1.2rem;
            flex-shrink: 0;
        }
    }
`;

export default MoreServiceMenu;
