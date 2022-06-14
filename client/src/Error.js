import React from "react";
import { BiBomb} from "react-icons/bi";
import styled from "styled-components";

export const Error = () => {
    return (
        <Wrapper>
            <BiBomb style={{ fontSize: "30px" }} />
            <h1>An unknown error has occured</h1>
            <p>Please try refreshing the page, or contact support if the problem persists.</p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
width:100%;
height: 100vh;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`