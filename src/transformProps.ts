import {
  ChartProps,
  DataRecord,
  QueryFormMetric,
  getMetricLabel,
  getNumberFormatter,
} from '@superset-ui/core';
import sandboxedEval from '@superset-ui/legacy-preset-chart-deckgl/lib/utils/sandbox';

function insertMetricsIntoMarkdown(
  markdownStr,
  dataPoint,
  numberFormat,
  ignore = [],
) {
  const numberFormatter = getNumberFormatter(numberFormat);
  let markdown = markdownStr.slice(0);
  const regexp = /({{(.*?)}})/g;
  const matches = markdown.matchAll(regexp);

  for (const match of matches) {
    const metricLabel = match[2];
    let metric = dataPoint[metricLabel];
    if (metric) {
      if (typeof metric === 'number' && !ignore.includes(metricLabel)) {
        metric = numberFormatter(metric);
      }
      markdown = markdown.replace(match[1], metric);
    }
  }
  return markdown;
}

function getBackgroundColor(dataColorMapper, data) {
  let backgroundColor;
  if (dataColorMapper) {
    console.log('Setting background color with the passed function.');
    const jsFnMutator = sandboxedEval(dataColorMapper);
    backgroundColor = jsFnMutator(data);
  } else {
    console.log(
      'Setting default background color as no setter function was passed.',
    );
    backgroundColor = 'white';
  }
  return backgroundColor;
}

export default function transformProps(chartProps) {
  const { width, height, formData, queriesData } = chartProps;
  const {
    groupby,
    metrics,
    dataColorMapper,
    textColor,
    subtitle,
    kicker,
    markdown,
    orientation,
    numberFormat,
    roundedCorners,
  } = formData;
  const data = (queriesData[0]?.data || []) as DataRecord[];
  const backgroundColors = data.map(dataPoint =>
    getBackgroundColor(dataColorMapper, dataPoint),
  );
  const markdowns = data.map(dataPoint =>
    insertMetricsIntoMarkdown(markdown, dataPoint, numberFormat, groupby),
  );

  const transformedProps = {
    markdowns,
    backgroundColors,
    textColor,
    orientation,
    roundedCorners,
  };

  console.log(4, formData);
  console.log(5, queriesData);
  console.log(6, transformedProps);

  return {
    width,
    height,
    ...transformedProps,
  };
}
