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
  border-top: 7px solid #3498db;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`

const Notification = styled.p`
  margin-top: 1rem;
  text-align: center;
`

export default function Loading() {
  return (
    <div>
      <Loader />
      <Notification>
        Loading...
      </Notification>
    </div>
  )
}