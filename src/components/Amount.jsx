import styled from "styled-components/macro";
import { bRadius, colors } from "../styled/variables";
import { PlusIcon, MinusIcon } from "../utils/icons";
import { useState } from "react";
const Amount = () => {
  const [amount, setAmount] = useState(1);
  const increase = () => {
    setAmount(amount + 1);
  };
  const decrease = () => {
    let newAmount = amount - 1;
    if (newAmount < 1) {
      newAmount = 1;
    }
    setAmount(newAmount);
  };
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
  }
`;
const AmountResult = styled.h2`
  font-size: 2rem;
  color: ${colors.title};
`;

export default Amount;
