import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import '../../../styles/Admin/List/List.css'
import {useNavigate} from "react-router-dom";
import Service from "../../../service/Service";

// Định nghĩa kiểu Game
interface User {
    id: number;
    name: string;
    email: string;
}

const List_User= () => {
    const [users, setUsers] = useState<User[]>([]); // Khai báo kiểu Game[]
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch users data when the component mounts
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        try {

            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await Service.getAllUsers(token);
            //   console.log(response);
            setUsers(response.ourUsersList); // Assuming the list of users is under the key 'ourUsersList'
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const deleteUser = async (userId: number) => {
        try {
            // Prompt for confirmation before deleting the user
            const confirmDelete = window.confirm('Are you sure you want to delete this user?');

            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            if (confirmDelete) {
                await Service.deleteUser(userId, token);
                // After deleting the user, fetch the updated list of users
                fetchUsers();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleUpdate =(userId: number) =>{
        navigate(`/admin/update-user/${userId}`)
    }

    return (
        <div className="list_page">
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h1 className="text-center">List Users</h1>
                        <Table striped bordered hover responsive>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Button variant="outline-secondary"
                                                onClick={() => handleUpdate(user.id)}>Update</Button>{" "}
                                        <Button variant="outline-danger"
                                                onClick={() => deleteUser(user.id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <button className="bg-primary"
                        style={{borderRadius: "10px", padding: "8px 1rem", marginTop: "40px", color: "white"}}
                        onClick={() => navigate('/admin/post-user')}>Add User
                </button>
            </Container>
        </div>
    );
};

export default List_User;
