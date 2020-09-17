import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,Row, Col
} from 'reactstrap';

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

class FestCarousel0 extends Component {
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
          <div className="carousalfestevtHeader">
<Row>
<Col xs="12" sm="12"md="12">
<h2 className="festslideheader">Description</h2>
</Col>
</Row>
<Row>
<Col xs="12" sm="12"md="12">
<h3 className="festslideheader1">Scarpheap Challenge is a british telivision where teams of contestants build a working machine
that could do a specific work</h3>
</Col>
</Row>
          </div>

          <CarouselCaption captionText={item.caption}  captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
 <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
      </Carousel>
    );
  }
}


export default FestCarousel0;
