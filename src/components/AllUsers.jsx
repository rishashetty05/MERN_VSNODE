import { useEffect } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

import { getUsers } from '../service/api';


const AllUsers = () => {

    useEffect(() =>  {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        await getUsers();
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

            </TableBody>
        </Table>
    )
}

export default AllUsers;