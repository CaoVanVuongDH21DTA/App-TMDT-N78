import React, { useState } from "react";
import '../../../styles/Admin/Post/Post.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Service from "../../../service/Service";

const PostUser = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        city: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Call the register method from UserService

            const token = localStorage.getItem('token');
            // await UserService.register(formData, token);
            await Service.register(userData);

            // Clear the form fields after successful registration
            setUserData({
                name: '',
                email: '',
                password: '',
                city: ''
            });
            alert('User registered successfully');
            navigate('/admin/list-user');

        } catch (error) {
            console.error('Error registering user:', error);
            alert('An error occurred while registering user');
        }
    };

    return (
        <div className="center-form">
            <h1>Post New User</h1>
            {error && <p className="error-message">{error}</p>}
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
                <Form.Group controlId="formBasicTitle">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicImage">
                    <Form.Control
                        type="text"
                        name="city"
                        placeholder="Enter City"
                        value={userData.city}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicImage">
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Post User
                </Button>
            </Form>
        </div>
    );
};

export default PostUser;
