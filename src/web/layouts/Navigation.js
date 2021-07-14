import React from 'react';
import {Link} from 'react-router-dom';
// import './style.css';





export function Header(){
    return(
        <header class="header">
        <div class="header-middle sticky-header">
            <div class="container">
                <div class="header-left">
                    <button class="mobile-menu-toggler">
                        <span class="sr-only">Toggle mobile menu</span>
                        <i class="icon-bars"></i>
                    </button>
                    <a href="/" class="logo">
                        <img src="images/logo.png" alt="layor's Feet Logo" width="150" height="25"/>
                    </a>

                    <nav class="main-nav">
                        <ul class="menu sf-arrows">
                            <li>
                                <Link to="/" >Home</Link>
                            </li>
                             <li>
                                <Link to="/about" >About</Link>
                            </li>
                             <li>
                                <Link to="/shop" >Shop</Link>
                            </li>
                            
                             <li>
                                <Link to="/contact">Contact </Link>
                            </li>
                             </ul>
                    </nav>
                </div>

                <div class="header-right">
                    <div class="header-search">
                        <Link to="#" class="search-toggle" role="button" title="Search"><i class="icon-search"></i></Link>
                        <form action="https://www.layorsfeet.ng/search.php" method="post">
                            <div class="header-search-wrapper">
                                <label for="q" class="sr-only">Search</label>
                                <input type="search" class="form-control" name="keyword" id="q" placeholder="Search product..." required/>
                                <button class="btn btn-primary" type="submit" name="search"></button>

                            </div>
                        </form>
                    </div>
                    
                    
                       <div class="dropdown cart-dropdown">
                        <Link to="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                            <i class="icon-shopping-cart"></i>
                            <span class="cart-count">0</span>
                        </Link>

                        <div class="dropdown-menu dropdown-menu-right">
                            <div class="dropdown-cart-products">
                              
                                <br/><div style={{margin:'0 5px'}} class='alert alert-info' role='alert'>Cart is Empty. Add an item to cart</div> <br/>	
                                
                            </div>
                                                            <div class="dropdown-cart-total">
                                <span>Total</span>

                                <span class="cart-total-price">&#8358;0</span>
                            </div>

                            <div class="dropdown-cart-action">
                                <Link to="/cart" class="btn btn-primary">View Cart</Link>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
        </div>
    </header>
    )
}



export function Footer(){
    return (
        <footer class="footer footer-2">
            <div class="footer-middle border-0">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 ">
                            <div class="widget widget-about">
                                <img src="images/logo.png" alt="layor's Feet Logo" width="180px" height="25" />
                                <p>Layor's Feet is a collection of hand-made Shoes, Sandals, Heels, Slippers nspired by the West Coast lifestyle. Founded in 2020 and based in Nigeria. Lagos, every pair of Layor's Feet are hand-made in our factory. Dedicated to the simple idea that the best products are made with the best materials, Layor's Feet are constructed using the strongest, most supple leathers. </p>
                                <div class="social-icons">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <Link to="#" class="social-icon" target="_blank" title="Instagram"><i class="icon-instagram"></i></Link>
                                </div>
                            </div>

                        </div>


                        <div class="col-sm-3">
                            <div class="widget">
                                <h4 class="widget-title">Links</h4>

                                <ul class="widget-list">
                                    <li><Link to="about.html">About Layor's Feet</Link></li>
                                    <li><Link to="shop.html">Shop</Link></li>
                                    <li><Link to="contact.html">Contact us</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="widget">
                                <h4 class="widget-title">Contact</h4>

                                <ul class="widget-list">
                                    <li><b>Phone Number:</b> +234 907 787 2893</li>
                                    <li><b>Email:</b> info@layorsfeet.ng </li>
                                    <li><b>Shop Address:</b> Gbagada City Lagos Nigeria. </li>
                                </ul>
                            </div>
                        </div>


                        <div class="footer-bottom">
                            <div class="container">
                                   <p class="footer-copyright">Copyright © 2021 Atijosan Tech. All Rights Reserved.</p>
                                   <div class="social-icons social-icons-color">
                                    <span class="social-label">Social Media</span>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <Link to="#" class="social-icon social-instagram" title="Instagram" target="_blank"><i class="icon-instagram"></i></Link>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button id="scroll-top" title="Back to Top">
        <i class="icon-arrow-up"></i>
    </button>
    
   

      
   

    <div class="mobile-menu-container mobile-menu-light">
        <div class="mobile-menu-wrapper">
            <span class="mobile-menu-close"><i class="icon-close"></i></span>

            <form action="https://www.layorsfeet.ng/search.php" method="post" class="mobile-search">
                <label for="mobile-search" class="sr-only">Search</label>
                <input type="search" class="form-control" name="keyword" id="mobile-search" placeholder="Search in..." required/>
                <button class="btn btn-primary" name="search" type="submit"><i class="icon-search"></i></button>
            </form>
            
            <nav class="mobile-nav">
                <ul class="mobile-menu">
                    <li class="active"> <a href="index.html">Home</a> </li>
                    <li class=""> <a href="about.html">About</a> </li>
                    <li class=""> <a href="shop.html">Shop</a> </li>
                   
                    <li class=""> <a href="contact.html">Contact</a> </li>
               </ul>
            </nav>

            <div class="social-icons">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" class="social-icon" target="_blank" title="Instagram"><i class="icon-instagram"></i></a>
                
            </div>
        </div>
        </div>
    </footer>
    )
}