import { useState, useRef, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import FixedButton from "@/components/button/FixedButton";
import { IinsuranceCheck } from "@/interface/insurance/insurance";

import { Styles } from "@/style/Styles";

import {
    ArrowDownIcon,
    CheckedIcon,
    CheckIcon,
    ArrowUpWhiteIcon,
} from "@/pages/insurance/_images/insurance";

type AccordionDetailsProps = {
    isOpen: boolean;
    children: ReactNode;
};

const data: IinsuranceCheck[] = [
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

    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`/insurance/item`, { replace: true });
    };

    return (
        <StyledCheckListWrapper>
            {data.map((item) => (
                <ul key={item.id}>
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
                    <AccordionDetails isOpen={openItems.includes(item.id)}>
                        {item.details.map((detail, index) => (
                            <StyledListItem
                                key={index}
                                onClick={() => toggleSelect(item.id, index)}
                                $isSelected={isItemSelected(item.id, index)}
                            >
                                <span>{detail}</span>
                                <img
                                    src={isItemSelected(item.id, index) ? CheckedIcon : CheckIcon}
                                    alt="check icon"
                                />
                            </StyledListItem>
                        ))}
                    </AccordionDetails>
                </ul>
            ))}
            <FixedButton onClick={handleItemClick} disabled={selectedItem.summaryId === ""}>
                다음
            </FixedButton>
        </StyledCheckListWrapper>
    );
};

const AccordionDetails = ({ isOpen, children }: AccordionDetailsProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState<string>("0px");

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isOpen, children]);

    return (
        <StyledDetails ref={contentRef} $maxHeight={maxHeight} $isOpen={isOpen}>
            <div>{children}</div>
        </StyledDetails>
    );
};

const StyledCheckListWrapper = styled.div`
    width: 100%;
`;

const StyledSummary = styled.li<{ $isOpen: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.55rem 0.8rem;

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

const StyledDetails = styled.div<{ $maxHeight: string; $isOpen: boolean }>`
    overflow: hidden;
    max-height: ${({ $isOpen, $maxHeight }) => ($isOpen ? $maxHeight : "0")};
    transition: max-height 0.3s ease;
    margin-bottom: 0.5rem;

    div {
        padding: 1rem 0.8rem;
        background-color: ${Styles.colors.systemBackground};
        border-radius: 0.4rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
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
