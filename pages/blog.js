import { withRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";

const Blog = ({ router, blog }) => (
    <Layout title="Single Blog">
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
        </div>
    </Layout>
);

Blog.getInitialProps = async ({ query }) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${query.id}`
    );
    const data = await res.json();
    return { blog: data };
};

export default withRouter(Blog);
