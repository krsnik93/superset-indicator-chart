import React from 'react';
import { t, validateNonEmpty, validateInteger } from '@superset-ui/core';
import { formatSelectOptions } from '@superset-ui/chart-controls';
import { jsDataMutator } from '@superset-ui/legacy-preset-chart-deckgl/lib/utilities/Shared_DeckGL';


export default {
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      tabOverride: 'data',
      controlSetRows: [
        ['groupby'],
        ['metric'],
        ['adhoc_filters'],
        [jsDataMutator],
      ],
    },
    {
      label: t('Chart Options'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'kicker',
            config: {
              type: 'TextControl',
              label: t('Kicker'),
              description: t('Text above the value'),
              renderTrigger: true,
              default: '',
            },
          },
        ],
        [
          {
            name: 'subtitle',
            config: {
              type: 'TextControl',
              label: t('Subtitle'),
              description: t('Text below the value'),
              renderTrigger: true,
              default: '',
          },
        ],
        [
          {
	    name: 'text_color',
            config: {
	      type: 'SelectControl',
              label: t('Text Color'),
              choices: formatSelectOptions(['light', 'dark']),
              default: 'dark',
              renderTrigger: true,
	  },
        ],
        [
          {
            name: 'rounded_corners',
            config: {
              type: 'CheckboxControl',
              label: t('Rounded Corners'),
              default: true,
              renderTrigger: true,
            },
          },
        ],
      ],
    },
  ],
};
