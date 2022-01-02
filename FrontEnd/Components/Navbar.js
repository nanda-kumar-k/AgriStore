import styled from "styled-components"
import ASLogo from '../Images/Navbar/logopic.png'
import { Badge } from "@material-ui/core"
import { Cancel, Close, Home, Search, ShoppingCartOutlined } from "@material-ui/icons"
import Loginpic from '../Images/Login.png'
import { useState } from "react"
import {useSelector} from "react-redux"
import { Link } from "react-router-dom"
import { useDispatch} from "react-redux";
import { login } from "../redux/apiCalls";
import axios from 'axios'
import Homepage from '../Pages/Home'


const Container = styled.div`
    top: 0px;
`;
const Container1 = styled.div`
    height: 60px;
    background-color: white;//rgb(34, 36, 35);//rgb(155, 245, 210);
    //background:linear-gradient(rgb(155, 245, 210),white);
`;
const Wrapper = styled.div`
    display: flex;
    padding: 0px 10px 0px 20px;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
`;

const Logo = styled.img`
    margin-left: 80px;
    height: 80px;
    width: 240px;
    
`;
const SearchContainer = styled.div`
  border: 2px solid lightgray;
  display: flex;
  border-radius: 15px;
  margin: 10px 25px;
  align-items: center;
  height: 40px;
`;

const Input = styled.input`
    border: none;
    margin-left: 15px;
  width: 500px;
  height: 30px;

`;

const Searchlist = styled.div`
    color: gray;
    font-size: 16px;
    margin-left: 15px;
    padding: 10px;

`;

const Right = styled.div`
    flex:1;
    display: flex;
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 2px;
  padding: 15px;
  font-weight: bold;
`;

const LogMenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 2px;
  padding: 15px;
  font-weight: bold;
  display: block;
`;


const Container2 = styled.div`
     height: 40px;
     width: 100%;
     background-color: white;
     box-shadow: 1px 1px 1px 2px rgba(0, 5, 0, 0.1);
     box-shadow:whitesmoke;
     border-left: hidden;
     border-right: hidden;    
     display: flex;
     align-items: center;
     text-align: center;
`


const Menucontainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-width: 700px;
    height: auto;
    background:linear-gradient(rgb(155, 245, 210),white);
    border-radius: 10px;
`

const Ulouter = styled.ul`
    cursor: pointer;
    margin-left: -20px;
`

const Ulinner = styled.ul`
    display: none;
    position: absolute;
    z-index: 1;
`
const Liouter = styled.li`
    float: left;
    list-style: none;
    position: relative;
    padding: 5px 15px;
    &:hover ${Ulinner}{
        display: block;
    }
`
const Liinner = styled.li`
    list-style: none;
    padding: 4px 5px ;
    font-size: 15px;
    
`

const Menucontainer1 = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: left;
`



const Title = styled.h3`
    margin-top: 15px;
    margin-bottom: 10px;
`

/*   Login style componets*/ 

const LoginContainer1 = styled.div`
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    padding: 120px 26.5%;
    background-color: rgb(0,0,0,);
    background-color: rgba(0, 0, 0, 0.5);
    display: ${(props)=>props.value1};
    position: fixed;

`

const LoginContainer2 = styled.div`
    background-color: lightblue;
    height: 68%;
    width: 45%;
    display: flex;
`

const LoginInfo1 = styled.div`
    flex: 1.7;
    //background: linear-gradient(rgb(168, 247, 247),white);
    //background-color: rgb(168, 247, 247);
    background: linear-gradient(rgb(6, 241, 210),white);
    height: 90%;
    width: 100%;
    padding: 50px 20px 0px 50px; 
  
`


const LoginImage = styled.img`
    height: 140px;
    width: 250px;
    margin-top: 140px;
`

const LoginInfo2 = styled.div`
    flex: 2;
    background-color: white;
    height: 80%;
    width: 50%;
    padding: 50px 40px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    position: relative;
`

const Crossdisplay = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    &:hover{
        color: red;
    }
`

const LoginInput = styled.input`
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 20px;
    width: 100%;
    font-size: 18px; 
`

const LoginText = styled.p`
    font-size: 12px;
    margin-top: 30px;
`

const LoginInputSubmit = styled.input`
    background-color: lightcoral;
    width: 100%;
    height: 40px;
    font-size: large;
    outline: none;
    border: none;
    margin-top: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`

const LoginOr = styled.div`
    display: flex;
    align-items: center;
`

