import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import banner1 from '../img/banner1.jpg';



export function Header() {
    return (

        <header className="header header-5">
            <div className="header-middle sticky-header">
                <div className="container-fluid">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>

                        <Link to="/" className="logo">

                            <img src="images/logo.png" alt="" width="180px" height="25" />
                        </Link>

                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li className="active"><Link to="/" className="sf-with-ul">Home</Link></li>
                                <li><Link to="/about" className="sf-with-ul">About</Link></li>
                                <li><Link to="/shop" className="sf-with-ul">Shop</Link></li>
                                <li><Link to="/contact" className="sf-with-ul">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        <div className="header-search header-search-extended header-search-visible">
                            <Link to="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
                            <form action="https://www.layorsfeet.ng/search.php" method="post">
                                <div className="header-search-wrapper">
                                    <label for="q" className="sr-only">Search</label>
                                    <input type="search" className="form-control" name="keyword" id="q" placeholder="Search product ..." required />
                                    <button className="btn btn-primary" type="submit" name="search"><i className="icon-search"></i></button>
                                </div>
                            </form>
                        </div>


                        <div className="dropdown cart-dropdown">
                            <Link to="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count">0</span>
                            </Link>

                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">

                                    <br /><div style={{ margin: "0 5px" }} className='alert alert-info' role='alert'>Cart is Empty. Add an item to cart</div> <br />

                                </div>
                                <div className="dropdown-cart-total">
                                    <span>Total</span>

                                    <span className="cart-total-price">&#8358;0</span>
                                </div>

                                <div className="dropdown-cart-action">
                                    <Link to="/cart" className="btn btn-primary">View Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export function Banner() {
    return (
        <div className="intro-slider-container mb-0">
            <div className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light" data-toggle="owl" data-owl-options='{"nav": false, "dots": false}'>
                <div className="intro-slide" style={{ backgroundImage: `url(${banner1})` }}>
                    <div className="container intro-content text-center">
                        <h3 className="intro-subtitle text-white">Welcome to</h3><br />
                        <h1 className="intro-title text-white">Layor's Feet</h1>
                        <div className="intro-text text-white">The goal isn't to wear brands, it is to become one.</div>
                        <a href="/shop" className="btn btn-primary">Discover NOW</a>
                    </div>
                </div>

            </div>

            <span className="slider-loader text-white"></span>
        </div>
    )
}

export function New() {
    return (
        <div class="container pt-6 new-arrivals">
            <div class="heading heading-center mb-3">
                <h2 class="title">New Arrivals</h2>

                <ul class="nav nav-pills justify-content-center" role="tablist">
                    <li class="nav-item">
                        <Link class="nav-link active" id="new-all-link" data-toggle="tab" to="#new-all-tab" role="tab" aria-controls="new-all-tab" aria-selected="true">All</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" id="new-shirt-link" data-toggle="tab" to="#new-shirt-tab" role="tab" aria-controls="new-shirt-tab" aria-selected="false">Shoes</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" id="new-pant-link" data-toggle="tab" to="#new-pant-tab" role="tab" aria-controls="new-pant-tab" aria-selected="false">Slippers</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" id="new-sleeve-link" data-toggle="tab" to="#new-sleeve-tab" role="tab" aria-controls="new-sleeve-tab" aria-selected="false">Heels</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" id="new-access-link" data-toggle="tab" to="#new-access-tab" role="tab" aria-controls="new-access-tab" aria-selected="false">Sandals</Link>
                    </li>
                </ul>
            </div>

            <div class="tab-content">
                <div class="tab-pane p-0 fade show active" id="new-all-tab" role="tabpanel" aria-labelledby="new-all-link">
                    <div class="products">
                        <div class="row justify-content-center">

                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-2">
                                    <figure class="product-media">
                                        <Link to="/product1">
                                            <img src="images/products/product1.jpg" alt="Product" class="product-image" />
                                        </Link>
                                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <div class="product-action product-action-transparent">
                                            <Link to="/product1" class="btn-product btn-cart"><span>add to cart</span></Link>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a>Shoe</a>
                                        </div>
                                        <h3 class="product-title"><Link to="/product1">Layor's Feet Shoe</Link></h3>
                                        <div class="product-price">
                                            &#8358;15,000                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-2">
                                    <figure class="product-media">
                                        <Link to="/product2">
                                            <img src="images/products/ICE_1106%20(1)%20(1).jpg" alt="Product" class="product-image" />
                                        </Link>

                                        <div class="product-action product-action-transparent">
                                            <Link to="/product2" class="btn-product btn-cart"><span>add to cart</span></Link>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a>Slippers</a>
                                        </div>
                                        <h3 class="product-title"><Link to="/product2">Layor's Feet Black</Link></h3>
                                        <div class="product-price">
                                            &#8358;17,000                                            </div>
                                    </div>
                                </div>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-2">
                                    <figure class="product-media">
                                        <Link to="/product3">
                                            <img src="images/products/ICE_1056%20(2).jpg" alt="Product" class="product-image" />
                                        </Link>

                                        <div class="product-action product-action-transparent">
                                            <Link to="/product3" class="btn-product btn-cart"><span>add to cart</span></Link>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a>Shoe</a>
                                        </div>
                                        <h3 class="product-title"><a href="/product3">Layor's Feet White</a></h3>
                                        <div class="product-price">
                                            &#8358;15,000                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-2">
                                    <figure class="product-media">
                                        <Link to="/product4">
                                            <img src="images/products/ICE_1028%20(1)%20(1).jpg" alt="Product" class="product-image" />
                                        </Link>

                                        <div class="product-action product-action-transparent">
                                            <a href="/productd4" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a>Heel</a>
                                        </div>
                                        <h3 class="product-title"><Link to="/product4">Layor's Feet Gold</Link></h3>
                                        <div class="product-price">
                                            &#8358;20,000                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-2">
                                    <figure class="product-media">
                                        <Link to="/product5">
                                            <img src="images/products/IC.jpg" alt="Product" class="product-image" />
                                        </Link>

                                        <div class="product-action product-action-transparent">
                                            <Link to="/product5" class="btn-product btn-cart"><span>add to cart</span></Link>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a>Sandal</a>
                                        </div>
                                        <h3 class="product-title"><Link to="/product5">Layor's Feet White</Link></h3>
                                        <div class="product-price">
                                            &#8358;5,000                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-2">
                                    <figure class="product-media">
                                        <Link to="/product6">
                                            <img src="images/products/ICE_1089%20(1).jpg" alt="Product" class="product-image" />
                                        </Link>

                                        <div class="product-action product-action-transparent">
                                            <Link to="/product6" class="btn-product btn-cart"><span>add to cart</span></Link>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a>Slippers</a>
                                        </div>
                                        <h3 class="product-title"><Link to="/product6">Layor's Feet Black</Link></h3>
                                        <div class="product-price">
                                            &#8358;10,000                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-2">
                                    <figure class="product-media">
                                        <Link to="/product7">
                                            <img src="images/products/ICE_1064%20(1)%20(2).jpg" alt="Product" class="product-image" />
                                        </Link>

                                        <div class="product-action product-action-transparent">
                                            <Link to="/product7" class="btn-product btn-cart"><span>add to cart</span></Link>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a>Heel</a>
                                        </div>
                                        <h3 class="product-title"><Link to="/product7">Layor's Feet Black</Link></h3>
                                        <div class="product-price">
                                            &#8358;5,000                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-2">
                                    <figure class="product-media">
                                        <Link to="/product8">
                                            <img src="images/products/ICE_1155%20(2).jpg" alt="Product" class="product-image" />
                                        </Link>

                                        <div class="product-action product-action-transparent">
                                            <Link to="/product8" class="btn-product btn-cart"><span>add to cart</span></Link>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a>Shoe</a>
                                        </div>
                                        <h3 class="product-title"><Link to="/product8">Layor's Feet Black</Link></h3>
                                        <div class="product-price">
                                            &#8358;3,500                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane p-0 fade" id="new-shirt-tab" role="tabpanel" aria-labelledby="new-shirt-link">
                    <div class="products">
                        <div class="row justify-content-center">

                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-2">
                                    <figure class="product-media">
                                        <Link to="product53e5.html?ID=5">
                                            <img src="images/products/ICE_1100%20(2).jpg" alt="Product" class="product-image" />
                                        </Link>

                                        <div class="product-action product-action-transparent">
                                            <Link to="product53e5.html?ID=5" class="btn-product btn-cart"><span>add to cart</span></Link>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a>shoe</a>
                                        </div>
                                        <h3 class="product-title"><Link to="product53e5.html?ID=5">Layor's Feet Shoe</Link></h3>
                                        <div class="product-price">
                                            &#8358;15,000                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-2">
                                    <figure class="product-media">
                                        <Link to="productdfb4.html?ID=1">
                                            <img src="images/products/ICE_1056%20(2).jpg" alt="Product" class="product-image" />
                                        </Link>

                                        <div class="product-action product-action-transparent">
                                            <Link to="productdfb4.html?ID=1" class="btn-product btn-cart"><span>add to cart</span></Link>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a>Shoe</a>
                                        </div>
                                        <h3 class="product-title"><Link to="productdfb4.html?ID=1">Layor's Feet Shoe</Link></h3>
                                        <div class="product-price">
                                            &#8358;15,000                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane p-0 fade" id="new-pant-tab" role="tabpanel" aria-labelledby="new-pant-link">
                    <div class="products">
                        <div class="row justify-content-center">
                            <div class="row justify-content-center">

                                <div class="col-6 col-md-4 col-lg-3">
                                    <div class="product product-2">
                                        <figure class="product-media">
                                            <Link to="productdc08.html?ID=3">
                                                <img src="images/products/ICE_1028%20(1)%20(1).jpg" alt="Product" class="product-image" />
                                            </Link>

                                            <div class="product-action product-action-transparent">
                                                <Link to="productdc08.html?ID=3" class="btn-product btn-cart"><span>add to cart</span></Link>
                                            </div>
                                        </figure>

                                        <div class="product-body">
                                            <div class="product-cat">
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a>Heel</a>
                                            </div>
                                            <h3 class="product-title"><Link to="productdc08.html?ID=3">Layor's Feet Blue</Link></h3>
                                            <div class="product-price">
                                                &#8358;20,000                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>          </div>
                    </div>
                </div>
                <div class="tab-pane p-0 fade" id="new-access-tab" role="tabpanel" aria-labelledby="new-access-link">
                    <div class="products">
                        <div class="row justify-content-center">
                            <div class="row justify-content-center">

                                <div class="col-6 col-md-4 col-lg-3">
                                    <div class="product product-2">
                                        <figure class="product-media">
                                            <Link to="productfc86.html?ID=8">
                                                <img src="images/products/ICE_1064%20(1)%20(2).jpg" alt="Product" class="product-image" />
                                            </Link>

                                            <div class="product-action product-action-transparent">
                                                <Link to="productfc86.html?ID=8" class="btn-product btn-cart"><span>add to cart</span></Link>
                                            </div>
                                        </figure>

                                        <div class="product-body">
                                            <div class="product-cat">
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a>Slippers</a>
                                            </div>
                                            <h3 class="product-title"><Link to="productfc86.html?ID=8">Layor's Feet Black</Link></h3>
                                            <div class="product-price">
                                                &#8358;5,000                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col-lg-3">
                                    <div class="product product-2">
                                        <figure class="product-media">
                                            <Link to="productc655.html?ID=7">
                                                <img src="images/products/ICE_1070%20(1)%20(1).jpg" alt="Product" class="product-image" />
                                            </Link>

                                            <div class="product-action product-action-transparent">
                                                <Link to="productc655.html?ID=7" class="btn-product btn-cart"><span>add to cart</span></Link>
                                            </div>
                                        </figure>

                                        <div class="product-body">
                                            <div class="product-cat">
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a>Slippers</a>
                                            </div>
                                            <h3 class="product-title"><a href="productc655.html?ID=7">Layor's Feet White</a></h3>
                                            <div class="product-price">
                                                &#8358;5,000                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col-lg-3">
                                    <div class="product product-2">
                                        <figure class="product-media">
                                            <Link to="product3439.html?ID=6">
                                                <img src="images/products/ICE_1155%20(2).jpg" alt="Product" class="product-image" />
                                            </Link>

                                            <div class="product-action product-action-transparent">
                                                <Link to="product3439.html?ID=6" class="btn-product btn-cart"><span>add to cart</span></Link>
                                            </div>
                                        </figure>

                                        <div class="product-body">
                                            <div class="product-cat">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a>Slippers</a>
                                            </div>
                                            <h3 class="product-title"><a href="product3439.html?ID=6">Layor's Feet Black</a></h3>
                                            <div class="product-price">
                                                &#8358;3,500                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col-lg-3">
                                    <div class="product product-2">
                                        <figure class="product-media">
                                            <Link to="product5ced.html?ID=4">
                                                <img src="images/products/ICE_1089%20(1).jpg" alt="Product" class="product-image" />
                                            </Link>

                                            <div class="product-action product-action-transparent">
                                                <Link to="product5ced.html?ID=4" class="btn-product btn-cart"><span>add to cart</span></Link>
                                            </div>
                                        </figure>

                                        <div class="product-body">
                                            <div class="product-cat">
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a>Shoe</a>
                                            </div>
                                            <h3 class="product-title"><a href="product5ced.html?ID=4">Layor's Feet Black</a></h3>
                                            <div class="product-price">
                                                &#8358;10,000                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane p-0 fade" id="new-sleeve-tab" role="tabpanel" aria-labelledby="new-sleeve-link">
                    <div class="products">
                        <div class="row justify-content-center">
                            <div class="row justify-content-center">
                            
                                <div class="col-6 col-md-4 col-lg-3">
                                    <div class="product product-2">
                                        <figure class="product-media">
                                            <Link to="product1c06.html?ID=2">
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <img src="images/products/ICE_1106%20(1)%20(1).jpg" alt="Product" class="product-image" />
                                            </Link>

                                            <div class="product-action product-action-transparent">
                                                <Link to="product1c06.html?ID=2" class="btn-product btn-cart"><span>add to cart</span></Link>
                                            </div>
                                        </figure>

                                        <div class="product-body">
                                            <div class="product-cat">
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a>Slippers</a>
                                            </div>
                                            <h3 class="product-title"><Link to="product1c06.html?ID=2">Layor's Feet Navy Blue</Link></h3>
                                            <div class="product-price">
                                                &#8358;17,000                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>           </div>
                    </div>
                </div>

            </div>

            <div class="more-container text-center mt-1 mb-3">
                <Link to="/shop" class="btn btn-outline-primary-2 btn-round btn-more">Load more</Link>
            </div>
        </div>
    )
}

export function Categories() {
    return (


        <div class="container">
            <div class="heading heading-center mb-3">
                <h2 class="title">Product Categories</h2>
            </div>


            <div class="owl-carousel owl-simple" data-toggle="owl"
                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":1
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true,
                                            "dots": false
                                        }
                                    }
                                }'>
                <div class="banner banner-cat">
                    <Link to="/shoes">
                        <img src="images/tsh.jpg" alt="Layor's Feet Shoes" />
                    </Link>

                    <div class="banner-content banner-content-static text-center">
                        <h3 class="banner-title">Shoes</h3>
                        <h4 class="banner-subtitle">2 Products</h4>
                        <Link to="/shop" class="banner-link">Shop Now</Link>
                    </div>
                </div>

                <div class="banner banner-cat">
                    <Link to="/heels">
                        <img src="images/pants.jpg" alt="FF Pants" />
                    </Link>

                    <div class="banner-content banner-content-static text-center">
                        <h3 class="banner-title">Heels</h3>
                        <h4 class="banner-subtitle">1 Products</h4>
                        <Link to="/shop" class="banner-link">Shop Now</Link>
                    </div>
                </div>

                <div class="banner banner-cat">
                    <Link to="/slippers">
                        <img src="images/slv.jpg" alt="Family First Sleeves" />
                    </Link>

                    <div class="banner-content banner-content-static text-center">
                        <h3 class="banner-title">Slippers</h3>
                        <h4 class="banner-subtitle">3 Products</h4>
                        <Link to="/shop" class="banner-link">Shop Now</Link>
                    </div>
                </div>

                <div class="banner banner-cat">
                    <Link to="sandals">
                        <img src="images/caps.jpg" alt="Family First Caps" />
                    </Link>

                    <div class="banner-content banner-content-static text-center">
                        <h3 class="banner-title">Sandals</h3>
                        <h4 class="banner-subtitle">4 Products</h4>
                        <Link to="/shop" class="banner-link">Shop Now</Link>
                    </div>
                </div>


            </div>



        </div>


    )
}


