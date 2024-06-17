import styled from "styled-components";
import { ComponentPropsWithChildren } from "@/interface";

interface AppLayoutProps {
    header?: React.ReactNode;
    footer?: React.ReactNode;
}

const AppLayout = ({ children, props = {} }: ComponentPropsWithChildren<AppLayoutProps>) => {
    return (
        <>
            {props.header && props.header}
            <StyledAppLayout>{children}</StyledAppLayout>
            {props.footer && props.footer}
        </>
    );
};

export default AppLayout;

const StyledAppLayout = styled.main``;
