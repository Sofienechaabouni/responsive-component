import React, { useState,useEffect,FC, ReactElement } from "react";
import "./Evadam.css";
// import {useUnmount} from 'react-use';
import { io } from "socket.io-client";


export interface ButtonProps {
  label: string;
  acessToken:string;
  url:string;
  screen:any;
  setOpenModal:any;
  openModal:boolean;
}

const EvadamKit = (props:ButtonProps) => { 
  const socket = io("https://api.evadam.io", {
        extraHeaders: {
          "test-header": "1234",
  }});
  
  socket.on("closeSDK", (error) => {
    console.log('d5al lel socket: ')
    if (error) {
      alert(error);
    }else{
      console.log("here: ")
      props.setOpenModal(false)
}
});

  //let str=`<h1>${props.label}</h1><h2>${props.acessToken}</h2><h3>${props.url}</h3>`
  
  // width={'100%'} height={'100%'}
  return(  
  <div id='container' style={{display:props.openModal?'flex':'flex'} } onClick={()=>{props.setOpenModal(false);console.log('opacityyyyyyyyyyyyyyyyy')}}>
    <div id='container2'>  
      {/* <button id='button1' onClick={()=>{props.setOpenModal(false);}}>X</button>  */}
       <iframe   src={props.url} allowFullScreen={true}   height={`${window.innerHeight*0.8}px`} frameBorder="0" ></iframe> 
        </div>
        </div> 
        ) ;
};

export default EvadamKit;


/*0.1.13
import React, { useState } from "react";
import "./Evadam.css";
export interface ButtonProps {
  label: string;
  acessToken:string;
  url:string;
  screen:any
}

const EvadamKit = (props: ButtonProps) => {
  
  let str=`<h1>${props.label}</h1><h2>${props.acessToken}</h2><h3>${props.url}</h3>`


  return(
        <iframe src={props.url} allowFullScreen={true} height={props.screen.height-4} width={props.screen.width-4} style={{overflow:'hidden'}} ></iframe>
        ) ;
};

export default EvadamKit; 
*/