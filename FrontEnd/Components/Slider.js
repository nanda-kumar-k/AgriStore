import styled from "styled-components";
import { useState } from "react";
import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons'
import { sliderItems } from "../information/Data";

const Container = styled.div`
margin-top: 20px;
width: 100%;
height: 50vh;
display: flex;
overflow: hidden;
position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;


const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;

const Image = styled.img`
    width: 100vmax;
    height: 50%;
`
function Slider() 
{
    const [slideIndex, setSlideIndex] = useState(0);
     const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };
    return (
       <Container>
       <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
      {sliderItems.map((item) => (
      <Slide bg={item.bg} key={item.id}>

              <Image src={item.img} />
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
       </Container>
    )
}

export default Slider
