import { Link } from "react-router-dom";
import styled from "styled-components";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";

import { Styles } from "@/style/Styles";
import { DocBagIcon, DocIcon } from "@/pages/manage/_images/manageImg";

const ManageStaffRegister = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="직원등록" /> }}>
            <StyledRegisterListWrapper>
                <StyledListInner>
                    <StyledListItem $isSpecial>
                        <Link to="/manage/staff/input">
                            <div>
                                <h3>신규등록</h3>
                                <p>새로운 직원들 등록하시나요?</p>
                            </div>
                            <img src={DocBagIcon} alt="" />
                        </Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link to="/manage/staff/approval">
                            <div>
                                <h3>승인</h3>
                                <p>승인을 기다리는 직원이 있어요!</p>
                            </div>
                            <img src={DocIcon} alt="" />
                        </Link>
                    </StyledListItem>
                </StyledListInner>
            </StyledRegisterListWrapper>
        </AppLayout>
    );
};

const StyledRegisterListWrapper = styled(AppBaseWrapper)`
    background-color: ${Styles.colors.systemBackground};
`;

const StyledListInner = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`;

const StyledListItem = styled.li<{ $isSpecial?: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 1rem;
    border-radius: 0.4rem;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);

    a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        text-decoration: none;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;

        h3 {
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.semibold};
            color: ${Styles.colors.natural90};
        }

        p {
            font-size: ${Styles.font.size.fontsize13};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.natural50};
        }
    }

    img {
        width: ${({ $isSpecial }) => ($isSpecial ? "2.2rem" : "1.95rem")};
        height: ${({ $isSpecial }) => ($isSpecial ? "1.85rem" : "1.55rem")};
    }
`;

export default ManageStaffRegister;
