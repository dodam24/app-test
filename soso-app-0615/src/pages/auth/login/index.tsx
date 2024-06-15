import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";

const Login = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader /> }}>
            <h1>login</h1>
        </AppLayout>
    );
};

export default Login;
