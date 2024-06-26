import styled from "styled-components";
import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";

import { Styles } from "@/style/Styles";
import { DocBagIcon, DocIcon } from "@/pages/manage/_images/manageImg";

const dummyData = [
    { id: 1, title: "신규등록", description: "새로운 직원들 등록하시나요?", icon: DocBagIcon },
    { id: 2, title: "승인", description: "승인을 기다리는 직원이 있어요!", icon: DocIcon },
];

const ManageStaffRegister = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="직원등록" /> }}>
            <StyledRegisterListWrapper>
                <StyledListInner>
                    {dummyData.map((item) => (
                        <StyledListItem key={item.id} $isSpecial={item.id === 2}>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            <img src={item.icon} alt="" />
                        </StyledListItem>
                    ))}
                </StyledListInner>
            </StyledRegisterListWrapper>
        </AppLayout>
    );
};

const StyledRegisterListWrapper = styled.div`
    width: 100%;
    padding: 0 1rem;
    height: calc(100vh - 2.4rem);
    background-color: ${Styles.colors.systemBackground};
`;

const StyledListInner = styled.ul`
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`;

const StyledListItem = styled.li<{ $isSpecial: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 1rem;
    border-radius: 0.4rem;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);

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
