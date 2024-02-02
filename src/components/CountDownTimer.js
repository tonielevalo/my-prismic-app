"use client";
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'

const AppStyled = styled.div`
  background-image: linear-gradient(15deg, #1a1a1a, var(--color-bg));
  color: var(--color-text);
  display: flex;
  min-height: 100vh;
`;

const ContainerStyled = styled.section`
  margin: auto;
  padding: 1rem;

  @media (min-width: 48em) {
    padding: 4rem;
  }
`;

const WrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (min-width: 35.5em) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0 2rem;
  }
`;
const DateStyled = styled.header`
  margin-bottom: 2rem;

  & h3 {
    color: var(--color-heading);
    font-size: clamp(1rem, 2vw, 99rem);
    font-weight: 300;
    letter-spacing: 0.1875em;
    margin: unset;
    text-align: center;
    text-transform: uppercase;
  }
`;

const CounterStyled = styled.div`
  background: rgba(255, 255, 255, 0.025);
  border-radius: 1rem;
  color: var(--color-counter);
  display: flex;
  flex-direction: column;
  font-size: clamp(1rem, 8vw, 99rem);
  font-weight: 100;
  line-height: 1;
  padding: 2vw
  text-align: center;

  h2 {
    color: var(--color-heading);
    font-size: clamp(1rem, 2vw, 99rem);
    font-weight: 300;
    letter-spacing: .1875em;
    margin: 1.25rem 0 0;
    order: 1;
    overflow: hidden
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
    width: 100%;
  }
`;
// components
const Counter = ({ displayValue, label }) => (
  <CounterStyled>
    <h2>{label}</h2>
    {displayValue}
  </CounterStyled>
);

const CountdownTimer = ({ targetDateTime, onFinish, title }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Mark as client-side after initial render
  }, []);

  useEffect(() => {
    if (isClient) {
      const intervalId = setInterval(() => {
        const now = new Date();
        const target = new Date(targetDateTime);
        const diff = target - now;

        if (diff <= 0) {
          clearInterval(intervalId);
          onFinish();
          return;
        }

        const remainingDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [targetDateTime, onFinish, isClient]);

  return (
    <AppStyled>
      <ContainerStyled>
        <DateStyled>
          <h3>{title}</h3>
        </DateStyled>
        <WrapperStyled>
          <Counter displayValue={days} label={"Days"} />
          <Counter displayValue={hours} label={"Hours"} />
          <Counter displayValue={minutes} label={"Minutes"} />
        </WrapperStyled>
      </ContainerStyled>
    </AppStyled>
  );
};

export default CountdownTimer;