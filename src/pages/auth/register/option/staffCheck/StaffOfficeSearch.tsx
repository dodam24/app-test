import styled from "styled-components";

import { SearchIcon } from "@/pages/auth/register/_images/register_img";
import ButtonMenu from "@/pages/shop/_component/ButtonMenu";
import FixedButton from "@/components/button/FixedButton";

import { Styles } from "@/style/Styles";

const StaffOfficeSearch = () => {
    const menuOptions = [
        { id: 1, title: "ID" },
        { id: 2, title: "상호명" },
        { id: 3, title: "대표자" },
    ];

    return (
        <StyledStaffCheckWrapper>
            <StyledSearchInner>
                <ButtonMenu options={menuOptions} title="전체" width="24%" />
                <StyledSearchInput>
                    <input type="text" placeholder="가맹점을 입력하세요." />
                    <span>
                        <img src={SearchIcon} alt="검색 아이콘" />
                    </span>
                </StyledSearchInput>
            </StyledSearchInner>
            <FixedButton>입력</FixedButton>
        </StyledStaffCheckWrapper>
    );
};

const StyledStaffCheckWrapper = styled.div`
    margin-top: 1.5rem;
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

const StyledSearchInput = styled.div`
    width: 76%;
`;

export default StaffOfficeSearch;
