import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from 'next/head';
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";


type MypageProps = {
    id: string,
    name: string,
}

const Mypage: NextPage<MypageProps> = (props) => {
    const { id, name } = props;
    const router = useRouter();

    console.log(router.isFallback);

    if (router.isFallback) {
        console.log(router);
        console.log(`${id}/${name}のパスなんかないんじゃボケカス！`);
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>{name}さんのページ</title>
                <link rel="icon" href="/fivicon.ico" />
            </Head>
            <main>
                <p>ここは{name}さんのページです。</p>
                <p>{`/mypage/${id}に対応するページです。`}</p>
            </main>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {
            params: {
                id: "1",
                name: "tanaka",
            },
        },
        {
            params: {
                id: "2",
                name: "kato",
            },
        },
        {
            params: {
                id: "3",
                name: "yoshimura",
            },
        },
    ]
    return { paths, fallback: true }
}

interface MypageParams extends ParsedUrlQuery {
    id: string,
    name: string,
}

export const getStaticProps: GetStaticProps<MypageProps, MypageParams> = async (context) => {
    console.log(context)
    console.log(context.params)
    return {
        props: {
            id: context.params!['id'],
            name: context.params!['name'],
        }
    }
}

export default Mypage;