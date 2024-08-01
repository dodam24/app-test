import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";

export interface AddressDataProps {
    address: string;
    zonecode: number | string;
    addressType: string;
    bname: string;
    buildingName: string;
}

interface DaumPostProps {
    onAddressSelected: (data: AddressDataProps) => void;
    handleComplete: () => void;
}

export const DaumPost = ({ onAddressSelected, handleComplete }: DaumPostProps) => {
    const complete = (data: AddressDataProps) => {
        let fullAddress = data.address;
        let extraAddress = "";

        // R: 도로명 주소
        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? `(${extraAddress})` : "";
        }

        onAddressSelected({
            address: fullAddress,
            zonecode: data.zonecode,
            addressType: data.addressType,
            bname: data.bname,
            buildingName: data.buildingName,
        });

        handleComplete();
    };

    return (
        <DaumPostBackground>
            <DaumPostContainer>
                <div>
                    <h1>주소</h1>
                </div>
                <DaumPostcode autoClose onComplete={complete} />
            </DaumPostContainer>
        </DaumPostBackground>
    );
};

const DaumPostBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 999;
`;
const DaumPostContainer = styled.div`
    position: absolute;
    width: 100%;
    div {
        display: flex;
        justify-content: space-between;
        h1 {
            color: #fff;
            width: 25rem;
            height: 2.5rem;
        }
    }
`;
