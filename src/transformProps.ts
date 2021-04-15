import {
  ChartProps,
  DataRecord,
  QueryFormMetric,
  getMetricLabel,
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
    jsDataMutator,
    textColor,
    subtitle,
    kicker,
    roundedCorners,
   } = formData;
  const data = (queriesData[0]?.data || []) as DataRecord[];
  const value = data[0][getMetricLabel(metric as QueryFormMetric)]

  console.log(4, formData);
  console.log(5, queriesData);

  let backgroundColor;
  if (jsDataMutator) {
    console.log('Setting background color with the passed function.');
    const jsFnMutator = sandboxedEval(jsDataMutator);
    backgroundColor = jsFnMutator(value);
  }
  else {
    console.log('Setting default background color as no setter function was passed.');
    backgroundColor = 'white';
  }

  const transformedProps = {
    data,
    value,
    backgroundColor,
    textColor,
    subtitle,
    kicker,
    roundedCorners,
  };

  return {
    width,
    height,
    ...transformedProps,
  };
}
