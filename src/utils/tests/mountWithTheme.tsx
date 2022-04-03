import { ReactElement } from 'react';
import { mount, ReactWrapper, MountRendererProps } from 'enzyme';
import MuiThemeProvider from 'common/ThemeProvider';

const mountWithTheme = (tree: ReactElement, options?: MountRendererProps): ReactWrapper =>
  mount(tree, {
    ...options,
    wrappingComponent: MuiThemeProvider,
  });

export default mountWithTheme;
