import { FavoriteBorderOutlined,SearchOutlined,ShoppingCartOutlined} from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 250px;
  height: 280px;
  border-radius: 20px;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
    transform: scale(0.9);
  }
`;


const Containerinner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Price = styled.p`
    border-radius: 10px;
    height: 20px;
    width: 180px;
    background-color: rgb(203, 238, 222);
    text-align: center;
    padding: 10px;
    font-size: 20px;

`
const Title = styled.h1`
text-align: center;
font-size: 30px;
font-weight: 100px;

`
const Infoinner = styled.div`
    display: flex;
    align-items: center;

`

const Product = ({item}) => {
    return (
        <Container>
        <Containerinner>
        <Image src={item.img} />
        <Price><strike>Rs:{item.oldprice}</strike>| Rs:{item.price}</Price>
        </Containerinner>
      <Info>
        <Containerinner>
        <Title>{item.title}</Title>
        <p><b>{item.info}</b></p>
        <Infoinner>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        
        <Icon>
          <SearchOutlined />
        </Icon>

        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        </Infoinner>
        </Containerinner>
      </Info>
    </Container>
    )
}

export default Product
