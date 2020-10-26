import React from "react";
import App from "next/app";
import MainLayout from "../components/layouts/main";
import DefaultLayout from "../components/layouts/default";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import "./index.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
          <script src="https://kit.fontawesome.com/a076d05399.js"></script>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <link
            href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"
            rel="stylesheet"
          />
          <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>

        </Head>
        <MainLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MainLayout>
      </>
    );
  }
}

export default MyApp;
