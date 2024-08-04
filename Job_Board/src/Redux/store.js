import userReducer from './UserSlice.js'
import { configureStore,combineReducers } from '@reduxjs/toolkit'
// import { version } from 'mongoose'
import {persistReducer,persistStore} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const rootreducer = combineReducers({
    user:userReducer
})

const persistConfig = {
    key:'root',
    storage,
    version:1
}

const persistedReducer = persistReducer(persistConfig,rootreducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) =>getDefaultMiddleware({serializableCheck:false})
})

export const persistor = persistStore(store);