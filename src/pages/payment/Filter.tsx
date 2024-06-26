import { Styles } from "@/style/Styles";
import styled from "styled-components";
import FilterIcon from "@/assets/images/icons/icon_filter.png";
import useScroll from "@/hooks/useScroll";

const Filter = () => {
    const { scrollY } = useScroll();

    return (
        <>
            <StyledFilterWrap className={`${scrollY >= 130 ? "fixed" : ""}`}>
                <StyledFilterContainer className={`${scrollY >= 130 ? "fixed" : ""}`}>
                    <span>총 34건</span>
                    <ul>
                        <li>1개월</li>
                        <li>전체</li>
                        <li>최신순</li>
                        <li>
                            <img src={FilterIcon} alt="필터" className="icon" />
                        </li>
                    </ul>
                </StyledFilterContainer>
            </StyledFilterWrap>
        </>
    );
};

export default Filter;

const StyledFilterWrap = styled.section`
    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 6.5rem;
        display: flex;
        align-items: flex-end;
        z-index: 10;
    }

    background-color: ${Styles.colors.systemWhite};
`;

const StyledFilterContainer = styled.div`
    &.fixed {
        width: 100%;
        z-index: 10;
    }

    display: flex;
    padding: 0.7rem 1.2rem;
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
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        gap: 0.5rem;
        li {
            & :first-child:after {
                content: "";
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
            }
            img {
                width: 0.8rem;
            }
        }
    }
`;
