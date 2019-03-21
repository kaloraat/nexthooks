import Link from "next/link";
import Layout from "../components/Layout";

const myStyle = {
    color: "red",
    borderLeft: "5px solid black",
    padding: "5px"
};

const About = () => (
    <Layout
        mainTitle="My About Page built with Next JS"
        footer={`This is built by Ryan`}
    >
        <h2>About page</h2>
        <Link href="/">
            <a style={myStyle}>Home page</a>
        </Link>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            odio, fuga error, cum, veniam excepturi quos nulla similique
            explicabo libero corrupti nobis minus eaque eligendi voluptatibus
            sequi nesciunt aliquid eius!
        </p>

        <style jsx>{`
            p {
                color: indigo;
                font-size: 20px;
            }
        `}</style>
    </Layout>
);

export default About;
