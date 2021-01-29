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
import PreHomeSideBar from './preHomeSideBar';
import { PRE_HOME_TRAILERS_URL } from '../serverReq/request';
import { PRE_HOME_TRAILERS } from '../../actions/types';
import PropTypes from 'prop-types';
import {submitReqTrailers } from "../../actions/preHome/preHomeActions"

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
    this.state = { activeIndex: 0,
      parentTag: false};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.homeImgClick = this.homeImgClick.bind(this);

  }
  componentDidMount(){
    this.serverRequest();
  this.updateTimer = setInterval(() => this.serverRequest(), 30000);
  }
  componentWillUnmount(){
    clearInterval(this.updateTimer);
  }
  serverRequest(){
    const datatosend = {
      url:PRE_HOME_TRAILERS_URL,
      requestType:'GET',
      reducerHandleType:PRE_HOME_TRAILERS
    }
   this.props.SubmitReq(datatosend);
  };
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

    const {trailers} =this.props.preHome;
items = trailers;

    const { activeIndex } = this.state;

    const slides = items.map((item,index) => {

      return (

        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.NOTIFYS_ID}
        >
        <img src={item.movieImages} id="bg" alt="" className='pre-home-carousel-img'/>
          <div className="opacity-content"/>
          <div className="prehome-main-content">

          <Row>
            <Col xs="12" sm="12" md="12">
              <h5>{item.movieName}</h5>
            </Col>
            <Col xs="12" sm="12" md="12">
              <p>{item.movieDate}</p>
            </Col>
            <Col xs="12" sm="12" md="12">
      <p>{item.movieHours}</p>
            </Col>
            <Col xs="12" sm="12" md="12">
              <p>Psychological thriller</p>
            </Col>
            <Col xs="12" sm="12" md="12">
      <p>Rating :{item.movieRating}</p>
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
      <p>{
        item.movieDescription}</p>
        </div>
        </CarouselItem>
      );
    });

    return (
<>
{ this.state.parentTag ? <PreHomeSideBar HandleChangeToggle1 = {() => {

this.setState({
  parentTag: !this.state.parentTag
})
}}
/>:<></> }
      <PreMovieHeader  
HandleChangeToggle2 = {() => {

      this.setState({
        parentTag: !this.state.parentTag
  })
}}/>
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
      preHome: state.preHome
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
      SubmitReq:(datatosend) => {
           dispatch(submitReqTrailers(datatosend));
   }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(MovieCarousel);
MovieCarousel.propTypes = {
 
}