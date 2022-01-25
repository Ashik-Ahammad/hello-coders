import React from 'react';
import './Footer.css';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {

    

    return (
        <div className="mt-5 pt-5">
            
            {/* Scroll button for going to top */}
            <ScrollToTop  smooth color="red" />
            <div class="section bg-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="">
                                <h6 class="footer-heading text-uppercase text-white">Information</h6>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li><a href="https://www.google.com/maps/place/Hello+Coders/@23.9096478,90.218658,18z/data=!4m5!3m4!1s0x3755ef9387f6a067:0x885cadeb8c3c50eb!8m2!3d23.9095664!4d90.2203467" target="_blank" rel="noreferrer">Location</a></li>

                                    <li><a href="/aboutus" target="_blank" rel="noreferrer">Privacy Policy</a></li>

                                    <li><a href="https://www.facebook.com/messages/t/103908804640203" target="_blank" rel="noreferrer">Send Message</a></li>

                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3">
                            <div class="">
                                <h6 class="footer-heading text-uppercase text-white">Resources</h6>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li><a href="/aboutus" target="_blank" rel="noreferrer">About Us</a></li>
                                    <li><a href="#termsService" >Terms &amp; Service</a></li>
                                    <li><a href="/contact" target="_blank" rel="noreferrer">Help</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-2">
                            <div class="">
                                <h6 class="footer-heading text-uppercase text-white">Help</h6>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li><a href="/register">Sign Up </a></li>
                                    <li><a href="/login">Login</a></li>
                                    <li><a href="/home">Back to home</a></li>

                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="">
                                <h6 class="footer-heading text-uppercase text-white">Contact Us</h6>
                                <p class="contact-info mt-4">  Contact us if need help with anything</p>
                                <p class="contact-info"> <i class="fas fa-phone-square-alt text-info p-1"></i> <span className="text-white">+8801307-450-464</span></p>
                                <div class="mt-5">
                                    <ul class="list-inline">
                                        <li class="list-inline-item icon1">
                                            <a href="https://www.facebook.com/hellocodersbd" target="_blank" rel="noreferrer">
                                                <i class="fab facebook footer-social-icon fa-facebook-f"></i>

                                            </a>
                                        </li>

                                        <li class="list-inline-item icon1"><a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i class="fab youtube footer-social-icon fa-youtube youtube-style"></i></a></li>

                                        <li class="list-inline-item icon1">
                                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                                <i class="fab linkedin footer-social-icon fa-linkedin linked-style"></i>
                                            </a>
                                        </li>

                                        <li class="list-inline-item icon1"><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noreferrer"><i class="fas fa-envelope mail-style footer-social-icon"></i></a></li>


                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="text-center mt-5">
                    <p class="footer-alt mb-0 f-14">2022 <span className="text-warning">©</span> <span className="text-danger">Hello Coders BD</span> , All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

