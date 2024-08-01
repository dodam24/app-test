import styled from "styled-components";
import { Styles } from "@/style/Styles";
import { GoogleIcon, KakaoIcon, NaverIcon } from "@/pages/auth/login/_images/loginImg";

const SnsLogin = () => {
    return (
        <div>
            <DividerText>
                <span>또는 간편로그인</span>
            </DividerText>
            <SnsLoginWrapper>
                <button>
                    <img src={NaverIcon} alt="간편로그인 네이버" />
                </button>
                <button>
                    <img src={KakaoIcon} alt="간편로그인 카카오" />
                </button>
                <button>
                    <img src={GoogleIcon} alt="간편로그인 구글" />
                </button>
            </SnsLoginWrapper>
        </div>
    );
};

const DividerText = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 2rem 0 0.6rem;
    padding: 0.6rem 0;

    &::before {
        content: "";
        flex: 1;
        width: 100%;
        height: 0.05rem;
        background: ${Styles.colors.natural30};
    }
    span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: ${Styles.font.size.fontsize14};
        color: ${Styles.colors.natural80};
        text-align: center;
        font-weight: ${Styles.font.weight.regular};
        background-color: ${Styles.colors.systemWhite};
        padding: 0.6rem 1rem;
    }
`;

const SnsLoginWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1.2rem;
    margin-bottom: 7.1rem;
    img {
        width: 2.7rem;
        height: 2.7rem;
        flex-shrink: 0;
    }
`;

export default SnsLogin;
