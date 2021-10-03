import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  height: 300px;
  width: 300px;
  background-color: ${(props) => props.color}
`;

const COLOR = 'COLOR';

function getRandomColor() {
  const COLOR_LIST = ['red', 'pink', 'cyan', 'yellow'];
  const randomColor = Math.trunc(Math.random() * 4);
  return COLOR_LIST[randomColor];
}

function Box() {
  const [color, setColor] = useState(() => {
    const color = localStorage.getItem(COLOR) || 'red';
    return color;
  });

  function handlerBoxClick() {
    const newColor = getRandomColor();
    console.log(newColor);
    setColor(newColor);
    localStorage.setItem(COLOR, newColor);
  }

  return <StyledBox color={color} onClick={handlerBoxClick}></StyledBox>;
}

export default Box;
