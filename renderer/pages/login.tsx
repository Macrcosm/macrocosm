import Head from "next/head";

import LoginPage from "../components/containers/login-page/LoginPage";
import {supabase} from "../utils/supabase";

interface Props {
    loggedIn: boolean;
}

export default function login(props: Props) {
    return (
        <>
            <Head>
                <title>Login - Macrocosm</title>
            </Head>
            <LoginPage loggedIn={props.loggedIn}/>
        </>
    );
}

export async function getStaticProps() {
    const {error, data} = await supabase.auth.getUser();
    return {
        props: {loggedIn: !!data.user},
    };
}