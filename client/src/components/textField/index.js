import styled from "styled-components";

const Input = styled.input`
  background: #ffffff8a;
  font-size: 12px;
  font-weight: 300;
  border-radius: 32px;
  width: 20rem;
  height: 2rem;
  border: none;
`;

const TextField = ({placeholder, type}) => {
  return(
    <>
    <Input  type={type} placeholder={placeholder}/>
    </>
  )
}
export default TextField;
