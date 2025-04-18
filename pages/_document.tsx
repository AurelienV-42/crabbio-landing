import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const { locale } = this.props.__NEXT_DATA__;
    return (
      <Html lang={locale} suppressHydrationWarning>
        <Head>
          <title>Crabbio - AI Without Compromising Your Data</title>
          <meta
            name="description"
            content="Enjoy AI without compromising your data. Crabbio is a privacy-focused AI tool."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
