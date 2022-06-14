import styled from "styled-components";
import ActionBar from "./ActionBar";
import { Link } from "react-router-dom";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export const BigTweet = ({tweet}) => {
let history = useHistory();
const handleClick = ()=>{
    history.push(`/profile/${tweet.author.handle}`);
    }
    return (
        <Block>
        <div style={{
            borderBottom: "1px solid lightgrey",
            display: "flex",
            alignItems: "center",
            padding: "10px 5px"
        }}>
            <IoIosArrowBack style={{
            fontSize: "32px"
            }} onClick={(e)=>{
                e.preventDefault();
                window.location.replace("/")}}/>
            <span style={{fontSize: "24px", fontWeight: "bold", marginLeft: "10px"}}>Meow</span>
        </div>
        <TweetLink to={`/tweet/${tweet.id}`}>
            <Wrapper>
                <Title>
                    <Avatar src={tweet.author.avatarSrc} onClick={(e)=>{
                        e.preventDefault();
                        handleClick()} }
                        />
                    <div style={{marginLeft: "10px"}} onClick={(e)=>{
                        e.preventDefault();
                        handleClick()} }>
                        <Name>{tweet.author.displayName}</Name>
                        <Handle>@{tweet.author.handle}</Handle>
                    </div>
                </Title>
                <Feed>{tweet.status}</Feed>
                {tweet.media[0] && <TweetImg src={tweet.media[0].url} />}
                <Time>{moment(tweet.timestamp).format('h:mm a - MMMM Do YYYY')}</Time>
            </Wrapper>
        </TweetLink>
        <ActionBar />
        </Block>
    );
    }
const Time = styled.div`
color:grey;
margin-bottom:10px;
`
const Feed = styled.p`
font-size:1.1rem;
margin-bottom:10px;
`
const Name = styled.p`
font-size: 1.2rem;
font-weight: bold;
`
const Handle = styled.p`
color: grey;
`

const Avatar = styled.img`
border-radius: 50%;
width: 50px;`

const Title = styled.div`
display: flex;
margin-top: 20px;
margin-bottom: 10px;
`
const TweetImg = styled.img`
border-radius: 20px;
width: 800px;
margin-bottom: 10px;
`

const TweetLink = styled(Link)`
color: black;
text-decoration: none;
margin-left:10px;
`

const Wrapper = styled.div`
display:flex;
flex-direction: column;`

const Block = styled.div`
display:flex;
flex-direction: column;
width: 900px;
border-right: 1px solid lightgrey;
border-left: 1px solid lightgrey;
border-bottom: 1px solid lightgrey
`