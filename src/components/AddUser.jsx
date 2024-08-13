//hook state
import { useState } from "react";

import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";

import { addUser } from "../service/api";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {    
        margin: 20px
    }
` 
// " & > " is used to handle child components of container ie handling css of FormControl

const defaultValue = {
    name : '',
    username : '',
    email : '',
    phone : ''
}

const AddUser = () => {

    const [user, setUser] = useState({defaultValue}); //using a react hook called useState to store values of the event captured by onValueChange

    const onValueChange = (e) => {
        //console.log(e.target.name , e.target.value)
        setUser({...user, [e.target.name] : e.target.value }) //...user is used to retain ealrlier valiues from old events
        //console.log(user)
    }
    

    const addUserDetails = async() => {
        await addUser(user);   // api call onClick
    }

    return(
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <Button variant = "contained" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;