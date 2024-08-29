import { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

import { getUsers } from '../service/api';


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
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {
                    users.map( user => (
                        <TableRow>
                            <TableCell>{user.userId}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                        </TableRow>
                    ))
               }
            </TableBody>
        </Table>
    )
}

export default AllUsers;