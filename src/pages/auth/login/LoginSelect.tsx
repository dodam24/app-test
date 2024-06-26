import React, { useState } from "react";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import styled from "styled-components";
import EnabledButton from "@/components/button/EnabledButton";

import { Styles } from "@/style/Styles";

// 로그인 데이터 타입 정의
interface Login {
    id: string;
    title: string;
}

const LoginSelect: React.FC = () => {
    const ownerLogin: Login[] = [
        { id: "abcd1234", title: "화락바베큐 청라점" },
        { id: "efg567", title: "화락바베큐 청담점" },
    ];
    const staffLogin: Login[] = [
        { id: "hij890", title: "BBQ치킨 청라점" },
        { id: "lmno234", title: "교촌치킨 청담점" },
    ];

    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedId(e.target.value);
    };

    const renderLoginList = (logins: Login[], option: string, tag: string) => (
        <StyledDataListContainer>
            <h3>{option}</h3>
            <div className="contract">
                <div className="index">
                    <div>
                        <h5 className="index_select">선택</h5>
                    </div>
                    <div>
                        <h5 className="index_id">ID</h5>
                    </div>
                    <div>
                        <h5>{tag}</h5>
                    </div>
                </div>
                <div className="list_info">
                    <ul>
                        {logins.map((login) => (
                            <li
                                key={login.id}
                                className={selectedId === login.id ? "selected" : ""}
                            >
                                <span className="radio">
                                    <input
                                        type="radio"
                                        name="login"
                                        value={login.id}
                                        checked={selectedId === login.id}
                                        onChange={handleInputChange}
                                    />
                                </span>
                                <span className="id">{login.id}</span>
                                <span className="title">{login.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </StyledDataListContainer>
    );

    return (
        <AppLayout props={{ header: <AppBackHeader title="로그인 계정선택" /> }}>
            <StyledSelectWrapper>
                <h2>
                    가입한 계정이 총 {ownerLogin.length + staffLogin.length}개입니다.
                    <br />
                    로그인 계정을 선택해 주세요
                </h2>
                <div className="list_box">
                    {renderLoginList(ownerLogin, "점주", "상호명")}
                    {renderLoginList(staffLogin, "직원", "소속가맹점")}
                </div>
            </StyledSelectWrapper>
            <EnabledButton title="로그인" />
        </AppLayout>
    );
};

const StyledSelectWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;
    h2 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 1.4;
        margin-bottom: 1.5rem;
    }
    .index_select {
        margin-left: 0.6rem;
    }
    .index_id {
        margin-left: 0.5rem;
    }
    .list_box {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
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
            display: flex;
            justify-content: space-around;
            padding: 0.8rem 0;
            border-bottom: 0.05rem solid ${Styles.colors.natural10};
            text-align: center;
            h5 {
                font-size: ${Styles.font.size.fontsize13};
                font-weight: ${Styles.font.weight.regular};
                color: ${Styles.colors.natural60};
            }
            div {
                display: flex;
                justify-content: center;
                align-items: center;
                &:nth-child(1) {
                    flex: 1;
                }
                &:nth-child(2) {
                    flex: 2;
                }
                &:nth-child(3) {
                    flex: 3;
                }
            }
        }
        .list_info {
            ul {
                display: flex;
                flex-direction: column;
                min-width: 100%;
                padding: 0;
                margin: 0;
                list-style: none;
                li {
                    display: flex;
                    justify-content: space-around;
                    border-bottom: 0.05rem solid ${Styles.colors.natural10};
                    padding: 0.8rem 0.325rem;
                    text-align: center;
                    span {
                        font-size: ${Styles.font.size.fontsize14};
                        font-weight: ${Styles.font.weight.medium};
                        color: ${Styles.colors.natural80};
                        overflow: hidden;
                        &:nth-child(1) {
                            flex: 1;
                        }
                        &:nth-child(2) {
                            flex: 2;
                        }
                        &:nth-child(3) {
                            flex: 3;
                        }
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
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        width: 1rem;
                        height: 1rem;
                        margin: 0 auto;
                        border: 0.1rem solid ${Styles.colors.natural30};
                        border-radius: 50%;
                        outline: none;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: transparent;

                        &:checked {
                            background-color: ${Styles.colors.systemWhite};
                            border-color: ${Styles.colors.primary100};
                        }

                        &:checked::before {
                            content: "";
                            width: 0.5rem;
                            height: 0.5rem;
                            border-radius: 50%;
                            background-color: ${Styles.colors.primary100};
                        }
                    }
                }
            }
        }
    }
`;

export default LoginSelect;
