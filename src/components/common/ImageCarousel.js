import Carousel ,{consts} from "react-elastic-carousel";
import React from "react";
import "./ImageCarousel.css";
import {FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa';


const ImageCarousel = (props) => {
   const myArrow = ({ type, onClick, isEdge }) =>{
        const pointer = type === consts.PREV ? <FaAngleDoubleLeft/> : <FaAngleDoubleRight/>
        return (
          <button className="arrow" onClick={onClick} disabled={isEdge}>
            {pointer}
          </button>
        )
      }

    const setting = {
        focusOnSelect : true ,
        //enableAutoPlay : true,
        autoPlaySpeed : 3000,
    }

 
 
  return (
    <Carousel {...setting} renderArrow={myArrow} >
        {
            props.images.map((imgNum,id)=>{
               return ( 
               <div className="myImageCard" key={id}>
                   <img key={id} src={`${process.env.PUBLIC_URL}/images/${props.imageFolder}/${imgNum}.png`} alt="img"/>
                </div>
                );
            })  
        }
    </Carousel>
  );
};

export default ImageCarousel;
