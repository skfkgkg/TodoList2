import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Header = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    },1000)
    return () => clearInterval(id)
  },[])

  return (
    <div>
      <H3>List check! 📅</H3>
      <H1>{time.toDateString()}</H1>
    </div>
  )
}

const H1 = styled.h1`
  color : #de4e40;
`;
const H3 = styled.h3`
  color : #fff;
  font-size : 30px;
`;

export default Header