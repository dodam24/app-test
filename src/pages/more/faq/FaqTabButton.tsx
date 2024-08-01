import { useState } from "react";
import { Link } from "react-router-dom";
import FaqListItem from "../_component/FaqListItem";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

interface FaqList {
    id: number;
    title: string;
    category: "ETC" | "APP" | "SETTLEMENT" | "EMPLOYEE" | "TRANSACTION";
    message: string;
}

const FaqTabButton = () => {
    const faqList: FaqList[] = [
        {
            id: 0,
            title: "소소상점 설치 및 사용이 가능한 스마트 폰이 따로 있나요?",
            category: "APP",
            message: "",
        },
        {
            id: 1,
            title: "개인정보 필수 수집·이용 동의를 철회하고 싶어요.",
            category: "ETC",
            message: "",
        },
        {
            id: 2,
            title: "앱 알림이 울리지 않아요.",
            category: "APP",
            message: "",
        },
        {
            id: 3,
            title: "비밀번호를 바꾸고 싶어요.",
            category: "ETC",
            message: "",
        },
        {
            id: 4,
            title: "2대 이상의 스마트폰에서 동시에 이용할 수 있나요?",
            category: "APP",
            message: "",
        },
        {
            id: 5,
            title: "휴대폰 번호를 바꿨는데 회원정보를 변경할 수 있나요?",
            category: "APP",
            message: "",
        },
    ];

    const [currentTab, setCurrentTab] = useState(0);

    // 탭 메뉴 (category)
    const categoryMenu: { [key: string]: string } = {
        APP: "앱 이용",
        SETTLEMENT: "정산내역",
        EMPLOYEE: "직원관리",
        TRANSACTION: "매입 · 매출",
        ETC: "기타",
    };

    const tabData = Object.keys(categoryMenu).map((key) => ({
        title: categoryMenu[key],
        content: categoryMenu[key],
        category: key,
    }));

    const selectedMenuHandler = (index: number) => {
        setCurrentTab(index);
    };

    const filteredFaqList = faqList.filter(
        (item) => item.category === tabData[currentTab].category,
    );

    return (
        <StyledTabButtonSection>
            <StyledTabButtonContainer>
                {tabData.map((item, index) => (
                    <StyledTabButton
                        key={index}
                        onClick={() => selectedMenuHandler(index)}
                        className={currentTab === index ? "active" : ""}
                    >
                        {item.title}
                    </StyledTabButton>
                ))}
            </StyledTabButtonContainer>
            <StyledTabContent>
                <div className="category_title">
                    <h3>{tabData[currentTab].content}</h3>
                    <span>총 {filteredFaqList.length}건</span>
                </div>
                <StyledFaqListSection>
                    {filteredFaqList.map((faqItem) => (
                        <Link to={`/more/faq/${faqItem.id}`} key={faqItem.id}>
                            <FaqListItem id={faqItem.id} title={faqItem.title} />
                        </Link>
                    ))}
                </StyledFaqListSection>
            </StyledTabContent>
        </StyledTabButtonSection>
    );
};

export default FaqTabButton;

const StyledTabButtonSection = styled.section`
    width: 100%;
`;
const StyledTabButtonContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 1.6rem 0 2rem 0;
    gap: 0.45rem;
    flex-wrap: wrap;
    padding: 0 1rem;
`;
const StyledTabButton = styled.button`
    padding: 0.5rem 1rem;
    border: 0.05rem solid ${Styles.colors.secondary100};
    border-radius: 4.95rem;
    background: ${Styles.colors.systemWhite};
    color: ${Styles.colors.secondary100};
    font-size: ${Styles.font.size.fontsize15};
    font-weight: ${Styles.font.weight.regular};
    cursor: pointer;

    &.active {
        color: ${Styles.colors.systemWhite};
        background: ${Styles.colors.secondary100};
    }
`;
const StyledTabContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    .category_title {
        display: flex;
        justify-content: space-between;

        h3 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.medium};
            line-height: 1.4;
        }
        span {
            color: ${Styles.colors.natural60};
            font-size: ${Styles.font.size.fontsize12};
            font-weight: ${Styles.font.weight.regular};
            line-height: 1.4;
        }
    }
`;

const StyledFaqListSection = styled.section`
    margin-top: 0.5rem;
    width: 100%;
`;
