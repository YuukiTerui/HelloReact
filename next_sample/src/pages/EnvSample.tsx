import { GetStaticProps, NextPage } from "next";
import Head from 'next/head';

type envProps = {
    val1: string,
    val2: string
}

const EnvSample: NextPage<envProps> = (props) => {
    console.log('process.env.TEST', process.env.TEST);
    console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST);
    const { val1, val2 } = props;
    return (
        <div>
            <Head>
                <title>EnvSample</title>
            </Head>
            <main>
                <p>client:{process.env.TEST}</p>
                <p>client:{process.env.NEXT_PUBLIC_TEST}</p>
                <br/>
                <p>server:{val1}</p>
                <p>server:{val2}</p>
            </main>
        </div>
    )
}
export default EnvSample;

export const getStaticProps: GetStaticProps = async (context) => {
    console.log('process.env.TEST', process.env.TEST);
    console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST);
    return {
        props:{
            val1: process.env.TEST,
            val2: process.env.NEXT_PUBLIC_TEST
        }
    };
}