import { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material';

import { getUsers } from '../service/api';

const StyledTable = styled(Table)` 
    width : 90%; 
    margin : 50px auto 0 auto;
`
//replace table with StyledTable to implement CSS for adding space and width from the heding columns to the edge of the screen/navigator bar

const THead = styled (TableRow)`
    background : #000000;
    & > th {
        color : #fff;
        font-size : 20px;
    }
` 
//replading tablerow with THead & changing table cell data color of TableCell namely, th

const TBody = styled (TableRow)`
    & > td {
        font-size : 20px;
    }
`

const AllUsers = () => {

    const [users, setUsers] = useState ([]);

    useEffect(() =>  {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        let response = await getUsers();
        //console.log(response.data);
        setUsers(response.data);
    }

    return (
        //<Table>
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </THead>
            </TableHead>
            <TableBody>
               {
                    users.map( user => (
                        <TBody>
                            <TableCell>{user.userId}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant='contained' style = {{ marginRight:10 }}>Edit</Button>
                                <Button variant='contained' color='secondary'>Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
               }
            </TableBody>
        </StyledTable>
        //</Table>
    )
}

export default AllUsers;