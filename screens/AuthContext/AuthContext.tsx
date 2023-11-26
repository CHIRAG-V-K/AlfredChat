import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { AlfredAsyncStorage } from '../../helpers';


interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextTypes {
    userToken: string | null;
    authLogin: (token: string) => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [userToken, setUserToken] = useState<string | null>(null);

    useEffect(() => {
        isLoggedIn()
    }, [])

    const authLogin = async (token: string) => {
        setLoading(true);
        setUserToken(token);
        await AlfredAsyncStorage.setItem("token", token);
        setLoading(false);
    }

    const isLoggedIn = async () => {
        try {
            setLoading(true);
            const userToken = await AlfredAsyncStorage.getItem("token");
            setUserToken(userToken);
            setLoading(false);
        } catch (e) {
            console.log({ type: 'error', props: { text1: `Authentication Error ${e}` } });
        }
    }
    const logout = async () => {
        setLoading(true);
        setUserToken(null);
        await AlfredAsyncStorage.removeItem("token");
        await AlfredAsyncStorage.clearAll();
        setLoading(false);
        console.log({ type: 'success', props: { text1: 'Successfully Logged Out' } });
    }

    return (
        <AuthContext.Provider value={{ userToken, authLogin, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider