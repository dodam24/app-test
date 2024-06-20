import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

const FaqDetails = () => {
    // NoticeDetails 컴포넌트와 동일 -> Details 컴포넌트로 뺄 것! (date 옵션 유무)
    // message_details의 * : font color(primary100) 적용 여부 확인
    return (
        <AppLayout props={{ header: <AppBackHeader /> }}>
            <StyledFaqDetailsWrap>
                {/* Notice Details 컴포넌트와 동일 (컴포넌트로 빼기) */}
                <StyledFaqDetailsTitle>
                    <h3>소소상점 설치 및 사용이 가능한 스마트폰이 따로 있나요?</h3>
                    {/* <span>2023. 03. 01</span> */}
                </StyledFaqDetailsTitle>
                <StyledFaqDetailsContent>
                    <p className="content_message">
                        소소상점은 스마트폰의 OS가 특정 버전 이상이어야 사용 가능합니다.
                        <br />
                        <br /> 먼저 사용하시는 스마트폰이 Android인지 iOS인지 확인하신 다음, 아래
                        가이드를 참고하셔서 OS 버전 확인을 부탁드립니다.
                    </p>
                    <p className="message_details">
                        1. Android 스마트폰(제조사 : 삼성, LG 등) - OS 버전 6.0 이상이어야 소소상점
                        사용 가능
                        <br /> * 확인 방법 : 스마트폰 [설정]앱 실행 → [휴대전화 정보] → [소프트웨어
                        정보] → “안드로이드 버전” 확인
                        <br />
                        <br />
                        2. iOS 스마트폰(제조사 : 애플) - OS 버전 12.1 이상이어야 소소상점 사용 가능
                        <br />* 확인 방법 : 스마트폰 [설정]앱 실행 → [일반] → [정보] → “소프트웨어
                        버전” 확인
                    </p>
                </StyledFaqDetailsContent>
            </StyledFaqDetailsWrap>
        </AppLayout>
    );
};

const StyledFaqDetailsWrap = styled.main`
    width: 100%;
    padding: 1rem;
`;
const StyledFaqDetailsTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 0.05rem solid ${Styles.colors.natural10};

    /* h3: 단어 별로 끊어서 표시 (속성 찾아서 적용) */
    h3 {
        color: #000;
        font-size: ${Styles.font.size.fontsize20};
        font-weight: ${Styles.font.weight.medium};
        line-height: 1.4;
    }
    span {
        color: ${Styles.colors.natural50};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
    }
`;
const StyledFaqDetailsContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 2rem;
    font-size: ${Styles.font.size.fontsize15};
    font-weight: ${Styles.font.weight.regular};
    line-height: 1.4;
    .content_message {
        color: ${Styles.colors.natural80};
    }
    .message_details {
        color: ${Styles.colors.natural90};
    }
`;

export default FaqDetails;
