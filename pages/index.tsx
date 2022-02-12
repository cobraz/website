import type { NextPage } from "next";
import Head from "next/head";
import { Link } from "next-theme-ui";
import { Container, Grid, Heading, Paragraph } from "theme-ui";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title></title>
        <meta name="description" content="Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid sx={{ p: 4 }}>
        <Heading>👋 Hello there!</Heading>
        <Paragraph>
          You've found <Link href="https://github.com/cobraz">@cobraz</Link>'s{" "}
          website.
        </Paragraph>
        <Paragraph>
          For more than a decade, this website has been just a placeholder
          without much use.
        </Paragraph>
        <Paragraph>I indent to keep it that way! 👍</Paragraph>
      </Grid>
    </Container>
  );
};

export default Home;
