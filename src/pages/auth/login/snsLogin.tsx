import styled from "styled-components";
import { GoogleIcon, KakaoIcon, NaverIcon } from "@/pages/auth/login/_images/loginImg";

const SnsLogin = () => {
    return (
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
    );
};

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
