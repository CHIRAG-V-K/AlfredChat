import EncryptedStorage from 'react-native-encrypted-storage';

export const AlfredAsyncStorage = {
    setItem: async (key: string, value: string) => { await EncryptedStorage.setItem(key, value); },
    getItem: async (key: string) => {
        const val = await EncryptedStorage.getItem(key);
        return val ? val : null;
    },
    removeItem: async (key: string) => { await EncryptedStorage.removeItem(key); },
    clearAll: async () => { await EncryptedStorage.clear(); }
}