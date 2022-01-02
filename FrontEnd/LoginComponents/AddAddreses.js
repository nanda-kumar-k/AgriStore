import styled from "styled-components";
import {Addressofemploye, ProductsListsinfo} from '../information/Data'
import AddAddress from "./AddAddress";
import ProductsList from "../ProductsComponents/ProductsList";
const Formove = styled.div`
    position: sticky;
    margin-bottom: 20px;
    top: 0px;
    background-color: white;
    z-index: 1;
    
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
    margin: 20px 55px;
    position: relative;
    
`
const Container1 = styled.div`
    flex: 2.5;
    display: flex;
    flex-direction: column;
    position: relative;
`

const Formdisplay = styled.div`
    padding: 50px 150px;
    display: block;
    background-color: white;
    border-radius: 0 0 200px 200px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Input = styled.input`
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: blanchedalmond;
    height: 20px;
    width: 100%;
    font-size: 18px; 

    &:hover{
        border-color: green;
    }
`
const Rowdisplay = styled.div`
    display: flex;
    //width: 500px;
    justify-content: space-between;
    align-items: center;
    
`

const Columndisplay = styled.div`
    display: flex;
    flex-direction: column;
`

const Emprowdisplay = styled.div`
    display: flex;
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

const Emp = styled.div`
    align-items: center;
    text-align: center;
    border-radius: 20px;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 `
const PersonTitle = styled.div`
    height: 30px;
    padding: 20px 50px;
    border-radius:  400px 400px 0 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const AddAddreses = () => 
{

    let count =0;

    const Item1 = ProductsListsinfo.map((item) => {
    
    if(count==0 )
    {
         count++;
         return <ProductsList item={item} key={item.id} />
         
    }
    
    })

    return (
        <Container>
        <Container1>
            
            <Formove>
            <Title>Add a New Address</Title>
            <br/>
            <hr/>
            </Formove>
            <Formdisplay>
            <form>
                <Rowdisplay>
                    <Columndisplay>
                        <h3>Enter Full Name</h3>
                        <Input type="text" />
                    </Columndisplay>
                    <Columndisplay>
                    <h3>Enter moblie number</h3>
                    <Input type="text" />
                    </Columndisplay>
                </Rowdisplay>
                <br/><br/>
                <Columndisplay>
                        <h3>Enter Complete Address of you</h3>
                        <Input type="text" />
                </Columndisplay>
                <br/><br/>
                <Rowdisplay>
                    <Columndisplay>
                        <h3>Town/city</h3>
                        <Input type="text" />
                    </Columndisplay>
                    <Columndisplay>
                    <h3>Pin Code</h3>
                    <Input type="text" />
                    </Columndisplay>
                </Rowdisplay>
            </form>
            </Formdisplay>
            <PersonTitle>
                <h2>Employee's Based on your Pincode</h2>
            </PersonTitle>
            <br/><br/>
            <Emprowdisplay>
            {Addressofemploye.map((item) => (
                <AddAddress item={item} key={item.id} />
              ))}
            </Emprowdisplay>
        </Container1>
            <Container2>
            
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

export default AddAddreses
