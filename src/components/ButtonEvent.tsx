import React from "react";

type ButtonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>) => void
  };
  
  export const ButtonEvent = (props: ButtonProps) => {
    return (
       <button onClick={(event) => props.handleClick(event)}> Click </button>
    )
  }