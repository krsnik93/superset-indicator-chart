import React, { useMemo } from 'react';
import { styled } from '@superset-ui/core';


const Chart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Kicker = styled.h4`
    margin-top: 0.25em;
    margin-bottom: 0.25em;
`;

const Value = styled.h1`
    margin-top: 0.5em;
    margin-bottom: 0.5em;
`;

const Subtitle = styled.h4`
    margin-top: 0.25em;
    margin-bottom: 0.25em;
`;

export default function StatusIndicatorChart(chartProps) {
  const {
    value,
    backgroundColor,
    textColor,
    subtitle,
    kicker,
    roundedCorners,
    height,
    width,
  } = chartProps;

  return (
    <Chart style={{
      'backgroundColor': backgroundColor,
      'borderRadius': roundedCorners ? '0.5em' : 0,
      'color': textColor === 'light' ? 'gainsboro' : '#404040',
      'height': height,
      'width': width,
    }}>
        <Kicker>{kicker}</Kicker>
        <Value>{value}</Value>
        <Subtitle>{subtitle}</Subtitle>
    </Chart>
  );
}

