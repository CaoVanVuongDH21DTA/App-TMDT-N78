import React, { useState} from 'react';
import '../../styles/Login/Login.css'
import { FcGoogle } from "react-icons/fc";
import {FaApple, FaSteam, FaXbox, FaFacebook, FaPlaystation, FaEyeSlash} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { FaEye } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSync} from "@fortawesome/free-solid-svg-icons";
import Service from "../../service/Service";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [isShowPassword, setIsShowPassword] = useState(false)

    const [loadingAPI, setLoadingAPI] = useState(false)

    //đăng nhập
    const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userData = await Service.login(email, password)
            console.log(userData)
            if (userData.token) {
                localStorage.setItem('token', userData.token)
                localStorage.setItem('role', userData.role)
                console.log("đăng nhập thành công")
                navigate('/')
            }else{
                setError(userData.message)
            }

        } catch (error:any) {
            console.log(error)
            setError(error.message)
            setTimeout(()=>{
                setError('');
            }, 5000);
        }
    }

    // Show Pass
    const togglePasswordVisibility = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <span className="logo_epic">
                    <div className="logo" style={{
                        maskImage: 'url(https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM)',
                        WebkitMaskImage: 'url(https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM)',
                    }}>
                    </div>
                </span>
                <h2>Đăng nhập</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="input-container">
                            <input
                                placeholder="Email"
                                className="input-field"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="input-field" className="input-label">Email</label>
                            <span className="input-highlight"></span>
                        </div>
                        <div className="input-container">
                            <input
                                type={isShowPassword ? "text" : "password"}
                                placeholder="Password"
                                className="input-field_Pass"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="input-field" className="input-label">Password</label>
                            <span className="input-highlight"></span>
                            {isShowPassword ? (
                                <FaEye size={20} className="icon_showPass" onClick={togglePasswordVisibility}/>
                            ) : (
                                <FaEyeSlash size={20} className="icon_showPass" onClick={togglePasswordVisibility}/>
                            )}
                        </div>
                    </div>
                    <button
                        className={`btn btn-primary ${email && password ? 'active' : ''}`}
                            disabled={email && password ? false : true}
                            type="submit"
                    >
                        {loadingAPI && <FontAwesomeIcon icon={faSync} className="loading"/>}
                        &nbsp; Sign in
                    </button>
                </form>
                <div className="divider">
                    <p>Hoặc tiếp tục với</p>
                </div>
                <div className="social-buttons">
                    <button className="social-btn xbox">
                        <FaXbox size={30} className="xbox"/>
                    </button>
                    <button className="social-btn playstation">
                        <FaPlaystation size={30}/>
                    </button>
                    <button className="social-btn nintendo">
                        <SiNintendo size={40}/>
                    </button>
                    <button className="social-btn steam">
                        <FaSteam size={30}/>
                    </button>
                    <button className="social-btn facebook">
                        <FaFacebook size={30}/>
                    </button>
                    <button className="social-btn google">
                        <FcGoogle size={30}/>
                    </button>
                    <button className="social-btn apple">
                        <FaApple size={30}/>
                    </button>
                    <button className="social-btn lego">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" className="img">
                            <path fill="white" d="M0.29541 0.982422V34.5265H33.8395V0.982422H0.29541Z"/>
                            <path fill="evenodd"
                                  d="M0.294922 34.5265V0.982422H33.839V34.5265H0.294922ZM30.9356 18.1384C31.2235 17.2746 31.5594 15.979 31.6074 14.9232C31.6554 14.1314 31.5594 13.0276 30.8156 12.2838C30.2398 11.66 29.328 11.348 28.1282 11.348C26.6166 11.348 25.3929 11.8759 24.5051 12.9317L24.2652 13.2196L24.0972 12.8837C23.9899 12.6476 23.9018 12.5459 23.7814 12.4069C23.7672 12.3905 23.7525 12.3736 23.7373 12.3558C23.1374 11.684 22.1057 11.324 20.714 11.324C19.4423 11.324 18.2666 11.708 17.4508 12.4038L17.2348 12.5718L17.0908 12.3318C16.7069 11.708 15.7232 11.3001 14.6194 11.3001C13.0358 11.3001 11.4282 11.516 10.4444 13.0756L10.0365 13.7235L10.0125 12.9557C9.98851 12.3558 9.91653 12.1159 9.65259 11.8279C9.34067 11.492 8.83679 11.348 8.09296 11.348C7.01322 11.348 6.19741 11.8279 5.59755 12.8117C4.66177 14.2754 2.45429 19.0982 2.50228 21.3777C2.55027 22.8413 3.53403 23.7531 5.16565 23.8011C6.50933 23.8251 7.58908 23.4892 8.26092 22.7934L8.42888 22.6254L8.59684 22.8173C9.2207 23.4892 10.1325 23.8491 11.2122 23.8491C12.5799 23.8491 13.7556 23.4172 14.4275 22.6734L14.6194 22.4814L14.7874 22.6974C15.4112 23.4652 16.395 23.8731 17.5947 23.8731C19.1544 23.8491 20.642 23.1293 21.6258 21.8816L21.8897 21.5456L22.0337 21.9296C22.6335 23.5852 24.2892 23.8251 25.2249 23.8251C28.3922 23.8251 29.7599 21.6416 30.9356 18.1384Z"/>
                            <path fill="#E3000B" fillRule="evenodd" clipRule="evenodd"
                                  d="M0.294922 34.5265V0.982422H33.839V34.5265H0.294922ZM31.1519 20.6094C31.5838 19.6976 32.4236 17.4421 32.5676 16.2184C32.7595 14.7307 32.9275 13.3151 31.9437 11.8994C31.2239 10.9156 30.0002 10.2438 28.1526 10.2438C26.7609 10.2438 25.5132 10.6037 24.5055 11.4435C23.6417 10.6037 22.4179 10.2198 20.7623 10.2198C19.4666 10.2198 18.3629 10.5077 17.4271 11.0836C16.7313 10.5317 15.9395 10.1958 14.6438 10.1958C13.492 10.1958 11.8364 10.2438 10.6127 11.2996C10.3248 10.7237 9.74893 10.2678 8.14131 10.2678C6.65366 10.2678 5.45394 10.9636 4.68612 12.2593C3.63037 13.9389 1.39889 18.8098 1.44688 21.4492C1.47088 23.4647 2.98252 24.8324 5.14201 24.8804C6.43771 24.9044 7.56544 24.6164 8.40525 24.0646C9.17307 24.6164 10.1568 24.9044 11.2366 24.9044C12.5323 24.9044 13.708 24.5684 14.5718 23.9446C15.3636 24.5684 16.3954 24.9044 17.5711 24.9044C19.1067 24.9044 20.5224 24.4005 21.6501 23.3927C22.4179 24.3765 23.7616 24.9044 25.3693 24.9044C28.3925 24.9044 29.9762 23.0328 31.1519 20.6094Z"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M0.0551758 34.7422V0.742188H34.0552V34.7422H0.0551758ZM33.5994 34.2864V1.22221H0.535198V34.2864H33.5994Z"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M31.7275 11.0111C31.7275 10.5552 32.0875 10.1953 32.5433 10.1953C32.9992 10.1953 33.3592 10.5552 33.3592 11.0111C33.3592 11.467 32.9992 11.8269 32.5433 11.8269C32.0875 11.8269 31.7275 11.467 31.7275 11.0111ZM32.5438 10.3632C32.9037 10.3632 33.1916 10.6512 33.1916 11.0111C33.1916 11.371 32.9037 11.6589 32.5438 11.6589C32.1839 11.6589 31.8959 11.371 31.8959 11.0111C31.8959 10.6512 32.1839 10.3632 32.5438 10.3632ZM32.8552 11.2751L32.9512 11.443V11.467H32.7112L32.6393 11.3231C32.6153 11.2511 32.5433 11.1791 32.5193 11.1551C32.4713 11.1071 32.4473 11.1071 32.3753 11.1071H32.3513V11.443H32.1834V10.6032H32.6153C32.7832 10.6032 32.8792 10.6992 32.8792 10.8432C32.8792 10.9632 32.8072 11.0591 32.6633 11.0831C32.7352 11.1071 32.7592 11.1311 32.8552 11.2751ZM32.3997 10.7237V10.9637H32.5916C32.6876 10.9637 32.7356 10.8917 32.7356 10.8437C32.7356 10.7717 32.6876 10.7237 32.5676 10.7237H32.3997Z"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M24.3143 12.7388C25.1301 11.755 26.3538 11.0592 28.1054 11.0592C31.1527 11.0592 31.9445 13.0507 31.8245 14.9462C31.7525 16.074 31.3926 17.4177 31.1287 18.2335C29.9289 21.8086 28.4893 24.0641 25.2021 24.0641C23.7144 24.0641 22.3467 23.4642 21.7949 22.0006C20.8111 23.2723 19.2994 24.0881 17.5719 24.0881C16.2522 24.1121 15.2204 23.6322 14.5726 22.8404C13.8047 23.7042 12.4851 24.0881 11.1894 24.0881C10.0136 24.0881 9.05386 23.6802 8.40601 22.9843C7.68618 23.7042 6.58244 24.0641 5.14278 24.0401C3.31921 23.9921 2.28745 22.8884 2.26346 21.3767C2.21547 19.0013 4.44694 14.1544 5.38272 12.6668C6.03057 11.611 6.91836 11.1071 8.09409 11.1071C8.74193 11.1071 9.41377 11.2271 9.82168 11.659C10.1576 12.0189 10.2056 12.3309 10.2296 12.9307C11.2853 11.2511 13.0129 11.0352 14.6206 11.0352C15.8443 11.0352 16.852 11.491 17.2839 12.1869C18.1237 11.4671 19.2994 11.0352 20.7151 11.0352C22.1788 11.0352 23.2585 11.3951 23.9304 12.1629C24.0743 12.3309 24.1703 12.4508 24.3143 12.7388ZM8.30975 20.945C8.35774 20.3692 7.92584 19.7693 6.22224 20.0573C6.38191 19.706 6.61242 19.2319 6.87474 18.6924L6.87479 18.6923L6.8748 18.6923L6.8748 18.6923L6.87481 18.6923C7.79509 16.7997 9.10689 14.1018 9.12556 13.0749C9.14956 12.571 8.93361 12.1631 8.1178 12.1631C7.254 12.1631 6.70213 12.523 6.27023 13.2429C5.31046 14.7785 3.27094 19.4094 3.31893 21.4009C3.34292 22.5287 4.23071 22.9846 5.21448 23.0086C6.58216 23.0326 8.14179 22.6486 8.30975 20.945ZM11.765 18.4974C11.6451 18.8093 11.4291 19.4332 11.2612 20.129C11.813 19.985 12.2449 19.8891 12.9648 19.9131C13.7806 19.9371 14.3084 20.273 14.3084 20.9448C14.3084 22.5764 12.4849 23.0563 11.2372 23.0563C9.84549 23.0563 8.64577 22.2645 8.64577 20.7529C8.64577 18.9773 9.60555 16.2899 10.4933 14.5143C11.5971 12.3308 12.7248 12.0189 14.6684 12.0189C15.5322 12.0189 16.5159 12.3788 16.5159 13.1946C16.5159 14.3224 15.5801 14.7303 14.6204 14.8023C14.2125 14.8263 13.6126 14.8503 13.2287 14.8263C13.2287 14.8263 12.9168 15.3061 12.5808 16.1459C14.3324 15.906 15.0523 16.2899 14.7643 17.2977C14.3804 18.6654 13.2047 18.7373 11.765 18.4974ZM19.3235 14.8746C19.5634 14.5387 19.8514 14.2508 20.3312 14.2508C20.9071 14.2508 20.8591 14.5627 20.6432 14.9466C20.2593 16.0744 21.435 16.0984 21.7229 16.0744C22.7547 16.0024 23.3065 15.3305 23.4505 14.2028C23.6425 12.6672 22.3468 12.0673 20.7152 12.0673C17.9798 12.0673 16.924 13.7229 15.8923 16.1223C15.4124 17.2501 14.8125 19.1696 14.8125 20.3933C14.8125 22.0969 15.8683 23.0327 17.5479 23.0327C20.0193 23.0327 21.7469 21.0652 22.2508 18.6178C22.4188 17.8739 22.6107 16.4583 20.6912 16.5302C19.7074 16.5782 19.1315 16.7942 18.8196 17.778C18.5077 18.8097 19.6594 18.8337 19.6594 18.8337C19.4195 19.8895 18.7476 20.5373 18.1478 20.5373C17.7878 20.5373 17.4279 20.3693 17.5479 19.5775C17.7159 18.4258 18.8196 15.5945 19.3235 14.8746ZM30.6486 16.2907C30.3607 17.7303 29.7129 19.4339 28.993 20.7056C27.8413 22.7691 26.4496 23.0571 25.2259 23.0571C24.0022 23.0331 22.6345 22.6012 22.6105 20.7056C22.6105 19.3619 23.1864 17.4424 23.6903 16.1947C24.5541 13.9152 25.4419 12.0677 28.2252 12.1156C31.4884 12.1156 30.9126 15.019 30.6486 16.2907ZM26.5934 19.9612C27.0253 19.1934 28.321 15.7142 28.345 14.8504C28.345 14.6105 28.297 14.3225 27.9131 14.2985C27.6252 14.2985 27.3852 14.3465 27.1693 14.6825C26.6894 15.3063 25.2497 19.2414 25.2737 20.0332C25.2737 20.3211 25.4417 20.5611 25.7776 20.5611C26.1855 20.5611 26.4015 20.2971 26.5934 19.9612Z"/>
                        </svg>
                    </button>
                </div>
                <div className="no-account">
                    <Link to="/register">Đăng ký</Link>
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

export default Login;
