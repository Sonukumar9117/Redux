import {combineReducers, createStore} from 'redux';
import userReducer from './userReducer';
import { persistReducer,persistStore } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage'
const persistConfig={
    key:"root",
    storage
}
const rootReducer=combineReducers({ 
    // this is helpful when there is multiple reduce in our app then here we combile all the reducer. Reducer is a function whose work is to update state and store it 
    userData:persistReducer(persistConfig,userReducer)
});
export const store=createStore(rootReducer);

export type RootState=ReturnType<typeof rootReducer>
export const persistor=persistStore(store)