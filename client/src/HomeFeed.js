import { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "./constants";
import { SmallTweet } from "./SmallTweet";
import Loading from "./Spinners";
import { useHistory } from "react-router-dom";

export const HomeFeed = () => {
    let history = useHistory();
    const [feed, setFeed] = useState(null);
    //record input
    const [currentTweet, setCurrentTweet] = useState("");
    useEffect(()=>{
        fetch("/api/me/home-feed")
        .then((res)=>{
            if (res?.ok) {
                return res.json();
            } else {
                history.push("/error");
            }
            })
        .then((data)=>{
            setFeed(data)
        })
    },[])
    const handleChange = (e) =>{
        setCurrentTweet(e.target.value)
    }
    const handleSubmit = () => {
        fetch("/api/tweet", {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: currentTweet }),
            })
        .then(res => {
            if (res?.ok) {
                return res.json();
            } else {
                history.push("/error");
            }
            })
        .then(data => {
        console.log('Success:', data);
        fetch("/api/me/home-feed")
        .then((res)=>res.json())
        .then((data)=>{
            setFeed(data)
        })
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    return (
        <Home>
        <h1>Home</h1>
        <textarea rows='10' cols='50' type='text' placeholder="What's happening?" onChange={handleChange}></textarea>
        <ButtonDiv>
            {currentTweet.length <= 280 ? <P> {280-currentTweet.length}</P> : <RedP> {280-currentTweet.length}</RedP>}
            <Button type="submit" onClick={handleSubmit} disabled={currentTweet.length <= 280 ? false : true}>Meow</Button>
        </ButtonDiv>
        {feed ? feed.tweetIds.map((id) => {
        const tweet = feed.tweetsById[id]
        return (<SmallTweet key={id} tweet={tweet}/>)
        }) : <Loading />}
        </Home>
    )
};

const Home = styled.form`
display: flex;
flex-direction: column;
width: 900px;
margin-top: 20px;
`

const ButtonDiv = styled.div`
display: flex;
justify-content: end;
margin-top: 20px;
margin-bottom: 20px;
`

const Button = styled.button`
background-color: ${COLORS.primary};
border-radius: 50px;
color: white;
padding:10px 20px;
font-size: 16px;
border: none;
&:disabled{
    background-color: rgb(77 0 255 / 20%);
    border: none;
}`

const P = styled.p`
padding:10px 20px;
align-self:center;
color: grey`

const RedP = styled.p`
padding:10px 20px;
align-self:center;
color: red`
