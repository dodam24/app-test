import styled from "styled-components";
import { Styles } from "@/style/Styles";
import SplashLogo from "@/assets/images/icons/icon_splash-logo_k.png";
const Splash = () => {
    return (
        <StypedSplashWrapper>
            <div>
                <img src={SplashLogo} alt="스플레시 로고" />
                <p>소소한 상상이 현실이 되는 우리 상점</p>
            </div>
            <span>© BUbaum Corp.</span>
        </StypedSplashWrapper>
    );
};

const StypedSplashWrapper = styled.section`
    div {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        gap: 0.72rem;
        img {
            width: 7rem;
            height: 3.05rem;
        }
        p {
            font-size: ${Styles.font.size.fontsize12};
            font-weight: ${Styles.font.weight.semibold};
            color: ${Styles.colors.primary100};
            line-height: 1.3;
        }
    }
    span {
        font-size: ${Styles.font.size.fontsize11};
        font-weight: ${Styles.font.weight.regular};
        color: ${Styles.colors.natural40};
        position: fixed;
        bottom: 1.85rem;
        left: 50%;
        transform: translateX(-50%);
    }
`;
export default Splash;
