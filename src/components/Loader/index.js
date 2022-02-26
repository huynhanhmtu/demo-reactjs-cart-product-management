import React from 'react';
// import './style.css';
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
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`
const Notification = styled.p`
  margin-top: 1rem;
  text-align: center;
`
export default function Loading() {
  return (
    <>
      <Loader />
      <Notification>
        Loading...
      </Notification>
    </>
  )
}