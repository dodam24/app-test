import { ChangeEvent, MouseEvent, useState } from "react";
import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";

import { Styles } from "@/style/Styles";
import { StyledInputRadioWrapper } from "@/style/InputStyle";

interface Login {
    id: string;
    title: string;
}

const LoginSelect = () => {
    const ownerLogin: Login[] = [
        {
            id: "abcd1234",
            title: "화락바베큐 청라점",
        },
        { id: "efg567", title: "화락바베큐 청담점" },
    ];
    const staffLogin: Login[] = [
        { id: "hij890", title: "BBQ치킨 청라점" },
        { id: "lmno234", title: "교촌치킨 청담점" },
    ];

    const [isSelectedId, setIsSelectedId] = useState<string>("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsSelectedId(e.target.value);
    };

    const handleItemClick = (id: string) => {
        setIsSelectedId(id);
    };

    const handleDoubleClick = (e: MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
    };

    const renderLoginList = (logins: Login[], option: string, tag: string) => (
        <StyledDataListContainer>
            <h3>{option}</h3>
            <div className="contract">
                <div className="index">
                    <h5 className="index_select">선택</h5>
                    <h5 className="index_id">ID</h5>
                    <h5>{tag}</h5>
                </div>
                <StyledListInner as="ul" className="list_info">
                    {logins.map((login) => (
                        <li
                            key={login.id}
                            className={isSelectedId === login.id ? "selected" : ""}
                            onClick={() => handleItemClick(login.id)}
                            onDoubleClick={handleDoubleClick}
                        >
                            <span className="radio">
                                <input
                                    type="radio"
                                    name="login"
                                    value={login.id}
                                    checked={isSelectedId === login.id}
                                    onChange={handleInputChange}
                                />
                            </span>
                            <span className="id">{login.id}</span>
                            <span className="title">{login.title}</span>
                        </li>
                    ))}
                </StyledListInner>
            </div>
        </StyledDataListContainer>
    );

    return (
        <AppLayout props={{ header: <AppBackHeader title="로그인 계정선택" /> }}>
            <AppBaseWrapper
                title={`가입한 계정이 총 ${ownerLogin.length + staffLogin.length}개입니다.\n로그인 계정을 선택해 주세요`}
            >
                <StyledListBox className="list_box">
                    {renderLoginList(ownerLogin, "점주", "상호명")}
                    {renderLoginList(staffLogin, "직원", "소속가맹점")}
                </StyledListBox>

                <FixedButton>로그인</FixedButton>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const StyledListBox = styled.div`
    margin: 1.5rem 0 4rem;
    .index_select {
        margin-left: 0.6rem;
    }
    .index_id {
        margin-left: 0.5rem;
    }
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const StyledDataListContainer = styled.div`
    h3 {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
    .contract {
        margin-top: 0.4rem;
        border-top: 0.05rem solid ${Styles.colors.natural40};
        border-bottom: 0.05rem solid ${Styles.colors.natural40};
        .index {
            display: grid;
            grid-template-columns: 1fr 3fr 3fr;
            padding: 0.8rem 0;
            border-bottom: 0.05rem solid ${Styles.colors.natural10};
            text-align: center;
            h5 {
                font-size: ${Styles.font.size.fontsize13};
                font-weight: ${Styles.font.weight.regular};
                color: ${Styles.colors.natural60};
            }
        }
    }
`;

const StyledListInner = styled(StyledInputRadioWrapper)`
    display: flex;
    flex-direction: column;
    min-width: 100%;
    padding: 0;
    margin: 0;
    li {
        display: grid;
        grid-template-columns: 1fr 2fr 3fr;
        justify-content: space-around;
        border-bottom: 0.05rem solid ${Styles.colors.natural10};
        padding: 0.8rem 0.325rem;
        text-align: center;
        gap: 1.2rem;
        word-break: break-all;
        user-select: none;
        align-items: center;
        span {
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.medium};
            color: ${Styles.colors.natural80};

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        &.selected {
            span {
                color: ${Styles.colors.primary100};
            }
        }
        &:last-child {
            border-bottom: 0;
        }
        input {
            margin: 0 auto;
        }
        .title,
        .id {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
        }
    }
`;

export default LoginSelect;
