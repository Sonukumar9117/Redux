import {combineReducers, createStore} from 'redux';
import userReducer from './userReducer';
const rootReducer=combineReducers({ 
    // this is helpful when there is multiple reduce in our app then here we combile all the reducer. Reducer is a function whose work is to update state and store it 
    userData:userReducer
});
export const store=createStore(rootReducer);

export type RootState=ReturnType<typeof rootReducer>