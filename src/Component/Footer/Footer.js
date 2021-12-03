import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="mt-5 pt-5">
            <div class="section bg-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="">
                                <h6 class="footer-heading text-uppercase text-white">Information</h6>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li><a href="#" target="_blank" rel="noreferrer">Pages</a></li>
                                    <li><a href="https://www.google.com/maps/place/Hello+Coders/@23.9096478,90.218658,18z/data=!4m5!3m4!1s0x3755ef9387f6a067:0x885cadeb8c3c50eb!8m2!3d23.9095664!4d90.2203467" target="_blank" rel="noreferrer">Location</a></li>
                                    <li><a href="#" target="_blank" rel="noreferrer">Features</a></li>

                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3">
                            <div class="">
                                <h6 class="footer-heading text-uppercase text-white">Resources</h6>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li><a href="#" target="_blank" rel="noreferrer">About Us</a></li>
                                    <li><a href="#" target="_blank" rel="noreferrer">Term &amp; Service</a></li>
                                    <li><a href="#" target="_blank" rel="noreferrer">Help</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-2">
                            <div class="">
                                <h6 class="footer-heading text-uppercase text-white">Help</h6>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li><a href="/register">Sign Up </a></li>
                                    <li><a href="/login">Login</a></li>
                                    <li><a href="/home" target="_blank" rel="noreferrer">Back to home</a></li>
                                    <li><a href="#" target="_blank" rel="noreferrer">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="">
                                <h6 class="footer-heading text-uppercase text-white">Contact Us</h6>
                                <p class="contact-info mt-4">  Contact us if need help with anything</p>
                                <p class="contact-info"> <i class="fas fa-phone-square-alt"></i> +8801621-869-524</p>
                                <div class="mt-5">
                                    <ul class="list-inline">
                                        <li class="list-inline-item icon1">
                                            <a href="https://www.facebook.com/hellocodersbd" target="_blank" rel="noreferrer">
                                                <i class="fab facebook footer-social-icon fa-facebook-f"></i>

                                            </a>
                                        </li>

                                        <li class="list-inline-item icon1">
                                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                                                <i class="fab twitter footer-social-icon fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li class="list-inline-item icon1"><a href="https://play.google.com/store" target="_blank" rel="noreferrer"><i class="fab google footer-social-icon fa-google"></i></a></li>

                                        <li class="list-inline-item icon1"><a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer"><i class="fab apple footer-social-icon fa-apple"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="text-center mt-5">
                    <p class="footer-alt mb-0 f-14">2021 <span className="text-warning">©</span> <span className="text-danger">Hello Coders BD</span> , All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

