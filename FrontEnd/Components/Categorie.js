import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
 height: 100%;
 width: 100%;
 z-index: 1;
 border-radius: 20px;
 transition: all 1s ease-out;
`;
const Container = styled.div`
  flex: 1;
  margin: 30px 10px;
  min-width: 200px;
  height: 280px;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  cursor: pointer;
  &:hover ${Image}{
    transform: scale(0.9);
  }
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h3`
    border-radius: 15px;
    height: 30px;
    width: 180px;
    background-color: rgb(105, 243, 243);;
    text-align: center;
    padding: 10px;
    
`
const Categorie = ({item}) => {
    return (
        <Container>
        <Link to={`/Products/${item.cat}`}>
        <Info>
        <Image src={item.imge} />
        <Title>{item.title}</Title>
        </Info>
        </Link>
        </Container>
        
        
    )
}

export default Categorie
