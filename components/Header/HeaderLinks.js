/*eslint-disable*/
import React from "react";
import Link from "next/link";
import './HeaderLinks.css'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* ---------------------- STRUCTURE -------------------------------*/}
      <ListItem className={classes.listItem}>
      <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link href="/structure"><div>Structure</div></Link>
        </Button>
      </ListItem>
      {/* ---------------------- PRESTATION -------------------------------*/}
      <ListItem className={classes.listItem}>
        <Button
          
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link href="/prestation"><div classname='a'>Prestation</div></Link>
           
        </Button>
      </ListItem>
      {/* ---------------------- BLOG -------------------------------*/}
      <ListItem className={classes.listItem}>
        <Button
         
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link href="/blog"><div classname='a'>Blog</div></Link>
          
        </Button>
      </ListItem>
      {/* ---------------------- Store -------------------------------*/}
      <ListItem className={classes.listItem}>
        <Button
         
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link href="/store"><div classname='a'>store</div></Link>
          
        </Button>
      </ListItem>
      
      
      
    </List>
  );
}
