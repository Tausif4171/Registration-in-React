import React, { useState, useEffect } from 'react';
import '../sass/style.css';
import register from '../images/register.jpg';
import logoLight from '../images/logoLight.png';
import logoDark from '../images/logoDark.jpg';
import loginImage from '../images/loginImage.jpg';


const Test = () => {

    const loginValidation = (e) => {
        e.preventDefault();
        let username = document.getElementById('username').value;
        let pass = document.getElementById('pass').value;

        //Login
        //Username Validation
        if (username == "") {
            alert("Enter your username!");
            return false;
        }
        if ((username.length <= 8) || (username.length > 20)) {
            alert("Your name length should be between 8 to 20!");
            return false;

        }
        if (!isNaN(username)) {
            alert("Only alphabets are allowed!");
            return false;
        }
        //Password Validation
        if (pass == "") {
            alert("Enter your password!");
            return false;
        }
        if ((pass.length <= 5) || (pass.length > 15)) {
            alert("Your password length should be between 5 to 15!");
            return false;

        }
    }

    const registerValidation = (e) => {
        e.preventDefault();
        let first = document.getElementById('first').value;
        let last = document.getElementById('last').value;
        let mob = document.getElementById('mob').value;
        let email = document.getElementById('email').value;
        let pass = document.getElementById('pass').value;
        let confirmpass = document.getElementById('confirmpass').value;

        //Register
        //First Name
        if (first == "") {
            alert("Enter your first name!");
            return false;
        }
        if ((first.length <= 2) || (first.length > 20)) {
            alert("Your name length should be between 2 to 20!");
            return false;

        }
        if (!isNaN(first)) {
            alert("Only alphabets are allowed!");
            return false;
        }

        //Last Name
        if (last == "") {
            alert(" Enter your last name!");
            return false;
        }
        // if((last.length<=2) || (last.length>20)){
        //     alert( "Your name length should be between 2 to 20!" );
        //     return false;

        // }
        if (!isNaN(last)) {
            alert("Only alphabets are allowed!");
            return false;
        }

        //Mobile Number Validation
        if (mob == "") {
            alert("Enter your mobile number!");
            return false;
        }
        if (isNaN(mob)) {
            alert("Only digits are allowed!");
            return false;

        }
        if (mob.length != 10) {
            alert("Length should be at least 10!");
            return false;
        }

        //Email Validation
        if (email == "") {
            alert("Enter your email!");
            return false;
        }
        if (email.indexOf('@') <= 0) {
            alert("@ Invalid position!");
            return false;
        }
        if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
            alert(". Invalid position!");
            return false;
        }

        //Password Validation
        if (pass == "") {
            alert("Enter your password!");
            return false;
        }
        if ((pass.length <= 5) || (pass.length > 15)) {
            alert("Your password length should be between 5 to 15!");
            return false;

        }
        if (confirmpass == "") {
            alert("Enter your confirm password!");
            return false;
        }
        if (pass != confirmpass) {
            alert("Password not match!");
            return false;

        }

    }

    return (

        <div id="body">
            <div className="container">
                <input type="checkbox" id="flip" />
                <div className="cover">
                    <div className="front">
                        <img src={loginImage} alt="error" className="fImg" />

                    </div>
                    <div className="back">

                        <img src={logoLight} alt="error" id="lImg" />
                        <h3 className="bH3">Lottery Display</h3>
                        <h2 className="bH2">A few clicks away from <br />creating your
                            Lottery
                            Display</h2>
                        <img id="backImg" src={register}
                            alt="error" />

                    </div>
                </div>
                <div className="forms">
                    <table>
                        <tr>
                            <td><img src={logoDark} className="tImg" alt="error" /></td>
                            <td>
                                <h3 className="tH3">Lottery Display</h3>
                            </td>
                        </tr>
                    </table>

                    <div className="form-content">
                        <div className="login-form">
                            <div style={{ lineHeight: 2, marginTop: -70 }} className="lfcontent">
                                <div className="title">Login</div>
                                <br />
                                <h4 className="lfH4">Login to your account</h4>

                            </div>

                            <h6 className="lfH6">Thank you for get back to Lottery Display lets access out the best recommendation for you.
                            </h6>

                            <form action="#" onSubmit={loginValidation}>

                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i className="fas fa-user"></i>
                                        <input type="text" id="username" name="username" placeholder="Enter your username" />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-lock"></i>
                                        <input type="password" id="pass" name="pass" placeholder="Enter your password" />
                                    </div>

                                    <div className="text">
                                        &nbsp;<input type="checkbox" id="test" name="test" value="test" />
                                        <label for="test" className="formcontent"> &nbsp;&nbsp;Remember me</label>
                                        <a href="abc.js" className="formcontent1">Reset password?</a>
                                    </div>
                                    <br />
                                    <div className="button input-box">
                                        <input type="submit" value="Sign In" />
                                    </div>
                                    <div className="text sign-up-text">Don't have an account yet? <label className="formcontent2"
                                        for="flip" style={{ color: 'rgb(90, 195, 230)', textDecoration: 'none' }}>Join Lottery
                                        Display</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="signup-form">
                            <div className="title" style={{ float: 'left', lineHeight: 2 }}>Register</div>

                            <form action="#" style={{ marginTop: 80 }} onSubmit={registerValidation}>
                                <div style={{ float: 'left', lineHeight: 2 }}>
                                    <h4 style={{ float: 'left' }}>Manage all your lottery efficiently</h4>
                                    <br />
                                    <h6 style={{ marginTop: 14 }}>Let's get you all set up so you can verify your personal account and begin setting up your
                                        profile.</h6>
                                </div>

                                <div className="input-boxes">

                                    <div className="row">

                                        <div className="column">
                                            <div className="input-box">
                                                <i className="fas fa-user"></i>
                                                <input type="text" id="first" name="first" placeholder="Enter first name" />
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="input-box">
                                                <i className="fas fa-user"></i>
                                                <input type="text" id="last" name="last" placeholder="Enter last name" />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">

                                        <div className="column">
                                            <div className="input-box">

                                                <i className="fas fa-phone"></i>
                                                <input type="text" id="mob" name="mob" placeholder="Enter phone number" />
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="input-box">
                                                <i className="fas fa-envelope"></i>
                                                <input type="text" id="email" name="email" placeholder="Enter email" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="column">
                                            <div className="input-box">
                                                <i className="fas fa-lock"></i>
                                                <input type="password" id="pass" name="pass" placeholder="Enter password" />
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="input-box">
                                                <i className="fas fa-lock"></i>
                                                <input type="password" id="confirmpass" name="confirmpass" placeholder="Enter confirm password" />
                                            </div>
                                        </div>
                                    </div>

                                    <br />
                                    <div style={{ float: 'left' }}>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ marginLeft: -12 }} />
                                        <label for="vehicle1" style={{ textDecoration: 'none' }}> &nbsp;Yes, I want to receive Lottery Display
                                            emails</label><br />
                                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" style={{ marginLeft: 10 }} />
                                        <label for="vehicle2" style={{ textDecoration: 'none' }}> &nbsp;I agree to all the Term, <span
                                            style={{ color: 'rgb(90, 195, 230)' }}>Privacy Policy</span> and <span
                                                style={{ color: 'rgb(90, 195, 230)' }}>Fees</span></label><br />
                                    </div>


                                    <br /> <br />
                                    <div className="button input-box" style={{ width: 200 }} >
                                        <input type="submit" name="submit" value="Create Account" />
                                    </div>
                                    <div className="text sign-up-text" style={{ fontSize: 16 }}>Already have an account?<label
                                        for="flip" style={{ color: 'rgb(90, 195, 230)', textDecoration: 'none' }}>Login</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Test;