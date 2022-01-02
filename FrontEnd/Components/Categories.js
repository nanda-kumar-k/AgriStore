import styled from "styled-components";
import { categorieslist } from "../information/Data";
import Categorie from "./Categorie";

const Container = styled.div`
    margin-top: 10px ;
    padding: 10px 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    background:  linear-gradient(rgb(168, 247, 247),white);;
`;

const Categories = () => {
  return (
    <Container>
     {categorieslist.map((item) => (
        <Categorie item={item} key={item.id} />
      ))}
    </Container>
  );
};

/*
 {categorieslist.map((item) => (
        <Categorie item={item} key={item.id} />
      ))}

*/
export default Categories;
