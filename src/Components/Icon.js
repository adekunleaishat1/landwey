import React from 'react'

const Icon = (props) => {
    const icon ={
        color:"white",
        fontSize:"20px"
    }
  return (
    <div>
        <div>
            <i style={(icon)} className={props.icon}></i>
        </div>
    </div>
  )
}

export default Icon