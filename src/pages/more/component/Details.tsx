import { Styles } from "@/style/Styles";
import styled from "styled-components";

interface DetailsProps {
    id: string;
    title: string;
    content: string;
    created_at?: string;
    message: string;
}
// id 사용 안함
export default function Details({ title, content, created_at, message }: DetailsProps) {
    return (
        <StyledDetailsSection>
            <StyledNoticeDetailsTitle>
                <h3>{title}</h3>
                <span>{created_at}</span>
            </StyledNoticeDetailsTitle>
            <StyledNoticeDetailsContent>
                <p className="details_content">{content}</p>
                <p className="details_message">{message}</p>
            </StyledNoticeDetailsContent>
        </StyledDetailsSection>
    );
}

const StyledDetailsSection = styled.section`
    width: 100%;
`;

const StyledNoticeDetailsTitle = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1.5rem;
    border-bottom: 0.05rem solid ${Styles.colors.natural10};

    h3 {
        color: #000;
        font-size: ${Styles.font.size.fontsize20};
        font-weight: ${Styles.font.weight.medium};
        line-height: 1.4;
        white-space: break-spaces;
    }
    span {
        color: ${Styles.colors.natural50};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
    }
`;
const StyledNoticeDetailsContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 2rem;

    font-size: ${Styles.font.size.fontsize15};
    font-weight: ${Styles.font.weight.regular};
    line-height: 1.4;

    .details_content {
        color: ${Styles.colors.natural80};
        white-space: break-spaces;
    }
    .details_message {
        color: ${Styles.colors.natural90};
        white-space: break-spaces;
    }
`;
