import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledInput = styled.input`
  cursor: pointer;
  font-size: inherit;
  border: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #52aace;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1rem;

  &:hover {
    background-color: #2d93bd;
  }
`;

const StyledLink = styled(Link)`
  margin-left: 0.5rem;
  cursor: pointer;
  font-size: inherit;
  border: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #52aace;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1rem;

  &:hover {
    background-color: #2d93bd;
  }
`;

export { StyledInput, StyledLink };
