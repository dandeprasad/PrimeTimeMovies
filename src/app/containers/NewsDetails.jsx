import React from "react";

import { Container, Row, Col ,Card} from 'reactstrap';
import { connect } from "react-redux";
import {newsdetailsdata } from "../actions/NewsArticlesAction"
import {Helmet} from "react-helmet";

//export class App extends React.Component {   commenting because below redux will take care of attacting
 class NewsDetails extends React.Component {


//     changeUsername() {
// this.props.setName("king");
//     }

constructor(props) {
  super(props);

  this.state = {
  }
}

componentWillMount() {

  if(  this.props.match.url === "/NewsArticles")
  {
     this.props.paramsHeader(this.props);

  }
  this.serverRequest();
}

serverRequest ( ){
  var WORKSPACE_ID = "HOME_WORKSPACE";
  var FUNCTION_ID = "GET_NEWS_DETAILS";
  var ACTION_ID = "GET_NEWS_DETAILSID";


  var newsId=this.props.match.params.newsId;

var Record = {
  "WORKSPACE_ID" : WORKSPACE_ID,
  "FUNCTION_ID" : FUNCTION_ID,
  "ACTION_ID" : ACTION_ID,
  "NEWS_ID":newsId
};

var json = {
  "datatohost" : Record
};
var dande = 'ServerData=' + JSON.stringify(json);


 this.props.SubmitReq(dande);
};

    render() {
  const addNEWS1 = [];
    const news_metadata = [];
if(this.props.NewsArticlesreduce.newsdetails.length>0)
{
  addNEWS1.push(
          <Card id="fests-card">
    <Col xs="12" sm="12" md="12">
<Row>
<Col xs="12" sm="12" md="12">
<img src={this.props.NewsArticlesreduce.newsdetails[0][0].NEWS_IMAGE} className="img-responsive festBackImg" alt={this.props.NewsArticlesreduce.newsdetails[0][0].NEWS_HEADER} width="100%" height="300"/>
</Col>
</Row>
<Row>
<Col xs="12" sm="12" md="12">
<h4 className="news-header">
{ this.props.NewsArticlesreduce.newsdetails[0][0].NEWS_HEADER }
</h4>

</Col>
</Row>
<Row>
<Col xs="12" sm="12" md="12">

<Row  dangerouslySetInnerHTML={{ __html:this.props.NewsArticlesreduce.newsdetails[0][0].NEWS_DETAILS}}></Row>

</Col>
</Row>

    </Col>
      </Card>
  );

  news_metadata.push(
    <Helmet>
                    <meta charSet="utf-8" />
                    <title>CollegeExplore:{ this.props.NewsArticlesreduce.newsdetails[0][0].NEWS_HEADER }</title>
                    <meta name="description" content={this.props.NewsArticlesreduce.newsdetails[0][0].NEWS_DETAILS}/>/>
                    <meta name="keywords" content="list of colleges in India, top colleges in India, best colleges in India.Exams,Fests,Cutoffs,Placements  "/>

                    <meta property="og:image" content="https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/collegeexplore_logo.png"/>
                    <meta property="og:site_name" content="Collegeexplore"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="http://collegeexplore.in"/>
                    <meta property="og:title" content="College explore Developers"/>
                    <meta property="og:description" content="College explore Developers"/>
                </Helmet>
  );
}




        return (
            <div className="container">
            <Row>
{news_metadata}

{addNEWS1}
</Row>
            </div>
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
      SubmitReq:(datatosend) => {
          dispatch(newsdetailsdata(datatosend));},
       setName:(name) => {
           dispatch(setName(name));
       }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(NewsDetails);
