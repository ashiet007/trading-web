import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="Premium Multipurpose Admin & Dashboard Template"
          name="description"
        />
        <meta content="Themesbrand" name="author" />
        <link rel="shortcut icon" href={"/images/favicon.ico"} />
        <link
          href={"/css/jquery-jvectormap-1.2.2.css"}
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href={"/css/preloader.min.css"}
          type="text/css"
        />
        <link
          href={"/css/bootstrap.min.css"}
          id="bootstrap-style"
          rel="stylesheet"
          type="text/css"
        />
        <link href={"/css/icons.min.css"} rel="stylesheet" type="text/css" />
        <link
          href={"/css/app.min.css"}
          id="app-style"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body data-layout="horizontal">
        <Main />
        <NextScript />
        <script src={"/libs/jquery/jquery.min.js"}></script>
        <script src={"/libs/bootstrap/js/bootstrap.bundle.min.js"}></script>
        <script src={"/libs/metismenu/metisMenu.min.js"}></script>
        <script src={"/libs/simplebar/simplebar.min.js"}></script>
        <script src={"/libs/node-waves/waves.min.js"}></script>
        <script src={"/libs/feather-icons/feather.min.js"}></script>
        <script src={"/libs/pace-js/pace.min.js"}></script>
        <script src={"/libs/apexcharts/apexcharts.min.js"}></script>
        <script
          src={
            "/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js"
          }
        ></script>
        <script
          src={
            "/libs/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js"
          }
        ></script>
      </body>
    </Html>
  );
}
