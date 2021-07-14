import React from 'react';
import {Link} from 'react-router-dom';
import { BaseContainer } from '../web/layouts/Containers';





export function Body(){
    return(
        <BaseContainer>
           <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
                <div class="container d-flex align-items-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item"><Link to="#">Product Details</Link></li>
                    </ol>

                  
                </div>
            </nav>









             <div class="container">
                    <div class="product-details-top">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="product-gallery product-gallery-vertical">
                                                          
                                       <div class="row">
                                        <figure class="product-main-image">
                                            <img id="product-zoom" src="images/products/ICE_1155%20(2).jpg" data-zoom-image="images/products/ICE_1155%20(2).jpg" alt="product"/>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <Link to="#" id="btn-product-gallery" class="btn-product-gallery">
                                                <i class="icon-arrows"></i>
                                            </Link>
                                        </figure>
{/* 
                                         <div id="product-zoom-gallery" class="product-image-gallery">
                                            <a class="product-gallery-item active" href="#" data-image="assets/images/products/ICE_1028 (1) (1).jpg" data-zoom-image="assets/images/products/ICE_1028 (1) (1).jpg">
                                                <img src="assets/images/products/ICE_1028%20(1)%20(1).jpg" alt="product side">
                                            </a>

                                            <a class="product-gallery-item" href="#" data-image="assets/images/products/ICE_1027 (1).jpg" data-zoom-image="assets/images/products/ICE_1027 (1).jpg">
                                                <img src="assets/images/products/ICE_1027%20(1).jpg" alt="product cross">
                                            </a>

                                            <a class="product-gallery-item" href="#" data-image="assets/images/products/ICE_1128 (1).jpg" data-zoom-image="assets/images/products/ICE_1128 (1).jpg">
                                                <img src="assets/images/products/ICE_1128%20(1).jpg" alt="product with model">
                                            </a>

                                            <a class="product-gallery-item" href="#" data-image="assets/images/products/ICE_1003 (2).jpg" data-zoom-image="assets/images/products/ICE_1003 (2).jpg">
                                                <img src="images/products/ICE_1003%20(2).jpg" alt="product back"/>
                                            </a>
                                        </div> */}
                                    </div>
                                    
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="product-details">
                                    <h1 class="product-title">Layor's Feet</h1>

                                    <div class="product-price">
                                       &#8358;20,000                                    </div>

                                    <div class="product-content">
                                        <p>Shoe Costs N20,000</p>
                                    </div>

                                    <div class="details-filter-row details-row-size">
                                        <p>Color: As displayed</p>
                                    </div>


                                <form method="post" action="#" enctype="multipart/form-data">
                                    <div class="details-filter-row details-row-size">
                                        <label for="size">Size:</label>
                                        <div class="select-custom">
                                           <select required name="size" style={{fontSize:'15px', border: '1px solid navyblue', padding:'10px', width:'100%'}}>
                                            <option value="">Select Size</option>
                                            
                                                                                        
                                            <option value='Medium'>Medium</option>
                                            
                                                                                        
                                            <option value='Large'>Large</option>
                                            
                                                                                        
                                            <option value='Extra Large'>Extra Large</option>
                                            
                                                                                        
                                            
                                            
                                                
                                           </select>
                                        </div>
                                    </div>

                                    <div class="details-filter-row details-row-size">
                                        <label for="qty">Qty:</label>
                                        <div class="product-details-quantity">
                                            <input type="number" name="qty" id="qty" class="form-control" value="1" min="1" max="100" step="1" data-decimals="0" required/>
                                        </div>
                                    </div>
                                    <input type="hidden" name="name"  value="FF Navy Blue Pants"/>
                    					<input type="hidden" name="price"  value="20000"/>
                    					<input type="hidden" name="img" value="ICE_1028 (1) (1).jpg"/>
                                    <div class="product-details-action">
                                        <button name="addtocart"  class="btn-product btn-cart">Add To Cart</button>
                                    </div>
                                  
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>

                      </div>
        </BaseContainer>
    )
}