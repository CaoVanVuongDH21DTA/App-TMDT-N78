import React, {useEffect, useState} from "react";
import '../../../styles/Admin/Update.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useNavigate, useParams} from "react-router-dom";
import Service from "../../../service/Service";

const UpdateUser = ()=>{
    const navigate = useNavigate();
    const { userId } = useParams<{ userId: string }>();

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        role: '',
        city: ''
    });

    useEffect(() => {
        if (userId) {  // Kiểm tra xem userId có tồn tại không
            fetchUserDataById(userId); // Pass the userId to fetchUserDataById
        }
    }, [userId]); //wheen ever there is a chane in userId, run this

    const fetchUserDataById = async (userId: string) => {
        try {
            const token = localStorage.getItem('token');
            const response = await Service.getUserById(userId, token); // Pass userId to getUserById
            const { name, email, role, city } = response.ourUsers;
            setUserData({ name, email, role, city });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const res = await Service.updateUser(userId, userData, token);
            console.log(res)
            // Redirect to profile page or display a success message
            navigate("/admin/list-user")

        } catch (error) {
            console.error('Error updating user profile:', error);
            alert(error)
        }
    };

    return(
        <>
            <div className="center-form">
                <h1>Update User</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={userData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={userData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="role"
                            placeholder="Enter role"
                            value={userData.role}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="city"
                            placeholder="Enter city"
                            value={userData.city}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant ="primary" type="submit" className="w-100">
                        Update
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default UpdateUser;