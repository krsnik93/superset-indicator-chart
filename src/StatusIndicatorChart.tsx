import React, { useMemo } from 'react';
import { styled } from '@superset-ui/core';


const Chart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Kicker = styled.h4`
    margin-top: 0.1em;
    margin-bottom: 0.1em;
`;

const Value = styled.h1`
    margin-top: 0.15em;
    margin-bottom: 0.15em;
`;

const Subtitle = styled.h4`
    margin-top: 0.1em;
    margin-bottom: 0.1em;
`;

export default function StatusIndicatorChart(chartProps) {
  const {
    value,
    backgroundColor,
    textColor,
    subtitle,
    kicker,
    fontSize,
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
        <Kicker style={{
	  'fontSize': fontSize,
	}}>
          {kicker}
        </Kicker>
        <Value style={{
	  'fontSize': fontSize * 2,
	}}>
          {value}
        </Value>
        <Subtitle style={{
	  'fontSize': fontSize,
	}}>
          {subtitle}
        </Subtitle>
    </Chart>
  );
}

