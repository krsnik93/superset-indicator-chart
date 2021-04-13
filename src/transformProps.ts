import { ChartProps } from '@superset-ui/chart';

export interface DatasourceMetric {
  label: string;
  metric_name?: string;
  d3format?: string;
}

export type FormData = {
  fontSize?: string;
};

export type HelloWorldChartProps = ChartProps & {
  formData: FormData;
  queryData: any;
};

export default function transformProps(chartProps: HelloWorldChartProps) {
  const { width, height, queryData } = chartProps;

  // transformations happen here...
  // TODO demo some transformation

  return {
    width,
    height,
    queryData,
  };
}
