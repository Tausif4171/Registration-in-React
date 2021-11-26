import React, { useState, useEffect } from 'react';
import './style.css';
import register from '../images/register.jpg';
import logoLight from '../images/logoLight.png';
import logoDark from '../images/logoDark.jpg';
import loginImage from '../images/loginImage.jpg';


const Test = () => {

    return (

        <div id="body">
            <div className="container">
                <input type="checkbox" id="flip" />
                <div className="cover">
                    <div className="front">
                        <img src={loginImage} style={{ marginLeft: -300 }} alt="error" />

                    </div>
                    <div className="back" style={{ backgroundColor: 'blueviolet' }}>

                        <img style={{ width: 60, height: 70, marginLeft: -180, marginTop: 12 }} src={logoLight} alt="error" />
                        <h3 style={{ textAlign: 'center', marginTop: 32, marginRight: 80, color: 'white' }}>Lottery Display</h3>
                        <h2 style={{ textAlign: 'center', marginTop: 32, color: 'white' }}>A few clicks away from <br />creating your
                            Lottery
                            Display</h2>
                        <img className="backImg" src={register}
                            style={{ width: 600, height: 451, marginTop: 30, marginLeft: -300 }} alt="error" />



                    </div>
                </div>
                <div className="forms" style={{ float: 'left' }}>
                    <table>
                        <tr style={{ float: 'left' }}>
                            <td><img src={logoDark} style={{ width: 60, height: 70 }} alt="error" /></td>
                            <td>
                                <h3 style={{ color: 'black' }}>Lottery Display</h3>
                            </td>
                        </tr>
                    </table>

                    <div className="form-content">
                        <div className="login-form">
                            <div style={{ lineHeight: 2, marginTop: -68 }}>
                                <div className="title" style={{ float: 'left' }}>Login</div>
                                <br />

                                <h4 style={{ float: 'left', marginTop: 50, marginLeft: -64 }}>Login to your account</h4>

                            </div>

                            <h6 style={{ float: 'left', marginTop: 20 }}>Thank you for get back to Lottery Display lets access out the best recommendation for you.
                            </h6>

                            <form action="#">

                                <div className="input-boxes" style={{ marginTop: 140 }}>
                                    <div className="input-box">
                                        <i className="fas fa-user"></i>
                                        <input type="text" placeholder="Enter your username" required />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-lock"></i>
                                        <input type="password" placeholder="Enter your password" required />
                                    </div>

                                    <div className="text" style={{ fontSize: 16, marginTop: 12 }}>
                                        &nbsp;<input type="checkbox" id="test" name="test" value="test" style={{ float: 'left', marginTop: 3 }} />
                                        <label for="test" style={{ color: 'grey', textDecoration: 'none', float: 'left' }}> &nbsp;&nbsp;Remember me</label>
                                        <a href="abc.js" style={{ float: 'right', color: 'rgb(90, 195, 230)', textDecoration: 'none' }}>Reset password?</a>
                                    </div>
                                    <br />
                                    <div className="button input-box">
                                        <input type="submit" value="Sign In" />
                                    </div>
                                    <div className="text sign-up-text" style={{ fontSize: 16 }}>Don't have an account yet? <label
                                        for="flip" style={{ color: 'rgb(90, 195, 230)', textDecoration: 'none' }}>Join Lottery
                                        Display</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="signup-form">
                            <div className="title" style={{ float: 'left', lineHeight: 2 }}>Register</div>

                            <form action="#" style={{ marginTop: 80 }}>
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
                                                <input type="text" placeholder="Enter first name" required />
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="input-box">
                                                <i className="fas fa-user"></i>
                                                <input type="text" placeholder="Enter last name" required />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">

                                        <div className="column">
                                            <div className="input-box">

                                                <i className="fas fa-phone"></i>
                                                <input type="text" placeholder="Enter phone number" required />
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="input-box">
                                                <i className="fas fa-envelope"></i>
                                                <input type="email" placeholder="Enter email" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="column">
                                            <div className="input-box">
                                                <i className="fas fa-lock"></i>
                                                <input type="password" placeholder="Enter password" required />
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="input-box">
                                                <i className="fas fa-lock"></i>
                                                <input type="password" placeholder="Enter confirm password" required />
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
                                    <div className="button input-box" style={{ width: 200 }}>
                                        <input type="submit" value="Create Account" />
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