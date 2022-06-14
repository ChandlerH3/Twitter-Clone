import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as LogoIcon} from "./assets/logo.svg"
import { FiHome, FiBell, FiUser, FiBookmark } from "react-icons/fi";
import { COLORS } from "./constants";
import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";

const Sidebar = () => {
    const {currentUser} = useContext(CurrentUserContext)
    return currentUser ? (
        <Wrapper>
            <LogoIcon style={{marginBottom: "10px"}}/>
            <ul>
                <Item>
                    <ItemLink exact to="/"><FiHome /><Text>Home</Text></ItemLink>
                    {/* Home */}
                </Item>
                <Item>
                    <ItemLink to={`/profile/${currentUser.profile.handle}`}><FiUser /><Text>Profile</Text></ItemLink>
                    {/* <ItemLink to="/profile/:profileId"><FiUser /><Text>Profile</Text></ItemLink> */}
                    {/* Profile */}
                </Item>
                <Item>
                    <ItemLink to="/notifications"><FiBell /><Text>Notifications</Text></ItemLink>
                    {/* Notifications */}
                </Item>
                <Item>
                    <ItemLink to="/bookmarks"><FiBookmark /><Text>Bookmarks</Text></ItemLink>
                    {/* Bookmarks */}
                </Item>
            </ul>
        </Wrapper>
    )
    : (<div>loading</div>)
}

const Wrapper = styled.div`
background-color:white;  
color:black;
height:100%;
flex:1;
display: flex;
align-items: center;
flex-direction: column;
margin-top: 20px;
`
const Item = styled.li`
padding: 10px;
border-radius: 50px;
&:hover {
    background-color: rgba(162, 112, 249, 0.3);
    color: ${COLORS.primary}
}
`

const ItemLink = styled(NavLink)`
display: flex;
text-decoration: none;
color: black;
font-weight: bold;
font-family: sans-serif;
:hover {
    color: ${COLORS.primary};
}
&.active {
    color: ${COLORS.primary};
}
`

const Text = styled.p`
margin-left: 10px;`

export default Sidebar;