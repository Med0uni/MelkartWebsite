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



//https://github.com/ReactTraining/react-router/issues/6422
class DelayedRedirect extends React.Component {
  state = {
      redirect: false,
  };

  componentDidMount() {
      setTimeout(() => {
          this.setState({
              redirect: true,
          })
      }, 1000)
  }

  render() {
      if (this.state.redirect) {
          return (<div>   
            <Aboutus />
            <Services />
            
            <Stats />
            
            <Temoignage />
     
            <Partners />
          
            <Collaborate />  
          </div>
          )
      }

      return (
   
          <div class="svgcontainer">
           <div id="logo">
               {/*<!------------------------------ Cropped Logo ---------------------
               <img class="logocropped" src="./melkartLogoCropped.png" width="598" height="429">----->*/}
               {/*<!---------------------    MELKART     ------------------------------------->*/}
               <svg id="melkart"  width="100%" height="100%" viewBox="0 0 849 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M30.9 2.97499H45.525L48.9 6.35C53.55 20.45 56.475 29.15 57.675 32.45L79.275 89.375L101.775 30.65L110.325 6.35L113.7 2.97499H122.475L148.35 2.07499L149.025 13.1L135.975 14.45C135.525 17 135.3 20.825 135.3 25.925L141.15 99.725C141.45 101.675 142.35 105.35 143.85 110.75L157.35 111.875L156.225 122.9C148.275 122.3 139.125 122 128.775 122L108.75 122.9L107.85 113.225L120.9 110.75C121.5 102.95 121.8 97.55 121.8 94.55L117.525 27.725L81.3 122H71.625L35.625 27.725L31.575 94.55C31.575 96.95 31.875 102.35 32.475 110.75L45.975 111.875L44.625 122.9C38.925 122.3 30.9 122 20.55 122L2.32499 122.9L1.42499 113.225L14.475 110.75C15.975 105.35 16.875 101.675 17.175 99.725L21.9 25.925C21.9 23.675 21.675 19.85 21.225 14.45L7.49999 12.425L8.39999 2.07499C20.1 2.67499 27.6 2.97499 30.9 2.97499Z" stroke="#2F5B96" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M208.849 14.225L207.724 30.875V54.95C209.524 55.1 211.699 55.175 214.249 55.175H226.174L235.849 53.825L237.424 42.8L246.424 43.475C246.274 50.675 246.199 55.4 246.199 57.65L246.649 77.225L237.424 78.35L235.849 67.325C229.399 66.725 224.974 66.425 222.574 66.425H214.699C211.699 66.425 209.374 66.575 207.724 66.875V92.075C207.724 98.825 208.099 104.975 208.849 110.525H232.924C237.124 110.525 241.999 110 247.549 108.95C249.649 105.95 250.849 103.775 251.149 102.425C252.649 96.125 253.474 92.525 253.624 91.625L264.199 92.525L261.499 119.525L258.124 122.675C247.174 122.225 240.499 122 238.099 122H193.999L174.199 122.9L173.524 113L186.574 110.75C187.624 105.95 188.149 101.45 188.149 97.25V29.75C188.149 26 187.624 20.975 186.574 14.675L173.749 12.65L174.649 2.07499C184.549 2.67499 190.999 2.97499 193.999 2.97499H235.849L255.874 1.39999L259.249 4.325L260.374 28.625L249.349 29.525C249.049 25.625 248.449 22.475 247.549 20.075C247.549 19.175 246.574 17.45 244.624 14.9C237.424 14.45 232.774 14.225 230.674 14.225H208.849Z" stroke="#2F5B96" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M295.558 110.75L297.133 97.25V29.75C297.133 27.05 296.833 23.975 296.233 20.525C295.783 17.075 295.558 15.125 295.558 14.675L282.733 12.65L283.633 2.07499C293.233 2.67499 299.683 2.97499 302.983 2.97499L330.433 2.07499L331.108 13.55L318.058 14.675C317.158 19.625 316.708 25.025 316.708 30.875V92.075C316.708 98.525 317.158 104.675 318.058 110.525H337.408C341.608 110.525 346.483 110 352.033 108.95C354.883 104.75 356.908 98.975 358.108 91.625L368.683 92.525L365.983 119.525L362.608 122.675C351.658 122.225 344.983 122 342.583 122H302.983L283.183 122.9L282.508 113L295.558 110.75Z" stroke="#2F5B96" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M499.264 111.875L498.139 122.9C489.889 122.3 480.439 122 469.789 122L449.314 122.9L448.414 113L457.639 111.2C453.289 104.3 449.389 98.675 445.939 94.325L417.814 62.375L448.639 24.575L454.939 14.225L446.839 12.65L447.739 2.07499C456.289 2.67499 462.289 2.97499 465.739 2.97499L490.264 2.07499L490.939 13.55L478.789 14.675C471.589 21.125 466.114 26.15 462.364 29.75L439.414 59.45L476.089 100.175C477.139 101.375 481.189 104.9 488.239 110.75L499.264 111.875ZM395.314 110.75L396.889 97.25V29.75C396.889 27.05 396.589 23.975 395.989 20.525C395.539 17.075 395.314 15.125 395.314 14.675L382.714 12.65L383.389 2.07499C392.839 2.67499 399.289 2.97499 402.739 2.97499L429.964 2.07499L430.639 13.55L417.814 14.675C416.914 19.625 416.464 25.025 416.464 30.875V92.075C416.464 94.625 416.914 100.85 417.814 110.75L431.989 111.875L430.864 122.9C422.614 122.3 413.239 122 402.739 122L383.164 122.9L382.264 113L395.314 110.75Z" stroke="#2F5B96" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M620.578 112.1L619.678 122.225C612.328 122.075 606.703 122 602.803 122L574.228 122.9L573.553 113L585.478 110.3L582.103 95.675L578.728 86.225H542.053L537.328 101.3L535.753 110.3L547.228 112.1L546.328 122.225C539.728 122.075 534.328 122 530.128 122L506.278 122.9L505.603 113L515.503 110.75L522.928 95L555.103 2.97499L568.378 1.175L604.153 98.15L610.003 110.525L620.578 112.1ZM560.278 31.775L545.653 75.875L574.903 75.2L560.278 31.775Z" stroke="#2F5B96" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M651.427 2.97499L684.952 1.39999C697.252 1.39999 706.927 4.475 713.977 10.625C721.027 16.625 724.552 25.25 724.552 36.5C724.552 44.15 722.377 50.75 718.027 56.3C713.677 61.85 707.827 66.125 700.477 69.125C708.427 84.275 717.202 98.15 726.802 110.75L738.052 111.875L736.927 122.9C727.777 122.3 717.877 122 707.227 122C702.577 111.65 699.502 105.125 698.002 102.425L681.802 72.725H680.002C677.302 72.725 672.952 72.575 666.952 72.275V92.075C666.952 94.625 667.402 100.85 668.302 110.75L682.702 111.875L681.577 122.9C673.327 122.3 663.877 122 653.227 122L633.427 122.9L632.752 113L645.802 110.75L647.377 97.25V29.75L645.802 14.675L632.977 12.65L633.877 2.07499C641.077 2.52499 646.927 2.82499 651.427 2.97499ZM676.627 11.75C674.677 11.75 671.902 11.975 668.302 12.425C667.402 18.725 666.952 24.875 666.952 30.875V61.925C669.352 62.075 672.502 62.15 676.402 62.15C685.252 62.15 692.077 60.05 696.877 55.85C701.677 51.5 704.077 45.2 704.077 36.95C704.077 28.55 701.677 22.25 696.877 18.05C692.227 13.85 685.477 11.75 676.627 11.75Z" stroke="#2F5B96" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M818.24 14.225H807.665C806.765 20.525 806.315 26.075 806.315 30.875V92.075C806.315 99.575 806.765 105.8 807.665 110.75L822.065 111.875L820.94 122.9C812.54 122.3 803.09 122 792.59 122L772.79 122.9L771.89 113L784.94 110.75C785.99 105.95 786.515 101.45 786.515 97.25V29.75C786.515 26.15 785.99 20.975 784.94 14.225H774.815C770.465 14.225 765.74 14.525 760.64 15.125C758.84 17.525 757.715 19.7 757.265 21.65C756.965 23.6 756.59 26.675 756.14 30.875L745.115 30.2L746.24 4.325L749.615 1.39999C760.565 2.44999 767.24 2.97499 769.64 2.97499H823.19L843.215 1.39999L846.59 4.325L847.715 30.2L836.915 30.875C836.915 30.575 836.69 29 836.24 26.15C835.79 23.15 835.415 21.2 835.115 20.3C834.965 19.25 833.99 17.525 832.19 15.125C827.39 14.525 822.74 14.225 818.24 14.225Z" stroke="#2F5B96" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   </svg>
                   
               {/*<!---------------------    JUNIOR ENTREPRISE     ------------------------------------->*/}
               <svg id="juniorentreprise" width="833" height="44" viewBox="0 0 833 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M11.06 9.16V33.58C11.06 34.54 8.72 37.5 4.04 42.46L2.12 41.32C4.6 36.36 5.84 33.58 5.84 32.98V8.86C5.84 8.14 5.76 7.32 5.6 6.4C5.48 5.44 5.42 4.92 5.42 4.84L2 4.3L2.24 1.48C4.76 1.64 6.48 1.72 7.4 1.72L14.66 1.48L14.9 4.54L11.42 4.84C11.18 5.92 11.06 7.36 11.06 9.16Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M43.1066 8.98L42.6866 4.84L39.2066 4.3L39.4466 1.48C41.8066 1.64 43.4266 1.72 44.3066 1.72L51.0866 1.48L51.2666 4.54L47.7866 4.84C47.5466 6.16 47.4266 7.66 47.4266 9.34V21.46C47.4266 25.38 46.3466 28.48 44.1866 30.76C42.0266 33 38.9066 34.12 34.8266 34.12C30.7466 34.12 27.6266 33 25.4666 30.76C23.3466 28.48 22.2866 25.38 22.2866 21.46V8.98L21.8666 4.84L18.3866 4.3L18.5666 1.48C21.1266 1.64 22.8666 1.72 23.7866 1.72L31.3466 1.48L31.5866 4.54L28.0466 4.84C27.8066 6.04 27.6866 7.54 27.6866 9.34V21.58C27.6866 24.22 28.3466 26.36 29.6666 28C30.9866 29.6 32.9066 30.4 35.4266 30.4C37.9866 30.4 39.9066 29.62 41.1866 28.06C42.4666 26.46 43.1066 24.3 43.1066 21.58V8.98Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M58.8059 30.46L59.2259 26.86V8.86C59.2259 8.14 59.1459 7.32 58.9859 6.4C58.8659 5.44 58.8059 4.92 58.8059 4.84L55.2659 4.3L55.5059 1.48C58.0659 1.64 59.8059 1.72 60.7259 1.72H63.6659L64.5659 2.62C67.0459 6.54 68.5059 8.82 68.9459 9.46L80.5859 24.94V9.16C80.5859 8.12 80.4459 6.7 80.1659 4.9L76.6859 4.54L76.9259 1.6L81.0659 1.72L88.5059 1.48L88.7459 4.36L85.2659 4.9C84.8659 6.62 84.6659 8.14 84.6659 9.46V21.88L84.6059 33.64H80.6459L63.2459 10.3V25.48C63.2459 26.4 63.3659 28.06 63.6059 30.46L67.1459 30.76L66.9059 33.7C65.4259 33.54 63.2859 33.46 60.4859 33.46L55.5059 33.7L55.3259 31.06L58.8059 30.46Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M102.07 9.16V25.48C102.07 27.48 102.19 29.14 102.43 30.46L106.21 30.76L105.91 33.7C103.71 33.54 101.19 33.46 98.3502 33.46L93.1302 33.7L92.8902 31.06L96.3702 30.46C96.6502 29.18 96.7902 27.98 96.7902 26.86V8.86C96.7902 7.74 96.6502 6.4 96.3702 4.84L92.9501 4.3L93.1902 1.48C95.7502 1.64 97.4902 1.72 98.4102 1.72L105.67 1.48L105.85 4.54L102.43 4.84C102.19 6.16 102.07 7.6 102.07 9.16Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M126.763 1C131.763 1 135.643 2.5 138.403 5.5C141.163 8.5 142.543 12.54 142.543 17.62C142.543 22.66 141.163 26.68 138.403 29.68C135.643 32.68 131.763 34.18 126.763 34.18C121.763 34.18 117.883 32.68 115.123 29.68C112.363 26.68 110.983 22.66 110.983 17.62C110.983 12.54 112.363 8.5 115.123 5.5C117.883 2.5 121.763 1 126.763 1ZM126.763 4.12C123.563 4.12 121.143 5.32 119.503 7.72C117.903 10.12 117.103 13.42 117.103 17.62C117.103 21.78 117.923 25.06 119.563 27.46C121.203 29.86 123.603 31.06 126.763 31.06C129.923 31.06 132.323 29.86 133.963 27.46C135.603 25.06 136.423 21.78 136.423 17.62C136.423 13.42 135.603 10.12 133.963 7.72C132.363 5.32 129.963 4.12 126.763 4.12Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M152.357 1.72L161.297 1.3C164.577 1.3 167.157 2.12 169.037 3.76C170.917 5.36 171.857 7.66 171.857 10.66C171.857 12.7 171.277 14.46 170.117 15.94C168.957 17.42 167.397 18.56 165.437 19.36C167.557 23.4 169.897 27.1 172.457 30.46L175.457 30.76L175.157 33.7C172.717 33.54 170.077 33.46 167.237 33.46C165.997 30.7 165.177 28.96 164.777 28.24L160.457 20.32H159.977C159.257 20.32 158.097 20.28 156.497 20.2V25.48C156.497 26.16 156.617 27.82 156.857 30.46L160.697 30.76L160.397 33.7C158.197 33.54 155.677 33.46 152.837 33.46L147.557 33.7L147.377 31.06L150.857 30.46L151.277 26.86V8.86L150.857 4.84L147.437 4.3L147.677 1.48C149.597 1.6 151.157 1.68 152.357 1.72ZM159.077 4.06C158.557 4.06 157.817 4.12 156.857 4.24C156.617 5.92 156.497 7.56 156.497 9.16V17.44C157.137 17.48 157.977 17.5 159.017 17.5C161.377 17.5 163.197 16.94 164.477 15.82C165.757 14.66 166.397 12.98 166.397 10.78C166.397 8.54 165.757 6.86 164.477 5.74C163.237 4.62 161.437 4.06 159.077 4.06Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M201.738 4.72L201.438 9.16V15.58C201.918 15.62 202.498 15.64 203.178 15.64H206.358L208.938 15.28L209.358 12.34L211.758 12.52C211.718 14.44 211.698 15.7 211.698 16.3L211.818 21.52L209.358 21.82L208.938 18.88C207.218 18.72 206.038 18.64 205.398 18.64H203.298C202.498 18.64 201.878 18.68 201.438 18.76V25.48C201.438 27.28 201.538 28.92 201.738 30.4H208.158C209.278 30.4 210.578 30.26 212.058 29.98C212.618 29.18 212.938 28.6 213.018 28.24C213.418 26.56 213.638 25.6 213.678 25.36L216.498 25.6L215.778 32.8L214.878 33.64C211.958 33.52 210.178 33.46 209.538 33.46H197.778L192.498 33.7L192.318 31.06L195.798 30.46C196.078 29.18 196.218 27.98 196.218 26.86V8.86C196.218 7.86 196.078 6.52 195.798 4.84L192.378 4.3L192.618 1.48C195.258 1.64 196.978 1.72 197.778 1.72H208.938L214.278 1.3L215.178 2.08L215.478 8.56L212.538 8.8C212.458 7.76 212.298 6.92 212.058 6.28C212.058 6.04 211.798 5.58 211.278 4.9C209.358 4.78 208.118 4.72 207.558 4.72H201.738Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M224.861 30.46L225.281 26.86V8.86C225.281 8.14 225.201 7.32 225.041 6.4C224.921 5.44 224.861 4.92 224.861 4.84L221.321 4.3L221.561 1.48C224.121 1.64 225.861 1.72 226.781 1.72H229.721L230.621 2.62C233.101 6.54 234.561 8.82 235.001 9.46L246.641 24.94V9.16C246.641 8.12 246.501 6.7 246.221 4.9L242.741 4.54L242.981 1.6L247.121 1.72L254.561 1.48L254.801 4.36L251.321 4.9C250.921 6.62 250.721 8.14 250.721 9.46V21.88L250.661 33.64H246.701L229.301 10.3V25.48C229.301 26.4 229.421 28.06 229.661 30.46L233.201 30.76L232.961 33.7C231.481 33.54 229.341 33.46 226.541 33.46L221.561 33.7L221.381 31.06L224.861 30.46Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M276.645 4.72H273.825C273.585 6.4 273.465 7.88 273.465 9.16V25.48C273.465 27.48 273.585 29.14 273.825 30.46L277.665 30.76L277.365 33.7C275.125 33.54 272.605 33.46 269.805 33.46L264.525 33.7L264.285 31.06L267.765 30.46C268.045 29.18 268.185 27.98 268.185 26.86V8.86C268.185 7.9 268.045 6.52 267.765 4.72H265.065C263.905 4.72 262.645 4.8 261.285 4.96C260.805 5.6 260.505 6.18 260.385 6.7C260.305 7.22 260.205 8.04 260.085 9.16L257.145 8.98L257.445 2.08L258.345 1.3C261.265 1.58 263.045 1.72 263.685 1.72H277.965L283.305 1.3L284.205 2.08L284.505 8.98L281.625 9.16C281.625 9.08 281.565 8.66 281.445 7.9C281.325 7.1 281.225 6.58 281.145 6.34C281.105 6.06 280.845 5.6 280.365 4.96C279.085 4.8 277.845 4.72 276.645 4.72Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M293.099 1.72L302.039 1.3C305.319 1.3 307.899 2.12 309.779 3.76C311.659 5.36 312.599 7.66 312.599 10.66C312.599 12.7 312.019 14.46 310.859 15.94C309.699 17.42 308.139 18.56 306.179 19.36C308.299 23.4 310.639 27.1 313.199 30.46L316.199 30.76L315.899 33.7C313.459 33.54 310.819 33.46 307.979 33.46C306.739 30.7 305.919 28.96 305.519 28.24L301.199 20.32H300.719C299.999 20.32 298.839 20.28 297.239 20.2V25.48C297.239 26.16 297.359 27.82 297.599 30.46L301.439 30.76L301.139 33.7C298.939 33.54 296.419 33.46 293.579 33.46L288.299 33.7L288.119 31.06L291.599 30.46L292.019 26.86V8.86L291.599 4.84L288.179 4.3L288.419 1.48C290.339 1.6 291.899 1.68 293.099 1.72ZM299.819 4.06C299.299 4.06 298.559 4.12 297.599 4.24C297.359 5.92 297.239 7.56 297.239 9.16V17.44C297.879 17.48 298.719 17.5 299.759 17.5C302.119 17.5 303.939 16.94 305.219 15.82C306.499 14.66 307.139 12.98 307.139 10.78C307.139 8.54 306.499 6.86 305.219 5.74C303.979 4.62 302.179 4.06 299.819 4.06Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M329.062 4.72L328.762 9.16V15.58C329.242 15.62 329.822 15.64 330.502 15.64H333.682L336.262 15.28L336.682 12.34L339.082 12.52C339.042 14.44 339.022 15.7 339.022 16.3L339.142 21.52L336.682 21.82L336.262 18.88C334.542 18.72 333.362 18.64 332.722 18.64H330.622C329.822 18.64 329.202 18.68 328.762 18.76V25.48C328.762 27.28 328.862 28.92 329.062 30.4H335.482C336.602 30.4 337.902 30.26 339.382 29.98C339.942 29.18 340.262 28.6 340.342 28.24C340.742 26.56 340.962 25.6 341.002 25.36L343.822 25.6L343.102 32.8L342.202 33.64C339.282 33.52 337.502 33.46 336.862 33.46H325.102L319.822 33.7L319.642 31.06L323.122 30.46C323.402 29.18 323.542 27.98 323.542 26.86V8.86C323.542 7.86 323.402 6.52 323.122 4.84L319.702 4.3L319.942 1.48C322.582 1.64 324.302 1.72 325.102 1.72H336.262L341.602 1.3L342.502 2.08L342.802 8.56L339.862 8.8C339.782 7.76 339.622 6.92 339.382 6.28C339.382 6.04 339.122 5.58 338.602 4.9C336.682 4.78 335.442 4.72 334.882 4.72H329.062Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M353.385 1.72L362.745 1.3C366.065 1.3 368.665 2.14 370.545 3.82C372.425 5.46 373.365 7.82 373.365 10.9C373.365 13.94 372.205 16.34 369.885 18.1C367.605 19.86 364.805 20.74 361.485 20.74H357.825V25.48C357.825 26.16 357.945 27.82 358.185 30.46L362.325 30.76L362.025 33.7C359.625 33.54 357.005 33.46 354.165 33.46L348.885 33.7L348.705 31.06L352.185 30.46C352.185 30.46 352.325 29.26 352.605 26.86V8.86C352.605 8.14 352.525 7.32 352.365 6.4C352.245 5.48 352.185 4.96 352.185 4.84L348.765 4.3L349.005 1.48C350.845 1.6 352.305 1.68 353.385 1.72ZM357.825 9.16V17.86C358.465 17.9 359.285 17.92 360.285 17.92C362.685 17.92 364.565 17.32 365.925 16.12C367.285 14.92 367.965 13.2 367.965 10.96C367.965 8.68 367.305 6.96 365.985 5.8C364.705 4.64 362.885 4.06 360.525 4.06C360.285 4.06 359.485 4.1 358.125 4.18C357.925 6.1 357.825 7.76 357.825 9.16Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M382.747 1.72L391.687 1.3C394.967 1.3 397.547 2.12 399.427 3.76C401.307 5.36 402.247 7.66 402.247 10.66C402.247 12.7 401.667 14.46 400.507 15.94C399.347 17.42 397.787 18.56 395.827 19.36C397.947 23.4 400.287 27.1 402.847 30.46L405.847 30.76L405.547 33.7C403.107 33.54 400.467 33.46 397.627 33.46C396.387 30.7 395.567 28.96 395.167 28.24L390.847 20.32H390.367C389.647 20.32 388.487 20.28 386.887 20.2V25.48C386.887 26.16 387.007 27.82 387.247 30.46L391.087 30.76L390.787 33.7C388.587 33.54 386.067 33.46 383.227 33.46L377.947 33.7L377.767 31.06L381.247 30.46L381.667 26.86V8.86L381.247 4.84L377.827 4.3L378.067 1.48C379.987 1.6 381.547 1.68 382.747 1.72ZM389.467 4.06C388.947 4.06 388.207 4.12 387.247 4.24C387.007 5.92 386.887 7.56 386.887 9.16V17.44C387.527 17.48 388.367 17.5 389.407 17.5C391.767 17.5 393.587 16.94 394.867 15.82C396.147 14.66 396.787 12.98 396.787 10.78C396.787 8.54 396.147 6.86 394.867 5.74C393.627 4.62 391.827 4.06 389.467 4.06Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M418.711 9.16V25.48C418.711 27.48 418.831 29.14 419.071 30.46L422.851 30.76L422.551 33.7C420.351 33.54 417.831 33.46 414.991 33.46L409.771 33.7L409.531 31.06L413.011 30.46C413.291 29.18 413.431 27.98 413.431 26.86V8.86C413.431 7.74 413.291 6.4 413.011 4.84L409.591 4.3L409.831 1.48C412.391 1.64 414.131 1.72 415.051 1.72L422.311 1.48L422.491 4.54L419.071 4.84C418.831 6.16 418.711 7.6 418.711 9.16Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M432.184 27.04C432.184 27.52 432.384 28.36 432.784 29.56C434.704 30.4 436.564 30.82 438.364 30.82C440.204 30.82 441.644 30.4 442.684 29.56C443.724 28.68 444.244 27.54 444.244 26.14C444.244 24.7 443.704 23.5 442.624 22.54C441.544 21.54 440.244 20.7 438.724 20.02C437.204 19.3 435.684 18.54 434.164 17.74C432.644 16.94 431.344 15.86 430.264 14.5C429.184 13.1 428.644 11.48 428.644 9.64C428.644 6.96 429.604 4.86 431.524 3.34C433.484 1.82 435.864 1.06 438.664 1.06C441.504 1.06 444.884 1.56 448.804 2.56L448.144 10.12L445.024 9.82V7.36C445.024 7.2 444.824 6.48 444.424 5.2C442.824 4.52 441.224 4.18 439.624 4.18C438.024 4.18 436.744 4.58 435.784 5.38C434.824 6.14 434.344 7.18 434.344 8.5C434.344 9.82 434.884 10.96 435.964 11.92C437.044 12.84 438.344 13.66 439.864 14.38C441.424 15.06 442.964 15.82 444.484 16.66C446.044 17.46 447.364 18.56 448.444 19.96C449.524 21.36 450.064 23 450.064 24.88C450.064 27.8 448.984 30.08 446.824 31.72C444.664 33.32 441.924 34.12 438.604 34.12C436.764 34.12 434.964 33.92 433.204 33.52C431.444 33.16 430.144 32.78 429.304 32.38L428.104 31.84L428.824 24.22L432.184 24.46V27.04Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M464.765 4.72L464.465 9.16V15.58C464.945 15.62 465.525 15.64 466.205 15.64H469.385L471.965 15.28L472.385 12.34L474.785 12.52C474.745 14.44 474.725 15.7 474.725 16.3L474.845 21.52L472.385 21.82L471.965 18.88C470.245 18.72 469.065 18.64 468.425 18.64H466.325C465.525 18.64 464.905 18.68 464.465 18.76V25.48C464.465 27.28 464.565 28.92 464.765 30.4H471.185C472.305 30.4 473.605 30.26 475.085 29.98C475.645 29.18 475.965 28.6 476.045 28.24C476.445 26.56 476.665 25.6 476.705 25.36L479.525 25.6L478.805 32.8L477.905 33.64C474.985 33.52 473.205 33.46 472.565 33.46H460.805L455.525 33.7L455.345 31.06L458.825 30.46C459.105 29.18 459.245 27.98 459.245 26.86V8.86C459.245 7.86 459.105 6.52 458.825 4.84L455.405 4.3L455.645 1.48C458.285 1.64 460.005 1.72 460.805 1.72H471.965L477.305 1.3L478.205 2.08L478.505 8.56L475.565 8.8C475.485 7.76 475.325 6.92 475.085 6.28C475.085 6.04 474.825 5.58 474.305 4.9C472.385 4.78 471.145 4.72 470.585 4.72H464.765Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M507.246 4.72L506.946 9.16V15.58C507.426 15.62 508.006 15.64 508.686 15.64H511.866L514.446 15.28L514.866 12.34L517.266 12.52C517.226 14.44 517.206 15.7 517.206 16.3L517.326 21.52L514.866 21.82L514.446 18.88C512.726 18.72 511.546 18.64 510.906 18.64H508.806C508.006 18.64 507.386 18.68 506.946 18.76V25.48C506.946 27.28 507.046 28.92 507.246 30.4H513.666C514.786 30.4 516.086 30.26 517.566 29.98C518.126 29.18 518.446 28.6 518.526 28.24C518.926 26.56 519.146 25.6 519.186 25.36L522.006 25.6L521.286 32.8L520.386 33.64C517.466 33.52 515.686 33.46 515.046 33.46H503.286L498.006 33.7L497.826 31.06L501.306 30.46C501.586 29.18 501.726 27.98 501.726 26.86V8.86C501.726 7.86 501.586 6.52 501.306 4.84L497.886 4.3L498.126 1.48C500.766 1.64 502.486 1.72 503.286 1.72H514.446L519.786 1.3L520.686 2.08L520.986 8.56L518.046 8.8C517.966 7.76 517.806 6.92 517.566 6.28C517.566 6.04 517.306 5.58 516.786 4.9C514.866 4.78 513.626 4.72 513.066 4.72H507.246Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M530.368 30.46L530.788 26.86V8.86C530.788 8.14 530.708 7.32 530.548 6.4C530.428 5.44 530.368 4.92 530.368 4.84L526.828 4.3L527.068 1.48C529.628 1.64 531.368 1.72 532.288 1.72H535.228L536.128 2.62C538.608 6.54 540.068 8.82 540.508 9.46L552.148 24.94V9.16C552.148 8.12 552.008 6.7 551.728 4.9L548.248 4.54L548.488 1.6L552.628 1.72L560.068 1.48L560.308 4.36L556.828 4.9C556.428 6.62 556.228 8.14 556.228 9.46V21.88L556.168 33.64H552.208L534.808 10.3V25.48C534.808 26.4 534.928 28.06 535.168 30.46L538.708 30.76L538.468 33.7C536.988 33.54 534.848 33.46 532.048 33.46L527.068 33.7L526.888 31.06L530.368 30.46Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M573.633 9.16V25.48C573.633 27.48 573.753 29.14 573.993 30.46L577.773 30.76L577.473 33.7C575.273 33.54 572.753 33.46 569.913 33.46L564.693 33.7L564.453 31.06L567.933 30.46C568.213 29.18 568.353 27.98 568.353 26.86V8.86C568.353 7.74 568.213 6.4 567.933 4.84L564.513 4.3L564.753 1.48C567.313 1.64 569.053 1.72 569.973 1.72L577.233 1.48L577.413 4.54L573.993 4.84C573.753 6.16 573.633 7.6 573.633 9.16Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M597.905 34.12C592.945 34.12 589.145 32.64 586.505 29.68C583.865 26.68 582.545 22.66 582.545 17.62C582.545 12.54 583.865 8.52 586.505 5.56C589.145 2.56 592.945 1.06 597.905 1.06C600.345 1.06 603.605 1.56 607.685 2.56L607.205 9.76L604.145 9.58V7.24C604.145 6.88 603.945 6.18 603.545 5.14C601.385 4.58 599.505 4.3 597.905 4.3C594.825 4.3 592.485 5.54 590.885 8.02C589.325 10.46 588.545 13.66 588.545 17.62C588.545 21.54 589.325 24.74 590.885 27.22C592.445 29.7 594.765 30.94 597.845 30.94C599.685 30.94 601.745 30.64 604.025 30.04C604.465 28.72 604.685 27.92 604.685 27.64L604.805 25.54L607.805 25.42L608.105 32.62C604.025 33.62 600.625 34.12 597.905 34.12Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M641.825 30.82L641.585 33.52C639.625 33.48 638.125 33.46 637.085 33.46L629.465 33.7L629.285 31.06L632.465 30.34L631.565 26.44L630.665 23.92H620.885L619.625 27.94L619.205 30.34L622.265 30.82L622.025 33.52C620.265 33.48 618.825 33.46 617.705 33.46L611.345 33.7L611.165 31.06L613.805 30.46L615.785 26.26L624.365 1.72L627.905 1.24L637.445 27.1L639.005 30.4L641.825 30.82ZM625.745 9.4L621.845 21.16L629.645 20.98L625.745 9.4Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M650.052 1.72L658.992 1.3C662.272 1.3 664.852 2.12 666.732 3.76C668.612 5.36 669.552 7.66 669.552 10.66C669.552 12.7 668.972 14.46 667.812 15.94C666.652 17.42 665.092 18.56 663.132 19.36C665.252 23.4 667.592 27.1 670.152 30.46L673.152 30.76L672.852 33.7C670.412 33.54 667.772 33.46 664.932 33.46C663.692 30.7 662.872 28.96 662.472 28.24L658.152 20.32H657.672C656.952 20.32 655.792 20.28 654.192 20.2V25.48C654.192 26.16 654.312 27.82 654.552 30.46L658.392 30.76L658.092 33.7C655.892 33.54 653.372 33.46 650.532 33.46L645.252 33.7L645.072 31.06L648.552 30.46L648.972 26.86V8.86L648.552 4.84L645.132 4.3L645.372 1.48C647.292 1.6 648.852 1.68 650.052 1.72ZM656.772 4.06C656.252 4.06 655.512 4.12 654.552 4.24C654.312 5.92 654.192 7.56 654.192 9.16V17.44C654.832 17.48 655.672 17.5 656.712 17.5C659.072 17.5 660.892 16.94 662.172 15.82C663.452 14.66 664.092 12.98 664.092 10.78C664.092 8.54 663.452 6.86 662.172 5.74C660.932 4.62 659.132 4.06 656.772 4.06Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M694.535 4.72H691.715C691.475 6.4 691.355 7.88 691.355 9.16V25.48C691.355 27.48 691.475 29.14 691.715 30.46L695.555 30.76L695.255 33.7C693.015 33.54 690.495 33.46 687.695 33.46L682.415 33.7L682.175 31.06L685.655 30.46C685.935 29.18 686.075 27.98 686.075 26.86V8.86C686.075 7.9 685.935 6.52 685.655 4.72H682.955C681.795 4.72 680.535 4.8 679.175 4.96C678.695 5.6 678.395 6.18 678.275 6.7C678.195 7.22 678.095 8.04 677.975 9.16L675.035 8.98L675.335 2.08L676.235 1.3C679.155 1.58 680.935 1.72 681.575 1.72H695.855L701.195 1.3L702.095 2.08L702.395 8.98L699.515 9.16C699.515 9.08 699.455 8.66 699.335 7.9C699.215 7.1 699.115 6.58 699.035 6.34C698.995 6.06 698.735 5.6 698.255 4.96C696.975 4.8 695.735 4.72 694.535 4.72Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M709.49 30.46L709.909 26.86V8.86C709.909 8.14 709.829 7.32 709.669 6.4C709.549 5.48 709.49 4.96 709.49 4.84L706.07 4.3L706.31 1.48C708.87 1.64 710.589 1.72 711.469 1.72L718.789 1.48L718.969 4.54L715.49 4.84C715.25 6.16 715.13 7.6 715.13 9.16V16.24L729.83 16.06V8.86C729.83 8.14 729.749 7.32 729.589 6.4C729.469 5.48 729.409 4.96 729.409 4.84L725.99 4.3L726.169 1.48C728.729 1.64 730.47 1.72 731.39 1.72L738.649 1.48L738.89 4.54L735.409 4.84C735.169 6.16 735.049 7.6 735.049 9.16V25.48C735.049 27.48 735.169 29.14 735.409 30.46L739.25 30.76L738.95 33.7C736.71 33.54 734.19 33.46 731.39 33.46L726.109 33.7L725.87 31.06L729.409 30.46L729.83 26.86V19.18H715.13V25.48C715.13 26.16 715.25 27.82 715.49 30.46L719.33 30.76L719.029 33.7C716.829 33.54 714.309 33.46 711.469 33.46L706.19 33.7L706.01 31.06L709.49 30.46Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M773.075 30.82L772.835 33.52C770.875 33.48 769.375 33.46 768.335 33.46L760.715 33.7L760.535 31.06L763.715 30.34L762.815 26.44L761.915 23.92H752.135L750.875 27.94L750.455 30.34L753.515 30.82L753.275 33.52C751.515 33.48 750.075 33.46 748.955 33.46L742.595 33.7L742.415 31.06L745.055 30.46L747.035 26.26L755.615 1.72L759.155 1.24L768.695 27.1L770.255 30.4L773.075 30.82ZM756.995 9.4L753.095 21.16L760.895 20.98L756.995 9.4Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M790.346 1.06C792.906 1.06 796.386 1.56 800.786 2.56L800.246 9.52L797.186 9.28L797.126 7.24C797.126 7.04 796.946 6.36 796.586 5.2C794.306 4.6 792.186 4.3 790.226 4.3C786.906 4.3 784.386 5.54 782.666 8.02C780.986 10.46 780.146 13.66 780.146 17.62C780.146 21.54 780.986 24.74 782.666 27.22C784.386 29.7 786.906 30.94 790.226 30.94C791.906 30.94 793.886 30.7 796.166 30.22C796.486 28.86 796.646 28.02 796.646 27.7V24.64L796.166 21.64L791.186 21.28L791.426 17.98H796.646L800.606 17.8L801.626 18.7C801.346 21.7 801.206 23.96 801.206 25.48V32.62C796.806 33.62 793.186 34.12 790.346 34.12C785.146 34.12 781.146 32.64 778.346 29.68C775.586 26.68 774.206 22.66 774.206 17.62C774.206 12.58 775.586 8.56 778.346 5.56C781.146 2.56 785.146 1.06 790.346 1.06Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   <path d="M816.621 4.72L816.321 9.16V15.58C816.801 15.62 817.381 15.64 818.061 15.64H821.241L823.821 15.28L824.241 12.34L826.641 12.52C826.601 14.44 826.581 15.7 826.581 16.3L826.701 21.52L824.241 21.82L823.821 18.88C822.101 18.72 820.921 18.64 820.281 18.64H818.181C817.381 18.64 816.761 18.68 816.321 18.76V25.48C816.321 27.28 816.421 28.92 816.621 30.4H823.041C824.161 30.4 825.461 30.26 826.941 29.98C827.501 29.18 827.821 28.6 827.901 28.24C828.301 26.56 828.521 25.6 828.561 25.36L831.381 25.6L830.661 32.8L829.761 33.64C826.841 33.52 825.061 33.46 824.421 33.46H812.661L807.381 33.7L807.201 31.06L810.681 30.46C810.961 29.18 811.101 27.98 811.101 26.86V8.86C811.101 7.86 810.961 6.52 810.681 4.84L807.261 4.3L807.501 1.48C810.141 1.64 811.861 1.72 812.661 1.72H823.821L829.161 1.3L830.061 2.08L830.361 8.56L827.421 8.8C827.341 7.76 827.181 6.92 826.941 6.28C826.941 6.04 826.681 5.58 826.161 4.9C824.241 4.78 823.001 4.72 822.441 4.72H816.621Z" stroke="#757677" stroke-width="2" mask="url(#path-1-outside-1)"/>
                   </svg>   
               </div>
           </div>
         )
  }
}
export default DelayedRedirect

/*
export default function Components(props) {
  return (
    <div>   
      <Aboutus />
      <Services />
      <br></br><br></br>
      <Stats />
      <br></br><br></br>
      <Temoignage />
      <br></br><br></br>
      <Partners />
      <br></br><br></br>
      <Collaborate />  
    </div>
  );
}*/
