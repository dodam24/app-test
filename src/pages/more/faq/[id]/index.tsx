import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import Details from "../../_component/Details";
import styled from "styled-components";

const FaqDetails = () => {
    const faqTempData = [
        {
            id: "1",
            title: "소소상점 설치 및 사용이 가능한\n스마트폰이 따로 있나요?",
            content:
                "소소상점은 스마트폰의 OS가 특정 버전 이상이어야 사용 가능합니다.\n\n먼저 사용하시는 스마트폰이 Android인지 iOS인지 확인하신 다음, 아래 가이드를 참고하셔서 OS 버전 확인을 부탁드립니다.",
            message:
                "1. Android 스마트폰(제조사 : 삼성, LG 등) - OS 버전 6.0 이상이어야 소소상점사용 가능\n* 확인 방법 : 스마트폰 [설정]앱 실행 → [휴대전화 정보] → [소프트웨어 정보] → “안드로이드 버전” 확인\n\n 2. iOS 스마트폰(제조사 : 애플) - OS 버전 12.1 이상이어야 소소상점 사용 가능\n* 확인 방법 : 스마트폰 [설정]앱 실행 → [일반] → [정보] → “소프트웨어 버전” 확인",
        },
    ];

    return (
        <AppLayout props={{ header: <AppBackHeader /> }}>
            <StyledFaqDetailsWrap>
                {faqTempData.map(({ id, title, content, message }, index) => (
                    <Details
                        key={index}
                        id={id}
                        title={title}
                        content={content}
                        message={message}
                    />
                ))}
            </StyledFaqDetailsWrap>
        </AppLayout>
    );
};

const StyledFaqDetailsWrap = styled.section`
    width: 100%;
    padding: 1rem;
`;

export default FaqDetails;
