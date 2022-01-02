import styled from "styled-components"
import {ChevronRight,ShoppingBasketRounded
    , Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Timer, Twitter} from '@material-ui/icons'
import Aslogo from '../Images/Navbar/AS logo.png'
const Container = styled.div`
    width: 100%;
    height: 500px;
    background:linear-gradient(rgb(168, 247, 247),rgb(209, 248, 248));
`
const Containerinner = styled.div`
    flex: 1;
    display: flex;
    width: 80%;
    margin-top: 40px;
    margin-left:130px;
    padding: 40px;

`
const Left = styled.div`
    flex: 1;
    text-align: left;
`
const Center = styled.div`
    flex: 3;
    display: flex;
    text-align: left;
`
const Centerleft = styled.div`
    flex: 1;
    margin-left: 70px;

`
const Centerright = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
    text-align: left;
`
const Icon = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    &:hover{
        color: blue;
    }
`

const Info = styled.p`
    font-size: 15px;
    margin-bottom: 10px;
    
`

const Payment = styled.img`
    width: 70%;
    margin-top: 15px;
`;


const Iconfooter = styled.div`
    display: flex;
    flex-direction: row;
`

const Footer = () => {
    return (
        <Container>  
        <Containerinner>
            <Left>
                <h2 style={{marginLeft:6}}>AGRI STORE</h2><br/>
                <Icon>
                    <ChevronRight/>
                    <Info>Who Are We?</Info>
                </Icon>
                <Icon>
                    <ChevronRight/>
                    <Info>Who Are We?</Info>
                </Icon>
                <Icon>
                    <ChevronRight/>
                    <Info>Who Are We?</Info>
                </Icon>
                <Icon>
                 <Phone style={{marginRight:"10px"}}/> 
                <p>Customer Care</p>
                </Icon>
                <p>(Monday - Sunday)</p>
                <Icon>
                <Timer style={{marginLeft:"10px"}}/><p>24/7 hrs</p>
                </Icon>
            </Left>
            <Center>
                <Centerleft>
                <h2 style={{marginLeft:6}}>Help</h2><br/>
                <Icon>
                    <ChevronRight/>
                    <Info>Contact Us</Info>
                </Icon>
                <Icon>
                    <ChevronRight/>
                    <Info>FAQs</Info>
                </Icon>
                <Icon>
                    <ChevronRight/>
                    <Info>Shipping & Delivery Policy</Info>
                </Icon>
                <Icon>
                    <ChevronRight/>
                    <Info>Shipping & Delivery Policy</Info>
                </Icon>
                <Icon>
                    <ChevronRight/>
                    <Info>Payments</Info>
                </Icon>
                <Icon>
                    <ChevronRight/>
                    <Info>Cancellation & Returns</Info>
                </Icon>
                <Icon>
                    <ChevronRight/>
                    <Info>Terms & Conditions</Info>
                </Icon>
                <Icon>
                    <ChevronRight/>
                    <Info>Privacy Policy</Info>
                </Icon>
                </Centerleft>
                <Centerright>
                <h2 style={{marginLeft:6}}>Top Categories</h2><br/>
                <Icon>
                    <ChevronRight/>
                    <Info>Farm Equipment</Info>
                </Icon>
                <Icon>
                    <ChevronRight/>
                    <Info>Fungicide</Info>
                </Icon>
                <Icon>
                    <ChevronRight/>
                    <Info>Herbicide</Info>
                </Icon>
                <Icon>
                    <ChevronRight/>
                    <Info>Insecticide</Info>
                </Icon>
                <Icon>
                    <ChevronRight/>
                    <Info>Plant Growth Regulator</Info>
                </Icon>
                <Icon>
                    <ChevronRight/>
                    <Info>Cotton Seeds</Info>
                </Icon>
                <Icon>
                    <ChevronRight/>
                    <Info>Vegetable Fruit Seeds</Info>
                </Icon>
                </Centerright>
            </Center>
            <Right>
            <h2 style={{marginLeft:6}}>Quick Links</h2><br/>
            <Icon>
                <ChevronRight/>
                <Info>Sign In</Info>
            </Icon>
            <Icon>
                <ChevronRight/>
                <Info>Agri Empolyee</Info>
            </Icon>
            <Icon>
            <Room style={{marginRight:"10px"}}/> 
            <p>622 Dixie Path , South Tobinchester 98336</p>
            </Icon>
            <Icon>
            <Phone style={{marginRight:"10px"}}/> 
            <p>+1 234 56 78</p>
            </Icon>
            <Icon>
            <MailOutline style={{marginRight:"10px"}} /> 
            <p>contact@lama.dev</p>
            </Icon>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

            </Right>
        </Containerinner>
        <hr/>
        <Iconfooter>
            <Icon><ShoppingBasketRounded style={{marginLeft:"250px" , marginTop:"15px"}}/>
            <p style={{marginLeft:"5px" , marginTop:"15px"}}>Sell on Agristore</p></Icon>
            <Icon> <p style={{marginLeft:"60px" , marginTop:"15px"}}>Be a Agri Employee</p></Icon>
            <img src={Aslogo} style={{marginLeft:"100px", height:"60px", width:"60px"}}/>
            <Icon><p style={{marginLeft:"100px" , marginTop:"15px"}}>© 2021-2021 AgriStore.com</p></Icon>
            <Icon><Facebook style={{marginLeft:"80px", marginTop:"15px"}} /></Icon>
            <Icon><Instagram style={{marginLeft:"20px", marginTop:"15px"}} /></Icon>
            <Icon><Twitter style={{marginLeft:"20px", marginTop:"15px" }}/></Icon>
                <Icon><Pinterest style={{marginLeft:"20px", marginTop:"15px" }}/></Icon>
        </Iconfooter>
        </Container>
    )
}

export default Footer


/*

            <br/>
            <Facebook style={{marginLeft:"20px" , marginTop:"40px"}} />
                <Instagram style={{marginLeft:"20px" }} />
                <Twitter style={{marginLeft:"20px" }}/>
                <Pinterest style={{marginLeft:"20px" }}/>
*/