import styled from "styled-components"
import {Shop, ShoppingCart} from '@material-ui/icons'
import { Link } from "react-router-dom"


const Container2 = styled.div`
position: relative;
    
`

const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    min-width: 250px;
    padding: 10px;
    margin-bottom: 50px;
    position: relative;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`

const Image = styled.img`
    flex: 2;
    background-color: red;
    height: 100%;
    width: 100%;
    margin-top: 10px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover{
        transform: scale(0.9);
    }
`

const Companyname = styled.div`
    position: absolute;
    background-color: lightblue;
    z-index: 1;
    top: 0;
    left: 0;
    border-radius: 20px 0 20px 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 2px;
`
const Offer = styled.div`
    position: absolute;
    background-color: lightblue;
    z-index: 2;
    bottom: 0;
    right: 0;
    border-radius:  20px 20px 20px 0 ;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 2px;
`


const ProductInformation = styled.div`
    flex: 1;
    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Price  = styled.div`
    display: flex;   
`
const CartBuyinfo = styled.div`
    display: flex;
    margin-left: 10px;
    font-size: 12px;
    padding: 5px;
    margin-top: 10px;
    border-radius: 8px;
    color: black;
    background-color: ${(props) => props.color === "red" && "rgb(238, 170, 57)"};
    background-color: ${(props) => props.color === "blue" && " rgb(245, 160, 7)"};
    cursor: pointer;
    &:hover{
        color: white;
        background-color: orange;
    }
`

const ProductsList = ({item}) => {
    return (
        
        <Container1>
        
            <Companyname>{item.title}</Companyname>
            <Link to={`/SpecialProduct/${item._id}`}>
            <Container2>
                    <Image src={item.img} ></Image>
                    <Offer>{item.Offer}</Offer>
            </Container2>
            </Link>
        
             
             <ProductInformation>
                
                <h3 style={{textAlign:"center"}}>weight</h3>
                <h3 style={{textAlign:"center"}}>{item.title}</h3>
                <p>{item.desc}</p>
                <Price><p style={{fontSize:"16px",marginRight:10,color:"gray"}}><strike>Rs:{item.oldprice}</strike></p>|<p style={{fontSize:"16px", marginLeft:10}}>{item.price}</p></Price>
                <Price>
                    <CartBuyinfo color="red"><Shop style={{height:"20px",width:"20px"}}/><p>BUY NOW</p></CartBuyinfo>
                    <CartBuyinfo color="blue"><ShoppingCart style={{height:"20px",width:"20px"}}/>ADD TO CART</CartBuyinfo>
                    
                </Price>
             </ProductInformation>
        </Container1>
 
    )
}

export default ProductsList
