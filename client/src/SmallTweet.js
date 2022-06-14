import styled from "styled-components";
import ActionBar from "./ActionBar";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { FiRepeat } from "react-icons/fi";



export const SmallTweet = ({tweet}) => {
    console.log(tweet)
    let history = useHistory();
    const handleClick = ()=>{
    console.log(1234);
    history.push(`/profile/${tweet.author.handle}`);
    }

    return (
        <>
        <TweetLink to={`/tweet/${tweet.id}`}>
            <Wrapper>
                {tweet.retweetFrom && <div style={{display: "flex", 
                alignItems: "center",
                marginTop: "20px",
                marginLeft: "60px",
                color: "grey",
                marginBottom: "-10px"}}><FiRepeat style={{marginRight: "10px"}}/>{tweet.retweetFrom.displayName} Remeowed</div>}
                <Title>
                    <Avatar src={tweet.author.avatarSrc} onClick={(e)=>{
                        e.preventDefault();
                        handleClick()} }>
                        </Avatar>
                        <Content>
                            <Bio onClick={(e)=>{
                                e.preventDefault();
                                handleClick()} }>
                                <Name>{tweet.author.displayName}</Name>
                                <Handle>@{tweet.author.handle}<BsDot style={{alignSelf: 'center'}}/>{moment(tweet.timestamp).format('MMMM Do')}</Handle>
                            </Bio>
                            <Feed>{tweet.status}</Feed>
                            {tweet.media[0] && <TweetImg src={tweet.media[0].url} />}
                        </Content>
                </Title>
            </Wrapper>
        </TweetLink>
        <ActionBar />
        </>
    );
}
const Bio = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
`
const Content = styled.div`
margin-left:10px;
`
const Feed = styled.p`
margin-bottom: 10px;
`

const Name = styled.p`
font-size: 1.1rem;
font-weight: bold;
`

const Handle = styled.p`
color: grey;
align-self: center;
margin-left: 5px;
display:flex;`

const Avatar = styled.img`
border-radius: 50%;
width: 50px;
height: 50px;`

const Title = styled.div`
display: flex;
margin-left: 10px;
margin-top: 20px;
`
const TweetImg = styled.img`
border-radius: 20px;
width: 800px;
`

const TweetLink = styled(Link)`
color: black;
text-decoration: none;
border-top: 1px solid lightgrey;
`

const Wrapper = styled.div`
border-top: 1px solid lightgrey;`