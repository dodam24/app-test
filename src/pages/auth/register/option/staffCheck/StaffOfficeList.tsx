import { useState } from "react";
import styled from "styled-components";

import { Styles } from "@/style/Styles";

interface Office {
    id: string;
    상호명: string;
    대표자: string;
}

const StaffOfficeList = () => {
    const [selectedId, setSelectedId] = useState<string>("");

    const officeList: Office[] = [
        { id: "abc123", 상호명: "활빈당", 대표자: "홍길동" },
        { id: "def123", 상호명: "청해진", 대표자: "장보고" },
        { id: "ghi123", 상호명: "종로갈비", 대표자: "권지민" },
    ];

    return (
        <StyledOfficeListWrapper>
            <div className="index">
                <h5>ID</h5>

                <h5>상호명</h5>

                <h5>대표자</h5>
            </div>
            <ul className="list_info">
                {officeList.map((office) => (
                    <li
                        key={office.id}
                        onClick={() => setSelectedId(office.id)}
                        className={selectedId === office.id ? "selected" : ""}
                    >
                        <span>{office.id}</span>
                        <span>{office.상호명}</span>
                        <span>{office.대표자}</span>
                    </li>
                ))}
            </ul>
        </StyledOfficeListWrapper>
    );
};

const StyledOfficeListWrapper = styled.div`
    margin: 2rem 0 4rem;
    border-top: 0.05rem solid ${Styles.colors.natural40};
    border-bottom: 0.05rem solid ${Styles.colors.natural40};
    .index {
        display: flex;
        justify-content: space-around;
        padding: 0.8rem 0;
        border-bottom: 0.05rem solid ${Styles.colors.natural10};
        text-align: center;
        h5 {
            flex: 1;
            font-size: ${Styles.font.size.fontsize13};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.natural60};
        }
        div {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .list_info {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        padding: 0;
        margin: 0;
        li {
            display: flex;
            justify-content: space-around;
            border-bottom: 0.05rem solid ${Styles.colors.natural10};
            padding: 0.8rem 0.325rem;
            text-align: center;
            cursor: pointer;
            &.selected {
                background-color: ${Styles.colors.primary20};
                span {
                    color: ${Styles.colors.primary100};
                }
            }
            span {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: ${Styles.font.size.fontsize14};
                font-weight: ${Styles.font.weight.medium};
                color: ${Styles.colors.natural80};
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                word-wrap: break-word;
            }
            &:last-child {
                border-bottom: 0;
            }
        }
    }
`;

export default StaffOfficeList;
