import { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";

import { IFindIdList } from "@/interface/auth/find/find";

import { Styles } from "@/style/Styles";
import { StyleDoubleFixedButton } from "@/style/ButtonSytle";
import { StyledInputRadioWrapper } from "@/style/InputStyle";

const FindIdList = () => {
    const idList: IFindIdList[] = [
        { id: "user1", registrationDate: "2023-01-01" },
        { id: "user2", registrationDate: "2023-02-01" },
        { id: "user3", registrationDate: "2023-03-01" },
    ];

    const maskId = (id: string) => {
        if (id.length <= 2) return "**";
        return id.slice(0, -2) + "**";
    };

    const [selectedId, setSelectedId] = useState<string>("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedId(e.target.value);
    };

    const handleItemClick = (id: string) => {
        setSelectedId(id);
    };

    const handleDoubleClick = (e: MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
    };

    const navigate = useNavigate();

    const handlePwClick = () => {
        navigate("/find/pw", { replace: true });
    };

    const handleLoginClick = () => {
        navigate("/login", { replace: true });
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="아이디 목록" /> }}>
            <AppBaseWrapper title={`고객님의 정보와 일치하는\n아이디 목록을 보여드릴게요.`}>
                <StyledIdList>
                    {idList.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleItemClick(item.id)}
                            onDoubleClick={handleDoubleClick}
                        >
                            <StyledRadioContainer>
                                <input
                                    type="radio"
                                    name="idList"
                                    value={item.id} // 여기 추가
                                    checked={selectedId === item.id}
                                    onChange={(e) => {
                                        handleInputChange(e);
                                        handleItemClick(item.id); // 여기 추가
                                    }}
                                />
                                <span>{maskId(item.id)}</span>
                            </StyledRadioContainer>
                            <span className="registrationDate">가입일 {item.registrationDate}</span>
                        </li>
                    ))}
                </StyledIdList>

                <StyleDoubleFixedButton>
                    <FixedButton className="custom_btn" onClick={handlePwClick}>
                        비밀번호 찾기
                    </FixedButton>
                    <FixedButton onClick={handleLoginClick}>로그인</FixedButton>
                </StyleDoubleFixedButton>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const StyledIdList = styled.ul`
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
        user-select: none;

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
    span {
        color: ${Styles.colors.natural60};
    }
`;

export default FindIdList;
