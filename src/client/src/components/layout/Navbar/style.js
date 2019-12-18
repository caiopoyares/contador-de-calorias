import styled from "styled-components";

export default styled.nav`
  display: flex;
  align-items: center;
  background-color: #f34353;
  padding: 0 0.5rem;
  @media (min-width: 600px) {
    padding: 0 1rem;
  }

  .logo {
    text-transform: uppercase;
    margin-right: auto;
    color: white;
    font-weight: bold;
    padding: 0.5rem;

    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
    }
  }
  .navbar-list {
    display: flex;
    color: white;
    li {
      padding: 1rem 0.5rem;
      a {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        &:hover {
          color: #fff;
        }
      }
    }
  }
`;
