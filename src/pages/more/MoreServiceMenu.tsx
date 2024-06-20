import { Styles } from "@/style/Styles";
import { styled } from "styled-components";
import ArrowIcon from "@/assets/images/icons/icon_right_arrow_c.png";

const MoreServiceMenu = () => {
    const ServiceMenus = [
        { title: "직원관리" },
        { title: "세무서비스" },
        { title: "보험서비스" },
        { title: "중고거래" },
        { title: "부동산" },
    ];
    return (
        <StyledServiceMenuContainer>
            {ServiceMenus.map((menu, index) => (
                <StyledServiceMenuItem key={index}>
                    <h5>{menu.title}</h5>
                    <button>
                        <img src={ArrowIcon} alt="오른쪽 화살표" />
                    </button>
                </StyledServiceMenuItem>
            ))}
        </StyledServiceMenuContainer>
    );
};

const StyledServiceMenuContainer = styled.div`
    padding: 0.5rem 1rem;
`;
const StyledServiceMenuItem = styled.li`
    list-style: none;
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
