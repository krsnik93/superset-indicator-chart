import React from 'react';
import { t, validateNonEmpty, validateInteger } from '@superset-ui/core';
import {
  formatSelectOptions,
  D3_FORMAT_OPTIONS,
} from '@superset-ui/chart-controls';
import { jsFunctionControl } from './utils';

const defaultDataColorMapper = `
function dataColorMapper(data) {
  if (data['count'] < 10){
    return '#ED1C24';
  }
  else {
    return '#0BDA51';
  }
}
`;

const defaultMarkdown = `
Count
=====

{{count}}
`;

export default {
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      tabOverride: 'data',
      controlSetRows: [
        ['groupby'],
        ['metrics'],
        ['adhoc_filters'],
        [
          {
            name: 'order_desc',
            config: {
              type: 'CheckboxControl',
              label: t('Sort descending'),
              default: true,
              description: t('Whether to sort descending or ascending'),
            },
          },
        ],
        [
          {
            name: 'data_color_mapper',
            config: jsFunctionControl(
              t('Data color mapper'),
              t(
                'Define a javascript function that receives the data array used in the visualization ' +
                  'and is expected to return a hex color code which will be used as the background color. ',
              ),
              null,
              100,
              defaultDataColorMapper,
            ),
          },
        ],
      ],
    },
    {
      label: t('Chart Options'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'markdown',
            config: {
              type: 'TextAreaControl',
              label: t('Markdown'),
              default: defaultMarkdown,
              language: 'markdown',
              offerEditInModal: true,
              renderTrigger: true,
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
            name: 'orientation',
            config: {
              type: 'SelectControl',
              label: t('Orientation'),
              description: 'How to align multiple indicators',
              choices: formatSelectOptions(['horizontal', 'vertical']),
              default: 'horizontal',
              renderTrigger: true,
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
