import OptionInput from "@/components/input/OptionInput";
import { RequestList } from "@/pages/payment/PaymentContainer";
import { Styles } from "@/style/Styles";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface ConditionOfAmountProps {
    request: RequestList;
    setRequest: Dispatch<SetStateAction<RequestList>>;
}

const ConditionOfAmount = ({ request, setRequest }: ConditionOfAmountProps) => {
    const startAmountHandleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setRequest({
            ...request,
            start_amount: Number(event.currentTarget.value.replace(/[^0-9]/g, "")),
        });
        return (event.currentTarget.value = Number(
            event.currentTarget.value.replace(/[^0-9]/g, ""),
        ).toLocaleString("ko-KR"));
    };
    const endAmountHandleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setRequest({
            ...request,
            end_amount: Number(event.currentTarget.value.replace(/[^0-9]/g, "")),
        });
        return (event.currentTarget.value = Number(
            event.currentTarget.value.replace(/[^0-9]/g, ""),
        ).toLocaleString("ko-KR"));
    };

    return (
        <StyledConditionContainer>
            <h5>금액범위</h5>
            <div>
                <OptionInput
                    type="tel"
                    placeholder="최소"
                    onChange={startAmountHandleInput}
                    value={request?.start_amount?.toLocaleString()}
                />
                <span>-</span>
                <OptionInput
                    type="tel"
                    placeholder="최대"
                    onChange={endAmountHandleInput}
                    value={request?.end_amount?.toLocaleString()}
                />
            </div>
        </StyledConditionContainer>
    );
};

export default ConditionOfAmount;

const StyledConditionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    h5 {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize16};
        font-weight: ${Styles.font.weight.medium};
    }

    div {
        display: flex;
        align-items: center;
        gap: 0.01rem;
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.medium};

        & > div {
            width: 100%;
        }
    }
`;
