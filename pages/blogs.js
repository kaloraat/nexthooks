import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";
import Error from "./_error";

const Blogs = ({ data }) => {
    if (data.length === 0) {
        return <Error message="Could not load blogs, Please try later" />;
    }
    return (
        <Layout
            mainTitle="Our Recent Blogs"
            footer={`Copyright ${new Date().getFullYear()}`}
        >
            <Head>
                <title>Blogs page</title>
            </Head>

            <h2>Blogs</h2>

            <hr />

            {data.map((b, i) => (
                <Link as={`/blog/${b.id}`} href={`/blog/?id=${b.id}`} key={i}>
                    <h4>{b.title}</h4>
                </Link>
            ))}
        </Layout>
    );
};

Blogs.getInitialProps = async () => {
    let data;
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        data = await res.json();
        console.log("Number of blogs: ", data.length);
    } catch (err) {
        console.log("ERROR", err);
        data = [];
    }
    return {
        data
    };
};

export default Blogs;
