import styled from "styled-components";
import { Styles } from "@/style/Styles";
import { useGoBack } from "@/hooks/useGoBack";

import Back from "@/assets/images/btns/btn_back.png";

interface AppBackHeaderProps {
    title?: string | undefined;
    option?: React.ReactNode | null;
}

const AppBackHeader = ({ title, option }: AppBackHeaderProps) => {
    const goBack = useGoBack();
    return (
        <>
            <StyledAppBackHeader>
                <StyledAppBackHeaderInner>
                    <button className="btn_back" onClick={goBack}>
                        <img src={Back} alt="뒤로가기" />
                    </button>
                    {title && <h1 className="title">{title}</h1>}
                    {option && <div className="option">{option}</div>}
                </StyledAppBackHeaderInner>
            </StyledAppBackHeader>
            <Fill />
        </>
    );
};

export default AppBackHeader;

const StyledAppBackHeader = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: ${Styles.colors.systemWhite};
    z-index: 9999;
`;
const StyledAppBackHeaderInner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.4rem;

    .btn_back {
        position: absolute;
        left: 0;
        top: 0;
        height: inherit;
        padding: 0 0.8rem;

        & > img {
            display: block;
            width: 1.2rem;
            height: 1.2rem;
        }
    }
    .title {
        font-size: 0.9rem;
        font-weight: ${Styles.font.weight.medium};
        color: ${Styles.colors.natural80};
    }
    .option {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: inherit;
    }
`;
const Fill = styled.div`
    padding-bottom: 2.4rem;
`;
