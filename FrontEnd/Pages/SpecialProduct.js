import Navbar from "../Components/Navbar"
import PraticularProduct from "../ProductsComponents/PraticularProduct"
import {SpecialProductlist} from '../information/Data'
import { useLocation } from "react-router"
import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
function SpecialProduct() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [products, setProducts] = useState({}); 
    useEffect (()=>{
    
        
        const getProducts = async ()=>{
            try{
                const res = await axios.get("http://localhost:5000/api/products/find/" + id); 
                setProducts(res.data)
                
            }catch(err){
                console.log(err)
            }
        }
    getProducts()    
    },[id]);
    return (
        <div>
            <Navbar/>
           
            <PraticularProduct products={products}  />
            
        </div>
    )
}

export default SpecialProduct
