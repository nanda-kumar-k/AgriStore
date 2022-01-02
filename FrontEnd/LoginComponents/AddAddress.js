import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: whitesmoke;
    width: 290px;
    height: 480px;
    margin-left: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
`
const Addressinfo = styled.div`
    display: block;
    position: absolute;
    background:  linear-gradient(rgb(168, 247, 247),white);;
    width: 270px;
    height: 0px;
    bottom: 100%;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: .5s ease;
    
`

const AddText = styled.div`
    padding: 20px 15px;
    position: absolute;
`

const Imageinfo = styled.div`
    display: flex;
    flex: 2;
    padding: 10px;
    background-color: white;
    position: relative;
    &:hover ${Addressinfo}{
        bottom: 0;
        height: 330px;
        
    }
`
const Image = styled.img`
    width: 300px;
    height: 320px;

`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.8;
    padding: 10px;
    background-color: whitesmoke;
    position: relative;
`

const Button = styled.button`
    position: absolute;
    bottom: 10px;
    width: 75%;
    margin-left: 10%;
    border-radius: 10px;
    &:hover{
        background-color: rgb(250, 188, 73);
        color: white;
    }
  
`

const AddAddress = ({item}) => {
    return (
        <Container>
            <Imageinfo>
                <Image src={item.img} />
                <Addressinfo>
                   <AddText>
                        <h3>Address:</h3>
                        <p>{item.Address}</p>
                        <p>{item.Pincode}</p>
                        <br/>
                        <h3>Moblie Number:</h3>
                        <p>{item.Moblie}</p>
                   </AddText>
                </Addressinfo>
            </Imageinfo>
            <Info>
                <h3>Name: {item.Name}</h3>
                <p>Education: {item.Education}</p>
                <Button>Book now</Button>
            </Info>
        </Container>
    )
}

export default AddAddress
