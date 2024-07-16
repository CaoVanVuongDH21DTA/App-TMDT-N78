import * as React from "react";
import {useEffect, useState} from "react";
import Service from "../../service/Service";
import {Link} from "react-router-dom";

export default function ProfileAdmin() {
    const [profileInfo, setProfileInfo] = useState({
        id: '',
        name: '',
        email: '',
        role: '',
        city: ''
    });

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
        try {

            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await Service.getYourProfile(token);
            setProfileInfo(response.ourUsers);
        } catch (error) {
            console.error('Error fetching profile information:', error);
        }
    };

    return (
        <>
            <div
                className="main_AdminPage"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "60vh"
                }}
            >
                <h2>Profile Information</h2>
                <p>Name: {profileInfo.name}</p>
                <p>Email: {profileInfo.email}</p>
                <p>City: {profileInfo.city}</p>
                {profileInfo.role === "ADMIN" && (
                    <button
                        style={{
                            borderRadius: "10px",
                            padding: "10px 20px"
                        }}
                        className= "bg-primary"
                    >
                        <Link to={`/admin/update-user/${profileInfo.id}`}
                            style={{
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            Update This Profile
                        </Link>
                    </button>
                )}
            </div>
        </>
    );
};
