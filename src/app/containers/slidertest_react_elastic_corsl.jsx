import React from "react";
import { connect } from "react-redux";
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
class slidertest_react_elastic_corsl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        items: [
          {id: 1, title: 'item #1'},
          {id: 2, title: 'item #2'},
          {id: 3, title: 'item #3'},
          {id: 4, title: 'item #4'},
          {id: 5, title: 'item #5'}
        ]
      }
  }
 
  componentWillMount() {

  }

  render () {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 5,itemsToScroll: 5 }
      ];
    const { items } = this.state;
    return (
     <>
     {   /*<Carousel breakPoints={breakPoints}>
        {items.map(item => <div key={item.id}>{item.title}</div>)}
    </Carousel>*/}

    <Carousel  breakPoints={breakPoints}>
    <Item>1</Item>
    <Item>2</Item>
    <Item>3</Item>
    <Item>4</Item>
    <Item>5</Item>
    <Item>6</Item>
    <Item>7</Item>
    <Item>8</Item>
    <Item>9</Item>
    <Item>10</Item>
  </Carousel>

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
export default connect(mapStateToProps,mapDispatchToProps)(slidertest_react_elastic_corsl);
SliderTest.propTypes = {
  
}
