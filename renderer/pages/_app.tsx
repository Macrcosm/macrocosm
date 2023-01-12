import Head from "next/head";
import type {AppProps} from "next/app";
import {Poppins, Inter} from "@next/font/google";

import "../styles/globals.css";
import classnames from "../utils/classnames";
import {createBrowserSupabaseClient} from '@supabase/auth-helpers-nextjs';
import {SessionContextProvider, Session} from '@supabase/auth-helpers-react';
import {useState} from 'react';
import {AuthContextProvider} from "../context/AuthContext";

const poppins = Poppins({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
});

export default function App({Component, pageProps}: AppProps<{
    initialSession: Session
}>) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())
    return (
        <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
        >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div
                className={classnames(
                    poppins.variable,
                    inter.variable,
                    "h-full font-poppins"
                )}
            >
                <AuthContextProvider>
                    <Component {...pageProps} />
                </AuthContextProvider>
            </div>
        </SessionContextProvider>
    );
}
