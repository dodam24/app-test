import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";
import ImgFileInput from "@/components/input/ImgFileInput";

import { StyledBaseInputWrapper } from "@/style/InputStyle";

const Realty = () => {
    const navigate = useNavigate();

    const handleItemClick = () => {
        console.log("Selected files:", fileInputValues);

        navigate(`/realty/examine`, { replace: true });
    };

    const [fileInputValues, setFileInputValues] = useState<{ [key: string]: File | "" }>({
        file1: "",
        file2: "",
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files.length > 0) {
            setFileInputValues((prev) => ({
                ...prev,
                [name]: files[0],
            }));
        }
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="서류등록" /> }}>
            <AppBaseWrapper title={`업로드 버튼을 눌러\n선명한 사진으로 등록해주세요.`}>
                <StyledRealtyWrapper>
                    <ImgFileInput
                        label="파일 업로드"
                        isDescription
                        isReset
                        handleInputChange={handleInputChange}
                        name="file1"
                    />
                    <ImgFileInput
                        label="파일 업로드"
                        isDescription
                        isReset
                        handleInputChange={handleInputChange}
                        name="file2"
                    />
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
