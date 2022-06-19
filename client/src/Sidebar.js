import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as LogoIcon} from "./assets/logo.svg"
import { FiHome, FiBell, FiUser, FiBookmark } from "react-icons/fi";
import { COLORS } from "./constants";
import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import Loading from "./Spinners";

const Sidebar = () => {
    const {currentUser} = useContext(CurrentUserContext)
    return currentUser ? (
        <Wrapper>
            <LogoIcon style={{marginBottom: "20px", marginRight: "100px"}}/>
            <ul>
                <Item>
                    <ItemLink exact to="/"><FiHome style={{fontSize: "22px"}}/><Text>Home</Text></ItemLink>
                    {/* Home */}
                </Item>
                <Item>
                    <ItemLink to={`/profile/${currentUser.profile.handle}`}><FiUser style={{fontSize: "22px"}}/><Text>Profile</Text></ItemLink>
                    {/* <ItemLink to="/profile/:profileId"><FiUser /><Text>Profile</Text></ItemLink> */}
                    {/* Profile */}
                </Item>
                <Item>
                    <ItemLink to="/notifications"><FiBell style={{fontSize: "22px"}}/><Text>Notifications</Text></ItemLink>
                    {/* Notifications */}
                </Item>
                <Item>
                    <ItemLink to="/bookmarks"><FiBookmark style={{fontSize: "22px"}}/><Text>Bookmarks</Text></ItemLink>
                    {/* Bookmarks */}
                </Item>
            </ul>
        </Wrapper>
    )
    : <Wrapper><Loading /></Wrapper>
}

const Wrapper = styled.div`
background-color:white;  
color:black;
height:100%;
flex:1 1 30%;
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
align-items: center;
:hover {
    color: ${COLORS.primary};
}
&.active {
    color: ${COLORS.primary};
}
`

const Text = styled.p`
margin-left: 20px;
font-size: 1.3rem;`


export default Sidebar;