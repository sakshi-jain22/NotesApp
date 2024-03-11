import React, { createContext, FunctionComponent, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist } from 'mst-persist';

import { RootStore, RootStoreModel } from './rootStore';

export * from './NotesStore/notesStore';

export const StoreContext = createContext<null | RootStore>(null);

export const useStores = (): RootStore => {
  const store = useContext(StoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
};

export const createStore = (): RootStore => {
  return RootStoreModel.create({});
};

interface StoreProps {
  children: React.ReactNode;
}

export const StoreProvider: FunctionComponent<StoreProps> = ({
  children,
}: StoreProps): React.ReactElement => {
  const store = createStore();

  persist('notes-app-store', store, {
    storage: AsyncStorage, // default: localStorage
    jsonify: true, // if you use AsyncStorage, this should be true    // default: true
  }).then(() => console.log('someStore has been hydrated'));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
