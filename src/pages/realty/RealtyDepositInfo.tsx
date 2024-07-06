import styled from "styled-components";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { useParams } from "react-router-dom";
import { StyledStateListWrapper } from "@/components/styles/StateBoxStyle";

const RealtyDepositInfo = () => {
    const { id } = useParams<{ id: string }>();

    const depositData = [
        {
            id: 1,
            title: "임대료",
            status: "입금대기",
            name: "홍길동",
            date: "2023.03.01 09:58:34",
            amount: "500,000",
            scheduledDate: "2023.03.05",
            fee_rate: "1.5",
        },
        {
            id: 2,
            title: "관리비",
            status: "입금완료",
            name: "이순신",
            date: "2023.03.02 14:20:45",
            amount: "300,000",
            scheduledDate: "2023.03.10",
            fee_rate: "1.5",
        },
        {
            id: 3,
            title: "수리비",
            status: "입금대기",
            name: "김유신",
            date: "2023.03.03 11:30:22",
            amount: "200,000",
            scheduledDate: "2023.03.08",
            fee_rate: "1.5",
        },
    ];
    const depositItem = depositData.find((item) => item.id === parseInt(id));

    if (!depositItem) {
        return <div>존재하지 않는 대출 상품입니다.</div>;
    }

    return (
        <AppLayout props={{ header: <AppBackHeader title="입금 상세내역" /> }}>
            <StyledDepositInfoWrapper>
                <ul>
                    <li>
                        <h4>결제일시</h4>
                        <span>{depositItem.date}</span>
                    </li>
                    <li>
                        <h4>입금(예정)일</h4>
                        <span>{depositItem.scheduledDate}</span>
                    </li>
                    <li>
                        <h4>결제항목</h4>
                        <span>{depositItem.title}</span>
                    </li>
                    <li>
                        <h4>결제자명</h4>
                        <span>{depositItem.name}</span>
                    </li>
                    <li>
                        <h4>결제액</h4>
                        <span>{depositItem.amount}</span>
                    </li>
                    <li>
                        <h4>수수료</h4>
                        <span>{depositItem.fee_rate}</span>
                    </li>
                    <li>
                        <h4>상태</h4>
                        <span className="status_span">{depositItem.status}</span>
                    </li>
                </ul>
            </StyledDepositInfoWrapper>
        </AppLayout>
    );
};

const StyledDepositInfoWrapper = styled(StyledStateListWrapper)`ㄴ`;

export default RealtyDepositInfo;
