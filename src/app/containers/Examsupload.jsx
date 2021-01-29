import React from "react";
import { Container, Row, Col,Button,Table ,NavLink,Card} from 'reactstrap';
import { connect } from "react-redux";
import {newsDescription,newsHeader,newsImage,newsUploaderName,newsuploadDatasubmit,handleClearSubmit1,loadingimgSub} from "../actions/NewsUploadAction";
import {examoverviewupload} from "../actions/ExamsUploadAction";

import {paramsToHeader } from "../actions/HeaderParams";
import loading_img from "../img/loading_img.gif";

import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
class Examsupload extends React.Component {



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
onChangeExamOverviewUpload({ target }){
this.props.examoverviewuploadsb({
data: {test:target.value} });

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
<Card id="fests-card"    style={{padding:'25px'}}>
<Row>
<Col xs="12" sm="4" md="4" >
 <div className="form-group">
<label forname="NEWS_UP_NAME" className="bmd-label-floating">UPLOADER NAME<span className="req-ind">*</span></label>
<input type="text" className="form-control" id="NEWS_UP_NAME" value={this.props.NewsUploadReducer.newsUploaderName} required={true} onChange={ this.onChangenewsUploader.bind(this)} />

<span className="bmd-help">You need to enter your name.</span><br/>
</div>
</Col>

<Col xs="12" sm="4" md="4" >
 <div className="form-group">
<label forname="EXAM_NAME" className="bmd-label-floating">EXAM NAME<span className="req-ind">*</span></label>
<input type="text" className="form-control" id="EXAM_NAME" value={this.props.NewsUploadReducer.newsheader} required={true} onChange={ this.onChangenewsHeader.bind(this)} />

<span className="bmd-help">You need to enter exam name.</span><br/>
</div>
</Col>

 <Col xs="12" sm="4" md="4" >
  <div className="form-group">
<label forname="IMPACT_STREAM" className="bmd-label-floating">IMPACTING STREAM<span className="req-ind">*</span></label>
<input type="text"  className="form-control"  rows="4" id="IMPACT_STREAM" value={this.props.NewsUploadReducer.newsdesc}  required={true} onChange={this.onChangenewsDesc.bind(this) }/>
 <span className="bmd-help">You need to enter which stream impacting by this exam.</span><br/>
 </div>
</Col>



      <Col xs="12" sm="4" md="4" >
  <div className="form-group">
<label forname="EXAM_IMG" className="bmd-label-floating">EXAM Image/logo<span className="req-ind">*</span></label>
<input type="file" className="form-control-file" id="EXAM_IMG" required={true}  encType="multipart/form-data" onChange={this.onChangeHandler.bind(this)}/>
<small className="text-muted">Upload News Image.</small>
</div>
</Col>

</Row>
</Card>
<Card id="fests-card"    style={{padding:'25px'}}>
<Row>

<Col xs="12" sm="12" md="12" >
<h5>Exam Overview</h5>
</Col>
<Col xs="12" sm="12" md="12" >
 <div className="form-group">
<label forname="EXAM_OVERVIEW_UPLOAD" className="bmd-label-floating">EXAM OVERVIEW<span className="req-ind">*</span></label>
<textarea className="form-control" id="EXAM_OVERVIEW_UPLOAD" value={this.props.ExamsUploadReducer.examoverviewdata} required={true} onChange={ this.onChangeExamOverviewUpload.bind(this)}> </textarea>

<span className="bmd-help">You need to enter overview of the exam.</span><br/>
</div>
</Col>


</Row>
</Card>

<Card id="fests-card"    style={{padding:'25px'}}>
<Row>
<Col xs="12" sm="12" md="12" >
<h5>How to Prepare</h5>
</Col>



<Col xs="12" sm="12" md="12" >
 <div className="form-group">
<label forname="EXAM_QUES_ANA_UPLOAD" className="bmd-label-floating">Question Paper Analysis<span className="req-ind">*</span></label>
<textarea className="form-control"  rows="4" id="EXAM_QUES_ANA_UPLOAD" value={this.props.NewsUploadReducer.newsdesc}  required={true} onChange={this.onChangenewsDesc.bind(this) }></textarea>
<span className="bmd-help">You need to enter analysis of the exam.</span><br/>
</div>
</Col>
<Col xs="12" sm="12" md="12" >
 <div className="form-group">
<label forname="EXAM_SYLLABUS_UPLOAD" className="bmd-label-floating">Exam Syllabus<span className="req-ind">*</span></label>
<textarea className="form-control"  rows="4" id="EXAM_SYLLABUS_UPLOAD" value={this.props.NewsUploadReducer.newsdesc}  required={true} onChange={this.onChangenewsDesc.bind(this) }></textarea>
<span className="bmd-help">You need to enter syllabus of the exam.(if any)</span><br/>
</div>
</Col>


</Row>
</Card>

<Card id="fests-card"    style={{padding:'25px'}}>
<Row>
<Col xs="12" sm="12" md="12" >
<h5>Important dates</h5>
</Col>
<Col xs="12" sm="4" md="4" >
 <div className="form-group">
<label forname="REGISTRATION_START" className="bmd-label-floating">REGISTRATION STARTS ON(any format date)<span className="req-ind">*</span></label>
<input type="text" className="form-control" id="REGISTRATION_START" value={this.props.NewsUploadReducer.newsUploaderName} required={true} onChange={ this.onChangenewsUploader.bind(this)} />

<span className="bmd-help">You need to enter Registration start date.</span><br/>
</div>
</Col>

<Col xs="12" sm="4" md="4" >
 <div className="form-group">
<label forname="REGISTRATION_END" className="bmd-label-floating">REGISTRATION ENDS ON(any format date)<span className="req-ind">*</span></label>
<input type="text" className="form-control" id="REGISTRATION_END" value={this.props.NewsUploadReducer.newsheader} required={true} onChange={ this.onChangenewsHeader.bind(this)} />

<span className="bmd-help">You need to enter Registration end date.</span><br/>
</div>
</Col>

 <Col xs="12" sm="4" md="4" >
  <div className="form-group">
<label forname="ADMIT_CARD_DATE" className="bmd-label-floating">ADMIT CARD DATE	<span className="req-ind">*</span></label>
<input type="text"  className="form-control"  rows="4" id="ADMIT_CARD_DATE" value={this.props.NewsUploadReducer.newsdesc}  required={true} onChange={this.onChangenewsDesc.bind(this) }/>
 <span className="bmd-help">You need to enter admit card date of the exam.</span><br/>
 </div>
</Col>
<Col xs="12" sm="4" md="4" >
 <div className="form-group">
<label forname="EXAM_START_DATE" className="bmd-label-floating">EXAM STARTS DATE<span className="req-ind">*</span></label>
<input type="text"  className="form-control"  rows="4" id="EXAM_START_DATE" value={this.props.NewsUploadReducer.newsdesc}  required={true} onChange={this.onChangenewsDesc.bind(this) }/>
<span className="bmd-help">You need to enter  exam start date.</span><br/>
</div>
</Col>
<Col xs="12" sm="4" md="4" >
 <div className="form-group">
<label forname="EXAM_END_DATE" className="bmd-label-floating">EXAM END DATE<span className="req-ind">*</span></label>
<input type="text"  className="form-control"  rows="4" id="EXAM_END_DATE" value={this.props.NewsUploadReducer.newsdesc}  required={true} onChange={this.onChangenewsDesc.bind(this) }/>
<span className="bmd-help">You need to enter  exam end date.</span><br/>
</div>
</Col>
<Col xs="12" sm="4" md="4" >
 <div className="form-group">
<label forname="EXAM_RESULT_DATE" className="bmd-label-floating">EXAM RESULT DATE<span className="req-ind">*</span></label>
<input type="text"  className="form-control"  rows="4" id="EXAM_RESULT_DATE" value={this.props.NewsUploadReducer.newsdesc}  required={true} onChange={this.onChangenewsDesc.bind(this) }/>
<span className="bmd-help">You need to enter  exam result date.</span><br/>
</div>
</Col>
</Row>
</Card>
<Card id="fests-card"    style={{padding:'25px'}}>
<Row>
<Col xs="12" sm="12" md="12" >
<h5>Result Infromation</h5>
</Col>
<Col xs="12" sm="4" md="4" >
 <div className="form-group">
<label forname="RESULT_INFO" className="bmd-label-floating">RESULTS(INFO)<span className="req-ind">*</span></label>
<input type="text" className="form-control" id="RESULT_INFO" value={this.props.NewsUploadReducer.newsUploaderName} required={true} onChange={ this.onChangenewsUploader.bind(this)} />

<span className="bmd-help">You need to enter results information.</span><br/>
</div>
</Col>


</Row>
</Card>
<Row>
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
       examoverviewuploadsb:(datatosend) => {
           dispatch(examoverviewupload(datatosend));},
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
export default connect(mapStateToProps,mapDispatchToProps)(Examsupload);
