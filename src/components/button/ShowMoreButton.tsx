import ArrowDown from "@/assets/images/icons/icon_arrow_down_white_c.png";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

interface ShowMoreButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ShowMoreButton = ({ title, onClick, ...props }: ShowMoreButtonProps) => {
    return (
        <StyledShowMoreButton onClick={onClick} {...props}>
            <h5>{title}</h5>
            <img src={ArrowDown} alt="아래 화살표" />
        </StyledShowMoreButton>
    );
};

const StyledShowMoreButton = styled.button`
    position: fixed;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(3.2rem + 0.9rem);
    padding: 0.5rem 1rem;
    align-items: center;
    border-radius: 4.95rem;
    background: ${Styles.colors.brandNormal};
    box-shadow:
        0 1rem 1.25rem -0.25rem rgba(51, 65, 85, 0.1),
        0px 10px 10px -5px rgba(51, 65, 85, 0.04);

    & h5 {
        color: ${Styles.colors.systemWhite};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.medium};
    }

    img {
        display: block;
        width: 1.2rem;
        height: 1.2rem;
        color: ${Styles.colors.systemWhite};
    }
`;

export default ShowMoreButton;
