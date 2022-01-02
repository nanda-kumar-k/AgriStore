import styled from "styled-components";
import { LocalOffer} from "@material-ui/icons";
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

const Cart = () => {
    return (
        <CartContainer>
                <CartIteamContainer1>
                    <CartImagecontainer>
                    <Image src="https://cdn.shopify.com/s/files/1/0722/2059/products/MATCO-8-64-FUNGICIDE_200x.jpg?v=1601728459"/>
                    </CartImagecontainer>
                    <CartInfocontainer>
                        <h3>Product title</h3>
                        <p><b>Brand:</b></p>
                        <p>IN Stock/out Stock</p>
                        <CartInforowdisplay1>
                        <h4 style={{marginRight:"10px"}}>₹299</h4>
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
    )
}

export default Cart
