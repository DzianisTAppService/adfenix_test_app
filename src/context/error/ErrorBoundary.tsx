import React from 'react';
import { ServerErrorComponent } from 'common/ErrorComponent/ErrorComponent';

interface Props {
  fallback: React.FunctionComponent;
  onError?: (error: Error, componentStack: string) => void;
}

interface DefaultState {
  error: null;
  info: null;
  hasError: false;
}

interface ErrorState {
  error: Error;
  info: React.ErrorInfo;
  hasError: boolean;
}

type State = DefaultState | ErrorState;

class ErrorBoundary extends React.Component<Props, State> {
  static defaultProps = {
    fallback: ServerErrorComponent,
  };

  state: State = {
    error: null,
    info: null,
    hasError: false,
  };

  public componentDidUpdate(): void {
    const { error, info } = this.state;

    if (error && info) {
      //  here we can add any logger
    }
  }

  public componentDidCatch(error: Error, info: React.ErrorInfo): void {
    const { onError } = this.props;

    if (onError) {
      try {
        onError.call(this, error, info.componentStack);
      } catch (ignoredError) {
        // Ignore Error
      }
    }

    this.setState({
      error,
      info,
    });
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return {
      hasError: true,
    };
  }

  public render(): React.ReactNode {
    const { children, fallback } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      const FallbackComponent = fallback;
      return <FallbackComponent />;
    }

    return children;
  }
}

export default ErrorBoundary;
