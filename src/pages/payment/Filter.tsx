import styled from "styled-components";
import FilterClose from "@/assets/images/icons/icon_close.png";
import { Styles } from "@/style/Styles";
import ConditionOfDate from "@/components/filter/ConditionOfDate";
import ConditionOfStaffType from "@/components/filter/ConditionOfStaffType";
import ConditionOfStatus from "@/components/filter/ConditionOfStatus";
import ConditionOfOrderBy from "@/components/filter/ConditionOfOrderBy";
import ConditionOfAmount from "@/components/filter/ConditionOfAmount";
import Button from "@/components/button/Button";

interface FilterProps {
    isFilterOpen: boolean;
    setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
    filterHeaderTitle: string;
}

const Filter = ({ isFilterOpen, setIsFilterOpen, filterHeaderTitle }: FilterProps) => {
    const handleFilterInactive = () => {
        setIsFilterOpen(false);
    };

    if (isFilterOpen) {
        setTimeout(() => {
            document.body.style.overflow = "hidden";
        }, 100);
    } else {
        document.body.style.overflow = "unset";
    }

    return (
        <StyledFilterWrap $isFilterOpen={isFilterOpen}>
            <StyledFilterContainer $isFilterOpen={isFilterOpen}>
                <StyledFilterHeader>
                    <h4>{filterHeaderTitle}</h4>
                    <img src={FilterClose} alt="필터" onClick={handleFilterInactive} />
                </StyledFilterHeader>
                <StyledFilterBody>
                    <ConditionOfDate />
                    <ConditionOfStaffType />
                    <ConditionOfStatus />
                    <ConditionOfOrderBy />
                    <ConditionOfAmount />
                </StyledFilterBody>
                <Button>조회</Button>
            </StyledFilterContainer>
        </StyledFilterWrap>
    );
};

export default Filter;

const StyledFilterWrap = styled.div<{ $isFilterOpen: boolean }>`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    background-color: rgba(0, 0, 0, 0.2);

    ${({ $isFilterOpen }) =>
        $isFilterOpen &&
        `
        opacity: 1;
        visibility: visible;
    `};
`;

const StyledFilterContainer = styled.div<{ $isFilterOpen: boolean }>`
    position: inherit;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0%;
    background-color: #fff;
    z-index: 999999;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    border-radius: 0.9rem 0.9rem 0 0;
    padding: 1.5rem 1rem 1rem 1rem;
    overflow-y: auto;

    ${({ $isFilterOpen }) =>
        $isFilterOpen &&
        `
        height: 92%;
        opacity: 1;
        visibility: visible;
    `};
`;

const StyledFilterHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
    }
    img {
        width: 1.2rem;
        height: 1.2rem;
    }
    margin-bottom: 2.5rem;
`;

const StyledFilterBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;
`;
