import styled from "styled-components"
import {ArrowLeftOutlined, ArrowRightOutlined, Lock} from '@material-ui/icons'
import { useState } from "react";
import {Shop, ShoppingCart} from '@material-ui/icons'
import Pay from '../Images/Producticons/pay.png'
import Return from '../Images/Producticons/return.png'
import Deliver from '../Images/Producticons/deliver.png'
import {ProductsListsinfo} from '../information/Data'
import ProductsList from './ProductsList'
import { addProduct } from "../redux/cartRedux";
import {useDispatch} from "react-redux"
const Container = styled.div`
    display: flex;
    margin: 20px 50px 0 100px;
    position: relative;
`

const Stickycontainer1 = styled.div`
    flex: 1;
    top: 50px;
    position: sticky;
    overflow: hidden;
    background-color: white;
    height: 500px;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`


const Container1 = styled.div`
    //flex: 1;
    //background-color: red;
    position: relative;  
`;

const Imagecontainer = styled.div`
    display: flex;
    z-index: 1;
    transition: all 1.5s ease; 
    padding: 20px;
    //transform: translateX(100%);
    transform: translateX(${(props) => props.slideIndex * -100}%);
`
const Image = styled.img`
    width: 450px;
    height: 450px;
    //width: 300px;
    //height: 300px;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: rgb(206, 245, 245);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 50%;
    position: absolute;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

`
const Slide = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 40px;
    margin-left: 0px;
    //margin-top: 30px;
    //margin-bottom: 30px;
`

const Container2 = styled.div`
    flex: 1.8;
    display: flex;
    margin-left: 20px;
`

const Infocontainer1 = styled.div`
    flex: 2;
    
`


const Info1 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin: 10px;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`
const Sizeouter = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    
`
const Size = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 20px;
    font-size: 12px;
    padding: 5px;

`
const Info1rowdisplay = styled.div`
    flex: 1;
  margin: 30px 0px 0px 0px;
  width: 98%;
  height: 100px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Info1coloumdisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    //margin-left: 50px;
`

const Infoicon = styled.div`
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background:linear-gradient(rgb(168, 247, 247),white);
  height: 75px;
  width: 75px;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
  &:hover {
    transform: rotate(360deg);
    border-radius: 50px;
  }

`

const Info1Image = styled.img`
   width: 50px;
  height: 50px;
  margin-top: 5px;
  transition: all 1s ease-in-out;
  &:hover {
    transform: rotate(360deg);
    border-radius: 50px;
  }
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

const Infocontainer2 = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`
const Info2 = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 15px;
    margin: 10px;
`

const Info2rowdisplay = styled.div`
    display: flex;
`

const Select = styled.select`
    width: 45px;
    padding: 1px;
    margin-left: 10px;
    border-radius: 5px;
    
`

const CartBuyinfo = styled.div`
    display: flex;
    font-size: 14px;
    padding: 8px;
    margin-top: 10px;
    border-radius: 15px;
    justify-content: center;
    color: black;
    background-color: ${(props) => props.color === "red" && "rgb(238, 170, 57)"};
    background-color: ${(props) => props.color === "blue" && " rgb(245, 160, 7)"};
    cursor: pointer;
    &:hover{
        color: white;
        background-color: orange;
    }
`

const Payment = styled.img`
    width: 70%;
    margin-top: 5px;
    margin-left: 25px;
