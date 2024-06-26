import { useState } from "react";
import styled from "styled-components";

import EnabledButton from "@/components/button/EnabledButton";

import { Styles } from "@/style/Styles";

import { SearchIcon, ToggleIcon } from "@/pages/auth/register/_images/register_img";

const StaffOfficeSearch = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <StyledStaffCheckWrapper>
            <StyledSearchInner>
                <StyledButtonItem>
                    <StyledButtonMenu>
                        <button onClick={toggleMenu}>전체</button>
                        {showMenu && (
                            <ul>
                                <li>ID</li>
                                <li>상호명</li>
                                <li>대표자</li>
                            </ul>
                        )}
                    </StyledButtonMenu>
                    <span onClick={toggleMenu}>
                        <img src={ToggleIcon} alt="" />
                    </span>
                </StyledButtonItem>
                <StyledSearchInput>
                    <input type="text" placeholder="가맹점을 입력하세요." />
                    <span>
                        <img src={SearchIcon} alt="검색 아이콘" />
                    </span>
                </StyledSearchInput>
            </StyledSearchInner>
            <EnabledButton title="입력" />
        </StyledStaffCheckWrapper>
    );
};

const StyledStaffCheckWrapper = styled.div`
    width: 100%;
`;
const StyledSearchInner = styled.div`
    display: flex;
    gap: 0.45rem;
    width: 100%;
    div {
        position: relative;
        display: flex;
        align-items: center;
    }
    input,
    button {
        width: 100%;
        background: ${Styles.colors.systemBackground};
        border: none;
        border-radius: 0.4rem;
        height: 2.3rem;
        padding: 0.55rem 0.8rem;
        caret-color: ${Styles.colors.primary100};
    }
    button {
        text-align: left;
        cursor: pointer;
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
    }
    input {
        &::placeholder {
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
        }
        &:focus {
            border: 0.05rem solid ${Styles.colors.primary100};
            outline: none;
        }
    }
    span {
        position: absolute;
        top: 50%;
        right: 0.6rem;
        transform: translateY(-50%);
        cursor: pointer;
        display: flex;
        justify-content: end;
        align-items: center;

        img {
            width: 1.2rem;
            height: 1.2rem;
            margin: 0;
        }
    }
`;
const StyledButtonMenu = styled.div`
    position: relative;
    width: 100%;

    ul {
        /* 임시 설정 */
        position: absolute;
        top: 2.7rem;
        left: 0;
        width: 100%;
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        background-color: ${Styles.colors.systemBackground};
        border-radius: 0.4rem;
        z-index: 1;
        border: 1px solid ${Styles.colors.natural20};

        li {
            cursor: pointer;
            padding: 0.55rem 0.8rem;
            &:hover {
                background-color: ${Styles.colors.natural00};
            }
        }
    }
`;
const StyledButtonItem = styled.div`
    width: 24%;
    position: relative;
`;
const StyledSearchInput = styled.div`
    width: 76%;
`;

export default StaffOfficeSearch;
