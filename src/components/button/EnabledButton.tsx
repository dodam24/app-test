import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { Styles } from "@/style/Styles";

interface EnabledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    handleChange?: (e: React.ChangeEvent<HTMLButtonElement>) => void;
    title: string;
}

const EnabledButton = ({ title, ...rest }: EnabledButtonProps) => {
    return <StyledEnabledButton {...rest}>{title}</StyledEnabledButton>;
};

export const StyledEnabledButton = styled.button`
    position: fixed;
    bottom: 0.6rem;
    left: 50%;
    transform: translateX(-50%);
    height: 2.8rem;
    width: calc(100% - 1rem);
    border-radius: 0.4rem;
    background: ${Styles.colors.primary100};
    opacity: 1;
    padding: 0;
    font-size: ${Styles.font.size.fontsize15};
    font-weight: 600;
    color: ${Styles.colors.systemWhite};
    &:disabled {
        background: ${Styles.colors.primary100};
        opacity: 0.5;
        cursor: default;
    }
`;

export default EnabledButton;
