import React, { useState } from 'react'
import styled from 'styled-components'

const LikeButton = () => {
  const [like,setLike]=useState(0);

  const LikeIncrease=()=>{
    setLike((prev)=>prev+1)
  }
  return (
    <Likeee>
        <h2>{like}</h2>
        <button onClick={LikeIncrease} className='likeButton'>Like</button>
    </Likeee>
  )
}

export default LikeButton;

const Likeee=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    .likeButton{
      background-color: black;
      cursor: pointer;
      color: white;
      padding: 10px;
      width: 100px;
      font-size: 20px;
      border-radius: 5px;
      transition: 0.3s ease-in;

    }
    .likeButton:hover{
      background-color: white;
      color: black;
      transition: 0.3s ease-in;
    }
`