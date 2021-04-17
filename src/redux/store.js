import { combineReducers } from 'redux';
import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
// import { persistStore } from 'redux-persist';

import {
  itemsReduser,
  isLoadingReduser,
} from './items/items-reducer';
import filterReduser from './filter/filter-reducer';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';

// const persistConfig = {
//   key: 'phonebook',
//   storage,
// };

const contactsReduser = combineReducers({
  items: itemsReduser,
  filter: filterReduser,
  isLoading: isLoadingReduser,
});

const rootReducer = combineReducers({
  contacts: contactsReduser,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ],
    },
  }),
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

// const persistor = persistStore(store);
// export default { store, persistor };

export default store;
