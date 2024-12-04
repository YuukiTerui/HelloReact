import exp from "constants";
import { GetStaticPaths, NextPage, GetStaticProps } from "next";
import Head from 'next/head';
import { useRouter } from "next/router";

type ISRProps = {
    message: string
}

const ISR: NextPage<ISRProps> = (props) => {
    const { message } = props;
    const router = useRouter();

    if (router.isFallback) {
        console.log('fallbackede');
        return <div>Loadiing...</div>
    }

    return (
        <div>
            <Head>
                <title>ISR Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>このページはインクリメンタル静的再生成によってビルド時に生成されたページ</p>
                <p>{message}</p>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}にこのページのgetStaticPropsは実行されました。`;
    return {
        props: {
            message,
        },
        revalidate: 60,
    }
}

export default ISR;