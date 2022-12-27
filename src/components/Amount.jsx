import styled from "styled-components/macro";
import { bRadius, colors, breakpoints } from "../styled/variables";
import { PlusIcon, MinusIcon } from "../utils/icons";
import { useState } from "react";
const Amount = ({ increase, decrease, amount }) => {
  return (
    <Wrapper>
      <AmountBtn
        onClick={() => {
          decrease();
        }}
      >
        <MinusIcon />
      </AmountBtn>

      <AmountResult>{amount}</AmountResult>
      <AmountBtn
        onClick={() => {
          increase();
        }}
      >
        <PlusIcon />
      </AmountBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const AmountBtn = styled.button`
  background-color: ${colors.white};
  border-radius: ${bRadius.b_radius_5};
  border-color: ${colors.secondary};

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.white};
    border-color: ${colors.white};
  }
  svg {
    transition: all 0.1s linear;
    height: 35px;
      @media screen and (max-width: ${breakpoints.small}){
      height: 25px;
    }
  }
`;
const AmountResult = styled.h2`
  font-size: 2rem;
  color: ${colors.title};
    @media screen and (max-width: ${breakpoints.small}){
      font-size: 1.5rem;
    }
`;

export default Amount;
