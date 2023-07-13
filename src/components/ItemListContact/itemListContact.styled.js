import styled from 'styled-components'

export const Item =styled.li`
display: flex;
justify-content: space-between;
margin-bottom: 15px;
border-bottom: 1px solid`

export const Button = styled.button`
padding: 5px;
font-size: 13px;
color: rgb(1, 180, 30);
cursor: pointer;
&:hover{
    color: rgb(27, 73, 200);
    text-decoration: underline;
}`