const LoginButton = styled.button`
    height: 40px;
    margin-top: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    border: none;
    font-size: medium;
    width: 100%;
`



/* sign up style components*/

const SignUpContainer1 = styled.div`
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    padding: 120px 26.5%;
    background-color: rgb(0,0,0);
    background-color: rgba(0, 0, 0, 0.5);
    display: ${(props)=>props.value2};
    position: fixed;

`

const SignUpContainer2 = styled.div`
    background-color: lightblue;
    height: 68%;
    width: 45%;
    display: flex;
`

const SignUpInfo1 = styled.div`
    flex: 1.7;
    //background: linear-gradient(rgb(168, 247, 247),white);
    //background-color: rgb(168, 247, 247);
    background: linear-gradient(rgb(6, 241, 210),white);
    height: 90%;
    width: 100%;
    padding: 50px 20px 0px 50px; 
  
`


const SignUpImage = styled.img`
    height: 140px;
    width: 250px;
    margin-top: 140px;
`

const SignUpInfo2 = styled.div`
    flex: 2;
    background-color: white;
    height: 80%;
    width: 50%;
    padding: 50px 40px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    position: relative;
`

const SignUpCrossdisplay = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    &:hover{
        color: red;
    }
`

const SignUpInput = styled.input`
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 20px;
    width: 100%;
    font-size: 18px; 
`

const SignUpText = styled.p`
    font-size: 12px;
    margin-top: 30px;
`

const SignUpInputSubmit = styled.input`
    background-color: lightcoral;
    width: 100%;
    height: 40px;
    font-size: large;
    outline: none;
    border: none;
    margin-top: 10px;
`

const SignUpOr = styled.div`
    display: flex;
    align-items: center;
`

const SignUpButton = styled.button`
    height: 40px;
    margin-top: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    border: none;
    font-size: medium;
    width: 100%;
    cursor: pointer;
    &:hover{
        color: green;
    }
    &:active{
        color: lightblue;
    }
`



/*  otp style componets */


const OtpContainer1 = styled.div`
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    padding: 120px 26.5%;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.5);
    display: ${(props)=>props.value3};
    position: fixed;

`

const OtpContainer2 = styled.div`
    height: 68%;
    width: 45%;
    display: flex;
`

const OtpInfo1 = styled.div`
    flex: 1.7;
    //background: linear-gradient(rgb(168, 247, 247),white);
    //background-color: rgb(168, 247, 247);
    background: linear-gradient(rgb(6, 241, 210),white);
    height: 90%;
    width: 100%;
    padding: 50px 20px 0px 50px; 
  
`


const OtpImage = styled.img`
    height: 140px;
    width: 250px;
    margin-top: 140px;
`

const OtpInfo2 = styled.div`
    flex: 2;
    background-color: white;
    height: 80%;
    width: 50%;
    padding: 50px 40px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    position: relative;
    
`
const OtpInput = styled.input`
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: oldlace;
    height: 20px;
    width: 100%;
    font-size: 18px; 

    &:hover{
        border-color: green;
    }
`
const OtpInputSubmit = styled.input`
    background-color: lightcoral;
    width: 320px;
    height: 40px;
    font-size: large;
    outline: none;
    border: none;
    margin-top: 10px;
`

const OtpOr = styled.div`
    display: flex;
    align-items: center;
`

const OtpButton = styled.button`
    height: 40px;
    margin-top: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    border: none;
    font-size: medium;
    width: 100%;
    cursor: pointer;
    &:hover{
        color: green;
    }
    &:active{
        color: lightblue;
    }
`


const Links = styled.div`
    cursor: pointer;
    &:hover{
        color: green;
    }
    &:active{
        color: blue;
    }

`

const LinkRowdisplay = styled.div`
    display: flex;
