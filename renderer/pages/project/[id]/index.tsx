import Head from "next/head";

import ProjectPage from "../../../components/containers/project-page/ProjectPage";
import {useRouter} from "next/router";

export default function Project() {
    const router = useRouter();
    const id = router.query.id as string;
    return (
        <>
            <Head>
                <title>Project - Macrocosm</title>
            </Head>
            <ProjectPage id={id}/>
        </>
    );
}
