import { Styles } from "@/style/Styles";
import styled from "styled-components";

const EmployeeInfoList = [
    { title: "근무시작일", content: "2023.01.01" },
    { title: "근무유형", content: "직원" },
    { title: "계약급여", content: "2,000,000 원" },
];

const EmployeeInfo = () => {
    return (
        <StyledEmployeeInfoContainer>
            <h3>My info</h3>
            <StyledEmployeeInfo>
                {EmployeeInfoList.map((item, index) => (
                    <li key={index}>
                        <span className="title">{item.title}</span>
                        <div>
                            {item.title === "계약급여" && <strong>월급</strong>}
                            <span className="content">{item.content}</span>
                        </div>
                    </li>
                ))}
            </StyledEmployeeInfo>
        </StyledEmployeeInfoContainer>
    );
};

export default EmployeeInfo;

const StyledEmployeeInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
    }
`;
const StyledEmployeeInfo = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0 0.8rem;
    border-radius: 0.4rem;
    background: ${Styles.colors.systemWhite};
    box-shadow: 0 0.1rem 0.6rem 0 rgba(0, 0, 0, 0.06);
    li {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.05rem solid ${Styles.colors.natural00};
        padding: 0.8rem 0;
        .title {
            color: ${Styles.colors.natural60};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
        }
        div {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            strong {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 1.95rem;
                height: 1.2rem;
                background: ${Styles.colors.systemWhite};
                border: 0.05rem solid ${Styles.colors.primary100};
                border-radius: 0.4rem;
                color: ${Styles.colors.primary100};
                font-size: ${Styles.font.size.fontsize12};
                font-weight: ${Styles.font.weight.regular};
                line-height: 1.4;
            }
            .content {
                flex: 1;
                text-align: right;
                color: ${Styles.colors.natural80};
                font-size: ${Styles.font.size.fontsize14};
                font-weight: ${Styles.font.weight.regular};
            }
        }
    }
`;
