import react, { Component, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

import './sign.css';

const SignA = () => {

    const navigate = useNavigate();

    //state to be sent to backend
    const intialValues = { firstname: "", lastname: "", mobile: "", email: "", password: "", cpassword: "" };

    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [passwordShown, setPasswordShowen] = useState(false);
    const [cPasswordShown, setCPasswordShowen] = useState(false);
    const [eyeShowen, setEyeShowen] = useState(false);
    const [cEyeShowen, setCEyeShowen] = useState(false);

    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (err) => {
        err.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }


    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
            if (isSubmit) {
                return (navigate('/profileadmin'));
                console.log('admin route');
            }

        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.firstname) {
            errors.firstname = 'firstname is required!';
        }
        if (!values.lastname) {
            errors.lastname = 'lastname is required!';
        }
        if (!values.mobile) {
            errors.mobile = 'mobile is required!';
        }
        if (!values.email) {
            errors.email = 'email is required!';
        } else if (!regex.test(values.email)) {
            errors.email = 'this is not a valid email format!'
        }
        if (!values.password) {
            errors.password = 'password is required!';
        } else if (values.password.length < 4) {
            errors.password = 'password must be more than 4 characters';
        } else if (values.password.length > 10) {
            errors.password = 'password must not exceeds 10 characters';
        }
        if (!values.cpassword) {
            errors.cpassword = 'password confirmation is required!';
        } else if (values.cpassword != values.password) {
            errors.cpassword = 'confirmation password does not match!';
        }
        return errors;
    }

    const togglePassword = () => {
        setPasswordShowen(!passwordShown);
        toggleEye();
    }
    const toggleCPassword = () => {
        setCPasswordShowen(!cPasswordShown);
        toggleCEye();
    }

    const toggleEye = () => {
        setEyeShowen(!eyeShowen);
    }
    const toggleCEye = () => {
        setCEyeShowen(!cEyeShowen);
    }

    return (

        <div className='signup'>
            <form onSubmit={handleSubmit} >
                <div className="container">
                    <h1>Sign Up</h1>
                    <div className="name">
                        <div>
                            <input
                                type="text"
                                placeholder="First name"
                                name="firstname"
                                id='firstName'
                                value={formValues.firstname}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder="Last name"
                                name="lastname"
                                value={formValues.lastname}
                                onChange={handleChange}
                            />
                        </div>



                    </div>
                    <p className='errorMsg'>{formErrors.firstname}</p>
                    <p className='errorMsg'>{formErrors.lastname}</p>
                    <br />
                    <div>
                        <input
                            type="text"
                            placeholder="Business mobile number"
                            name="mobile"
                            value={formValues.mobile}
                            onChange={handleChange}
                        />
                        <p className='errorMsg'>{formErrors.mobile}</p>
                        <br />
                        <input
                            type="text"
                            placeholder="Email Adress"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        <p className='errorMsg'>{formErrors.email}</p>
                        <br />
                        <div className="password">
                            <input
                                type={passwordShown ? 'text' : 'password'}
                                placeholder="Password"
                                name="password"
                                id='password'
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            <FontAwesomeIcon
                                icon={eyeShowen ? faEye : faEyeSlash}
                                id='togglePassword'
                                onClick={togglePassword}
                            />
                            <p className='errorMsg'>{formErrors.password}</p>

                            <br />
                            <input
                                type={cPasswordShown ? 'text' : 'password'}
                                placeholder="Confirm Password"
                                name="cpassword"
                                id='Cpassword'
                                value={formValues.cpassword}
                                onChange={handleChange}
                            />
                            <FontAwesomeIcon
                                icon={cEyeShowen ? faEye : faEyeSlash}
                                id='toggleCPassword'
                                onClick={toggleCPassword}
                            />
                            <p className='errorMsg'>{formErrors.cpassword}</p>

                        </div>
                    </div>
                    <br />
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" className="check" />i’ve read and agree with <a href="url" >Terms of service</a>
                        </label>
                    </div>
                    <div className="clearfix">
                        <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form >
        </div >
    )
}




export default SignA;