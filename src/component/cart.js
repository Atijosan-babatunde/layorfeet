import React from 'react';
import {Link} from 'react-router-dom';
import { BaseContainer } from '../web/layouts/Containers';
import banner2 from '../img/banner2.jpg';



export function Body(){
    return(
        <BaseContainer>
            <div class="page-header text-center" style={{ backgroundImage: `url(${banner2})` }}>
        		<div class="container">
        			<h1 class="page-title" style={{color:'white'}}>Shop Layor's Feet<span  style={{color:'white'}}>Shopping Cart</span></h1>
        		</div>
        	</div>
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item"><Link to="#">Shop</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                    </ol>
                </div>
            </nav>





         


            
            	<div class="cart">
	                <div class="container">
	                	<div class="row">
	                		<div class="col-lg-9">
	                		           
	                			<table class="table table-responsive table-cart">
									<thead>
										<tr>
											<th>Product</th>
											<th style={{paddingLeft: '10px'}}>Price</th>
											<th>Quantity</th>
											<th>Total</th>
											<th></th>
										</tr>
									</thead>

									<tbody>
									    <br/><div style={{margin: '0 20px'}} class='alert alert-danger' role='alert'>Cart is Empty. Add an item to cart</div> <br/>	    
									</tbody>
								</table>
	                		</div>

                            <aside  id="cartt" class="col-lg-3">
	                			<div class="summary summary-cart">
	                				<h3 class="summary-title">Cart Total</h3>
                    						
	                				<table class="table table-summary">
	                					<tbody>
	                						<tr class="summary-subtotal">
	                							<td>Subtotal:</td>
	                							<td>&#8358;0</td>
	                						</tr>

	                						
	                						    <tr style={{border:'none'}} class="summary-shipping">
	                							<td>Shipping: </td>
	                							<td>&#8358;0</td>
	                						</tr>
                                        </tbody>
	                				</table>

                                      {/* <form name="myform" action="https://www.layorsfeet.ng/cart.php#cartt" method="post" id="myForm">
                                             
                                               <div class="pro-details-size-content"> 
                                                <select style={{ fontSize:'15px', border: '1px solid navyblue', padding: '10px', margin: '7px 0', width:'100%',}} name="state" id="countySel" size="1" required>
                                                <option value="" selected="selected">Select Country</option>
                                                </select>
                                                <br/>
                                                <select style={{fontSize: '15px', border: '1px solid navyblue', padding: '10px', margin: '7px 0', width:'100%',}} name="countrya" id="stateSel" size="1" >
                                                <option value="" selected="selected">Select State</option>
                                                </select>
                                                
                                                <select name="district" style={{display:'none'}} id="districtSel" size="1">
                                                <option value="" style={{display:'none'}} type="hidden" selected="selected">Please select State first</option>
                                                </select><br/>  
                                                
	                								<div class="custom-control custom-radio">
														<input type="radio" style={{height:'20px'}} value="home" name="del" required id="standart-shipping" class="custom-control-input"/>
														<label class="custom-control-label" for="standart-shipping">Home Delivery:</label>
													</div>

	                								<div class="custom-control custom-radio">
														<input type="radio" style={{height:'20px'}} value="pick" name="del" required id="express-shipping" class="custom-control-input"/>
														<label class="custom-control-label" for="express-shipping">Pick Up:</label>
													</div>
	                						     <button name="ship" type="submit" class="btn btn-outline-primary-2 btn-order btn-block">CALCULATE</button>
                                                
                                            </form> */}
                                </div>
                                <Link to="/shop" class="btn btn-outline-dark-2 btn-block mb-3"><span>CONTINUE SHOPPING</span><i class="icon-refresh"></i></Link>
                            </aside>

                        </div>
                    </div>
                </div>

          
	                					
                                          
                                          
                                	                
        </BaseContainer>
    )
}



