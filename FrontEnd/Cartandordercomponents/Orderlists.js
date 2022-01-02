import styled from "styled-components";
import {ProductsListsinfo} from '../information/Data'
import ProductsList from "../ProductsComponents/ProductsList";
import Orderlist from "./Oderlist";
import Categoriesmore from "../Components/Categoriesmore";

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
    margin: 20px 55px;
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
    z-index: 1;
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


const Orderlists = () => 
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
            <Containerdivide>
            <Formove>
            <Title>Order Lists</Title>
            <br/>
            <hr/>
            </Formove>
            <Orderlist/>
            <Orderlist/>
            <Orderlist/>
            </Containerdivide>
        </Container1>
            <Container2>
            <IteamContainer2>
               <Categoriesmore/>
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

export default Orderlists
