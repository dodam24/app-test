import { Styles } from "@/style/Styles";
import RightArrow from "@/assets/images/icons/icon_right_arrow_c.png";
import styled from "styled-components";

interface FaqListItemProps {
    id: number;
    title: string;
}

const FaqListItem = ({ title }: FaqListItemProps) => {
    return (
        <ul>
            <StyledFaqListItem>
                <StyledFaqListItemInner>
                    <div className="item_title">
                        <h5>Q</h5>
                        <p>{title}</p>
                    </div>
                    <button className="item_btn">
                        <img src={RightArrow} alt="더보기" />
                    </button>
                </StyledFaqListItemInner>
            </StyledFaqListItem>
        </ul>
    );
};

const StyledFaqListItem = styled.li`
    width: 100%;
`;
const StyledFaqListItemInner = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;

    .item_title {
        display: flex;
        h5 {
            width: 1.2rem;
            height: 1.2rem;
            flex-shrink: 0;
            text-align: center;
            color: ${Styles.colors.primary100};
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.medium};
        }
        p {
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize16};
            font-weight: ${Styles.font.weight.regular};
            line-height: 1.4;
            padding: 0 1rem 0 0.6rem;
        }
    }
    .item_btn {
        padding: 0;
        img {
            width: 1.2rem;
            height: 1.2rem;
            flex-shrink: 0;
        }
    }
`;

export default FaqListItem;
