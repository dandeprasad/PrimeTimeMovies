import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,Row, Col
} from 'reactstrap';
import festbackground1 from "../../img/festbackground1.jpg";
import festimage1 from "../../img/festimage1.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const items = [
  {
    src: '/img/festEventBackGrnd.jpg',
    altText: '',
    caption: '',
    key:1
  },
  {
    src: '/img/festEventBackGrnd.jpg',
    altText: '',
    caption: '',
    key:2
  },
  {
    src: '/img/festEventBackGrnd.jpg',
    altText: '',
    caption: '',
    key:3
  }
];

class FestCarousel3 extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
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

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.key}
        >
        <Row className="festCont1">
        <Col xs="12" sm="12"md="6" style={{padding:'0px'}}>
        <img src="/img/festbackground1.jpg" className="img-responsive festBackImg" alt="" width="100%" height="275"/>
        <div className="news-bc-div"></div>
        <div className="news-content-div"  >
<h4>THE FRESH MAN YEAR EXPERIENCE</h4>
<p style={{fontSize: '1rem'}} >18 march 2019</p>
        </div>

</Col>
<Col xs="12" sm="12"md="6" style={{padding:'0px'}}>
<img src="/img/festimage1.jpg" className="img-responsive festBackImg" alt="" width="100%" height="275"/>
<div className="news-bc-div"></div>
<div className="news-content-div"  >
<h4>THE FRESH MAN YEAR EXPERIENCE</h4>
<p style={{fontize: '1rem'}} >18 march 2019</p>
</div>
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

        {slides}
        <CarouselControl className = "carControl carControlnews"direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl className = "carControl carControlnews" direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default FestCarousel3;
