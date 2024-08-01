import { NavLink } from "react-router-dom";
import { Styles } from "@/style/Styles";
import styled from "styled-components";
import {
    HomeOff,
    HomeOn,
    CheckInOff,
    CheckInOn,
    CheckOutOff,
    CheckOutOn,
    WorkHistoryOff,
    WorkHistoryOn,
} from "@/components/footer/_images/icons";

const AppMenus = [
    {
        to: "/employee/employeeMain",
        name: "홈",
        enableIcon: HomeOn,
        disableIcon: HomeOff,
    },
    {
        to: "/employee/checkin",
        name: "출근등록",
        enableIcon: CheckInOn,
        disableIcon: CheckInOff,
    },
    {
        to: "/employee/checkout",
        name: "퇴근등록",
        enableIcon: CheckOutOn,
        disableIcon: CheckOutOff,
    },
    {
        to: "/employee/attendanceList",
        name: "근무내역",
        enableIcon: WorkHistoryOn,
        disableIcon: WorkHistoryOff,
    },
];

const EmployeeFooterBar = () => {
    return (
        <>
            <StyledEmployeeFooterBar>
                <StyledEmployeeFooterBarInner>
                    {AppMenus.map((menu, index) => (
                        <li key={index}>
                            <StyledEmployeeFooterBarLink
                                to={menu.to}
                                enable={menu.enableIcon}
                                disable={menu.disableIcon}
                            >
                                {menu.name}
                            </StyledEmployeeFooterBarLink>
                        </li>
                    ))}
                </StyledEmployeeFooterBarInner>
            </StyledEmployeeFooterBar>
            <Fill />
        </>
    );
};

export default EmployeeFooterBar;

const StyledEmployeeFooterBar = styled.nav`
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 9999;
`;
const StyledEmployeeFooterBarInner = styled.ul`
    display: flex;
    width: 100%;
    border-radius: 0.9rem 0.9rem 0 0;
    background: ${Styles.colors.systemWhite};
    box-shadow: 0 -0.2rem 0.6rem 0 rgba(0, 0, 0, 0.04);
    li {
        flex: 1;
    }
`;
const StyledEmployeeFooterBarLink = styled(NavLink)<{ enable: string; disable: string }>`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 3.2rem;
    padding: 0.5rem;
    color: ${Styles.colors.natural40};
    font-size: ${Styles.font.size.fontsize11};
    font-weight: ${Styles.font.weight.regular};
    background: url(${(props) => props.disable}) center 20% / 1.2rem 1.2rem no-repeat;

    &.active {
        background-image: url(${(props) => props.enable});
        color: ${Styles.colors.primary100};
    }
`;
const Fill = styled.div`
    padding-bottom: 3.2rem;
`;
