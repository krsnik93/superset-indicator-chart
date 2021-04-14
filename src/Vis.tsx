import React, { useMemo } from 'react';
import { styled } from '@superset-ui/core';


const Header = styled.h1`
  font-family: ${({ theme }) => theme.typography.families.sansSerif};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Vis({ className = '', transformedProps }) {
  const stringyQueryData = useMemo(() => {
    console.log(123, transformedProps);
    return JSON.stringify(transformedProps, null, 2);
  }, [transformedProps]);
  return (
    <>
      <Header className={className}>Hello world!</Header>
      <pre>{stringyQueryData}</pre>
    </>
  );
}
