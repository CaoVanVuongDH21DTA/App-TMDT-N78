import React, {useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import '../../styles/Login/Register.css'
import Service from "../../service/Service";

function Register(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        city: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const navigate = useNavigate();

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Call the register method from UserService

            const token = localStorage.getItem('token');
            // await UserService.register(formData, token);
            await Service.register(formData);

            // Clear the form fields after successful registration
            setFormData({
                name: '',
                email: '',
                password: '',
                city: ''
            });
            alert('User registered successfully');
            navigate('/login');

        } catch (error) {
            console.error('Error registering user:', error);
            alert('An error occurred while registering user');
        }
    };

    return (
        <div className="register-container">
            <div className="login-form">
                <span className="logo_epic">
                    <div className="logo" style={{
                        maskImage: 'url(https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM)',
                        WebkitMaskImage: 'url(https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM)',
                    }}>
                    </div>
                </span>
                <h2>Đăng ký</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="input-container">
                            <input
                                placeholder="Address Email"
                                className="input-field"
                                type="email"
                                value={formData.email}
                                name="email"
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="input-field" className="input-label">Address Email</label>
                            <span className="input-highlight"></span>
                        </div>
                        <div className="input-container">
                            <input
                                placeholder="User Name"
                                className="input-field"
                                type="text"
                                value={formData.name}
                                name="name"
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="input-field" className="input-label">User Name</label>
                            <span className="input-highlight"></span>
                        </div>
                        {/*<div className="input-container">*/}
                        {/*    <input*/}
                        {/*        placeholder="Enter your role"*/}
                        {/*        className="input-field"*/}
                        {/*        type="text"*/}
                        {/*        value={formData.role}*/}
                        {/*        name="role"*/}
                        {/*        onChange={handleInputChange}*/}
                        {/*        required*/}
                        {/*    />*/}
                        {/*    <label htmlFor="input-field" className="input-label">Role</label>*/}
                        {/*    <span className="input-highlight"></span>*/}
                        {/*</div>*/}
                        <div className="input-container">
                            <input
                                placeholder="Enter your city"
                                className="input-field"
                                type="text"
                                value={formData.city}
                                name="city"
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="input-field" className="input-label">City</label>
                            <span className="input-highlight"></span>
                        </div>
                        <div className="input-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="input-field_Pass"
                                value={formData.password}
                                onChange={handleInputChange}
                                name="password"
                                required
                            />
                            <label htmlFor="input-field" className="input-label">Password</label>
                            <span className="input-highlight"></span>
                            {showPassword ? (
                                <FaEye size={20} className="icon_showPass" onClick={togglePasswordVisibility}/>
                            ) : (
                                <FaEyeSlash size={20} className="icon_showPass" onClick={togglePasswordVisibility}/>
                            )}
                        </div>
                    </div>
                    <label className="checkBox">
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                        <span>I have read and agree to the </span>
                        <Link to="">term of service</Link>
                    </label>
                    <button
                        type="submit"
                        className={`btn btn-primary ${formData.email && formData.password 
                        // && formData.role
                        && formData.city && formData.name && isChecked ? 'active' : ''}`}
                        disabled={!formData.email || !formData.password
                            // || !formData.role
                            || !formData.city || !formData.name || !isChecked}>
                        Sign in
                    </button>

                </form>

                <div className="account">
                    <p>
                        Already have an account?
                        <Link to="/login">Đăng Nhập</Link>
                    </p>
                </div>

                <p className="privacy-policy">
                    Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với chúng tôi
                    <br/>
                    <a href="">Chính sách bảo mật</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
