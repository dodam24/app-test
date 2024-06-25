import AppHeader from "@/components/header/AppHeader";
import AppLayout from "@/components/layout/AppLayout";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import {
    BabyIcon,
    ClothIcon,
    CosmeticIcon,
    DigitalIcon,
    FoodIcon,
    GloveIcon,
    InteriorIcon,
    SportIcon,
} from "./_images/shop";
import ShopSwiper from "./ShopSwiper";

const shopTagData = [
    {
        id: 1,
        img: ClothIcon,
        title: "패션의류",
    },
    {
        id: 2,
        img: GloveIcon,
        title: "패션잡화",
    },
    {
        id: 3,
        img: CosmeticIcon,
        title: "회장품/미용",
    },
    {
        id: 4,
        img: DigitalIcon,
        title: "디지털/가전",
    },
    {
        id: 5,
        img: InteriorIcon,
        title: "인테리어",
    },
    {
        id: 6,
        img: BabyIcon,
        title: "출산/육아",
    },
    {
        id: 7,
        img: FoodIcon,
        title: "식품",
    },
    {
        id: 8,
        img: SportIcon,
        title: "스포츠/레저",
    },
];

const Shop = () => {
    return (
        <AppLayout props={{ header: <AppHeader /> }}>
            <StyledShopWrapper>
                <ShopSwiper />
                <StyledShopTagList>
                    {shopTagData.map((item) => (
                        <li key={item.id}>
                            <div>
                                <img src={item.img} alt={item.title} />
                            </div>
                            <p>{item.title}</p>
                        </li>
                    ))}
                </StyledShopTagList>
            </StyledShopWrapper>
        </AppLayout>
    );
};

const StyledShopWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;
`;

const StyledShopTagList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem 0;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.6rem;
        div {
            width: 3.2rem;
            height: 3.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 1rem;
            border: 1px solid rgba(0, 0, 0, 0.05);
            background-color: #f8f8f8; /* 스타일 컬러에 없음 */
            img {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
        p {
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
            margin: 0;
        }
    }
`;
export default Shop;
