import styled from "styled-components"
import ASLogo from '../Images/Navbar/logopic.png'
import { Badge } from "@material-ui/core"
import { Home, Search, ShoppingCartOutlined } from "@material-ui/icons"
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

const UserNavbar = () => {
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
                <MenuItem>More</MenuItem>
                <MenuItem>Sign in </MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            
            </Right>
        
        </Wrapper>
       </Container1>
       <Container2>
            <Home  style={{color:"green", marginLeft:"200px",marginRight:0}}/>
            <p style={{marginLeft:"5px"}}>Home</p>

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

export default UserNavbar
