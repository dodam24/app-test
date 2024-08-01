import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import AppLayout from "@/components/layout/AppLayout";
import { termsDetail } from "@/apis/checkBox/terms";
import { Styles } from "@/style/Styles";

interface TermDetail {
    id: string;
    title: string;
    content: string;
    expire_date?: string;
    username?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
}

const ConsentCheckBoxInfo = () => {
    const { id } = useParams<{ id: string }>();
    const [isTermDetail, setIsTermDetail] = useState<TermDetail | "">("");
    const [isError, setIsError] = useState<string | "">("");

    useEffect(() => {
        const fetchTermDetail = async () => {
            try {
                const detail = await termsDetail(id!);
                setIsTermDetail(detail);
            } catch (err) {
                setIsError("약관 상세 내용을 불러오는 데 실패했습니다.");
            }
        };

        fetchTermDetail();
    }, [id]);

    if (isError) {
        return <div>{isError}</div>;
    }

    return (
        <AppLayout props={{ header: <AppBackHeader title="이용약관 상세" /> }}>
            <AppBaseWrapper>
                {isTermDetail && (
                    <DetailContainer>
                        <h2>{isTermDetail.title}</h2>
                        <p>{isTermDetail.content}</p>
                    </DetailContainer>
                )}
            </AppBaseWrapper>
        </AppLayout>
    );
};

const DetailContainer = styled.div`
    h2 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 1.4;
    }
    p {
        color: ${Styles.colors.natural70};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.5;
        margin-top: 0.6rem;
    }
`;

export default ConsentCheckBoxInfo;
