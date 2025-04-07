import { combineReducers, configureStore } from '@reduxjs/toolkit'
import orderReducer from './OrderSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore,

    FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    order: orderReducer,
  })

const persistedReducer  = persistReducer(persistConfig, rootReducer)

export const store =  configureStore({
    reducer: persistedReducer,
         middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export const persistor =  persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch