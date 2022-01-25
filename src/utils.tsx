import React, { ReactNode } from 'react';
import vm from 'vm';
import { t } from '@superset-ui/core';
import { SupersetAppState } from './types';


const GLOBAL_CONTEXT = {
  console,
};

export function sandboxedEval(code, context, opts) {
  const sandbox = {};
  const resultKey = `SAFE_EVAL_${Math.floor(Math.random() * 1000000)}`;
  sandbox[resultKey] = {};
  const codeToEval = `${resultKey}=${code}`;
  const sandboxContext = { ...GLOBAL_CONTEXT, ...context };
  Object.keys(sandboxContext).forEach(key => {
    sandbox[key] = sandboxContext[key];
  });
  try {
    vm.runInNewContext(codeToEval, sandbox, opts);

    return sandbox[resultKey];
  } catch (error) {
    return () => error;
  }
}

export function jsFunctionControl(
  label: ReactNode,
  description: ReactNode,
  extraDescr = null,
  height = 100,
  defaultText = '',
) {
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
    mapStateToProps: (state: SupersetAppState) => ({
      // eslint-disable-next-line no-negated-condition
      warning: !state.common.conf.ENABLE_JAVASCRIPT_CONTROLS
        ? t(
            'This functionality is disabled in your environment for security reasons.',
          )
        : null,
      readOnly: !state.common.conf.ENABLE_JAVASCRIPT_CONTROLS,
    }),
  };
}