export function Footer() {
    return (
        <footer class="footer footer-2">
            <div class="footer-middle border-0">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 ">
                            <div class="widget widget-about">
                                <img src="images/logo.png" alt="layor's Feet Logo" width="180px" height="25" />
                                <p>Layor's Feet is a collection of hand-made Shoes, Sandals, Heels, Slippers nspired by the West Coast lifestyle. Founded in 2020 and based in Nigeria. Lagos, every pair of Layor's Feet are hand-made in our factory. Dedicated to the simple idea that the best products are made with the best materials, Layor's Feet are constructed using the strongest, most supple leathers. </p>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <div class="social-icons">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" class="social-icon" target="_blank" title="Instagram"><i class="icon-instagram"></i></a>
                                </div>
                            </div>

                        </div>


                        <div class="col-sm-3">
                            <div class="widget">
                                <h4 class="widget-title">Links</h4>

                                <ul class="widget-list">
                                    <li><Link to="/about">About Layor's Feet</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/contact">Contact us</Link></li>
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
                                   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                   <div class="social-icons social-icons-color">
                                   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <span class="social-label">Social Media</span>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" class="social-icon social-instagram" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
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
                    <li class="active"> <a href="/">Home</a> </li>
                    <li class=""> <a href="/about">About</a> </li>
                    <li class=""> <a href="/shop">Shop</a> </li>
                   
                    <li class=""> <a href="/contact">Contact</a> </li>
               </ul>
            </nav>
             {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <div class="social-icons">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" class="social-icon" target="_blank" title="Instagram"><i class="icon-instagram"></i></a>
                
            </div>
        </div>
        </div>
    </footer>
    )
}