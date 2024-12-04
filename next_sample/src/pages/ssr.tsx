import { GetServerSideProps, NextPage } from "next";
import Head from 'next/head';

type SSRProps = {
    message: string
}

const SSR: NextPage<SSRProps> = (props) => {
    const { message } = props;
    return (
        <div>
            <Head>
                <title>SSR Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このページはサーバーサイドレンダリングでアクセス時にサーバーで描画される。
                </p>
                <p>{message}</p>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
    console.log(context);
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}にアクセスがありました。`;
    console.log(message);
    return {
        props: {
            message,
        },
    }
}

export default SSR;