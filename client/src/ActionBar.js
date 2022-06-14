import styled from "styled-components";
import { useState } from "react";
import { FiShare, FiMessageCircle, FiRepeat } from "react-icons/fi";
import LikeButton from "../src/LikeButton/LikeButton"

const ActionBar = () => {
const [like, setLike] = useState(false);
const [numOfLikes, setNumOfLikes] = useState(0)
const handleToggleLike = () =>{
    setLike(!like);
    !like ? setNumOfLikes(numOfLikes+1) : setNumOfLikes(numOfLikes-1)
}
  return (
    <Wrapper>
        <FiMessageCircle />
        <FiRepeat/>
        <Container>
        <LikeDiv>
        {/* <FiHeart 
          style={{ color: like ? "red" : "black" }}/> */}
        <div onClick={handleToggleLike}><LikeButton like={like}/></div>
        {numOfLikes > 0 ? <p>{numOfLikes}</p> : <p></p>}
        </LikeDiv>
        </Container>
        <FiShare />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;

`
const LikeDiv = styled.div`
display:flex;
align-items:center`
export default ActionBar;
