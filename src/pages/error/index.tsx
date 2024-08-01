import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Styles } from "@/style/Styles";

const NotFound = () => {
    const navigate = useNavigate();
    const isAuthenticated = Boolean(localStorage.getItem("accessToken"));

    const handleButtonClick = () => {
        if (isAuthenticated) {
            navigate("/");
        } else {
            navigate("/login");
        }
    };

    return (
        <Container>
            <div>
                <h3>404</h3>
                <p>원하시는 페이지를 찾을 수 없습니다.</p>
                <span>
                    입력하신 페이지의 주소가 정확한지
                    <br />
                    다시 한번 확인해 주세요.
                </span>
                <button onClick={handleButtonClick}>
                    {isAuthenticated ? "홈으로 가기" : "로그인으로 가기"}
                </button>
            </div>
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 0.3rem;
        h3 {
            color: ${Styles.colors.natural100};
            font-size: ${Styles.font.size.fontsize24};
            font-weight: ${Styles.font.weight.semibold};
        }
        p {
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.regular};
        }
        span {
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
            line-height: 1.4;
        }
        button {
            margin-top: 1.2rem;
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            padding: 0.4rem 0.8rem;
            border: 1px solid ${Styles.colors.natural40};
            border-radius: 1.2rem;
        }
    }
`;

export default NotFound;
