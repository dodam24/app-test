import { useEffect, useRef, useState } from "react";
import ArrowDown from "@/assets/images/icons/icon_arrow_down_white_c.png";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

export interface ShowMoreButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    threshold?: number;
    onClick: () => void;
}

const ShowMoreButton = ({ title, onClick, threshold = 1 }: ShowMoreButtonProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // 버튼이 화면에 들어오면 isVisible을 true로 변경
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null, // root: 뷰포트
                rootMargin: "0px",
                threshold: threshold,
            },
        );

        const currentObserver = observerRef.current;

        if (currentObserver) {
            observer.observe(currentObserver);
        }

        return () => {
            if (currentObserver) {
                observer.unobserve(currentObserver);
            }
        };
    }, [threshold]);

    const handleClick = () => {
        onClick();
    };

    return (
        <Wrapper ref={observerRef}>
            {isVisible && (
                <StyledShowMoreButton onClick={handleClick}>
                    <h5>{title}</h5>
                    <img src={ArrowDown} alt="아래 화살표" />
                </StyledShowMoreButton>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    height: 0;
`;
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
