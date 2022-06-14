import { FiLoader } from "react-icons/fi";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Loading = () => {
    return (
        <SpinnerDiv>
            <FiLoader />
        </SpinnerDiv>
    )
}

const spin = keyframes`
100% { transform: rotate(360deg); }
`;

const SpinnerDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: grey;
font-size: 50px;
animation: ${spin} 5s infinite;
`;

export default Loading;