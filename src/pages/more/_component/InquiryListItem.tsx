import { useState } from "react";
import { Styles } from "@/style/Styles";
import styled from "styled-components";
import ArrowDown from "@/assets/images/icons/icon_arrowDown.png";
import { InquiryContents } from "@/pages/more/emailConsultation";

interface InquiryListItemProps {
    inquiry: InquiryContents;
}

// 임시 데이터
const InquiryListItem = ({ inquiry }: InquiryListItemProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = () => {
        setOpenIndex(openIndex === parseInt(inquiry.id) ? null : parseInt(inquiry.id));
    };

    return (
        <ul>
            <StyledInquiryListItem>
                <StyledInquiryListItemTitle onClick={handleToggle}>
                    <div className="title">
                        <h5>{inquiry.title}</h5>
                        <div className="details">
                            <span>{inquiry.created_at}</span>
                            <span>|</span>
                            <span className="answered">{inquiry.answered_at}</span>
                        </div>
                    </div>
                    <button className="toggle_btn">
                        <img
                            src={ArrowDown}
                            alt="화살표"
                            className={openIndex === parseInt(inquiry.id) ? "open" : ""}
                        />
                    </button>
                </StyledInquiryListItemTitle>
                <StyledInquiryListItemContent $isOpen={openIndex === parseInt(inquiry.id)}>
                    <p>{inquiry.content}</p>
                    <StyledInquiryReplyContainer>
                        <p>{inquiry.reply_content}</p>
                    </StyledInquiryReplyContainer>
                </StyledInquiryListItemContent>
            </StyledInquiryListItem>
        </ul>
    );
};

const StyledInquiryListItem = styled.li`
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
    .toggle_btn {
        width: 1.2rem;
        height: 1.2rem;
        img {
            width: 100%;
            transition: transform 0.3s ease-in-out;
            transform: rotate(0deg);
        }
        img.open {
            transform: rotate(180deg);
        }
    }
`;

interface StyledInquiryListItemContentProps {
    $isOpen: boolean;
}

const StyledInquiryListItemContent = styled.div.attrs<StyledInquiryListItemContentProps>(
    (props) => ({
        style: {
            display: props.$isOpen ? "flex" : "none",
        },
    }),
)<StyledInquiryListItemContentProps>`
    flex-direction: column;
    gap: 1rem;

    & > p {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
        padding: 0.65rem 0;
    }
`;

const StyledInquiryReplyContainer = styled.div`
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
