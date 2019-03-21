import Link from "next/link";

const Nav = () => (
    <div className="my-nav">
        <img src="/static/logo.png" alt="logo" height="50" />
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/blogs">
            <a>Blogs</a>
        </Link>
        <Link href="/news">
            <a>News</a>
        </Link>

        <style jsx>{`
            a,
            img {
                padding: 10px;
            }
        `}</style>
    </div>
);

export default Nav;
