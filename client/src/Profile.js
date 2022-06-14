import { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import { COLORS } from "./constants";

import styled from "styled-components";
import { FiMapPin } from "react-icons/fi";
import Loading from "./Spinners";
import { useHistory } from "react-router-dom";
import { SmallTweet } from "./SmallTweet";

export const Profile = () => {
    let history = useHistory();
    const {profileId} = useParams()
    const [Profile, setProfile] = useState(null)
    const [profileTweet, setProfileTweet] = useState(null)
    const {currentUser} = useContext(CurrentUserContext)
    useEffect(() => {
        fetch(`/api/${profileId}/profile`)
          .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                history.push("/error");
            }
            })
          .then((data) => {
            setProfile(data);
          });
      }, [profileId]);

      useEffect(() => {
        fetch(`/api/${profileId}/feed`)
          .then((res) => res.json())
          .then((data) => {
            setProfileTweet(data);
          })
          .catch((error) => {
            console.log("something is wrong", error);
            history.push("/error");
          });
      }, [profileId]);

      console.log(currentUser)
      console.log(profileTweet)
    //   console.log(profileTweet.tweetsById)
    return (
        <>
          {Profile ? 
          <Wrapper>
            <Banner src={Profile.profile.bannerSrc} />
            <Avatar src={Profile.profile.avatarSrc} />
            {Profile.profile.isFollowingYou ? <Button>Following</Button> : <Button>Follow</Button>}
            <Content>
                <Name>{Profile.profile.displayName}</Name>
                <div style={{display: "flex", alignItems: "center"}}>
                  <Handle>@{Profile.profile.handle}</Handle>
                  {Profile.profile.isFollowingYou && <div style={{
                    fontSize: "0.8rem", 
                    backgroundColor: "lightgrey",
                    marginLeft: "5px",
                    padding:"2px 5px"
                  }}>Follows you</div>}
                </div>
                <Bio>{Profile.profile.bio}</Bio>
                <Location>
                    <FiMapPin style={{marginRight: '5px'}}/>
                    <p>{Profile.profile.location}</p>
                </Location>
                <Status>
                    <StatusDiv><Number>{Profile.profile.numFollowing}</Number> Following</StatusDiv>
                    <div><Number>{Profile.profile.numFollowers} </Number>Followers</div>
                </Status>
            </Content>
            <Tab>
                <TabBlock style={{color: {profileTweet} && `${COLORS.primary}`, borderBottom: {profileTweet} && `1px solid ${COLORS.primary}`}}>Tweets</TabBlock>
                <TabBlock>Media</TabBlock>
                <TabBlock>Likes</TabBlock>
            </Tab>
            {profileTweet && profileTweet.tweetIds.map((id) => {
                const UserTweet = profileTweet.tweetsById[id]
                return <SmallTweet tweet={UserTweet} />;
            })}
          </Wrapper> : 
          <Loading />
        }
        </>
        )
};
const Button = styled.button`
background-color: ${COLORS.primary};
border-radius: 50px;
color: white;
padding:10px 20px;
font-size: 16px;
border:none;
margin-right: 20px;
float:right;
margin-top:20px;
`

const Wrapper = styled.div`
width:900px;
border-left:1px solid lightgrey;
border-right:1px solid lightgrey;`

const StatusDiv = styled.div`
margin-right: 10px;`

const Number = styled.span`
font-weight:bold;`

const Name = styled.p`
font-size:1.5rem;
font-weight: bold;
`
const Handle = styled.p`
font-size:1rem;
color: grey;
`
const Bio = styled.p`
font-size:1.1rem;
margin-top: 10px;
margin-bottom: 10px;
`
const Content = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
margin-left: 10px;
`
const Banner = styled.img`
height:200px;
width: 900px;
`
const Avatar = styled.img`
border-radius: 50%;
width: 150px;
margin-top: -80px;
margin-left: 20px;
`
const Location = styled.div`
display: flex;
color: grey;
align-items: center;
margin-bottom: 10px;`

const Status = styled.div`
display: flex;
align-items: center;`

const Tab = styled.div`
display: flex;
justify-content: space-around;
`

const TabBlock = styled.div`
padding-top:20px;
padding-bottom: 20px;
text-align: center;
font-weight: bold;
width: 100%;
&:hover{
  color: ${COLORS.primary};
  border-bottom: 1px solid ${COLORS.primary};
}`