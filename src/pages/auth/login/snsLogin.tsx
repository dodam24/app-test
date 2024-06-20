import styled from "styled-components";
import { GoogleIcon, KakaoIcon, NaverIcon } from "./loginImg";

const SnsLogin = () => {
    return (
        <div>
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

const SnsLoginWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 24px;
    margin-bottom: 142px;
    img {
        width: 54px;
        height: 54px;
        flex-shrink: 0;
    }
`;

export default SnsLogin;
