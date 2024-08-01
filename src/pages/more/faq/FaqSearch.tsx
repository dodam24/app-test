import { Styles } from "@/style/Styles";
import styled from "styled-components";
import Search from "@/assets/images/icons/icon_search.png";

const FaqSearch = () => {
    return (
        <StyledFaqSearch>
            <StyledFaqSearchTextField>
                <input
                    type="text"
                    placeholder="궁금한 점을 검색해보세요."
                    id="search"
                    name="search"
                />
                <button className="btn_search">
                    <img src={Search} alt="검색" />
                </button>
            </StyledFaqSearchTextField>
        </StyledFaqSearch>
    );
};

export default FaqSearch;

const StyledFaqSearch = styled.section`
    padding: 0 1rem;
`;

const StyledFaqSearchTextField = styled.section`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    border-radius: 0.4rem;
    padding: 0 0.8rem;
    background: ${Styles.colors.systemBackground};

    & > input {
        flex: 1;
        height: 2.3rem;
        padding: 0.55rem 0;
        border: none;
        background: ${Styles.colors.systemBackground};

        &::placeholder {
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
        }
        &:focus {
            outline: none;
        }
    }
    .btn_search {
        & > img {
            width: 1.2rem;
            height: 1.2rem;
            justify-content: center;
            align-items: center;
        }
    }
`;