`

const Navbar = () => 
{
    /*  Login  */

    var model1 = document.getElementById('id01')
    var model2 = document.getElementById('id02')
    var model3 = document.getElementById('id03')

    window.onclick=(event)=>{
        if(event.target == model1 || event.target == model2)
        {
            setvalue1('none')
            setvalue2('none')
            setvalue3('none')
        }
    }

    const [value1, setvalue1] = useState('none');
    const [value2, setvalue2] = useState('none');
    const [value3, setvalue3] = useState('none');
    
    const LoginVisable = (val) =>
    {
        if(val == 'open'){
            setvalue1('block')
            setvalue2('none')
            setvalue3('none')
        }
        else{
            setvalue1('none')
            setvalue2('none')
            setvalue3('none')
            
        }  
    }

    const SignUpVisable = (val) =>{
        if(val == 'open'){
            setvalue1('none')
            setvalue2('block')
            setvalue3('none')
        }
        else{
            setvalue1('none')
            setvalue2('none')
            setvalue3('none')
            
        }
    }

    const OtpVisable = (val) =>{
        if(val == 'open'){
            setvalue1('none')
            setvalue2('none')
            setvalue3('block')
        }
        else{
            setvalue1('none')
            setvalue2('none')
            setvalue3('none')
            
        }
    }

 const quantity = useSelector(state => state.cart.quantity)
 const user = useSelector((state) => state.user.currentUser);
 const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    user ? LoginVisable("close") 
    : LoginVisable("open")
  };

  const [users, setUser] = useState(
      {
          username: "",
          email:"",
          password:""
      }
  )

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...users,
        [name]: value
    })
}

const register = () => {
    const { username, email, password } = users 
    fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(users),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
    
}

var infos="";

    return (
        <Container>
       <Container1>
        <Wrapper>
            <Left>
                <Logo src={ASLogo} />
                <SearchContainer>
                <Input/>
                <Searchlist>
                    <Search/>
                </Searchlist>
              </SearchContainer>
            </Left>
            <Right>
                <MenuItem>Agri Empolyee</MenuItem>
               <Link to="/Address"> <MenuItem>More</MenuItem></Link>
                {user ? infos ="out" : infos ="in"}
                <LogMenuItem onClick={() => LoginVisable("open")}>Log{infos}</LogMenuItem>



                <LoginContainer1 value1={value1} id="id01">
                <LoginContainer2>
                    <LoginInfo1>
                        <h1>Login</h1>
                        <p style={{fontSize:"20px" , marginTop:"10px"}}>Get access to your Orders,<br/>Book your agri employee and order products</p>
                        <LoginImage src={Loginpic}/>
                    </LoginInfo1>

                    <LoginInfo2>
                    <Crossdisplay>
                    <Close style={{height:"40px",width:"40px"}} onClick={() => LoginVisable("close")}/>
                    </Crossdisplay>
                        <form>
                        <LoginInput type="text" placeholder="+91 Enter Moblie Number" name="Moblie" onChange={(e)=>setUsername(e.target.value)}/><br/><br/>
                        <LoginInput type="password" placeholder="Enter Paasword" fontsize="pass" onChange={(e)=>setPassword(e.target.value)} />
                        
                        {error && <p style={{fontSize:"12px", color:"red"}}>Your username or password is incorrect </p>}
                        <LoginText>By continuing, you agree to AgriStore Terms of Use and Privacy Policy.</LoginText>
                        <LoginInputSubmit type="submit" name="sub" value="Login" sname="submit" onClick={handleClick} disabled={isFetching}/>
                      
                        </form>
                        <br/>
                        <LoginOr>
                            <hr style={{width:"150px", height:"1px"}}/>
                            <p>OR</p>
                            <hr style={{width:"150px", height:"1px"}}/>
                        </LoginOr>
                        <LoginButton>Request OTP</LoginButton>
                        <LinkRowdisplay style={{marginTop:"30px"}}><b>New to AgriStore?</b><Links onClick={() => SignUpVisable("open")}><b> Create an account</b></Links></LinkRowdisplay>
                    </LoginInfo2>
                </LoginContainer2>
            </LoginContainer1>






            <SignUpContainer1 value2={value2} id="id02">
                <SignUpContainer2>
                    <SignUpInfo1>
                        <h2>Looks Like you're new to Agri Store </h2>
                        <p style={{fontSize:"20px" , marginTop:"10px"}}>Sign up with your mobile number to get started</p>
                        <SignUpImage src={Loginpic}/>
                    </SignUpInfo1>

                    <SignUpInfo2>
                    <Crossdisplay>
                    <Close style={{height:"40px",width:"40px"}} onClick={() => SignUpVisable("close")}/>
                    </Crossdisplay>
                        <form>
                        <SignUpInput type="text" placeholder="+91 Enter Moblie Number" name="email" value={users.email} onChange={ handleChange }/>
                        <p style={{fontSize:"12px", color:"red"}}>Please enter a valid Mobile number </p>
                        <SignUpText>By continuing, you agree to AgriStore Terms of Use and Privacy Policy.</SignUpText>
                        <SignUpInputSubmit type="button" name="sub" value="CONTINUE" sname="submit" onClick={() => OtpVisable("open")}/>
                        
                        </form>
                        <br/>
                        <SignUpOr>
                            <hr style={{width:"150px", height:"1px"}}/>
                            <p>OR</p>
                            <hr style={{width:"150px", height:"1px"}}/>
                        </SignUpOr>
                        <SignUpButton onClick={() => LoginVisable("open")}>Existing User? Log In </SignUpButton>
                    </SignUpInfo2>
                </SignUpContainer2>
            </SignUpContainer1>




            <OtpContainer1 value3={value3} id="id03">
            <OtpContainer2>
                <OtpInfo1>
                    <h2>Looks Like you're new to Agri Store </h2>
                    <p style={{fontSize:"20px" , marginTop:"10px"}}>Sign up with your mobile number to get started</p>
                    <OtpImage src={Loginpic}/>
                </OtpInfo1>

                <OtpInfo2>
                <Crossdisplay>
                <Close style={{height:"40px",width:"40px"}} onClick={() => OtpVisable("close")}/>
                </Crossdisplay>
                    <form>
                    <OtpInput type="text" value="6302551161" name="Moblie" disabled="true"/><br/><br/>
                    <OtpInput type="text"  name="Moblie" placeholder="Enter OTP  (OTP send to moblie )"/>
                    <p style={{fontSize:"12px", color:"red"}}>Please enter valid OTP</p><br/>
                    <OtpInput type="text"  name="username" placeholder ="Set Username" value={users.username} onChange={ handleChange }/><br/><br/>
                    <OtpInput type="password"  name="password" placeholder="Set Password" value={users.password} onChange={ handleChange }/>
                    <p style={{fontSize:"12px"}}>* Password must be more than 8 charcters </p>
                    <OtpInputSubmit type="submit" name="sub" value="Sign Up" sname="submit" onClick={register}/>
                    </form>
                    <br/>
                    <OtpOr>
                        <hr style={{width:"150px", height:"1px"}}/>
                        <p>OR</p>
                        <hr style={{width:"150px", height:"1px"}}/>
                    </OtpOr>
                    <OtpButton onClick={() => LoginVisable("open")}>Existing User? Log In </OtpButton>
                </OtpInfo2>
            </OtpContainer2>
        </OtpContainer1>





                <Link to="/cart">
                <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
              </Link>
            
            </Right>
        
        </Wrapper>
       </Container1>
       <Container2>
            <Home  style={{color:"green", marginLeft:"200px",marginRight:0}}/>
            <Link to="/"><p style={{marginLeft:"5px"}}>Home</p></Link>

            <Ulouter>
                <Liouter><p>Brands</p>
                <Ulinner>
                <Menucontainer>
                    </Menucontainer>
                </Ulinner>
                </Liouter>
                <Liouter><p>Seeds</p>
                <Ulinner>
                <Menucontainer>
                    <Menucontainer1>
                            <Title><b>HORTICULTURE</b></Title>
                            <Liinner>FLOWER SEEDS</Liinner>
                            <Liinner> VEGETABLES SEEDS</Liinner>
                            <Liinner>FRUITS</Liinner>
                    </Menucontainer1>
                    <Menucontainer1>
                    <Title><b>FIELD CROPS</b></Title>
                    <Liinner>MAIZE/CORN</Liinner>
                    <Liinner>PADDY</Liinner>
                    <Liinner> MUSTARD</Liinner>
                    <Liinner>JOWAR</Liinner>
                    <Liinner>COTTON</Liinner>
                    </Menucontainer1>
                    <Menucontainer1>
                            <Title>SPECIAL CATEGORIES</Title>
                            <Liinner>EXOTICS</Liinner>
                            <Liinner>POLYHOUSE</Liinner>
                            <Liinner>FORAGES</Liinner>
                            <Liinner>HOME GARDEN</Liinner>
                            <Liinner>MICROGREENS</Liinner>
                    </Menucontainer1>
                    <Menucontainer1>
                            <Title>SAPLINGS</Title>
                            <Liinner>PAPAYA </Liinner>
                           
                            <Liinner>COCONUT</Liinner>
                    </Menucontainer1>
                    </Menucontainer>
                </Ulinner>
                
                </Liouter>
                <Liouter><p>Brands</p></Liouter>
                <Liouter><p>Brands</p></Liouter>
                <Liouter><p>Seeds</p></Liouter>
                
            
            
            </Ulouter>

       </Container2>
       </Container>
    )
}

export default Navbar
