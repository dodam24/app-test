import Button from "@/components/button/Button";
import ImgFileInput from "@/components/input/ImgFileInput";
import OptionInput from "@/components/input/OptionInput";
import { useState } from "react";
import { AddressDataProps, DaumPost } from "@/pages/basic/DaumPost";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

const BasicCompanyInfo = () => {
    const [form, setForm] = useState<{ address: string; zonecode: string | number }>({
        address: "",
        zonecode: "",
    });
    const [popup, setPopup] = useState(false);

    const handleComplete = () => {
        setPopup(false);
    };

    const handleAddressSelected = (data: AddressDataProps) => {
        setForm({
            address: data.address,
            zonecode: data.zonecode,
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, zonecode: e.target.value });
    };

    return (
        <StyledBasicCompanyInfo>
            <div className="section_title">
                <h4>사업자정보</h4>
                <p>※ 사업자등록증 정보와 동일하게 입력해주세요.</p>
            </div>
            <div className="input_container">
                <OptionInput label="상호명" placeholder="상호명을 입력해 주세요." />
                <OptionInput label="대표자명" placeholder="예) 김소소" />
                <OptionInput label="사업자번호" placeholder="사업자번호를 입력해 주세요." />
                <div className="address">
                    <OptionInput
                        label="사업장주소"
                        placeholder="우편주소"
                        value={form.zonecode}
                        onChange={handleChange}
                    >
                        <Button size="sub" onClick={() => setPopup(true)} value={form.address}>
                            주소검색
                        </Button>
                    </OptionInput>
                    <OptionInput placeholder="주소" value={form.address} onChange={handleChange} />
                    <OptionInput placeholder="상세주소" />
                </div>
                {popup && (
                    <DaumPost
                        onAddressSelected={handleAddressSelected}
                        handleComplete={handleComplete}
                    />
                )}
                <ImgFileInput
                    label="사업자등록증 업로드"
                    isReset
                    isDescription
                    name="bussiness_registration_number"
                    handleInputChange={() => {}}
                />
            </div>
        </StyledBasicCompanyInfo>
    );
};

export default BasicCompanyInfo;

const StyledBasicCompanyInfo = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 1rem 1.5rem 1rem;
    border-bottom: 0.6rem solid ${Styles.colors.systemBackground};

    .section_title {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        margin-bottom: 1.5rem;
        h4 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.medium};
            line-height: 1.4;
        }
        p {
            color: ${Styles.colors.natural60};
            font-size: ${Styles.font.size.fontsize13};
            font-weight: ${Styles.font.weight.regular};
        }
    }
    .input_container {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        .address {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
        }
    }
`;
