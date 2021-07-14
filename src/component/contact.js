import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import banner2 from '../img/banner2.jpg';
import { BaseContainer } from '../web/layouts/Containers';






export function Banner() {
    return (
        <BaseContainer>
            <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Contact us</li>
                    </ol>
                </div>


                <div class="page-content pb-0">
                    <div class="container">
                        <div class="page-header page-header-big text-center" style={{ backgroundImage: `url(${banner2})` }}>
                            <h1 class="page-title text-white">Contact us</h1>
                        </div>
                    </div>
                </div>
            </nav>




            <div class="page-content pb-0">
                <div class="container">
                	<div class="row">
                		<div class="col-lg-6 mb-2 mb-lg-0">
                			<h2 class="title mb-1">Contact Information</h2>
                			<div class="row">
                				<div class="col-sm-7">
                					<div class="contact-info">
                						<h3>The Office</h3>
                                    	<ul class="contact-list">
                							<li>
                								<i class="icon-map-marker"></i>
	                							Gbagada City Lagos Nigeria.
	                						</li>
                							<li>
                								<i class="icon-phone"></i>
                								<Link to="tel:+234 907 787 2893">+234 907 787 2893</Link>
                							</li>
                							<li>
                								<i class="icon-envelope"></i>
                								<Link to="mailto:info@layorsfeet.ng">info@layorsfeet.ng</Link>
                							</li>
                						</ul>
                					</div>
                				</div>

                				<div class="col-sm-5">
                					<div class="contact-info">
                						<h3>The Office</h3>

                						<ul class="contact-list">
                							<li>
                								<i class="icon-clock-o"></i>
	                							<span class="text-dark">Monday-Saturday</span> <br/>11am-7pm ET
	                						</li>
                							<li>
                								<i class="icon-calendar"></i>
                								<span class="text-dark">Sunday</span> <br/>12pm-3pm ET
                							</li>
                						</ul>
                					</div>
                				</div>
                			</div>
                		</div>
                		<div class="col-lg-6">
                			<h2 class="title mb-1">Got Any Questions?</h2>
                			<p class="mb-2">Use the form below to get in touch with the sales team</p>

                			<form action="https://www.layorsfeet.ng/contact.php" method="post" class="contact-form mb-3">
                				<div class="row">
                					<div class="col-sm-6">
                                        <label for="cname" class="sr-only">Name</label>
                						<input type="text" name="name" class="form-control" id="cname" placeholder="Name *" required/>
                					</div>

                					<div class="col-sm-6">
                                        <label for="cemail" class="sr-only">Email</label>
                						<input type="email" name="email" class="form-control" id="cemail" placeholder="Email *" required/>
                					</div>
                				</div>

                				<div class="row">
                					<div class="col-sm-6">
                                        <label for="cphone" class="sr-only">Phone</label>
                						<input type="tel" name="phone" class="form-control" id="cphone" placeholder="Phone"/>
                					</div>

                					<div class="col-sm-6">
                                        <label for="csubject" class="sr-only">Subject</label>
                						<input type="text" name="subject" class="form-control" id="csubject" placeholder="Subject"/>
                					</div>
                				</div>

                                <label for="cmessage" class="sr-only">Message</label>
                				<textarea class="form-control" name="message" cols="30" rows="4" id="cmessage" required placeholder="Message *"></textarea>

                				<button type="submit" name="message" class="btn btn-outline-primary-2 btn-minwidth-sm">
                					<span>SUBMIT</span>
            						<i class="icon-long-arrow-right"></i>
                				</button>
                			</form>
                		</div>
                	</div>

                    </div>
            </div>
       
        </BaseContainer>
     )
}