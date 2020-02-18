import React from 'react';
import ReactDOM from 'react-dom';
import Overlay from './overlay'
import sliderArray from "./Overlay/components/"
function importAll(r) {
  return r.keys().map(r);
}
class Carousel extends React.Component {
  //Imports every image in the ./images and creates appropriate carousel settings

  render() {
    var listOfImages = [];
    listOfImages = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));
    const bars = [];
    const images = [];
    const buttons = [];
    const sliders = []
    var slider_index = 0;

    for (let index = 0; index < listOfImages.length; index++) {
      if (slider_index == sliderArray.length) {
        slider_index = 0;
      }
      let COMPONENT = sliderArray[slider_index];
      slider_index++;
      bars.push(<li key={index} data-target="#MainCarousel" data-slide-to={index} className={index == 0 ? "active" : ""}></li>);
      images.push(<div key={index} className={index == 0 ? "carousel-item active" : "carousel-item "}>
        <img className="d-block w-100" src={listOfImages[index]} alt="First slide" />
        <div className="slide-holder pt-2">
          <COMPONENT></COMPONENT>
        </div>
      </div>);
    }
    return (
      <div>
        <div id="MainCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {bars}
          </ol>
          <div className="carousel-inner pt-2">
            {images}

          </div>

        </div>
      </div>
    );
  }
}

export default Carousel;
