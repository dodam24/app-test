import { useEffect, useState } from "react";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import { CheckedOff, CheckedOn } from "@/pages/auth/register/_images/register_img";
import { termsList, termsDetail } from "@/apis/checkBox/terms";
import { Link } from "react-router-dom";

interface ConsentComponentProps {
    onChange: (requiredTermsAccepted: boolean, selectedTermsAcceptedList: string[]) => void;
    category?: string;
}

interface Term {
    id: string;
    required: boolean;
    title: string;
    hasDetail?: boolean;
}

const ConsentComponent = ({ onChange, category }: ConsentComponentProps) => {
    const [isTermsData, setIsTermsData] = useState<Term[]>([]);
    const [isAllChecked, setIsAllChecked] = useState(false);

    const fetchTermsList = async () => {
        try {
            const response = await termsList(category ?? "signup"); // 원래는 없을 때 all
            const initialTermsData = await Promise.all(
                response.terms_list.map(async (term: Term) => {
                    const detail = await termsDetail(term.id);
                    return {
                        ...term,
                        hasDetail: !!detail,
                    };
                }),
            );
            setIsTermsData(initialTermsData);
        } catch (error) {
            console.error("약관 데이터 불러오기 오류:", error);
        }
    };

    useEffect(() => {
        fetchTermsList();
    }, []);

    const handleCheckboxChange = (id: string) => {
        const newTermsData = isTermsData.map((term) =>
            term.id === id ? { ...term, required: !term.required } : term,
        );
        setIsTermsData(newTermsData);

        const requiredTermsAccepted = newTermsData.every((term) => term.required);
        const selectedTermsAcceptedList = newTermsData
            .filter((term) => term.required)
            .map((term) => term.id);
        onChange(requiredTermsAccepted, selectedTermsAcceptedList);
    };

    const toggleAllCheckboxes = () => {
        const newTermsData = isTermsData.map((term) => ({
            ...term,
            required: !isAllChecked,
        }));
        setIsTermsData(newTermsData);
        setIsAllChecked(!isAllChecked);

        const requiredTermsAccepted = newTermsData.every((term) => term.required);
        const selectedTermsAcceptedList = newTermsData
            .filter((term) => term.required)
            .map((term) => term.id);
        onChange(requiredTermsAccepted, selectedTermsAcceptedList);
    };

    useEffect(() => {
        const allTermsChecked = isTermsData.every((term) => term.required);
        setIsAllChecked(allTermsChecked);
    }, [isTermsData]);

    return (
        <CommonContent>
            <div>
                <p>[서비스 이용을 위한 필수 약관 동의]</p>
                <ConsentWrapper>
                    <input
                        id="consentAll"
                        type="checkbox"
                        checked={isAllChecked}
                        onChange={toggleAllCheckboxes}
                    />
                    <label htmlFor="consentAll">모두 동의</label>
                </ConsentWrapper>
            </div>
            <ConsentContainer>
                {isTermsData.map((term) => (
                    <ConsentList key={term.id}>
                        <ConsentWrapper>
                            <input
                                id={term.id}
                                type="checkbox"
                                checked={term.required}
                                onChange={() => handleCheckboxChange(term.id)}
                            />
                            <label htmlFor={term.id}>{term.title}</label>
                        </ConsentWrapper>
                        {term.hasDetail && (
                            <DetailLink to={`/checkbox/info/${term.id}`}>상세</DetailLink>
                        )}
                    </ConsentList>
                ))}
            </ConsentContainer>
        </CommonContent>
    );
};

const CommonContent = styled.div`
    margin-top: 0.8rem;
    div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    p {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const ConsentWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;

    input {
        width: 1rem;
        height: 1rem;
        border-radius: 0.2rem;
        background: url(${CheckedOff}) no-repeat center;
        background-size: 1rem 1rem;
        appearance: none;
        margin: 0;
        min-width: 1rem;

        &:checked {
            background: url(${CheckedOn}) no-repeat center;
            background-size: 1rem 1rem;
        }
    }

    label {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const ConsentContainer = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    border-radius: 0.4rem;
    background-color: ${Styles.colors.systemBackground};
    margin: 0.4rem 0 0;
    padding: 0.85rem 0.8rem;
    word-break: break-all;
`;

const ConsentList = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;

    a {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize12};
        font-weight: ${Styles.font.weight.regular};
        line-height: 140%;
        text-decoration: underline;
        text-underline-position: under;
        min-width: fit-content;
    }
`;

const DetailLink = styled(Link)`
    color: ${Styles.colors.natural60};
    font-size: ${Styles.font.size.fontsize12};
    font-weight: ${Styles.font.weight.regular};
    text-decoration: underline;
    text-underline-position: under;
`;

export default ConsentComponent;
