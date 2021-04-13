import React, { useMemo } from 'react';
import { styled } from '@superset-ui/core';

type VisProps = {
  className?: string;
  width: number;
  height: number;
  queryData: any;
};

const Header = styled.h1`
  font-family: ${({ theme }) => theme.typography.families.sansSerif};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Vis({ className = '', queryData }: VisProps) {
  const stringyQueryData = useMemo(() => {
    return JSON.stringify(queryData, null, 2);
  }, [queryData]);

  return (
    <>
      <Header className={className}>Hello world!</Header>
      <pre>{stringyQueryData}</pre>
    </>
  );
}
