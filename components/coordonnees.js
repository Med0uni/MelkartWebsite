import { Grid } from "@material-ui/core";
import React from "react";
import './coordonnees.css';

 export default function Coord() {
     return(
        <div>
            <Grid container
  direction="row"
  justify="space-around"
  alignItems="center">
                <Grid item xs={4} spacing={1}>
                    <p>phone here</p>
                </Grid>
                <Grid item xs={4} spacing={1}>
                    <p>email here</p>
                </Grid>
                <Grid item xs={4} spacing={1}>
                    <p>adress here</p>
                </Grid>
            </Grid>
        </div>
     );
 }