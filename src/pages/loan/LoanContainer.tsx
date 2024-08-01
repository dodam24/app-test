import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ILoanData } from "@/interface/loan/loan";

import { BannerImg1, BannerImg2, BannerImg3, BannerImg4 } from "@/pages/loan/_images/loanImg";

const dummyLoanData: ILoanData[] = [
    {
        id: 1,
        img: BannerImg1,
    },
    {
        id: 2,
        img: BannerImg2,
    },
    {
        id: 3,
        img: BannerImg3,
    },
    {
        id: 4,
        img: BannerImg4,
    },
];

const LoanContainer = () => {
    const navigate = useNavigate();

    const handleItemClick = (id: number) => {
        navigate(`/loan/info/${id}`, { replace: true });
        console.log(`Loan Item Clicked: ${id}`);
    };

    return (
        <StyledLoanList>
            {dummyLoanData.map((loan) => (
                <StyledLoanItem key={loan.id} onClick={() => handleItemClick(loan.id)}>
                    <img src={loan.img} alt="Loan Icon" />
                </StyledLoanItem>
            ))}
        </StyledLoanList>
    );
};

export default LoanContainer;

const StyledLoanList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 1.2rem;
`;

const StyledLoanItem = styled.li`
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
    img {
        width: 100%;
        height: 100%;
        display: block;
    }
`;
