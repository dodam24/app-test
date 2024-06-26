import { useState } from "react";
import styled from "styled-components";

import { Styles } from "@/style/Styles";

import {
    ArrowDownIcon,
    CheckedIcon,
    CheckIcon,
    ArrowUpWhiteIcon,
} from "@/pages/insurance/_images/insurance";

const data = [
    {
        id: 1,
        title: "음식점",
        details: [
            "일반음식점",
            "휴게음식점",
            "제과점",
            "단란주점",
            "유흥주점",
            "위탁급식영업",
            "집단급식소",
        ],
    },
    {
        id: 2,
        title: "도소매 판매",
        details: ["도소매", "도소매"],
    },
    { id: 3, title: "오락", details: ["오락", "오락"] },
    { id: 4, title: "스포츠", details: ["스포츠", "스포츠"] },
    { id: 5, title: "여행", details: ["여행", "여행"] },
];

const InsuranceCheck = () => {
    const [openItems, setOpenItems] = useState<number[]>([]);
    const [selectedItem, setSelectedItem] = useState<{
        summaryId: number | "";
        liIndex: number | "";
    }>({
        summaryId: "",
        liIndex: "",
    });

    const toggleOpen = (id: number) => {
        setOpenItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
        );
    };

    const toggleSelect = (summaryId: number, liIndex: number) => {
        setSelectedItem({
            summaryId,
            liIndex,
        });
    };

    const isItemSelected = (summaryId: number, liIndex: number) => {
        return selectedItem.summaryId === summaryId && selectedItem.liIndex === liIndex;
    };

    return (
        <StyledCheckListWrapper>
            {data.map((item) => (
                <div key={item.id}>
                    <StyledSummary
                        onClick={() => toggleOpen(item.id)}
                        $isOpen={openItems.includes(item.id)}
                    >
                        <span>{item.title}</span>
                        <img
                            src={openItems.includes(item.id) ? ArrowUpWhiteIcon : ArrowDownIcon}
                            alt="toggle icon"
                        />
                    </StyledSummary>
                    {openItems.includes(item.id) && (
                        <StyledDetails>
                            {item.details.map((detail, index) => (
                                <StyledListItem
                                    key={index}
                                    onClick={() => toggleSelect(item.id, index)}
                                    $isSelected={isItemSelected(item.id, index)}
                                >
                                    <span>{detail}</span>
                                    <img
                                        src={
                                            isItemSelected(item.id, index) ? CheckedIcon : CheckIcon
                                        }
                                        alt="check icon"
                                    />
                                </StyledListItem>
                            ))}
                        </StyledDetails>
                    )}
                </div>
            ))}
        </StyledCheckListWrapper>
    );
};

const StyledCheckListWrapper = styled.div`
    width: 100%;
`;

const StyledSummary = styled.div<{ $isOpen: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.55rem 0.8rem;
    margin-bottom: ${({ $isOpen }) => ($isOpen ? "" : "0.5rem")};
    border: 1px solid ${Styles.colors.natural00};
    border-radius: 0.4rem;
    background-color: ${({ $isOpen }) =>
        $isOpen ? Styles.colors.primary100 : Styles.colors.systemWhite};

    span {
        color: ${({ $isOpen }) => ($isOpen ? Styles.colors.systemWhite : Styles.colors.natural90)};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
    }

    img {
        width: 1.2rem;
        height: 1.2rem;
        margin: 0;
    }
`;

const StyledDetails = styled.ul`
    padding: 1rem 0.8rem;
    background-color: ${Styles.colors.systemBackground};
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
`;

const StyledListItem = styled.li<{ $isSelected: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.8rem;
    background-color: ${Styles.colors.systemWhite};
    border-radius: 0.4rem;
    cursor: pointer;
    user-select: none;

    span {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.medium};
    }

    img {
        width: 1.2rem;
        height: 1.2rem;
    }
`;

export default InsuranceCheck;