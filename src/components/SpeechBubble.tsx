import styled from "styled-components";
import SpeechBubbleTail from "@/assets/images/icons/icon_break.png";
import SpeechBubbleClose from "@/assets/images/icons/icon_speech_bubble_close.png";
import { Styles } from "@/style/Styles";

interface SpeechBubbleProps {
    contents: string;
    isClose: boolean;
    closeSpeechBubble: () => void;
    left: number;
    top: number;
}

const SpeechBubble = ({ contents, isClose, closeSpeechBubble, left, top }: SpeechBubbleProps) => {
    return (
        <StyledSpeechBubbleWrap className={!isClose ? "active" : ""} $left={left} $top={top}>
            <div onClick={() => closeSpeechBubble()}>
                <span>{contents}</span>
                <img src={SpeechBubbleClose} alt="말풍선 닫기" />
            </div>
            <img src={SpeechBubbleTail} alt="말풍선 꼬리" />
        </StyledSpeechBubbleWrap>
    );
};

export default SpeechBubble;

const StyledSpeechBubbleWrap = styled.div<{ $left: number; $top: number }>`
    position: absolute;
    display: none;
    flex-direction: column;
    align-items: center;
    left: ${(props) => props.$left + "%"};
    top: ${(props) => props.$top + "%"};
    transform: translate(-50%, -50%);
    width: max-content;
    z-index: 1;

    &.active {
        display: flex;
    }

    div {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        padding: 0.6rem 0.8rem;
        color: rgba(71, 85, 105, 1);
        font-size: ${Styles.font.size.fontsize12};
        font-weight: ${Styles.font.weight.regular};
        background-color: ${Styles.colors.systemBackground};
        border-radius: 0.4rem;
        box-shadow:
            0px 20px 25px -5px rgba(51, 65, 85, 0.1),
            0px 10px 10px -5px rgba(51, 65, 85, 0.04);

        img {
            width: 0.8rem;
        }
    }
`;
