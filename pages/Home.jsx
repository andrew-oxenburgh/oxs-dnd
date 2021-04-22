import Head from 'next/head'
import {Card, Col, Container, Row} from "react-bootstrap";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href={"/favicon.ico"}/>
            </Head>
            <Container fluid="sm">
                <Row><Col>
                    <h1>
                        Welcome to <a href="https://nextjs.org">Next.js!</a>
                    </h1>
                </Col></Row>
                <Row><Col>
                    <p>
                        Get started by editing <code>pages/index.js</code>
                    </p>
                </Col></Row>
                <Row><Col>
                    <Card>
                        <Card.Title>Documentation &rarr;</Card.Title>
                        <Card.Link href="https://nextjs.org/docs">
                            Find in-depth information about Next.js features and API.
                        </Card.Link>
                    </Card>
                </Col></Row>
                <Row><Col>
                    <Card>
                        <Card.Title>Learn &rarr;</Card.Title>
                        <Card.Link href="https://nextjs.org/learn">
                            Learn about Next.js in an interactive course with quizzes!
                        </Card.Link>
                    </Card>
                </Col></Row>
                <Row><Col>
                    <Card>
                        <Card.Title>Examples &rarr;</Card.Title>
                        <Card.Link href="https://github.com/vercel/next.js/tree/master/examples">
                            Discover and deploy boilerplate example Next.js projects.
                        </Card.Link>
                    </Card>
                </Col></Row>
                <Row><Col>
                    <Card>
                        <Card.Title>Deploy &rarr;</Card.Title>
                        <Card.Link href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </Card.Link>
                    </Card>
                </Col></Row>
                <Row><Col>
                    <Card>
                        <a
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Powered by{' '}
                            <img src={"/vercel.svg"} alt="Vercel Logo"/>
                        </a>
                    </Card>
                </Col></Row>
            </Container>
        </>
    )
}
