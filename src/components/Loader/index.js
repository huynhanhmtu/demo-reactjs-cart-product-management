import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  margin: auto;
  margin-top: 1rem;
  border: 7px solid #f3f3f3;
  border-radius: 50%;
  border-top: 7px solid ${(props) => (props.color ? "#3498db" : "red")};
width: 60px;
height: 60px;
animation: ${spin} 1s linear infinite;
`
// Nếu component được truyền vào props là color thì màu #3498db, nếu không có props là color sẽ có màu đỏ

const Notification = styled.p`
margin-top: 1rem;
text-align: center;
`

export default function Loading() {
  return (
    <div>
      <Loader props />
      <Notification>
        Loading...
      </Notification>
    </div>
  )
}