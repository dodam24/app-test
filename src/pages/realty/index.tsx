import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";

import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";
import { useNavigate } from "react-router-dom";
import ImgFileInput from "@/components/input/ImgFileInput";
import { StyledBaseInputWrapper } from "@/components/styles/InputStyle";

const Realty = () => {
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`/realty/examine`);
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="서류등록" /> }}>
            <AppBaseWrapper title={`업로드 버튼을 눌러\n선명한 사진으로 등록해주세요.`}>
                <StyledRealtyWrapper>
                    <ImgFileInput label="신분증" />
                    <ImgFileInput label="임대차 계약서" />
                    <FixedButton onClick={handleItemClick}>서류등록</FixedButton>
                </StyledRealtyWrapper>
            </AppBaseWrapper>
        </AppLayout>
    );
};

export default Realty;
const StyledRealtyWrapper = styled(StyledBaseInputWrapper)`
    margin-top: 1rem;
`;
