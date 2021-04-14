import {
  ChartProps,
  DataRecord,
  QueryFormMetric,
  getMetricLabel,
} from '@superset-ui/core';


export default function transformProps(chartProps) {
  const { width, height, formData, queriesData } = chartProps;
  const { metric } = formData;
  const data = (queriesData[0]?.data || []) as DataRecord[];
  // transformations happen here...
  // TODO demo some transformation
  console.log(4, formData);
  console.log(5, queriesData);
  const transformedProps = {
    ...formData,
    data: data[0],
    value: data[0][getMetricLabel(metric as QueryFormMetric)],
  };

  return {
    width,
    height,
    transformedProps,
  };
}
