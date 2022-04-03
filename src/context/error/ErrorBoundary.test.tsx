import React from 'react';

import { composeShallowWith, composeMountWithTheme, ComposeProviders } from 'utils/tests/utils';

import ErrorBoundary from './ErrorBoundary';
import { ServerErrorComponent } from 'common/ErrorComponent/ErrorComponent';

const providers: ComposeProviders = {
  themeProvider: true,
};

const MOCK_ERROR = new Error('Error thrown');

describe('FleetCategoryContainer', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    console.error = jest.fn();
  });

  it('should mount', () => {
    const wrapper = composeShallowWith(<ErrorBoundary />, providers);

    expect(wrapper).toHaveLength(1);
  });

  it('should show the error component when there is an uncaught error', () => {
    const wrapper = composeMountWithTheme(
      <ErrorBoundary>
        <FaultyReactComponent />
      </ErrorBoundary>,
      providers,
    );

    expect(wrapper.find(ServerErrorComponent)).toHaveLength(0);

    wrapper.find(FaultyReactComponent).simulateError(MOCK_ERROR);

    expect(wrapper.find(ServerErrorComponent)).toHaveLength(1);
  });

  it('should show call onError prop if error occurs', () => {
    const onErrSpy = jest.fn();

    const wrapper = composeMountWithTheme(
      <ErrorBoundary onError={onErrSpy}>
        <FaultyReactComponent />
      </ErrorBoundary>,
      providers,
    );

    wrapper.find(FaultyReactComponent).simulateError(MOCK_ERROR);

    expect(onErrSpy).toHaveBeenCalled();
  });
});

function FaultyReactComponent(): JSX.Element {
  return <h1>React Component</h1>;
}
