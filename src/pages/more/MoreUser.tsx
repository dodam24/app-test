import { Styles } from "@/style/Styles";
import { styled } from "styled-components";
import MoreCustomerService from "./MoreCustomerService";

interface MoreUserProps {
    openModal: () => void;
}

const MoreUser = ({ openModal }: MoreUserProps) => {
    return (
        <StyledCustomerInfoContainer>
            <div className="user_info">
                <div className="user_name">
                    <span>basic 회원</span>
                    <strong>홍길동님</strong>
                </div>
                <button onClick={openModal}>로그아웃</button>
            </div>
            <MoreCustomerService />
        </StyledCustomerInfoContainer>
    );
};

const StyledCustomerInfoContainer = styled.section`
    padding: 2.2rem 1rem 1.6rem 1rem;
    border-bottom: 0.6rem solid ${Styles.colors.systemBackground};

    .user_info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2.4rem;

        .user_name {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;

            & > span {
                color: ${Styles.colors.natural50};
                font-size: ${Styles.font.size.fontsize13};
                font-weight: ${Styles.font.weight.medium};
            }
            & > strong {
                color: ${Styles.colors.natural90};
                font-size: ${Styles.font.size.fontsize20};
                font-weight: ${Styles.font.weight.medium};
            }
        }
        button {
            display: flex;
            padding: 0.3rem 0.6rem;
            align-items: center;
            border-radius: 4.95rem;
            background: ${Styles.colors.natural20};
            color: ${Styles.colors.systemWhite};
            font-size: ${Styles.font.size.fontsize12};
            font-weight: ${Styles.font.weight.medium};
        }
    }
`;

export default MoreUser;
