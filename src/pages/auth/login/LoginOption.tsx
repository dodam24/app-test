import { Link } from "react-router-dom";
import styled from "styled-components";

import CheckInput from "@/components/input/CheckInput";
import { Styles } from "@/style/Styles";

const LoginOption = () => {
    return (
        <div>
            <FormFieldOption>
                <CheckInput title="자동로그인" />
                <FindOptionsWrapper>
                    <Link to={"/find/id"}>아이디 찾기</Link>
                    <Link to={"/find/pw"}>비밀번호 찾기</Link>
                </FindOptionsWrapper>
            </FormFieldOption>
        </div>
    );
};
const FormFieldOption = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.6rem;
`;

const FindOptionsWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;

    a {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};

        text-decoration: none;

        &:last-child:before {
            content: "|";
            margin-right: 0.5rem;
            color: ${Styles.colors.natural20};
        }
    }
`;

export default LoginOption;
