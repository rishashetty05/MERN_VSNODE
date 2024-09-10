//hook state
import { useState, useEffect } from "react";

import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";

import { addUser, getUser } from "../service/api";
import { useNavigate , useParams} from 'react-router-dom';

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

const EditUser = () => {

    const [user, setUser] = useState({defaultValue}); //using a react hook called useState to store values of the event captured by onValueChange

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(()=> {
        loadUserDetails();
    }, [])

    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        //console.log(e.target.name , e.target.value)
        setUser({...user, [e.target.name] : e.target.value }) //...user is used to retain ealrlier valiues from old events
        //console.log(user)
    }
    
    const addUserDetails = async() => {
        await addUser(user);   // api call onClick
        navigate('/all');
    }

    return(
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value = {user.name} />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value = {user.username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value = {user.email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value = {user.phone} />
            </FormControl>
            <FormControl>
                <Button variant = "contained" onClick={() => addUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;