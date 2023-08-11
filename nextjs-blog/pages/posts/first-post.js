import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <script src="https://connect.facebook.net/en_US/sdk.js" />
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => console.log("SDK Loaded!")}
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home by /Link</Link>
            </h2>
            <h2>
                <a href="/">Back to home by /a</a>
            </h2>
            <Image src="/images/profile.jpg" height={144} width={144} alt="Your Name" />
        </Layout>
    );
}
