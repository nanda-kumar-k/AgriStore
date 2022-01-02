import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import {ProductsListsinfo} from '../information/Data'
import ProductsList from './ProductsList'
import axios from 'axios'
import ProductMap from './ProductMap'
const Container = styled.div`
    display: flex;
`
const Filter = styled.div`
    flex: 2;
    justify-content: space-around;
    display: flex;
    position: relative;
    top: 50px;

`
const Info = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;

`
const Company = styled.div`
    align-items: center;
    
`

const Cost = styled.div``

const Ulouter = styled.ul`
    cursor: pointer;
`
const Ulinner = styled.ul`
    display: none;
    background-color: white;
    border-radius: 5px;
    
`

const Liouter = styled.li`
    float: left;
    list-style: none;
    text-align: center;
    width: 250px;
    padding: 10px;
    &:hover ${Ulinner}{
        display: block;
    }
`

const Liinner = styled.li`
    list-style: none;
    padding: 4px 0px ;
    font-size: 15px;
    margin-left: -30px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    
    
`

const Text = styled.div`
    margin-left: 10px;
    margin-top: -8px;
    font-size: 18px;
`

const Items = styled.div`
    flex: 8;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 50px 10px 0px 0px ;

`

const  Titlename = styled.div`
    background-color: rgb(9, 155, 252);
    font-size: 16px;
    color: white;
    border-radius: 5px;
    padding: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const ProductsLists = () => {
    const location = useLocation();
    const cat =location.pathname.split("/")[2];
    const [filters, setFilters] = useState({})
    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value,
        });
    }

    
    return (
        <Container>
        <Filter>
            <Info>
                <Company>
                    <Ulouter>
                        <Liouter><Titlename>COMPANY NAME </Titlename>
                            <Ulinner >
                                <br/>
                                <select name="companyname" onChange={handleFilters}>
                                <option>Namdhari Seeds</option>
                                <option>Syngenta India Limited</option>
                                <option>ADAMA India Pvt Ltd</option>
                                <option>Indofil Industries Limited</option>
                                <option>GSP Crop Science Pvt. Ltd .</option>
                                <option>V-Spark Pesticides India Limited</option>
                                <option>BASF India Limited</option>
                                <option>Sumitomo Chemical India Ltd</option>
                                <option>Gharda Chemicals Ltd</option>
                                <option>Indofil Industries Limited</option>
                                <option>Amruth Group</option>
                                
                                </select>
                            </Ulinner>
                        </Liouter>
                    </Ulouter>
                </Company><br/>
                <Cost>
                <Ulouter>
                <Liouter><Titlename>PRICE</Titlename>
                    <Ulinner >
                        <br/>
                        <select name="price" onChange={handleFilters}>
                                <option>350</option>
                                <option>200</option>
                                <option>505</option>
                                </select>
                    </Ulinner>
                </Liouter>
            </Ulouter>
                
                </Cost>
            </Info>
        </Filter>
        <Items>
        <ProductMap  cat={cat} filters={filters}/>
        </Items>
    </Container>
    )
}

export default ProductsLists
