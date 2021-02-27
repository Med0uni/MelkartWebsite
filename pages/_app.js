import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import PageChange from "components/PageChange/PageChange.js";
import Hero from "../components/Hero" ;
//import Nav from "../components/Nav";
import icone from "../assets/img/Blue.ico"
import "assets/scss/nextjs-material-kit.scss?v=1.1.0";

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});


/* ///////////////////////////////////////////////////////////////////////*/

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
        <link rel="icon" href="../assets/img/Blue.ico" />
          <title>MELKART Junior Entreprise</title>
        </Head>
        <Navbar />
        <Hero />
        <Component {...pageProps} />
        <Footer />
      </React.Fragment>
    );
  }
}
