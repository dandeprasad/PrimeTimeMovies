import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,Row, Col
} from 'reactstrap';
import { connect } from "react-redux";
import festbackground1 from "../../img/festbackground1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FestCarousel0 from '../../components/FestEventDetails/FestCarousel0';
import {reqcalleventsdata } from "../../actions/EventsDetailsActions";
var items = [

];

class FestCarousel1 extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  componentWillMount() {


  this.serverRequestReach();
  }

  serverRequestReach ( ){
    var WORKSPACE_ID = "HOME_WORKSPACE";
  	var FUNCTION_ID = "GET_FESTS_EVENTDETAILS";
  	var ACTION_ID = "GET_FESTS_EVENTDETAILS";


var collegeid=this.props.festidpass

  var Record = {
		"WORKSPACE_ID" : WORKSPACE_ID,
		"FUNCTION_ID" : FUNCTION_ID,
		"ACTION_ID" : ACTION_ID,
		"FEST_ID":collegeid
	};


  var json = {
    "datatohost" : Record
  };
  var dande = 'ServerData=' + JSON.stringify(json);


   this.props.SubmitReqcallEvents(dande);
  };


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

    if (this.props.EventsDetailsReduce.eventdetails.length>0){
    var  itemsdata =   Object.values( this.props.EventsDetailsReduce.eventdetails[0]);
    items=[];
if(itemsdata[0].fest_paper !=''){
  items.push(
    {
      src: itemsdata[0].fest_paper,

      caption: 'PAPER PRESENTATION',
      key:"PAPER_PRES"
    }
  )
}
if(itemsdata[0].fest_event !=''){
  items.push(
    {
      src: itemsdata[0].fest_event,

      caption: 'EVENTS',
      key:"EVENTS"
    }
  )
}
if(itemsdata[0].fest_workshop !=''){
  items.push(
    {
      src: itemsdata[0].fest_workshop,

      caption: 'WORKSHOPS',
      key:"WORKSHOPS"
    }
  )
}

}
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.key}
        >
        <Row >
<Col  xs="12" sm="12"md="12" className="festbcdiv3">
        <span >
        <label>
          <FontAwesomeIcon
            icon="chevron-left"
            color="black"
            size="lg"
          />
          {' '}
        </label>
        <label>
          <FontAwesomeIcon
            icon="chevron-left"
            color="black"
            size="lg"
          />
          {' '}
        </label>
        </span>
        <span >
        <span className="festbcdiv4"  >{item.caption}</span>
        <label>
          <FontAwesomeIcon
            icon="chevron-right"
            color="black"
            size="lg"
          />
          {' '}
        </label>
        <label>
          <FontAwesomeIcon
            icon="chevron-right"
            color="black"
            size="lg"
          />
          {' '}
        </label>
        </span>
</Col>

<Col  xs="12" sm="12"md="12">
        <div style={{padding:'10px',color:'black',background: 'white'}} dangerouslySetInnerHTML={{ __html: item.src}}></div>

</Col>







{/*        <div className="festeventsdiv">
        <FestCarousel0/>
        </div>
        <div className="hexagon"> </div>*/}
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
        <CarouselControl className = "carControl"direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl className = "carControl" direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

const mapStateToProps = (state,ownProps) => {

    return {
        EventsDetailsReduce: state.EventsDetailsReduce

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
      SubmitReqcallEvents:(datatosend) => {
          dispatch(reqcalleventsdata(datatosend));}
       }

    };

export default connect(mapStateToProps,mapDispatchToProps)(FestCarousel1);
