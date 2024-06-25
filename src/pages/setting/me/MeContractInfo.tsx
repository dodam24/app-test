import styled from "styled-components";
import { Styles } from "@/style/Styles";

const MeContractInfo = () => {
    return (
        <StyledContractInfo>
            <h4>정산계약정보</h4>
            <div className="contract">
                <div className="index">
                    <div>
                        <h5>결제유형</h5>
                    </div>
                    <div>
                        <h5>정산주기</h5>
                    </div>
                    <div>
                        <h5>정산수수료</h5>
                    </div>
                </div>
                <div className="list_info">
                    <ul>
                        <li>
                            <span>VAN</span>
                        </li>
                        <li>
                            <span>PG</span>
                        </li>
                        <li>
                            <span>주문앱</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>D+3</span>
                        </li>
                        <li>
                            <span>D+1</span>
                        </li>
                        <li>
                            <span>D+3</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>3.3%</span>
                        </li>
                        <li>
                            <span>7.7%</span>
                        </li>
                        <li>
                            <span>5.5%</span>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledContractInfo>
    );
};

export default MeContractInfo;

const StyledContractInfo = styled.div`
    margin-top: 2rem;
    padding: 0 1rem;
    h4 {
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        color: ${Styles.colors.natural90};
    }
    .contract {
        margin-top: 1rem;
        border-top: 0.05rem solid ${Styles.colors.natural40};
        border-bottom: 0.05rem solid ${Styles.colors.natural40};
        .index {
            padding: 0.8rem 0;
            border-bottom: 0.05rem solid ${Styles.colors.natural10};
            text-align: center;
            h5 {
                font-size: ${Styles.font.size.fontsize13};
                font-weight: ${Styles.font.weight.regular};
                color: ${Styles.colors.natural60};
            }
        }
        & > div {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            ul {
                display: flex;
                flex-direction: column;
                min-width: 100%;
                li {
                    border-bottom: 0.05rem solid ${Styles.colors.natural10};
                    padding: 0.8rem 0.325rem;
                    text-align: center;
                    span {
                        font-size: ${Styles.font.size.fontsize14};
                        font-weight: ${Styles.font.weight.medium};
                        color: ${Styles.colors.natural80};
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        word-wrap: break-word;
                    }
                    &:last-child {
                        border-bottom: 0;
                    }
                }
            }
        }
    }
`;
