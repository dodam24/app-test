import { Styles } from "@/style/Styles";
import styled from "styled-components";
import ArrowDown from "@/assets/images/icons/icon_arrowDown.png";

const InquiryListItem = () => {
    const inquiryData = [
        {
            id: 1,
            title: "앱 사용 문의 드립니다.",
            content: "안녕하세요. 지금 소소상점에서 매입 매출이랑 직원관리는 못쓰는 건가요?",
            reply_content:
                "문의가 정상적으로 접수되었습니다.\n\n문의하신 내용을 확인 후 최대한 빠른 시일 내 답변드리겠습니다.\n\n감사합니다.",
            created_at: "2023. 03. 31",
            answered_at: "접수",
        },
    ];

    return (
        <ul>
            {inquiryData.map((item, index) => (
                <StyledInquiryListItem key={index}>
                    <StyledInquiryListItemTitle>
                        <div className="title">
                            <h5>{item.title}</h5>
                            <div className="details">
                                <span>{item.created_at}</span>
                                <span>|</span>
                                <span className="answered">{item.answered_at}</span>
                            </div>
                        </div>
                        <button className="more_btn">
                            <img src={ArrowDown} alt="화살표" />
                        </button>
                    </StyledInquiryListItemTitle>
                    <StyledInquiryListItemContent>
                        <p>{item.content}</p>
                        <StyledInquiryStateContainer>
                            <p>{item.reply_content}</p>
                        </StyledInquiryStateContainer>
                    </StyledInquiryListItemContent>
                </StyledInquiryListItem>
            ))}
        </ul>
    );
};

const StyledInquiryListItem = styled.li`
    list-style: none;
    border-bottom: 0.05rem solid ${Styles.colors.natural10};
`;
const StyledInquiryListItemTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
        width: 100%;
        gap: 0.6rem;
        h5 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize16};
            font-weight: ${Styles.font.weight.medium};
        }
        .details {
            display: flex;
            span {
                margin-right: 0.2rem;
                color: ${Styles.colors.natural50};
                font-size: ${Styles.font.size.fontsize13};
                font-weight: ${Styles.font.weight.regular};
                &.answered {
                    color: ${Styles.colors.secondary100};
                }
            }
        }
    }
    .more_btn {
        width: 1.2rem;
        height: 1.2rem;
        img {
            width: 100%;
            transition: transform 0.3s ease-in-out;
            transform: rotate(0deg);
        }
    }
    &.active {
        .item_icon img {
            transform: rotate(180deg);
        }
    }
`;
const StyledInquiryListItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* display: none; */

    & > p {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
        padding: 0.65rem 0;
    }
`;
const StyledInquiryStateContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
    border-radius: 0.4rem;
    background: ${Styles.colors.systemBackground};
    padding: 1.5rem 0.8rem;
    margin-bottom: 1rem;

    p {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
        white-space: break-spaces;

        &::first-line {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize16};
            font-weight: ${Styles.font.weight.medium};
            line-height: 1;
        }
    }
`;

export default InquiryListItem;
