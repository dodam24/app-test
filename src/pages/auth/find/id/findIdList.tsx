import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import EnabledButton from "@/components/button/EnabledButton";

const FindIdList = () => {
    // 임시 데이터 예시
    const idList = [
        { id: "user1", registrationDate: "2023-01-01" },
        { id: "user2", registrationDate: "2023-02-01" },
        { id: "user3", registrationDate: "2023-03-01" },
    ];
    // 아이디의 마지막 두 자리를 **로 표시
    const maskId = (id: string) => {
        if (id.length <= 2) return "**";
        return id.slice(0, -2) + "**";
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="아이디 목록" /> }}>
            <StyledFindIdrListWrapper>
                <h3>
                    고객님의 정보와 일치하는
                    <br />
                    아이디 목록을 보여드릴게요.
                </h3>
                <StyledIdList>
                    {idList.map((item, index) => (
                        <li key={index}>
                            <div>
                                <input type="radio" name="idList" />
                                <p>{maskId(item.id)}</p>
                            </div>
                            <span className="registrationDate">가입일 {item.registrationDate}</span>
                        </li>
                    ))}
                </StyledIdList>
                <EnabledButtonInner>
                    <EnabledButton className="firstBtn" title="비밀번호찾기" />
                    <EnabledButton className="secondBtn" title="로그인" />
                </EnabledButtonInner>
            </StyledFindIdrListWrapper>
        </AppLayout>
    );
};
const StyledFindIdrListWrapper = styled.div`
    width: 100%;
    padding: 0 1rem 0.6rem;
    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 140%;
        width: 100%;
        text-align: left;
        margin: 1rem 0 1.5rem;
    }
`;
const StyledIdList = styled.ul`
    list-style-type: none;
    padding: 1.2rem 0.8rem;
    border-radius: 8px;
    border: 1px solid ${Styles.colors.natural10};
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        div {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            input {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                width: 1rem;
                height: 20px;
                margin: 0;
                border: 0.1rem solid ${Styles.colors.natural30};
                border-radius: 50%;
                outline: none;
                cursor: pointer;

                &:checked {
                    background-color: ${Styles.colors.primary100};
                    border: 0.25rem solid ${Styles.colors.systemWhite};
                    box-shadow: 0 0 0 0.08rem ${Styles.colors.primary100};
                }
            }
            p {
                color: ${Styles.colors.natural60};
            }
        }
        span {
            color: ${Styles.colors.natural40};
        }
    }
`;
const EnabledButtonInner = styled.div`
    display: flex;
    width: 100%;
    gap: 0.75rem;
    .firstBtn {
        width: 50%;
        background-color: ${Styles.colors.systemWhite};
        color: ${Styles.colors.primary100};
        border: 1px solid ${Styles.colors.primary100};
    }
    .secondBtn {
        width: 50%;
    }
`;
export default FindIdList;
