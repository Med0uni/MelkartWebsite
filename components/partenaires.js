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

 
 
import image4 from "assets/img/im4.jpg";
 
import image1 from "assets/img/im1.jpg";
 
import image6 from "./im6.png";
import image7 from "./im7.png";
import image8 from "./im8.png";
import image9 from "./im9.png";
import image10 from "./im10.png";
import image11 from "./im11.png";


import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function Partners() {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div>
      <h1> Les Partenaires </h1>
    <div className={classes.section}>
      <div className={classes.container} >
        <GridContainer >
          <GridItem xs={20} sm={18} md={18} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image4} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                     
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image1}alt="Second slide"className="slick-image"/>
                  <div className="slick-caption">
                    <h4>
                       
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image7} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                       
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image6} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                       
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image8} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                     
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image9} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image10} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                       
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image11} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                     
                    </h4>
                  </div>
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
