import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import UserSlice from './slices/User.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  UserSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = configureStore({
  reducer: persistedReducer,
  middleware: () => [],
});

export const persistor = persistStore(Store);

export type storeType = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;

// comp1  redux  comp2

// store   <== data

// {
//   sdlf
//   <Cpmo2 data={data} />
// }

// {
//   const data="name";
//   <other />;
// }

// <comp2 />;
