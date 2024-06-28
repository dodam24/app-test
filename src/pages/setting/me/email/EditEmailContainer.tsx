import OptionInput from "@/components/input/OptionInput";
import { Styles } from "@/style/Styles";
import { useState } from "react";
import styled from "styled-components";

const EditEmailContainer = () => {
    const [email, setEmail] = useState("");
    const [options, setOptions] = useState({
        buttonOption: { checkedOption: false },
        error: { errorStatus: false, errorMessage: "" },
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        // 임시 (이메일 형식에 맞으면 checkedOption, 아니면 errorStatus. 활성화되면 deleteOption)
        if (newEmail.includes("@") && newEmail.includes(".")) {
            setOptions({
                buttonOption: { checkedOption: true },
                error: { errorStatus: false, errorMessage: "" },
            });
        } else {
            setOptions({
                buttonOption: {
                    checkedOption: false,
                },
                error: { errorStatus: true, errorMessage: "올바르지 않은 형식입니다." },
            });
        }
    };

    return (
        <StyledEditEmailContainer>
            <h2>
                변경하실 이메일 주소를 <br />
                입력해주세요.
            </h2>
            <OptionInput
                type="email"
                id="email"
                name="email"
                label="이메일"
                value={email}
                onChange={handleInputChange}
                options={options}
            />
        </StyledEditEmailContainer>
    );
};

export default EditEmailContainer;

const StyledEditEmailContainer = styled.section`
    padding: 1rem 1rem;
    & > h2 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 1.4;
        margin-bottom: 1.5rem;
    }
`;
