import styled from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {ProductsListsinfo} from '../information/Data'
import ProductsList from './ProductsList'
const Items = styled.div`
flex: 8;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 50px 10px 0px 0px ;
`


function ProductMap ({cat, filters})
{
    
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect (()=>{
        const getProducts = async ()=>{
            try{
                const res = await axios.get(
                    cat 
                    ? `http://localhost:5000/api/products?category=${cat}`
                    : "http://localhost:5000/api/products"); 
                setProducts(res.data)
            }catch(err){
                console.log(err)
            }
        }
    getProducts()    
    },[cat])
       
    
    useEffect(() => {
        cat &&
          setFilteredProducts(
            products.filter((item) =>
              Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
              )
            )
          );
      }, [products, cat, filters]);
    return (
        <Items>
        {filteredProducts.map((item) => (
            
            <ProductsList item={item} />
            
      ))}
        </Items>
    )
}
export default ProductMap