import { t, ChartMetadata, ChartPlugin } from '@superset-ui/core';
import controlPanel from './controlPanel';
import transformProps from './transformProps';
import buildQuery from './buildQuery';
import thumbnail from './images/thumbnail.png';
import Chart from './IndicatorChart';
import { FormData } from './types';

const metadata = new ChartMetadata({
  description:
    'Indicator chart plugin for Apache Superset',
  name: t('Indicator'),
  thumbnail,
  useLegacyApi: false,
});

export default class IndicatorChartPlugin extends ChartPlugin<FormData> {
  constructor() {
    super({
      buildQuery,
      Chart,
      metadata,
      transformProps,
      controlPanel,
    });
  }
}
