import React from 'react';
import { t, validateNonEmpty, validateInteger } from '@superset-ui/core';


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
      ],
    },
    {
      label: t('Chart Options'),
      expanded: true,
      controlSetRows: [
        [<h1 className="section-header">{t('States')}</h1>],
        [
          {
            name: 'num_states',
            config: {
              type: 'TextControl',
              label: t('Number of States'),
              description: t('Number of different indicator states'),
              isInt: true,
              validators: [validateNonEmpty, validateInteger],
              renderTrigger: true,
              clearable: false,
              default: 1,
            },
          },
        ],
        [
          {
            name: 'state_conditions',
            config: {
              type: 'TextControl',
              label: t('State Conditions'),
              description: t('Define conditions to toggle states depending on the value'),
              validators: [validateNonEmpty, validateInteger],
              renderTrigger: true,
              clearable: false,
              default: 1,
            },
          },
        ],
        [
          {
            name: 'state_labels',
            config: {
              type: 'TextControl',
              label: t('State Labels'),
              description: t(
      	        'Comma separated labels for states, e.g. great,good,bad.',
              ),
              renderTrigger: true,
              default: '',
            },
          },
        ],
        [<h1 className="section-header">{t('Colors')}</h1>],
        ['color_scheme'],
        [
          {
            name: 'color_indices',
            config: {
              type: 'TextControl',
              label: t('Color indices'),
              description: t(
                'Optionally override default order-based color picks with custom, comma-separated indices, e.g. 1,2,4. Integers denote colors from the chosen color scheme and are 1-indexed. Length should match the number of states.',
              ),
              renderTrigger: true,
              default: '',
            },
          },
        ],
        [<h1 className="section-header">{t('Other')}</h1>],
        [
          {
            name: 'orientation',
            config: {
              type: 'SelectControl',
              label: t('Orientation'),
              renderTrigger: true,
              default: 'horizontal',
              choices: [
                ['horizontal', t('Horizontal')],
                ['vertical', t('Vertical')],
              ],
            },
          },
        ],
        [
          {
            name: 'value_display_position',
            config: {
              type: 'SelectControl',
              label: t('Value Display Position'),
              renderTrigger: true,
              default: 'outside',
              choices: [
                ['outside', t('Outside')],
                ['inside_active', t('Inside active states')],
                ['inside_all', t('Inside all states')],
            },
          },
        ],
        [
          {
            name: 'spacing',
            config: {
              type: 'TextControl',
              label: t('Spacing'),
              isInt: true,
              renderTrigger: true,
              clearable: false,
              default: String(0),
            },
          },
        ],
      ],
    },
  ],
};
