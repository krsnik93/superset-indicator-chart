import { t } from '@superset-ui/translation';
import { ChartMetadata, ChartPlugin } from '@superset-ui/chart';
import controlPanel from './controlPanel';
import transformProps from './transformProps';
import buildQuery from './buildQuery';
import thumbnail from './images/thumbnail.png';
import Chart from './Vis';

const metadata = new ChartMetadata({
  description:
    'A chart plugin for Superset demonstrating current best practices',
  name: t('Status Indicator'),
  thumbnail,
  useLegacyApi: false,
});

export default class StatusIndicatorChartPlugin extends ChartPlugin {
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
