import FixedButton from "@/components/button/FixedButton";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppBaseWrapper, { StyledAppBaseWrapper } from "@/components/layout/AppBaseWrapper";
import AppLayout from "@/components/layout/AppLayout";
import { StyledBottomText } from "@/style/FixedStyle";
import { Styles } from "@/style/Styles";

import styled from "styled-components";

const deputyinfoData = [
    {
        application_date: "2023.03.02",
        consent_date: "2023.03.04",
        price: "월 40,000원 (vat 별도)",
    },
];
const agentinfoData = [
    {
        company: "정석세무법인",
        name: "김정석",
        company_number: "123-45-67890",
        cell_phone: "02-789-4561",
    },
];

const TaxJoinFinStaff = () => {
    const deputy = deputyinfoData[0];
    const agent = agentinfoData[0];

    return (
        <AppLayout props={{ header: <AppBackHeader title="세무서비스" /> }}>
            <StyledSimpleAuthWrapper>
                <h2>세무대리 계약정보</h2>
                <StyledSimpleAuthInfo>
                    <ul>
                        <li>
                            <h4>신청일</h4>
                            <span>{deputy.application_date}</span>
                        </li>
                        <li>
                            <h4>수임동의일</h4>
                            <span>{deputy.consent_date}</span>
                        </li>
                        <li>
                            <h4>비용</h4>
                            <span>{deputy.price}</span>
                        </li>
                    </ul>
                </StyledSimpleAuthInfo>
            </StyledSimpleAuthWrapper>
            <AppBaseWrapper title={`세무대리인 정보`}>
                <StyledSimpleAuthInfo>
                    <ul>
                        <li>
                            <h4>상호명</h4>
                            <span>{agent.company}</span>
                        </li>
                        <li>
                            <h4>대표자</h4>
                            <span>{agent.name}</span>
                        </li>
                        <li>
                            <h4>사업자번호</h4>
                            <span>{agent.company_number}</span>
                        </li>
                        <li>
                            <h4>연락처</h4>
                            <span>{agent.cell_phone}</span>
                        </li>
                    </ul>
                </StyledSimpleAuthInfo>
                <StyledBottomText>
                    <p>※ 가입 신청시 세무사로부터 세무대리 등록이 진행됩니다.</p>
                </StyledBottomText>
            </AppBaseWrapper>
            <FixedButton>확인</FixedButton>
        </AppLayout>
    );
};

export default TaxJoinFinStaff;

const StyledSimpleAuthWrapper = styled(StyledAppBaseWrapper)`
    border-bottom: 0.6rem solid ${Styles.colors.systemBackground};
    padding-bottom: 1rem;

    .input_container {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }
`;

const StyledSimpleAuthInfo = styled.div`
    width: 100%;
    margin-top: 1rem;
    ul {
        li {
            display: flex;
            padding: 1.1rem 0;
            gap: 0.8rem;
            h4 {
                color: ${Styles.colors.natural80};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
                width: 5rem;
            }
            span {
                color: ${Styles.colors.natural60};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
                text-align: right;
                max-width: 70%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                flex-shrink: 1;
            }
            .status_span {
                color: ${Styles.colors.systemError};
            }
        }
    }
`;
