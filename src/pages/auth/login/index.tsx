import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import LoginInput from "@/pages/auth/login/LoginInput";
import SnsLogin from "@/pages/auth/login/SnsLogin";
import LoginOption from "@/pages/auth/login/LoginOption";
import LoginRegisterLink from "@/pages/auth/login/LoginRegisterLink";

import AppLayout from "@/components/layout/AppLayout";

const Login = () => {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("accessToken");

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home", { replace: true });
        }
    }, [isAuthenticated]);

    return (
        <AppLayout>
            <ReservationWrapper>
                <Form>
                    <LoginInput />
                    <LoginOption />
                    <SnsLogin />
                    <LoginRegisterLink />
                </Form>
            </ReservationWrapper>
        </AppLayout>
    );
};

const ReservationWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    .custom_btn {
        position: static;
        left: 0;
        transform: translateX(0);
        width: 100%;
    }
`;

const Form = styled.div`
    width: 100%;
    padding: 0 1rem;
`;

export default Login;
