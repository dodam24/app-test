import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";

import { Styles } from "@/style/Styles";

import { NonIcon } from "@/pages/manage/_images/manageImg";

const staffData = [
    {
        id: 1,
        name: "홍길동",
        status: "승인대기",
        date: "2023.03.01",
        time: "14:33:23",
    },
    {
        id: 2,
        name: "권지민",
        status: "승인대기",
        date: "2023.02.01",
        time: "12:15:59",
    },
    {
        id: 3,
        name: "오태식",
        status: "승인대기",
        date: "2023.01.01",
        time: "11:27:34",
    },
];

const StaffApproval = () => {
    const $isEmpty = staffData.length === 0;

    return (
        <AppLayout props={{ header: <AppBackHeader title="대출상품" /> }}>
            <StyledApprovalWrapper>
                {$isEmpty ? (
                    <StyledNoneList>
                        <img src={NonIcon} alt="Empty List Image" />
                        <p>승인대기 직원이 없습니다.</p>
                    </StyledNoneList>
                ) : (
                    <>
                        <h2>
                            항목을 터치하면 직원가입 승인을
                            <br />
                            진행할 수 있습니다.
                        </h2>
                        <StyledApprovalInner>
                            {staffData.map((staff) => (
                                <li key={staff.id}>
                                    <StyledApprovalTop>
                                        <h3>{staff.name}</h3>
                                        <p>{staff.status}</p>
                                    </StyledApprovalTop>
                                    <StyledApprovalBottom>
                                        <span>{staff.date}</span>
                                        <span>{staff.time}</span>
                                    </StyledApprovalBottom>
                                </li>
                            ))}
                        </StyledApprovalInner>
                    </>
                )}
            </StyledApprovalWrapper>
        </AppLayout>
    );
};

export default StaffApproval;

const StyledApprovalWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;
    height: calc(100vh - 2.4rem);
    h2 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 140%;
    }
`;

const StyledNoneList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    margin-top: 9.25rem;
    img {
        width: 4.5rem;
        height: 4.5rem;
    }

    p {
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const StyledApprovalInner = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
    li {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        border-radius: 0.4rem;
        border: 1px solid ${Styles.colors.natural00};
    }
`;

const StyledApprovalTop = styled.div`
    display: flex;
    justify-content: space-between;
    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.medium};
    }
    p {
        color: ${Styles.colors.systemError};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const StyledApprovalBottom = styled.div`
    display: flex;
    align-items: center;

    span {
        position: relative;
        color: ${Styles.colors.natural50};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
        margin-right: 0.8rem;
    }

    span:not(:last-child)::after {
        content: "";
        position: absolute;
        width: 0.05rem;
        height: 80%;
        background-color: ${Styles.colors.natural00};
        right: -0.4rem;
        top: 10%;
    }
`;
