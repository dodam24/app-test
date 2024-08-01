import { useState } from "react";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import { ArrowDownIcon } from "@/pages/shop/_images/shop";

interface StyledButtonMenuProps {
    options: { id: number; title: string }[];
    title?: string;
    width?: string;
}

const ButtonMenu = ({ options, title, width }: StyledButtonMenuProps) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(title || options[0].title);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleMenuSelect = (menu: { id: number; title: string }) => {
        setSelectedMenu(menu.title);
        setShowMenu(false);
    };

    return (
        <StyledButtonItem width={width}>
            <StyledButtonMenu>
                <input type="text" value={selectedMenu} readOnly onClick={toggleMenu} />
                {showMenu && (
                    <ul>
                        {options.map((option) => (
                            <li key={option.id} onClick={() => handleMenuSelect(option)}>
                                {option.title}
                            </li>
                        ))}
                    </ul>
                )}
            </StyledButtonMenu>
            <span onClick={toggleMenu}>
                <img src={ArrowDownIcon} alt="Arrow Down Icon" />
            </span>
        </StyledButtonItem>
    );
};

export default ButtonMenu;

const StyledButtonItem = styled.div<{ width?: string }>`
    width: ${(props) => props.width || "49.6%"};
    position: relative;
    display: flex;
    align-items: center;
    margin: 0.6rem 0;
    margin-left: auto;
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
    :focus {
        outline: none;
    }

    ul {
        position: absolute;
        top: 2.7rem;
        left: 0;
        width: 100%;
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        background-color: ${Styles.colors.systemBackground};
        border-radius: 0.4rem;
        overflow: hidden;
        z-index: 1;

        li {
            cursor: pointer;
            padding: 0.55rem 0.8rem;
            &:hover {
                background-color: ${Styles.colors.natural00};
            }
        }
    }

    input {
        width: 100%;
        background: ${Styles.colors.systemBackground};
        border: none;
        border-radius: 0.4rem;
        height: 2.3rem;
        padding: 0.55rem 0.8rem;
        caret-color: ${Styles.colors.primary100};
        text-align: left;
        cursor: pointer;
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
    }
`;
