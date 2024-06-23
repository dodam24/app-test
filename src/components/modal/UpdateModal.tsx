import { Styles } from "@/style/Styles";
import styled from "styled-components";
import Alarm from "@/assets/images/icons/icon_modal_alarm_c.png";

// update modal: width: 16.75rem; padding: 2.5rem 1.2rem 2rem 1.2rem;
// new_modal_message: <p>태그 \n 사이 gap: 0.2rem;
// 모달 불러올 때 handler에 '업데이트' 처리
const UpdateModal = () => {
    return (
        <StyledNewContentModal>
            <div className="new_modal_content">
                <img src={Alarm} alt="알림" />
                <h3>{`소소상점 새로운 버전 출시`}</h3>
                <p>{`업데이트 진행 후 더욱 좋아진\n소소상점을 만나보세요.`}</p>
                <div className="new_modal_message">
                    <h6>{`업데이트 진행이 잘 안되시나요?`}</h6>
                    <p>
                        {`① 소소상점을 삭제 후 재설치해보세요.\n② 설정 - 애플리케이션 - Google play 스토어 - 저장공간 - 데이터/캐시 삭제 - 강제종료 후 재시작하여 소소상점을 재설치해보세요.`}
                    </p>
                </div>
            </div>
        </StyledNewContentModal>
    );
};

const StyledNewContentModal = styled.div`
    display: flex;
    width: 100%;

    .new_modal_content {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 4.5rem;
            height: 4.5rem;
            margin-bottom: 0.75rem;
        }
        h3 {
            color: ${Styles.colors.natural80};
            text-align: center;
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.medium};
            margin-bottom: 0.8rem;
        }
        & > p {
            white-space: break-spaces;
            margin-bottom: 1.2rem;
        }
    }

    .new_modal_message {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        background: ${Styles.colors.systemWhite};
        border-radius: 0.7rem;
        padding: 1.2rem;
        h6 {
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.medium};
        }
        p {
            color: ${Styles.colors.systemError};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
            line-height: 1.4;
            white-space: break-spaces;
            text-align: start;
        }
    }
`;

export default UpdateModal;
