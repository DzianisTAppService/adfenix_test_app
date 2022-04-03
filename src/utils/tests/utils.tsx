/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import MuiThemeProvider from 'common/ThemeProvider';
import mountWithTheme from 'utils/tests/mountWithTheme';
import { ShallowWrapper, shallow, ReactWrapper } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

export interface ComposeProviders {
  memoryRouter?: boolean;
  apolloProvider?: boolean;
  authProvider?: boolean;
  userProvider?: boolean;
  themeProvider?: boolean;
}

function _compose(...fns: any[]): any {
  if (fns.length === 0) {
    throw new Error('Must provide at least one provider');
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduce((a, b) => (...args: any): any => {
    return a(b(...args));
  });
}

function _aggregateProviders(providerOptions: ComposeProviders): any[] {
  return [
    ...(providerOptions.themeProvider ? [_withThemeProvider] : []),
    ...(providerOptions.memoryRouter ? [_withRouter] : []),
  ];
}

export function composeMountWithTheme(wrapper: React.ReactElement, providerOptions: ComposeProviders): ReactWrapper {
  const providers = _aggregateProviders(providerOptions);
  return mountWithTheme(_compose(...providers)(wrapper));
}

export function composeShallowWith(wrapper: React.ReactElement, providerOptions: ComposeProviders): ShallowWrapper {
  const providers = _aggregateProviders(providerOptions);

  return shallow(_compose(...providers)(wrapper));
}

function _withRouter(wrapper: React.ReactElement): React.ReactElement {
  return <MemoryRouter>{wrapper}</MemoryRouter>;
}

function _withThemeProvider(wrapper: React.ReactElement): React.ReactElement {
  return <MuiThemeProvider>{wrapper}</MuiThemeProvider>;
}
