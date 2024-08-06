import { AppBar, Toolbar, styled } from '@mui/material';

//link 
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background :    #111111
`

// const Tabs = styled('p')`
//     font-size : 20px;
//     margin : 20px
//`
const Tabs = styled(NavLink)`
    font-size : 20px;
    margin : 20px;
    color : inherit
`
const NavBar = () => {
    return (
        <Header position="static">    
            <Toolbar> 
                <Tabs to = '/'>Home </Tabs> 
                <Tabs to = '/all'>All Users</Tabs>
                <Tabs to = '/add'>Add User</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;