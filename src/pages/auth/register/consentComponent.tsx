import React, { useState } from "react";
import CheckIcon from "../../../../public/login/CheckboxCheck.png";
import CheckedIcon from "../../../../public/login/CheckboxChecked.png";
import styled from "styled-components";
import { Styles } from "@/style/Styles";

const ConsentComponent = () => {
    const [checkboxStates, setCheckboxStates] = useState([
        {
            label: "이용약관에 동의합니다. (필수)",
            checked: false,
            detailLink: "#",
        },
        {
            label: "개인정보 수집 및 이용에 동의합니다. (필수)",
            checked: false,
            detailLink: "#",
        },
        { label: "만 14세 이상입니다. (필수)", checked: false, detailLink: "" },
    ]);

    const handleCheckboxChange = (index: number) => {
        const newCheckboxStates = [...checkboxStates];
        newCheckboxStates[index].checked = !newCheckboxStates[index].checked;
        setCheckboxStates(newCheckboxStates);
    };

    const toggleAllCheckboxes = () => {
        const allChecked = checkboxStates.every((checkbox) => checkbox.checked);
        const newCheckboxStates = checkboxStates.map((checkbox) => ({
            ...checkbox,
            checked: !allChecked,
        }));
        setCheckboxStates(newCheckboxStates);
    };

    return (
        <CommonContent>
            <div>
                <p>[서비스 이용을 위한 필수 약관 동의]</p>
                <ConsentWrapper onClick={toggleAllCheckboxes}>
                    <input
                        type="checkbox"
                        checked={checkboxStates.every((checkbox) => checkbox.checked)}
                        onChange={() => toggleAllCheckboxes()}
                    />
                    <label>모두 동의</label>
                </ConsentWrapper>
            </div>
            <ConsentContainer>
                {checkboxStates.map((checkbox, index) => (
                    <ConsentList key={index}>
                        <ConsentWrapper>
                            <input
                                type="checkbox"
                                checked={checkbox.checked}
                                onChange={() => handleCheckboxChange(index)}
                            />
                            <label>{checkbox.label}</label>
                        </ConsentWrapper>
                        {checkbox.detailLink && (
                            <a href={checkbox.detailLink} target="_blank" rel="noopener noreferrer">
                                상세
                            </a>
                        )}
                    </ConsentList>
                ))}
            </ConsentContainer>
        </CommonContent>
    );
};

const CommonContent = styled.div`
    margin-top: 2rem;
    div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    p {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const ConsentWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;

    input {
        width: 1rem;
        height: 1rem;
        border-radius: 0.2rem;
        background: url(${CheckIcon}) no-repeat center;
        background-size: 1rem 1rem;
        appearance: none;
        margin: 0;

        &:checked {
            background: url(${CheckedIcon}) no-repeat center;
            background-size: 1rem 1rem;
        }
    }

    label {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;
const ConsentContainer = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    height: 6.15rem;
    border-radius: 0.4rem;
    background-color: ${Styles.colors.systemBackground};
    margin: 0.4rem 0 1.9rem;
    padding: 0 0.8rem;
`;

const ConsentList = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize12};
        font-weight: ${Styles.font.weight.regular};
        line-height: 140%;
        text-underline-position: under;
    }
`;
export default ConsentComponent;
