import styled from "styled-components";

export default styled.form`
  border: 1px solid #eee;
  box-shadow: 2px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 1.2rem;
  border-radius: 4px;
  text-align: center;

  .form-fields {
    text-align: left;
    margin-top: 1rem;
    div {
      margin: 0 auto;
      max-width: 500px;
      margin-bottom: 0.85rem;
    }

    label {
      font-size: 0.8rem;
      text-transform: uppercase;
      color: #777;
      display: block;
    }

    input {
      font-size: inherit;
      width: 100%;
      padding: 0.2rem;
    }
  }
`;
