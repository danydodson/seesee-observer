import styled from 'styled-components'
import { FaDollarSign } from "react-icons/fa";

export const Cash = styled(FaDollarSign)`
  top: 32px;
  right: 90px;

  font-size:35px;
  padding: 5px 10.88px 4px 10.88px;
  
  border-radius: 2px;
  box-shadow: 0 1px 8px rgba(0,0,0,.1);
  background-color: rgba(250,250,250,.7);
  
  color: ${props => (
    props.favorited ? '#f15151' : '#8a8a8a')
  };
  
  opacity: 0;
  cursor: pointer;
  position: absolute;
  transition: .2s ease-in-out;

  &:hover {
    color: #f76f6f;
    background-color: rgba(250,250,250,.9);
  }
`