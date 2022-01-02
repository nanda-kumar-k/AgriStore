import { Lock } from "@material-ui/icons";
import styled from "styled-components";
import {ProductsListsinfo} from '../information/Data'
import ProductsList from "../ProductsComponents/ProductsList";
import Cart from './Cart'
import {useSelector} from "react-redux"
import { LocalOffer} from "@material-ui/icons";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userRequest } from "../requestMethods"



const Formove = styled.div`
    position: sticky;
    margin-bottom: 20px;
    position: sticky;
    top: 0px;
    background-color: white;
    
`

const Title = styled.h2`
    background: linear-gradient(rgb(168, 247, 247),white);
   padding: 10px;
   border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   
   

`

const Container = styled.div`
    flex: 1;
    display: flex;
    margin: 20px 100px;
    position: relative;
    
`
const Container1 = styled.div`
    flex: 2.5;
    display: flex;
    flex-direction: column;
    position: relative;
`

const Containerdivide = styled.div`
    display: flex;
    flex-direction: column;
`

const Container2 = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 10px;
    height: 1200px;
`

const IteamContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 0 30px;
    padding: 10px;
`
const Info1rowdisplay2 = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin: 8px 0px;
`

const BuyDisplay = styled.div`
    display: flex;
    padding: 5px;
    background-color: orange;
    text-align: center;
    justify-content: center;
    margin: 10px 20px;
    font-size: 18px;
    border-radius: 10px;
`

const Payment = styled.img`
    width: 70%;
    margin-top: 5px;
    margin-left: 25px;
`;

const Icontext = styled.div`
    display: flex;
    font-size: 18px;
    margin-top: 10px;
`
const Emp = styled.div`
    align-items: center;
    text-align: center;
    border-radius: 20px;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 `




const CartContainer = styled.div`
    flex: 2.5;
`
const CartIteamContainer1 = styled.div`
    display: flex;
    margin-bottom: 20px;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const Image = styled.img`
    height: 180px;
    width: 180px;
    transition: all 1s ease-out;
    border-radius: 20px; 
`

const CartImagecontainer = styled.div`
    flex: 1;
    background-color:white ;
    padding: 20px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    &:hover ${Image}{
        transform: scale(0.9);
    }
`


const CartInfocontainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    padding: 10px 30px ;
    margin-left: 20px;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`

const CartInforowdisplay = styled.div`
    display: flex;
    margin-top: 5px;
    border-radius: 10px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 150px;

`
const CartInforowdisplay1 = styled.div`
    display: flex;
    margin-top: 10px;
`
const CartDisplay = styled.div`
    margin-right: 50px;
    margin-left: 30px;
    padding: 2px 5px;
    border-radius: 5px;
    border-style: ridge;
`

const CartSelect = styled.select`
    padding: 2px;
    width: 50px;
    margin-left: 10px;
    border: none;
`


const Carts = () => 
{

    let count =0;

    const Item1 = ProductsListsinfo.map((item) => {
    
    if(count==0 )
    {
         count++;
         return <ProductsList item={item} key={item.id} />
         
    }
    
    })
    
    const cart = useSelector((state) => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate();
  
    const onToken = (token) => {
      setStripeToken(token);
    };
  
    useEffect(() => {
      const makeRequest = async () => {
        try {
          const res = await userRequest.post("/checkout/payment", {
            tokenId: stripeToken.id,
            amount: 500,
          });
          history.push("/success", {
            stripeData: res.data,
            products: cart, });
        } catch {}
      };
      stripeToken && makeRequest();
    }, [stripeToken, cart.total, history]);
    return (
        <Container>
        <Container1>
            <Containerdivide>
            <Formove>
            <Title>Shopping Cart</Title>
            <br/>
            <hr/>
            </Formove>
            {
                cart.products.map((product)=>(
                    <CartContainer>
                <CartIteamContainer1>
                    <CartImagecontainer>
                    <Image src={product.img}/>
                    </CartImagecontainer>
                    <CartInfocontainer>
                        <h3>{product.title}</h3>
                        <p><b>Brand:{product.companyname}</b></p>
                        <p>IN Stock/out Stock:{product.inStock}</p>
                        <CartInforowdisplay1>
                        <h4 style={{marginRight:"10px"}}>₹{product.price}</h4>
                        <p style={{marginRight:"10px"}}><strike>₹699</strike></p>
                        <h4>57% Off</h4>
                        <LocalOffer style={{color:"green"}}/>
                        </CartInforowdisplay1>
                        <CartInforowdisplay>
                            <p style={{marginLeft:"10px"}}><b>Quantity:</b></p>
                            <CartSelect>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </CartSelect>
                        </CartInforowdisplay>
                        <CartInforowdisplay1>
                            <CartDisplay>
                                <p>Save for later</p>
                            </CartDisplay>
                            <CartDisplay>
                                <p>Delete</p>
                            </CartDisplay>
                        </CartInforowdisplay1>
                    </CartInfocontainer>
                </CartIteamContainer1>
               
            </CartContainer>
                    ))
            }
            
            </Containerdivide>
            <Containerdivide>
            <Formove>
            <Title>Saved For Later </Title>
            <br/>
            <hr/>
            </Formove>
            <Cart/>
            
            </Containerdivide>
        </Container1>
            <Container2>
            
                <IteamContainer2>
                    <h3>PRICE DETAILS</h3><br/>
                    <hr/>
                    <Info1rowdisplay2>
                        <p>Price(2 items):</p>
                        <p>2500</p>
                    </Info1rowdisplay2>
                    <Info1rowdisplay2>
                        <p>Discount:</p>
                        <p>-200</p>
                    </Info1rowdisplay2>
                    <Info1rowdisplay2>
                        <p>Delivery Charges</p>
                        <p>Free Delivery</p>
                    </Info1rowdisplay2>
                    <hr/>
                    <Info1rowdisplay2>
                        <h4>Sub Total:</h4>
                        <h4>{cart.total}</h4>
                    </Info1rowdisplay2>
                    <StripeCheckout
                    name="AGRI STORE"
                    image="https://i.ibb.co/ZWW2Kp0/log.png"
                    billingAddress
                    shippingAddress
                    description={`Your total is $${cart.total}`}
                    amount={cart.total * 100}
                    token={onToken}
                    stripeKey="pk_test_51JpJ7ySJ7eoGff2BbUhJVEtuh4UR4mF3Igjd9Xk90mrlF4lImsRpnUkkppnusLLrXGjTJATOmJ6QLPtCFnKoS8l900FmAapiK5"
                  >
                  <BuyDisplay>

                  <p>proceed to Buy</p>
                  
                  </BuyDisplay>
                  </StripeCheckout>
                    
                    <Icontext>
                    <Lock />
                    <p >Secure transaction</p>
                    </Icontext>
                    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </IteamContainer2>
                    <br/>
                <IteamContainer2>
                <p style={{marginLeft:"25%"}}>Have one to sell?</p>
                <Emp>Sell on AgriStore</Emp>
                </IteamContainer2>
                <br/>
                <IteamContainer2>
                <p style={{marginLeft:"18%"}}>Have one to Empolyee?</p>
                <Emp>Be Agri Employee</Emp>
                </IteamContainer2>
                <br/>
                <IteamContainer2>
                    {Item1}
                </IteamContainer2>
            
            </Container2>
            
        </Container>
        
       
    )
}

export default Carts
