import { GetStaticProps, NextPage, NextPageContext } from 'next';
import Head from 'next/head';

type SSG2Props = {
    message: string
}

const SSG2: NextPage<SSG2Props> = (props) => {
    const { message } = props;

    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <p>
                    このページは静的サイト生成によってビルド時に生成されたページです。
                </p>
                <p>{message}</p>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps<SSG2Props> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp} にgetStaticPropsが実行された`;
    console.log(message);
    return {
        props: {
            message,
        },
    }
}
export default SSG2