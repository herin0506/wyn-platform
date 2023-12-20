import { Provider } from 'react-redux';
import { store ,persistor} from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

export function ReduxStateProviders({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
