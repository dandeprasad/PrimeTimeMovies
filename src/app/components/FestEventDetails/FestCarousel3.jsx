import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,Row, Col
} from 'reactstrap';

import '../../css/events.scss';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {newsSlidesActions } from "../../actions/NewsArticlesAction";

var items1 = [
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
  },
  {
    src: '/img/festEventBackGrnd.jpg',
    altText: '',
    caption: '',
    NOTIFYS_ID:4
  }
];
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
  },
  {
    src: '/img/festEventBackGrnd.jpg',
    altText: '',
    caption: '',
    NOTIFYS_ID:4
  }
];
class FestCarousel3 extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);

  }
  componentWillMount() {
    this.serverRequestslides();

  }

  serverRequestslides (){


  var WORKSPACE_ID = "HOME_WORKSPACE";
             var FUNCTION_ID = "GET_NEWS_ONLY";
             var ACTION_ID = "GET_ALL_NEWS_STRING";

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




   this.props.SubmitReqNewsSlides(dande);
  }


  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items1.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items1.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
if(this.props.NewsArticlesreduce.result1[0]!= undefined){
items = this.props.NewsArticlesreduce.result1[0];
}
    const { activeIndex } = this.state;

//     const slides = items.map((item) => {
//       return (
//         <CarouselItem
//           onExiting={this.onExiting}
//           onExited={this.onExited}
//           key={item.NOTIFYS_ID}
//         >
//         <Row className="festCont1">
//         <Col xs="12" sm="12"md="12" style={{padding:'0px'}}>
//         <img src={item.NOTIFY_IMG} className="img-responsive festBackImg" alt="" width="100%" height="275"/>
//         <div className="news-bc-div"></div>
//
// </Col>
//
//         </Row>
//
//         </CarouselItem>
//       );
//     });

  const slides1=[];
  var car = 0;
    while (car<items.length){
  slides1.push(    <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={items[car].NEWSID}
      >




      <Row className="festCont1">
      <Col xs="12" sm="12"md="6" style={{padding:'0px'}}>
      <img src={items[car].NEWS_IMAGE} className="img-responsive festBackImg" alt="" width="100%" height="275"/>
      <div className="news-bc-div"></div>
      <div className="news-content-div"  >
<h4>{items[car].NEWS_HEADER}</h4>
<p style={{fontSize: '1rem'}} >{items[car].POSTED_DATE}</p>
      </div>

</Col>
<Col xs="12" sm="12"md="6" style={{padding:'0px'}}>
<img src={items[car+1].NEWS_IMAGE} className="img-responsive festBackImg" alt="" width="100%" height="275"/>
<div className="news-bc-div"></div>
<div className="news-content-div"  >
<h4>{items[car+1].NEWS_HEADER}</h4>
<p style={{fontize: '1rem'}} >{items[car+1].POSTED_DATE}</p>
</div>
</Col>

      </Row>



      </CarouselItem>
    )
      car = car+2;
    }

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
<CarouselIndicators className="events-carosal"items={items1} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides1}
        <CarouselControl className = "carControl carControlnews"direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl className = "carControl carControlnews" direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );



  }
}


const mapStateToProps = (state,ownProps) => {

    return {
        NewsArticlesreduce: state.NewsArticlesreduce
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       SubmitReqNewsSlides:(datatosend) => {
           dispatch(newsSlidesActions(datatosend));
   }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(FestCarousel3);
