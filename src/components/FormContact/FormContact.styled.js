import styled from 'styled-components';

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
margin-bottom: 25px;
padding:20px;
border: 3px solid;
border-image: linear-gradient(to top,  rgb(1, 212, 64), rgb(27, 73, 200));
border-image-slice: 1;
width: 100%;
background-color: #fff;
`

export const Label = styled.label`
color: rgb(1, 212, 64);
font-weight: 500;
font-size: 20px;
`
export const Input = styled.input`
width: 100%;
  border: none;
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, rgb(1, 212, 64), rgb(27, 73, 200));
  border-image-slice: 1;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
  color: rgb(1, 180, 30);
  &:focus{
    outline: none;
  }
`

export const Button = styled.button`
width: 50%;
padding: 10px;
border: 3px solid;
border-image: linear-gradient(to top,  rgb(1, 212, 64), rgb(27, 73, 200));
border-image-slice: 1;
color: rgb(1, 180, 30);
font-weight: 500;
font-size: 16px;
  &:hover {
    color: rgb(27, 73, 200);
    background-color: #fff;
    cursor: pointer;
    border-image: linear-gradient(to bottom,  rgb(1, 212, 64), rgb(27, 73, 200));
    border-image-slice: 1;
  }
`