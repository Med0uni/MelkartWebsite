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
<<<<<<< HEAD
import icone from "../assets/img/Blue.ico"
=======

>>>>>>> c0ef724cc47e166956c376082994d192a3fb6eca
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
<<<<<<< HEAD
        <link rel="icon" href="../assets/img/Blue.ico" />
          <title>MELKART Junior Entreprise</title>
=======
          <title>MELKART</title>
>>>>>>> c0ef724cc47e166956c376082994d192a3fb6eca
        </Head>
        <Navbar />
        <Hero />
        <Component {...pageProps} />
        <Footer />
      </React.Fragment>
    );
  }
}
