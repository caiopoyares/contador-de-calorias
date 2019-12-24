import styled from "styled-components";

export default styled.div`
  margin: 2rem auto 0;
  text-align: center;
  max-width: 600px;

  a.home-button {
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

    &:first-child {
      margin-right: 0.5rem;
    }
  }
`;
