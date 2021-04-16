import React from 'react';

export function jsFunctionControl(label, description, extraDescr = null, height = 100, defaultText = '') {
  return {
    type: 'TextAreaControl',
    language: 'javascript',
    label,
    description,
    height,
    default: defaultText,
    aboveEditorSection: (
      <div>
        <p>{description}</p>
        {extraDescr}
      </div>
    ),
    mapStateToProps: state => ({
      // eslint-disable-next-line no-negated-condition
      warning: !state.common.conf.ENABLE_JAVASCRIPT_CONTROLS
        ? t('This functionality is disabled in your environment for security reasons.')
        : null,
      readOnly: !state.common.conf.ENABLE_JAVASCRIPT_CONTROLS,
    }),
  };
}
