import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Aboutus from "../components/about-us";
import Services from "../components/nos-services";
import Stats from "../components/statistiques";
import Temoignage from "../components/temoignage";
import Partners from "../components/partenaires";
import Collaborate from "../components/work-with-us";

import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <br></br><br></br>
      <Aboutus />
      <br></br><br></br>
      <Services />
      <br></br><br></br>
      <Stats />
      <br></br><br></br>
      <Temoignage />
      <br></br><br></br>
      <Partners />
      <br></br><br></br>
      <Collaborate />
      
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}