`;


const Emp = styled.div`
    
    //width: 130px;
    align-items: center;
    text-align: center;
    border-radius: 20px;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const PraticularProduct = ({products}) => 
{
    const [slideIndex, setSlideIndex] = useState(0);
     const handleClick = (direction) => {
        if (direction === "left") 
        {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } 
        else 
        {
            setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
        }
    };
let count =0;
const Item1 = ProductsListsinfo.map((item) => {
    if(count==0 )
    {
         count++;
         return <ProductsList item={item} key={item.id} />      
    }  
})
const Item2 =  ProductsListsinfo.map((item) => {
    
    if(count==1 )
    {
         count++;
         return <ProductsList item={item} key={item.id} />
         
    }
    
})


const [quantity, setQuantity] = useState({});
const dispatch = useDispatch();
    const handleSubmit =()=>{
        dispatch(
        addProduct({...products, quantity})
        );
    };
    return (
        <Container>
            <Stickycontainer1>
            <Container1>
            <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
            </Arrow>
                <Imagecontainer slideIndex={slideIndex}>
                <Slide>
                <Image src={products.img}/>
                </Slide>
                <Slide><Image src={products.img}/></Slide>
                <Slide><Image src={products.img}/></Slide>
                <Slide><Image src={products.img}/></Slide>
                <Slide><Image src={products.img}/></Slide>    
                </Imagecontainer>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
                </Arrow>
            </Container1>
        </Stickycontainer1>
            <Container2>
                    <Infocontainer1>
                            <Info1>
                            <h3>{products.companyname}</h3>
                            <h2>{products.title}</h2>
                            <p style={{marginLeft:"70px"}}>M.R.P:{products.price}</p>
                            <p>Deal of the Day:{products.price}</p>
                            <p style={{marginLeft:"50px"}}>You save:{products.offer}</p>
                            <p style={{marginLeft:"100px"}}>	Inclusive of all taxes</p>
                            <p style={{marginLeft:"50px"}}>In stock:{products.inStock}</p>
                            <p>Fastest delivery: within week</p>
                            <p>Size:</p>
                            <Sizeouter>
  
                            </Sizeouter>
                        </Info1>
                        
                                <Info1rowdisplay>
                                    <Info1coloumdisplay>
                                        <Infoicon>
                                        <Info1Image src={Pay}/>
                                        </Infoicon>
                                        <p style={{fontSize:"14px"}}>Pay on Delivery</p>
                                    </Info1coloumdisplay>
                                    <Info1coloumdisplay>
                                        <Infoicon>
                                        <Info1Image src={Return}/>
                                        </Infoicon>
                                        <p style={{fontSize:"14px"}}>10 Days Returns</p>
                                    </Info1coloumdisplay>
                                    <Info1coloumdisplay>
                                            <Infoicon>
                                            <Info1Image src={Deliver}/>
                                            </Infoicon>
                                            <p style={{fontSize:"14px"}}>AgriStore Delivered</p>
                                    </Info1coloumdisplay>
                                </Info1rowdisplay>
                            <Info1>
                                <Description>
                                        <h3>Product Description</h3>
                                        <p><b>Technical Specifications:</b> V- Bind Bio Pesticide-Plant Extracts</p>
                                        <p><b>Descriptions:</b></p>
                                        <p>Vanproz Agrovet has identified certain plants based active compounds, which can control virus.
                                        V-Bind is a mixture of extracts of plants having medicinal properties.
                                        V-Bind is made from medicinal extracts and oil of herbs.
                                        V-Bind is very effective to prevent and cure all kinds of viral disease.
                                        It is sure shot product for treating LEAF MOSAIC, BUNCHY TOP, LEAF CURL and other viral diseases.
                                        Previous year affected farm requires prophylactic use of V-Bind.
                                        V-Bind act against virus by binding & stop further infestation.</p>
                                        <p><b>Target Crops & Diseases</b></p>
                                        <p>Chilli: Leaf curl virus Okra: Yellow mosaic virus. Papaya: Papaya curl mosaic. Tobacco: Yellow mosaic virus. Tomato spotted wilt and yellow leaf curl virus. 
                                        All Cucurbits mosaic virus. Cauliflower mosaic virus.</p>
                                        <p><b>Dosage</b></p>
                                        <p>2-3 ml/ltr</p>
                                        <p><b>Application:</b></p>
                                        <p>May be arise when symptoms arise, prophylactic Foliar application recommended</p>
                                    </Description>
                            </Info1>
                            
                    </Infocontainer1>
                    <Infocontainer2>
                        <Info2>
                            <Info2rowdisplay>
                            <p>Quantity:</p>
                            <Select onChange={(e)=>setQuantity(e.target.value)}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Select>
                            </Info2rowdisplay>
                            <CartBuyinfo color="red"><Shop style={{height:"20px",width:"20px",marginRight:"5px"}}/><p>BUY NOW</p></CartBuyinfo>
                            <CartBuyinfo color="blue" onClick={handleSubmit}><ShoppingCart style={{height:"20px",width:"20px" ,marginRight:"5px"}}/>ADD TO CART</CartBuyinfo>
                            <Info2rowdisplay>
                                <Lock style={{height:"20px",width:"20px",marginLeft:"5px",marginTop:"20px"}}/><p style={{marginLeft:"5px",marginTop:"18px"}}>Secure transaction</p>
                            </Info2rowdisplay>
                            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
                            <p style={{marginLeft:"30%",marginTop:"10px"}}>Order Now </p>
                        </Info2>
                        <Info2>
                            <p style={{marginLeft:"25%"}}>Have one to sell?</p>
                            <Emp>Sell on AgriStore</Emp>
                        </Info2>
                        <br/>
                        <Info2>
                            
                            <p style={{marginLeft:"18%"}}>Have one to Empolyee?</p>
                            <Emp>Be Agri Employee</Emp>
                        </Info2>

                        <Info2>
                            <br/>
                            {Item1}
                            
                        </Info2>
                    </Infocontainer2>
            </Container2>
        </Container>
    
    )
}

export default PraticularProduct
