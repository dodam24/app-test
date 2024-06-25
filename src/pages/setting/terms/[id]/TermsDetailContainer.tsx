import styled from "styled-components";
import { Styles } from "@/style/Styles";
import { useGoBack } from "@/hooks/useGoBack";

const TermsDetailContainer = () => {
    const goBack = useGoBack();
    return (
        <StyledTermsDetailContainer>
            <span>제 1장 총칙</span>

            <div className="fixed_button">
                <button onClick={goBack}>확인</button>
            </div>
        </StyledTermsDetailContainer>
    );
};

export default TermsDetailContainer;

const StyledTermsDetailContainer = styled.section`
    padding: 1rem 1rem 3.4rem;
    .fixed_button {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 0 1rem 0.6rem;
        background: ${Styles.colors.systemWhite};
        button {
            width: 100%;
            height: 2.8rem;
            border-radius: 0.4rem;
            background: ${Styles.colors.primary100};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.semibold};
            color: ${Styles.colors.systemWhite};
        }
    }
`;
