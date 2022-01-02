import styled from "styled-components";
import { LocalOffer} from "@material-ui/icons";
import Orderlists from "./Orderlists";
import { useState } from "react";

const Container = styled.div`
    flex: 2.5;
    display: flex;
    flex-direction: column;
`
const IteamContainer1 = styled.div`
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

const Imagecontainer = styled.div`
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

const Infodisplay = styled.div`
    flex: 3;
    display: flex;
    background-color: white;
    width: 100%;
    padding: 10px 30px ;
    margin-left: 20px;
    border-radius: 20px ;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`

const Infocontainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
   

`

const Infotrackdisplay = styled.div`
    flex: 2;
    //background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    //position: relative;
`

const Track = styled.div`
    border-radius: 5px ;
    border-style: ridge;
    border-width: 2px;
    padding: 2px 20px;
    margin-top: 10px;
    color: blue;
`


const Ordermoreinfo = styled.div`
    background-color: white;
    display:  ${(props) => props.value};
    border-radius: 20px ;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 20px;
    
`

const Moreinfo = styled.button`
    padding: 2px 10px;
    border-radius: 5px ;
    border-width: 1px;
    background-color: white;
    margin: 55px 0px 0px 220px;
    cursor: pointer;
    &:hover{
        background-color: orange;
    }

`

const Shipping = styled.div`
    flex: 2;
    padding: 10px;
`

const Payment = styled.div`
    flex: 2;
    padding: 10px;
`

const Ordersummery = styled.div`
    flex: 2;
    padding: 10px;
`

const Ordersummeryrow = styled.div`
    display: flex;
    justify-content: space-between;
`

const Orderlist = () => 
{
    const [value, setSlideIndex] = useState("none");

    const fun=(val)=>{
        if(val=="more"){
            setSlideIndex('flex')
        }
        else{
            setSlideIndex('none')
        }
    }

    return (
        <Container>
                <IteamContainer1>
                    <Imagecontainer>
                    <Image src="https://cdn.shopify.com/s/files/1/0722/2059/products/MATCO-8-64-FUNGICIDE_200x.jpg?v=1601728459"/>
                    </Imagecontainer>
                    <Infodisplay>
                        <Infocontainer>
                            <h4>Order# 402-3008245-53248251</h4>
                            <p>order on date</p>
                            <h3 style={{marginTop:"10px"}}>Product title</h3>
                            <p><b>Brand:</b></p>
                            <h4 style={{marginRight:"10px"}}>₹299</h4>
                        </Infocontainer>
                        <Infotrackdisplay>
                            <h3 style={{marginTop:"30px"}}>Arriving on Monday</h3>
                            <Track>
                                <p>Request Cancellation</p>
                            </Track>
                            <Moreinfo onClick={() => fun("more")}>
                                    more
                                </Moreinfo>
                        </Infotrackdisplay>
                    </Infodisplay>
                    
                </IteamContainer1>
                
                <Ordermoreinfo  value={value}>
                            <Shipping>
                                <h3>Shipping Address</h3>
                                <p>Name</p>
                                <p>H-no</p>
                                <p>Street, village</p>
                                <p>Town, state,pincode</p>
                                <p>india</p>
                                <p>phone number</p>
                            </Shipping>
                            <Payment>
                                <h3>Payment Method</h3>
                                <p>Pay on Delivery(Cash/Card). Cash on delivery(COD) available. Card/Net banking acceptance subject to device availability.</p>
                            </Payment>
                            <Ordersummery>
                                
                                <h3>Order Summary</h3>
                                <Ordersummeryrow>
                                    <p>Item Subtotal:</p>
                                    <p>₹100</p>
                                </Ordersummeryrow>
                                <Ordersummeryrow>
                                    <p>Shipping:</p>
                                    <p>-₹40</p>
                                </Ordersummeryrow>
                                <Ordersummeryrow>
                                <p>Total</p>
                                <p>₹200</p>
                                </Ordersummeryrow>
                                <hr/>
                                <Ordersummeryrow>
                                <p><b>Grand Total:</b></p>
                                <p>₹200</p>
                                </Ordersummeryrow>
                                <Moreinfo onClick={() => fun("less")} style={{marginLeft:"250px"}}>less</Moreinfo>
                               
                            </Ordersummery>
                            
                        </Ordermoreinfo>

                
                


            </Container>
    )
}

export default Orderlist
