import styled from "styled-components";
import { Styles } from "@/style/Styles";

import Refresh from "@/assets/images/icons/icon_refresh_l.png";
import Money from "@/assets/images/icons/icon_money_l.png";
import Cacul from "@/assets/images/icons/icon_cacul_l.png";

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
    return (
        <StyledSalesContainer>
            <div className="title">
                <h4>오늘의 매출이에요!</h4>
                <button>
                    <img src={Refresh} alt="새로고침" />
                </button>
            </div>
            <StyledSales>
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
const StyledSales = styled.ul`
    background: ${Styles.colors.systemWhite};
    padding: 0 0.8rem;
    border-radius: 0.4rem;
    box-shadow: 0px 0.1rem 0.6rem 0px rgba(0, 0, 0, 0.06);
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
`;
