import styled from "styled-components";

export const Car = styled.div`
  top: 60%;
  left: 60%;
  transform: translate3d(-50%, -50%, 0);
  width: 100%;
  position: absolute;
  z-index: 10;
  text-align: center;
  font-size: 20px;
`;

export const FormBtn = styled.div`
  width: 600px;
  height: 50px;
  border: 1px solid #eae7e7;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px #dadce0;
  input[type="radio"] {
    display: none;
  }
  label {
    display: block;
    cursor: pointer;
    border-radius: 10px;
    text-align: center;
    padding-top: 5px;
    line-height: 45px;
  }
  input[type="radio"]:checked + label {
    background: #fc872a;
    color: #fff;
  }
  input[type="radio"] + label {
    background: #f9fafc;
    color: #666;
    &:hover {
      background: #fc872a;
      color: #fff;
    }
    &:checked {
      background: #fc872a;
      color: #fff;
    }
  }
`;
