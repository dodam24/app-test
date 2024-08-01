import { Styles } from "@/style/Styles";
import styled from "styled-components";
import CheckedIcon from "@/assets/images/icons/icon_delete_checked_c.png";
import React from "react";

interface SlideUpModalProps {
    title: string;
    children: React.ReactNode;
    isActive: boolean;
    onClose?: () => void;
}

const SlideUpModal = ({ title, children, isActive, onClose }: SlideUpModalProps) => {
    return (
        <StyledPopupModal className={isActive ? "active" : ""}>
            <div className="overlay" onClick={onClose}>
                <div className="modal_inner">
                    <div className="modal_header">
                        <h5>{title}</h5>
                    </div>
                    <div className="modal_content">
                        <ul>{children}</ul>
                    </div>
                </div>
            </div>
        </StyledPopupModal>
    );
};

export default SlideUpModal;

const StyledPopupModal = styled.div`
    opacity: 0;
    visibility: hidden;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    transition: opacity 0.3s ease-in-out;
    &.active {
        opacity: 1;
        visibility: visible;

        .modal_inner {
            bottom: 0;
        }
    }
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        z-index: 999;
    }
    .modal_inner {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: -100%;
        background: ${Styles.colors.systemWhite};
        padding: 0.5rem 1rem 1.5rem 1rem;
        border-radius: 0.9rem 0.9rem 0 0;
        transition: bottom 0.3s ease-in-out;
        z-index: 9999;

        .modal_header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            h5 {
                display: flex;
                align-items: center;
                width: 100%;
                color: ${Styles.colors.natural90};
                font-size: ${Styles.font.size.fontsize16};
                font-weight: ${Styles.font.weight.medium};
                padding: 0.825rem 0;
            }
            & img {
                width: 1.2rem;
                height: 1.2rem;
            }
        }
        .modal_content {
            display: flex;
            ul {
                width: 100%;
                li {
                    color: ${Styles.colors.natural60};
                    font-size: ${Styles.font.size.fontsize15};
                    font-weight: ${Styles.font.weight.regular};
                    padding: 0.8rem 0.7rem;

                    &.active {
                        background:
                            url(${CheckedIcon}) no-repeat 95% center / 1.2rem 1.2rem,
                            ${Styles.colors.primary10};
                        color: ${Styles.colors.systemSuccess};
                        border-radius: 0.6rem;
                    }
                }
            }
        }
    }
`;
