import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import Head from "next/head";
import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";
import Error from "./_error";

const News = ({ news }) => {
    // const [searchQuery, setSearchQuery] = useState("react");
    const [value, setValue] = useState({
        text: "react",
        coolMsg: ""
    });

    const { text, coolMsg } = value;

    const handleChange = name => e => {
        // setSearchQuery(e.target.value);
        setValue({ ...value, [name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        Router.push(`/news/?searchTerm=${text}`);
    };

    const searchForm = () => (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange("text")} />
            <input
                type="text"
                placeholder="Write something.."
                onChange={handleChange("coolMsg")}
            />
            <button>Search</button>
        </form>
    );

    return (
        <Layout mainTitle="News">
            <div>
                <h2>List of News</h2>
                <hr />
                {coolMsg}
                <hr />
                {searchForm()}
                <hr />
                {news.map((n, i) => (
                    <p key={i}>
                        <a href={n.url} target="_blank">
                            {n.title}
                        </a>
                    </p>
                ))}
            </div>
        </Layout>
    );
};

News.getInitialProps = async ({ query }) => {
    let news;
    try {
        const res = await fetch(
            `https://hn.algolia.com/api/v1/search?query=${query.searchTerm ||
                "react"}`
        );
        news = await res.json();
        console.log(news);
    } catch (err) {
        console.log("ERROR", err);
        news = [];
    }
    return {
        news: news.hits
    };
};

export default News;
