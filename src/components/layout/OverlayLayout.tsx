import { Styles } from "@/style/Styles";
import React from "react";
import styled from "styled-components";
import OverlayClose from "@/assets/images/icons/icon_close.png";

interface OverlayLayoutProps {
    children?: React.ReactNode;
    isActive: boolean;
    height: number;
    isHeader: boolean;
    overlayHeaderTitle?: string;
    hideOverlay: () => void;
}

const OverlayLayout = ({
    children,
    isActive,
    height,
    isHeader,
    overlayHeaderTitle,
    hideOverlay,
}: OverlayLayoutProps) => {
    return (
        <OverlayWrap $isActive={isActive}>
            <OverlayContainer $isActive={isActive} $height={height}>
                <div className={`overlayHeader ${isHeader ? "active" : ""}`}>
                    <h4>{overlayHeaderTitle}</h4>
                    <img src={OverlayClose} alt="오버레이 닫기" onClick={() => hideOverlay()} />
                </div>
                {children}
            </OverlayContainer>
        </OverlayWrap>
    );
};

export default OverlayLayout;

const OverlayWrap = styled.div<{ $isActive: boolean }>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    background-color: rgba(0, 0, 0, 0.2);
    ${({ $isActive }) =>
        $isActive &&
        `
        opacity: 1;
        visibility: visible;
    `}
`;

const OverlayContainer = styled.div<{
    $isActive: boolean;
    $height: number;
}>`
    position: inherit;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    background-color: #fff;
    z-index: 999999;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    border-radius: 0.9rem 0.9rem 0 0;
    padding: 1.5rem 1rem 1rem 1rem;
    overflow-y: auto;
    ${({ $isActive, $height }) =>
        $isActive &&
        `
        opacity: 1;
        visibility: visible;
        height: ${$height}%;
    `}

    div.overlayHeader {
        display: none;
        align-items: center;
        justify-content: space-between;
        h4 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.medium};
        }
        img {
            width: 1.2rem;
            height: 1.2rem;
        }
        margin-bottom: 2.5rem;

        &.active {
            display: flex;
        }
    }
`;
