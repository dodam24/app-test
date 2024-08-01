import { ILoanInfoData } from "@/interface/loan/loan";
import {
    WalletIcon,
    MoneyIcon,
    GiftIcon,
    HouseIcon,
    CardIcon,
    ChartIcon,
} from "@/pages/loan/_images/loanImg";

const dummyLoanData: ILoanInfoData[] = [
    {
        id: 1,
        title: "소소상점을 이용하는\n소상공인들을 위한 소상공인론",
        interestRate: "14~15%",
        limit: "300만원~1천만원",
        img: WalletIcon,
        details: [
            {
                img: ChartIcon,
                title: "대출 설명",
                description:
                    "소소상점을 이용하는 소상공인의 PG / VAN / 배달플랫폼 매출데이터를 바탕으로 매출을 분석하여 대출액 측정 후 한도와 기간을 설정하여 대출진행",
            },
            {
                img: CardIcon,
                title: "대출 상환 방식",
                description: "원리금 균등상환방식 (단기) 매출채권 담보를 통해 일납하는 방식",
            },
        ],
    },
    {
        id: 2,
        title: "소소상점을 이용하는\n소상공인들을 위한 마케팅론",
        interestRate: "13~14%",
        limit: "600만원~3천만원",
        img: MoneyIcon,
        details: [
            {
                img: ChartIcon,
                title: "대출 설명",
                description:
                    "소소상점을 이용하는 소상공인의 PG / VAN / 배달플랫폼 매출데이터를 바탕으로 매출을 분석하여 대출액 측정 후 한도와 기간을 설정하여 대출진행",
            },
            {
                img: CardIcon,
                title: "대출 상환 방식",
                description: "원리금 균등상환방식 (단기) 매출채권 담보를 통해 일납하는 방식",
            },
        ],
    },
    {
        id: 3,
        title: "소소상점을 이용하는\n소상공인들을 위한 딜리버리론",
        interestRate: "11~12%",
        limit: "400만원~1천만원",
        img: GiftIcon,
        details: [
            {
                img: ChartIcon,
                title: "대출 설명",
                description:
                    "소소상점을 이용하는 소상공인의 PG / VAN / 배달플랫폼 매출데이터를 바탕으로 매출을 분석하여 대출액 측정 후 한도와 기간을 설정하여 대출진행",
            },
            {
                img: CardIcon,
                title: "대출 상환 방식",
                description: "원리금 균등상환방식 (단기) 매출채권 담보를 통해 일납하는 방식",
            },
        ],
    },
    {
        id: 4,
        title: "소소상점을 이용하는\n소상공인들을 위한 프랜차이즈론",
        interestRate: "12~13%",
        limit: "800만원~4천만원",
        img: HouseIcon,
        details: [
            {
                img: ChartIcon,
                title: "대출 설명",
                description:
                    "소소상점을 이용하는 소상공인의 PG / VAN / 배달플랫폼 매출데이터를 바탕으로 매출을 분석하여 대출액 측정 후 한도와 기간을 설정하여 대출진행",
            },
            {
                img: CardIcon,
                title: "대출 상환 방식",
                description: "원리금 균등상환방식 (단기) 매출채권 담보를 통해 일납하는 방식",
            },
        ],
    },
];

export default dummyLoanData;
