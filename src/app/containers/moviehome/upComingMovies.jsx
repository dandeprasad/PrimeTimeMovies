import React from "react";
import {Row, Col} from 'reactstrap';
import { connect } from "react-redux";
import '../../css/moviehome/movie-home.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class UpcomingMovies extends React.Component {

  constructor(props) {
    super(props);

  }
 
  componentWillMount() {

  }

  render () {
    const settings = {
       
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      };
    return (
     <>
     <Row>
         <Col xs="12" sm="12" md="12">
<h5 style={{marginLeft:"40px"}}>Upcoming Movies</h5>
         </Col>
     </Row>
<Row className="movie-home-background">
<Col xs="12" sm="12" md="12" className="movie-home-background-col">
        <Slider {...settings}>
        <Row>
     <Col xs="12" sm="12" md="12">
          <div className='movie-upcoming-img'>
          <img src='https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/temper_movie_poster.jpg' id="bg" alt="" style={{width:'inherit',height:'inherit'}}/>
       
          <div className="upcoming-movie-date">Coming Augest 22</div>
          
          </div>
          </Col>
      </Row>
      <Row>
     <Col xs="12" sm="12" md="12">  
     <div className='movie-upcoming-img'>
     <img src='https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/khaidi_no_poster.jpg' id="bg" alt=""style={{width:'inherit',height:'inherit'}}/>
     <div className="upcoming-movie-date">Coming Augest 22</div>
     </div>
          </Col>
      </Row>
      <Row>
     <Col xs="12" sm="12" md="12"> 
     <div className='movie-upcoming-img'>
     <img src='https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/v_poster.jpg' id="bg" alt=""style={{width:'inherit',height:'inherit'}}/>
     <div className="upcoming-movie-date">Coming Augest 22</div>
     </div>
          </Col>
      </Row>
      <Row>
     <Col xs="12" sm="12" md="12"> 
     <div className='movie-upcoming-img'>
     <img src='https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/v_poster.jpg' id="bg" alt=""style={{width:'inherit',height:'inherit'}}/>
     <div className="upcoming-movie-date">Coming Augest 22</div>
     </div>
          </Col>
      </Row>
      <Row>
     <Col xs="12" sm="12" md="12"> 
     <div className='movie-upcoming-img'>
     <img src='https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/v_poster.jpg' id="bg" alt=""style={{width:'inherit',height:'inherit'}}/>
     <div className="upcoming-movie-date">Coming Augest 22</div>
     </div>
          </Col>
      </Row>
      <Row>
     <Col xs="12" sm="12" md="12"> 
     <div className='movie-upcoming-img'>
     <img src='https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/v_poster.jpg' id="bg" alt=""style={{width:'inherit',height:'inherit'}}/>
     <div className="upcoming-movie-date">Coming Augest 22</div>
     </div>
          </Col>
      </Row>
      <Row>
     <Col xs="12" sm="12" md="12"> 
     <div className='movie-upcoming-img'>
     <img src='https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/v_poster.jpg' id="bg" alt=""style={{width:'inherit',height:'inherit'}}/>
     <div className="upcoming-movie-date">Coming Augest 22</div>
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
export default connect(mapStateToProps,mapDispatchToProps)(UpcomingMovies);
UpcomingMovies.propTypes = {
  
}
