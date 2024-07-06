import { Styles } from "@/style/Styles";
import { createGlobalStyle } from "styled-components";

export const StyledTimePicker = createGlobalStyle`
    .datepicker {
        position:relative;
        font-family: "pretendard";
        font-size: ${Styles.font.size.fontsize15};
        font-weight:${Styles.font.weight.medium}
    }
    .datepicker.default {
        background-color: ${Styles.colors.systemWhite};
    }
    .datepicker.ios {
        background-color: ${Styles.colors.systemWhite};
    }
    .datepicker .datepicker-content {
        padding: 2.2rem 1rem;;
    }
    .datepicker-content {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: inherit;
        padding: 0.5rem;
    }
    .datepicker-content > div {
        flex: 1;
        position: relative;
    }
    .datepicker-content > div:not(:last-child)::after {
        content: ":";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1rem;
        color:rgb(59, 59, 59);
        background-color: inherit;
    }
    .datepicker-navbar {
        display: none;
    }
    .datepicker.ios .datepicker-wheel {
  		border: 0;
  	}
    .datepicker-wheel {
        background:${Styles.colors.primary20};
        border-radius: 0.4rem;
    }
    .datepicker .datepicker-viewport {
        height: 5.8rem;
    }
    .datepicker.ios .datepicker-viewport::after {
  			background: linear-gradient(#ffffff,rgba(245, 245, 245, 0)52%,rgba(245, 245, 245, 0)48%,#ffffff);
  		}
`;
