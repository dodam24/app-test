import { Link } from "react-router-dom";
import styled from "styled-components";
import { Styles } from "@/style/Styles";

const LoginRegisterLink = () => {
    return (
        <RegisterWrapper>
            <RegisterPrompt to={"/register"}>
                아직 회원이 아니신가요?<span>회원가입</span>
            </RegisterPrompt>
        </RegisterWrapper>
    );
};

const RegisterWrapper = styled.div`
    position: fixed;
    bottom: 2.3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    width: 100%;
`;
const RegisterPrompt = styled(Link)`
    color: ${Styles.colors.natural40};
    font-size: ${Styles.font.size.fontsize14};
    font-weight: ${Styles.font.weight.regular};
    span {
        color: ${Styles.colors.primary100};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.medium};
        text-decoration: underline;
        text-underline-position: under;
        margin-left: 0.3rem;
    }
`;
export default LoginRegisterLink;
