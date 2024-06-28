import { Styles } from "@/style/Styles";
import styled from "styled-components";
import FilterIcon from "@/assets/images/icons/icon_filter.png";
import useScroll from "@/hooks/useScroll";
import { useState } from "react";
import Filter from "@/pages/payment/Filter";

const FilterContainer = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const { scrollY } = useScroll();

    const handleFilterActive = () => {
        setIsFilterOpen(true);
    };

    return (
        <>
            <StyledFilterWrap className={`${scrollY >= 130 ? "fixed" : ""}`}>
                <StyledFilterContainer className={`${scrollY >= 130 ? "fixed" : ""}`}>
                    <span>총 34건</span>
                    <ul>
                        <li>1개월</li>
                        <li>・</li>
                        <li>전체</li>
                        <li>・</li>
                        <li>최신순</li>
                        <li>
                            <img
                                src={FilterIcon}
                                alt="필터"
                                className="icon"
                                onClick={handleFilterActive}
                            />
                        </li>
                    </ul>
                </StyledFilterContainer>
                <Filter
                    isFilterOpen={isFilterOpen}
                    setIsFilterOpen={setIsFilterOpen}
                    filterHeaderTitle={"조회조건설정"}
                />
            </StyledFilterWrap>
        </>
    );
};

export default FilterContainer;

const StyledFilterWrap = styled.section`
    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 6.5rem;
        display: flex;
        align-items: flex-end;
        z-index: 99999;
        background-color: transparent;
    }

    background-color: ${Styles.colors.systemWhite};
`;

const StyledFilterContainer = styled.div`
    &.fixed {
        width: 100%;
        z-index: 10;
    }

    display: flex;
    align-items: center;
    padding: 0.55rem 1rem;
    justify-content: space-between;
    background-color: ${Styles.colors.systemBackground};
    border-top: 1px solid ${Styles.colors.natural10};
    border-bottom: 1px solid ${Styles.colors.natural10};

    span {
        color: ${Styles.colors.brandBlue};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.medium};
    }

    ul {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.1rem;

        li {
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};

            &:last-child {
                padding-left: 0.2rem;
            }

            img {
                width: 1.3rem;
                vertical-align: middle;
            }
        }
    }
`;
