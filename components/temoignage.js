import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import './partenaires.css';

 
 
import image4 from "../assets/img/janet.jpg";
 
import image1 from "../assets/img/mehdi.jpg";
 
 
 import image5 from "../assets/img/nasr.jpg"
 


import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function Partners() {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div>
    <div className={classes.section}>
      <div className={classes.container} >
        <GridContainer >
          <GridItem xs={15} sm={15} md={15} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div  className="row">
                  <img src={image5} class="img"/>
                  <div className="slick-caption">
                    </div> 
                    <center>
                      <div>
                      <h4 className="col-md-3 profile  text-center"class="pos">
                       "The journey within our MELKART Junior Enterprise is the purposeful kind of journey. It is an enthusiastic learning process towards unlocking full potential and civic engagement. It will be the experience that sets the bar high for your next endeavors within civil society."
  
                     </h4>
                     <div class="user_name">
                            Janet
                        </div>
                        <div class="user_desk">
                            EX President
                        </div>
                    
                      </div>
                    </center>

                </div>

                <div  className="row">
                  <img src={image4} class="img"/>
                  <div className="slick-caption">
                    </div> 
                    <center>
                      <div>
                      <h4 className="col-md-3 profile  text-center"class="pos">
                       "The journey within our MELKART Junior Enterprise is the purposeful kind of journey. It is an enthusiastic learning process towards unlocking full potential and civic engagement. It will be the experience that sets the bar high for your next endeavors within civil society."
  
                     </h4>
                     <div class="user_name">
                            Janet
                        </div>
                        <div class="user_desk">
                            EX President
                        </div>
                      </div>
                    </center>

                </div>

                <div  className="row">
                  <img src={image5} class="img"/>
                  <div className="slick-caption">
                    </div> 
                    <center>
                      <div>
                      <h4 className="col-md-3 profile  text-center"class="pos">
                       "The journey within our MELKART Junior Enterprise is the purposeful kind of journey. It is an enthusiastic learning process towards unlocking full potential and civic engagement. It will be the experience that sets the bar high for your next endeavors within civil society."
  
                     </h4>
                     <div class="user_name">
                            Janet
                        </div>
                        <div class="user_desk">
                            EX President
                        </div>
                      </div>
                    </center>

                </div>           
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
    </div>
  );
}
