import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const Index = () => (
    <Layout
        mainTitle="My Home Page built with Next JS"
        footer={`Copyright ${new Date().getFullYear()}`}
    >
        <Head>
            <title>Home Page</title>
        </Head>

        <h2>Hello from Next JS</h2>
        <Link href="/about">
            <a>About page</a>
        </Link>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            nobis, voluptatum in, ullam itaque quisquam unde quo, ad, iure porro
            laudantium esse eos. Voluptatibus ea vel dicta! Magnam, vitae
            fugiat?
        </p>
    </Layout>
);

export default Index;
