import React from "react";
import { Container, Row, Col,Button,Table ,NavLink,Card} from 'reactstrap';
import { connect } from "react-redux";
import {newsDescription,newsHeader,newsImage,newsUploaderName,newsuploadDatasubmit,handleClearSubmit1,loadingimgSub} from "../actions/NewsUploadAction";
import {paramsToHeader } from "../actions/HeaderParams";
import loading_img from "../img/loading_img.gif";

import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
class Newsupload extends React.Component {



constructor(props) {
  super(props);

}

componentWillMount() {

  if(  this.props.match.url === "/Cutoffs")
  {
     this.props.paramsHeader(this.props);

  }
//if(this.props.ExamsReduce.result.length <=0){



}

onChangeHandler(event){
this.props.newsImageSubmit({
data: event.target.files[0],
loaded: 0,
})}
onChangenewsDesc({ target }){
this.props.newsDescriptionSubmit({
data: target.value });

}
onChangenewsHeader({ target }){
this.props.newsHeaderSubmit({
data: target.value });

}
onChangenewsUploader({ target }){
this.props.newsUploaderSubmit({
data: target.value });

}
handleNewsSubmit ({ target }){

 this.props.loadingimage(true);
 this.props.newsSubmitReq(this.props);
}
handleClearSubmitdata ({ target }){


 this.props.handleClearSubmit();
}

  render() {
  var  message ='';
  var loading=[];



  if ((this.props.NewsUploadReducer.loading)===true){
    loading.push(<p className="uploading-mobile" style={{position:'absolute',color:'White',top:'50%',backgroundColor:'rgb(102, 102, 102)',zIndex:'30001',opacity:'0.8'}}>
    Uploading, please wait...

    <img src="/img/loading_img.gif"/>
    </p>)
  }


if ((this.props.NewsUploadReducer.result)==='000000'){
  message = "Successfully Uploaded",
  loading= []
}
else if((this.props.NewsUploadReducer.result)==='999999') (
    message = "Upload Failed Please try again",
    loading=[]
)
        return (

<Card id="fests-card"    style={{padding:'25px'}}>

{loading}

<Row>
<Col xs="12" sm="12" md="12" >
 <div className="form-group">
<label forname="NEWS_UP_NAME" className="bmd-label-floating">UPLOADER NAME<span className="req-ind">*</span></label>
<input type="text" className="form-control" id="NEWS_UP_NAME" value={this.props.NewsUploadReducer.newsUploaderName} required={true} onChange={ this.onChangenewsUploader.bind(this)} />

<span className="bmd-help">You need to enter your name.</span><br/>
</div>
</Col>

<Col xs="12" sm="12" md="12" >
 <div className="form-group">
<label forname="NEWS_HEADER" className="bmd-label-floating">NEWS HEADER<span className="req-ind">*</span></label>
<input type="text" className="form-control" id="NEWS_HEADER" value={this.props.NewsUploadReducer.newsheader} required={true} onChange={ this.onChangenewsHeader.bind(this)} />

<span className="bmd-help">You need to enter news Header Information.</span><br/>
</div>
</Col>

 <Col xs="12" sm="12" md="12" >
  <div className="form-group">
<label forname="NEWS_DETAILS" className="bmd-label-floating">NEWS DESCRIPTION<span className="req-ind">*</span></label>
<textarea className="form-control"  rows="4" id="NEWS_DETAILS" value={this.props.NewsUploadReducer.newsdesc}  required={true} onChange={this.onChangenewsDesc.bind(this) }></textarea>
 <span className="bmd-help">You need to enter news description.</span><br/>
 </div>
</Col>



      <Col xs="12" sm="12" md="12" >
  <div className="form-group">
<label forname="NEWS_IMAGE" className="bmd-label-floating">News Image<span className="req-ind">*</span></label>
<input type="file" className="form-control-file" id="NEWS_IMAGE" required={true}  encType="multipart/form-data" onChange={this.onChangeHandler.bind(this)}/>
<small className="text-muted">Upload News Image.</small>
</div>
</Col>
<Col xs="12" sm="12" md="12" >
<button      style={{margin: '10px'}} type="submit" onClick={this.handleNewsSubmit.bind(this)}  className="btn btn-primary btn-raised">Submit Data</button>
<button  style={{margin: '10px'}} type="submit" onClick={this.handleClearSubmitdata.bind(this)}  className="btn btn-danger btn-raised">Clear Data</button>
{message}
</Col>
</Row>
  </Card>
        );
    }
}


//state.user is userReducer
//state.math is mathReducer
const mapStateToProps = (state,ownProps) => {

    return {

        NewsUploadReducer:state.NewsUploadReducer,
          Pathparamsreduce:state.Pathparamsreduce

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       newsDescriptionSubmit:(datatosend) => {
           dispatch(newsDescription(datatosend));},
           newsUploaderSubmit:(datatosend) => {
               dispatch(newsUploaderName(datatosend));},
           newsImageSubmit:(datatosend) => {
               dispatch(newsImage(datatosend));},
               newsHeaderSubmit:(datatosend) => {
                   dispatch(newsHeader(datatosend));},
                   newsSubmitReq:(datatosend) => {
                       dispatch(newsuploadDatasubmit(datatosend));},
                       handleClearSubmit:(datatosend) => {
                           dispatch(handleClearSubmit1(datatosend));},
                           loadingimage:(datatosend) => {
                               dispatch(loadingimgSub(datatosend));},

           paramsHeader:(datatosend) => {
               dispatch(paramsToHeader(datatosend));
       }


    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Newsupload);
