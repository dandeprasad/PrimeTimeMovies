import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,Row, Col
} from 'reactstrap';
import '../css/events.scss';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {homeSlidesActions } from "../actions/Homeactions";

var items = [
  {
    src: '/img/festEventBackGrnd.jpg',
    altText: '',
    caption: '',
    NOTIFYS_ID:1
  },
  {
    src: '/img/festEventBackGrnd.jpg',
    altText: '',
    caption: '',
    NOTIFYS_ID:2
  },
  {
    src: '/img/festEventBackGrnd.jpg',
    altText: '',
    caption: '',
    NOTIFYS_ID:3
  }
];
class HomeCarousel extends Component {
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
    this.serverRequestslides();

  }
  homeImgClick(){
alert("dade");
  }
  serverRequestslides (){


    var WORKSPACE_ID = "HOME_WORKSPACE";
  		var FUNCTION_ID = "GET_LINEAR_DATA";
  		var ACTION_ID = "MAIN_ADS_HEADER_ID";

    var Record = {

      "FUNCTION_ID" :FUNCTION_ID,
      "WORKSPACE_ID" : WORKSPACE_ID,
      "ACTION_ID" : ACTION_ID,
      "POSITION_NO":1

    };
  var json = {
    "datatohost" : Record
  };
  var dande = 'ServerData=' + JSON.stringify(json);




   this.props.SubmitReqHomeSlides(dande);
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
if(this.props.HomeReducer.result[0]!= undefined){
items = this.props.HomeReducer.result[0];
}
    const { activeIndex } = this.state;

    const slides = items.map((item,index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.NOTIFYS_ID}
        >
        <Row className="festCont1">
        <Col xs="12" sm="12"md="12" style={{padding:'0px'}}>
        <img src={item.NOTIFY_IMG}  className="img-responsive festBackImg" alt="" width="100%" height="275"/>
        <div className="news-bc-div"></div>

</Col>

        </Row>

        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
<CarouselIndicators className="exams-carosal" items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}

      </Carousel>
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
export default connect(mapStateToProps,mapDispatchToProps)(HomeCarousel);
