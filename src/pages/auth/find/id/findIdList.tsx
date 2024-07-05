import styled from "styled-components";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";

import { Styles } from "@/style/Styles";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";

import FixedButton from "@/components/button/FixedButton";
import { StyleDoubleFixedBotton } from "@/components/styles/ButtonSytle";
import { StyledInputRadioWrapper } from "@/components/styles/InputStyle";

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
            <AppBaseWrapper title={`고객님의 정보와 일치하는\n아이디 목록을 보여드릴게요.`}>
                <StyledIdList>
                    {idList.map((item, index) => (
                        <li key={index}>
                            <StyledRadioContainer>
                                <input type="radio" name="idList" />
                                <p>{maskId(item.id)}</p>
                            </StyledRadioContainer>
                            <span className="registrationDate">가입일 {item.registrationDate}</span>
                        </li>
                    ))}
                </StyledIdList>

                <StyledButtonFlex>
                    <FixedButton className="custom_btn">비밀번호 찾기</FixedButton>
                    <FixedButton>로그인</FixedButton>
                </StyledButtonFlex>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const StyledIdList = styled.ul`
    list-style-type: none;
    padding: 1.2rem 0.8rem;
    border-radius: 0.4rem;
    border: 1px solid ${Styles.colors.natural10};
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin: 1.5rem 0 0;
    word-break: break-all;
    li {
        display: flex;
        justify-content: space-between;
        gap: 1.2rem;
        align-items: center;
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};

        span {
            color: ${Styles.colors.natural40};
            min-width: fit-content;
        }
    }
`;

const StyledRadioContainer = styled(StyledInputRadioWrapper)`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    p {
        color: ${Styles.colors.natural60};
    }
`;
const StyledButtonFlex = styled(StyleDoubleFixedBotton)``;

export default FindIdList;
