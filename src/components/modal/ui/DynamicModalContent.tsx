interface DynamicModalContentProps {
    close: () => void;
    title?: string;
    content?: string;
    buttonText?: string;
    optionCancel?: boolean;
    newContent?: React.ReactNode;
}

const DynamicModalContent = ({
    close,
    title,
    content,
    newContent,
    buttonText = "확인",
    optionCancel,
}: DynamicModalContentProps) => {
    return (
        <div>
            {newContent ? (
                newContent
            ) : (
                <div>
                    <h6>{title}</h6>
                    <span>{content}</span>
                </div>
            )}
            <div>
                <button onClick={close}>{buttonText}</button>
                {optionCancel && <button>취소</button>}
            </div>
        </div>
    );
};

export default DynamicModalContent;
