import { ReactNode } from 'react';

// import { useModalStore } from 'entities/stores/modal-store'

// import { ErrorBoundaryProvider } from './ErrorBoundaryProvider'
import { MantineProvider } from './MantineProvider';
// import { Provider } from "react-redux";
// import { store } from "../../store/redux/ReduxStore";
// import { RouterProvider } from './RouterProvider'

interface CombinedProvidersProps {
  children: ReactNode;
}

export const CombinedProviders = ({ children }: CombinedProvidersProps) => {
  // eslint-disable-next-line no-console
  console.log('loaded');

  return (
    // <RouterProvider>
    <MantineProvider>
      {/* <Provider store={store}> */}
      {/* <ErrorBoundaryProvider> */}
      {children}
      {/* </ErrorBoundaryProvider> */}
      {/* </Provider> */}
    </MantineProvider>
  );
};
