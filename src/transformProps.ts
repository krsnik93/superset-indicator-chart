import {
  ChartProps,
  DataRecord,
  QueryFormMetric,
  getMetricLabel,
  getNumberFormatter,
} from '@superset-ui/core';
import sandboxedEval from '@superset-ui/legacy-preset-chart-deckgl/lib/utils/sandbox';


export default function transformProps(chartProps) {
  const {
    width,
    height,
    formData,
    queriesData
  } = chartProps;
  const {
    metric,
    dataColorMapper,
    textColor,
    subtitle,
    kicker,
    fontSize,
    numberFormat,
    roundedCorners,
   } = formData;
  const numberFormatter = getNumberFormatter(numberFormat);
  const data = (queriesData[0]?.data || []) as DataRecord[];
  const value = data[0][getMetricLabel(metric as QueryFormMetric)];

  console.log(4, formData);
  console.log(5, queriesData);

  let backgroundColor;
  if (dataColorMapper) {
    console.log('Setting background color with the passed function.');
    const jsFnMutator = sandboxedEval(dataColorMapper);
    backgroundColor = jsFnMutator(value);
  }
  else {
    console.log('Setting default background color as no setter function was passed.');
    backgroundColor = 'white';
  }

  const formattedValue = numberFormatter(value);

  const transformedProps = {
    data,
    value: formattedValue,
    backgroundColor,
    textColor,
    subtitle,
    kicker,
    fontSize,
    roundedCorners,
  };

  return {
    width,
    height,
    ...transformedProps,
  };
}
