import { t } from '@superset-ui/core';
import { expandControlConfig } from '@superset-ui/chart-controls';

export default {
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      tabOverride: 'data',
      controlSetRows: [
        [{ ...expandControlConfig('groupby'), renderTrigger: true }],
        [{ ...expandControlConfig('metric'), renderTrigger: true }],
      ],
    },
    {
      label: t('Options'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'font_size',
            config: {
              type: 'SelectControl',
              label: t('Font Size'),
              renderTrigger: true,
              clearable: false,
              default: 0.4,
              // Values represent the percentage of space the "Hello world!" should take
              options: [
                {
                  label: t('Tiny'),
                  value: 0.2,
                },
                {
                  label: t('Small'),
                  value: 0.3,
                },
                {
                  label: t('Normal'),
                  value: 0.4,
                },
                {
                  label: t('Large'),
                  value: 0.5,
                },
                {
                  label: t('Huge'),
                  value: 0.6,
                },
              ],
            },
          },
        ],
      ],
    },
  ],
};
