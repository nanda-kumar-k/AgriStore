import styled from "styled-components";
import Product from "./Product";
import {popularProducts} from '../information/Data'
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px 80px;
    text-align: center;
`;

const Containerouter = styled.div`
    text-align: center;

`

const Seasonals = () => {
    return (
      <Containerouter>
        <h1>Seasonals</h1>
        <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </Containerouter>
    )
}

export default Seasonals
