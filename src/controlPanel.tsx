import React from 'react';
import { t, validateNonEmpty, validateInteger } from '@superset-ui/core';
import { formatSelectOptions, D3_FORMAT_OPTIONS } from '@superset-ui/chart-controls';
import { jsFunctionControl } from './utils';

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
        [
	  {
  	    name: 'data_color_mapper',
            config: jsFunctionControl(
              t('Data color mapper'),
              t(
                'Define a javascript function that receives the data array used in the visualization ' +
                'and is expected to return a hex color code which will be used as the background color. '
              ),
            ),
          }
	],
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
            name: 'font_size',
            config: {
              type: 'SliderControl',
              label: t('Font size'),
              description: t('Font size for text elements'),
              renderTrigger: true,
              min: 18,
              max: 30,
              default: 20,
            },
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
            name: 'number_format',
            config: {
              type: 'SelectControl',
              label: t('Number format'),
              description: 'D3 format syntax: https://github.com/d3/d3-format',
              freeForm: true,
              renderTrigger: true,
              default: 'SMART_NUMBER',
              choices: D3_FORMAT_OPTIONS,
            },
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
