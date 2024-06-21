import { Styles } from "@/style/Styles";
import RightArrow from "@/assets/images/icons/icon_right_arrow_c.png";
import styled from "styled-components";

const FaqListItem = () => {
    const faqList = [
        { title: "소소상점 설치 및 사용이 가능한 스마트 폰이 따로 있나요?" },
        { title: "개인정보 필수 수집·이용 동의를 철회하고 싶어요." },
        { title: "앱 알림이 울리지 않아요." },
        { title: "비밀번호를 바꾸고 싶어요." },
        { title: "2대 이상의 스마트폰에서 동시에 이용할 수 있나요?" },
        { title: "휴대폰 번호를 바꿨는데 회원정보를 변경할 수 있나요?" },
    ];

    return (
        <ul>
            {faqList &&
                faqList.map((item, index) => (
                    <StyledFaqListItem key={index}>
                        <StyledFaqListItemInner>
                            <div className="item_title">
                                <h5>Q</h5>
                                <p>{item.title}</p>
                            </div>
                            <button className="item_btn">
                                <img src={RightArrow} alt="더보기" />
                            </button>
                        </StyledFaqListItemInner>
                    </StyledFaqListItem>
                ))}
        </ul>
    );
};
const StyledFaqListItem = styled.li`
    list-style: none;
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
