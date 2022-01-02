import styled from 'styled-components'
import FieldCrop from '../Images/Categories/Field Crops.png'
import aquaculture from '../Images/Categories/aquaculture icon.png'
import Forageseeds from '../Images/Categories/Forage Seeds.png'
import Horticulture from '../Images/Categories/Horticulture Seeds.png'
import Pesticides from '../Images/Categories/Pesticides.png'
import PlantNutrients from '../Images/Categories/Plant Nutrients.png'
import Polyhouseseeds from '../Images/Categories/Polyhouse Seeds.png'
import Toolsandinstruments from '../Images/Categories/Tools and Instruments.png'

const Container = styled.div`
    flex: 1;
  margin: 30px 0px 0px 0px;
  //height: 100px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  
`
const Containerinner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    //margin-left: 40px;
    height: 125px;
    width: 160px;
    //margin-right: 50px;
    //margin-left: 20px;

`

const Containerouter = styled.div`
    text-align: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;

`

const Info = styled.div`
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background:linear-gradient(rgb(168, 247, 247),white);
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
  &:hover {
    transform: rotate(360deg);
    border-radius: 50px;
  }

`

const Icon = styled.img`
  width: 90px;
  height: 90px;
  margin-top: 5px;
  transition: all 1s ease-in-out;
  &:hover {
    transform: rotate(360deg);
    border-radius: 50px;
  }
`;

const Categoriesmore = () => {

    return (
        <Containerouter>
        <h1> CATEGORIES </h1>
        <Container>
            <Containerinner>
            <Info>    
            <Icon src={aquaculture}/>
            </Info>
           <p>aquaculture</p>
           </Containerinner>
           <Containerinner>
            <Info>    
            <Icon src={FieldCrop}/>
            </Info>
           <p>Field Crop</p>
           </Containerinner>
           <Containerinner>
            <Info>    
            <Icon src={PlantNutrients}/>
            </Info>
           <p>Plant Nutrients</p>
           </Containerinner>
           <Containerinner>
            <Info>    
            <Icon src={Forageseeds}/>
            </Info>
           <p>Forage seeds</p>
           </Containerinner>
           <Containerinner>
            <Info>    
            <Icon src={Horticulture}/>
            </Info>
           <p>Horticulture</p>
           </Containerinner>
           <Containerinner>
            <Info>    
            <Icon src={Pesticides}/>
            </Info>
           <p>Pesticides</p>
           </Containerinner>
           <Containerinner>
            <Info>    
            <Icon src={Polyhouseseeds}/>
            </Info>
           <p>Polyhouse seeds</p>
           </Containerinner>
           <Containerinner>
            <Info>    
            <Icon src={Toolsandinstruments}/>
            </Info>
           <p>Tools & instruments</p>
           </Containerinner>
        </Container>
        </Containerouter>
    )
}

export default Categoriesmore
