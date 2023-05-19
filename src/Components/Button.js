import React from 'react'

const Button = (props) => {
  return (
    <>
      <div  className='{props.myclass}'>
        <img src={props.myimg} className='{props.myimg}'  alt="" />   
      </div>
    </>
  )
}

export default Button
