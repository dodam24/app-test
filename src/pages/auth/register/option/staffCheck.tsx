import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import styled from "styled-components";
import { Styles } from "@/style/Styles";

import EnabledButton from "@/components/button/EnabledButton";
import { SearchIcon, ToggleIcon } from "../registerImg";
const StaffCheck = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="가맹점 조회" /> }}>
            <StyledStaffCheckWrapper>
                <h3>
                    검색된 가맹점 항목을 선택 후<br />
                    입력해 주세요.
                </h3>
                <StyledSearchInner>
                    <StyledButtonItem>
                        <div>
                            <button>전체</button>
                            <ul>
                                <li>전체</li>
                                <li>ID</li>
                                <li>상호명</li>
                                <li>대표</li>
                            </ul>
                        </div>
                        <span>
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
        </AppLayout>
    );
};
const StyledStaffCheckWrapper = styled.div`
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
const StyledSearchInner = styled.div`
    display: flex;
    gap: 0.45rem;

    div {
        position: relative;
        display: flex;
        align-items: center;
    }
    input,
    button {
        background: ${Styles.colors.systemBackground};
        border: none;
        border-radius: 0.4rem;
        height: 2.3rem;
        padding: 0.55rem 0.8rem;
        width: 100%;
        caret-color: ${Styles.colors.primary100};

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
        right: 0.8rem;
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
const StyledButtonItem = styled.div``;
const StyledSearchInput = styled.div``;
export default StaffCheck;
