import React from "react";
import {Row, Col} from 'reactstrap';
import { connect } from "react-redux";
import '../../css/moviehome/movie-home.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class MovieTop extends React.Component {

  constructor(props) {
    super(props);

  }
 
  componentWillMount() {

  }

  render () {
    const settings = {
      className: "center",
      infinite: true,
      slidesToShow: 1,
      
      pauseOnHover:false,
      speed: 500,
      dots: true,
      centerMode: true,
      autoplay: true,
      speed: 1000,
      cssEase: "linear",
centerPadding: '20%',
arrows:false
    };
    return (
     <>
<Row className="movie-top-background">
<Col xs="12" sm="12" md="12"  style={{padding:"0px"}}>
        <Slider {...settings}>
        <Row>
     <Col xs="12" sm="12" md="12" >
          <div className='movie-top-img'>
          <img src='https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/temper_movie_poster.jpg' id="bg" alt="" style={{width:'inherit',height:'inherit'}}/>
          </div>
          </Col>
      </Row>
      <Row>
     <Col xs="12" sm="12" md="12">  
     <div className='movie-top-img'>
     <img src='https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/khaidi_no_poster.jpg' id="bg" alt=""style={{width:'inherit',height:'inherit'}}/>
     </div>
          </Col>
      </Row>
      <Row>
     <Col xs="12" sm="12" md="12"> 
     <div className='movie-top-img'>
     <img src='https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/v_poster.jpg' id="bg" alt=""style={{width:'inherit',height:'inherit'}}/>
     </div>
          </Col>
      </Row>
        </Slider>
        </Col>
        </Row>
</>


    )
  }
}
const mapStateToProps = (state,ownProps) => {
  return {
  
  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};
export default connect(mapStateToProps,mapDispatchToProps)(MovieTop);
MovieTop.propTypes = {
  
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }