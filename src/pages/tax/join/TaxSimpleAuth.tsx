import FixedButton from "@/components/button/FixedButton";
import AppBackHeader from "@/components/header/AppBackHeader";
import OptionInput from "@/components/input/OptionInput";
import SelectInput from "@/components/input/SelectInput";
import AppBaseWrapper, { StyledAppBaseWrapper } from "@/components/layout/AppBaseWrapper";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import { useState } from "react";
import styled from "styled-components";

const authinfoData = [
    {
        name: "오태식",
        phone: "010-1234-5678",
        user_type: "개인사업자",
        company_number: "123-45-67890",
    },
];
const TaxSimpleAuth = () => {
    const info = authinfoData[0];
    const [value, setValue] = useState({
        bitrh: "",
        option: "",
        brand: "",
    });

    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelect = (selectedOption: string) => {
        console.log(`Selected option: ${selectedOption}`);
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="간편인증 수임동의" /> }}>
            <StyledSimpleAuthWrapper title={`간편인증`}>
                <h2>간편인증</h2>
                <div className="input_container">
                    <SelectInput
                        label="간편인증"
                        options={[
                            "카카오톡",
                            "삼성패스",
                            "페이코",
                            "통신사",
                            "KB모바일 인증서",
                            "네이버 인증서",
                            "신한 인증서",
                            "토스 인증서",
                        ]}
                        placeholder="선택하세요"
                        onSelect={handleSelect}
                    />
                    <SelectInput
                        label="통신사구분"
                        options={["SKT", "KT", "LG U+", "알뜰폰"]}
                        placeholder="선택하세요"
                        onSelect={handleSelect}
                    />
                    <OptionInput
                        type="text"
                        name="bitrh"
                        id="bitrh"
                        value={value.bitrh}
                        onChange={handle}
                        placeholder="19990101 (8자리)"
                        label="생년월일"
                        options={{
                            buttonOption: {
                                deleteOption: true,
                            },
                        }}
                    />
                </div>
            </StyledSimpleAuthWrapper>
            <AppBaseWrapper title={`등록정보 확인`}>
                <StyledSimpleAuthInfo>
                    <ul>
                        <li>
                            <h4>상호명</h4>
                            <span>{info.name}</span>
                        </li>
                        <li>
                            <h4>상호명</h4>
                            <span>{info.phone}</span>
                        </li>
                        <li>
                            <h4>사업자번호</h4>
                            <span>{info.user_type}</span>
                        </li>
                        <li>
                            <h4>연락처</h4>
                            <span>{info.company_number}</span>
                        </li>
                    </ul>
                </StyledSimpleAuthInfo>
            </AppBaseWrapper>
            <FixedButton>수임 동의하기</FixedButton>
        </AppLayout>
    );
};

export default TaxSimpleAuth;

const StyledSimpleAuthWrapper = styled(StyledAppBaseWrapper)`
    border-bottom: 0.6rem solid ${Styles.colors.systemBackground};
    padding-bottom: 1.5rem;
    h2 {
        margin-bottom: 1.5rem;
    }
    .input_container {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }
`;

const StyledSimpleAuthInfo = styled.div`
    width: 100%;
    padding: 1rem 0;

    ul {
        li {
            display: flex;
            padding: 1.1rem 0;
            gap: 0.8rem;
            h4 {
                color: ${Styles.colors.natural80};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
                width: 5rem;
            }
            span {
                color: ${Styles.colors.natural60};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
                text-align: right;
                max-width: 70%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                flex-shrink: 1;
            }
            .status_span {
                color: ${Styles.colors.systemError};
            }
        }
    }
`;
