import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,Row, Col
} from 'reactstrap';
import playvideo from "../../imgsvg/play_circle_outline.svg";
import bookticket from "../../imgsvg/book-your-ticket.svg";
import '../../css/prelogin/pre-home.scss';
import { connect } from "react-redux";
import PreMovieHeader from './PreMovieHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var items = [
  {
    src: 'https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/palasa.jpg',
    altText: '',
    caption: '',
    NOTIFYS_ID:1
  },
  {
    src: 'https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/khaidi_no_poster.jpg',
    altText: '',
    caption: '',
    NOTIFYS_ID:2
  },
  {
    src: 'https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/v_poster.jpg',
    altText: '',
    caption: '',
    NOTIFYS_ID:3
  },
  {
    src: 'https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/temper_movie_poster.jpg',
    altText: '',
    caption: '',
    NOTIFYS_ID:4
  },
  {
    src: 'https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/v_poster.jpg',
    altText: '',
    caption: '',
    NOTIFYS_ID:5
  }
];
class MovieCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.homeImgClick = this.homeImgClick.bind(this);

  }
  componentWillMount() {

  }
  homeImgClick(){
alert("dade");
  }



  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item,index) => {
      return (

        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.NOTIFYS_ID}
        >
        <img src={item.src} id="bg" alt="" className='pre-home-carousel-img'/>
          <div className="opacity-content"/>
          <div className="prehome-main-content">

          <Row>
            <Col xs="12" sm="12" md="12">
              <h5>Temper</h5>
            </Col>
            <Col xs="12" sm="12" md="12">
              <p>2019</p>
            </Col>
            <Col xs="12" sm="12" md="12">
              <p>2hrs 2 min</p>
            </Col>
            <Col xs="12" sm="12" md="12">
              <p>Psychological thriller</p>
            </Col>
            <Col xs="12" sm="12" md="12">
              <p>Rating : 8.6/10</p>
            </Col>
          </Row>
          <Row>
              <Col xs="12" sm="12" md="12">
              </Col>
          </Row>
          <Row>
              <Col xs="12" sm="12" md="12">
              </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" md="6">
              <button type="submit"   className="btn prehome-button"><span><img style={{padding:'0rem 0.5rem'}} src={bookticket} id="bg" alt=""/></span>GET TICKET</button>
            </Col>
            <Col xs="12" sm="12" md="6">
              <button type="submit"   className="btn prehome-button"> <span><img src={playvideo} style={{padding:'0rem 0.5rem'}} id="bg" alt=""/></span>WATCH TRAILER</button>
            </Col>
          </Row>
          </div>

        <div className="prehome-main-descrition">
          <p>
            150 ( transl. Prisoner No. 150) is a 2017 Indian Telugu-language action film directed by V. V. Vinayak and produced by Ram Charan. The film stars Chiranjeevi in a double role alongside Kajal Aggarwal with Tarun Arora, Brahmanandam, Ali and Posani Krishna Murali playing pivotal roles.
          </p>
        </div>
        </CarouselItem>
      );
    });

    return (
<>
      <PreMovieHeader/>
      <Carousel
     
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        
        ride="carousel"
className="carousel-fade"
      >
<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} className='prehome-carousel-indicators' />
        {slides}

      </Carousel>
      </>
    );



  }
}


const mapStateToProps = (state,ownProps) => {

    return {
        HomeReducer: state.HomeReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       SubmitReqHomeSlides:(datatosend) => {
           dispatch(homeSlidesActions(datatosend));
   }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(MovieCarousel);
