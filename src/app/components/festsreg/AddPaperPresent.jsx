import React from "react";

export class AddPaperPresent extends React.Component{


        constructor(){
        super();
        this.state = {
PAPER_PRE_NAME:'',
PAPER_PRE_DESC:'',
PAPER_PRES_EMAIL:'',
PAPER_PRES_PHNO:'',
PAPER_PRE_RULES_FORMAT:'',
PAPER_PRE_BROC:'',
chkbox:false,
errors:{}
        }
    }

    validateField(field, e) {
var value = e.target.value;

  switch(field) {
    case 'PAPER_PRES_EMAIL':
    const  emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        !emailValid ? this.setState(prevState => ({ errors:{...prevState.errors,PAPER_PRES_EMAIL : 'Please Enter a valid Email'}})) : this.setState(prevState => ({ errors:{...prevState.errors,PAPER_PRES_EMAIL : ''}})) ;
     // fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
      case 'PAPER_PRE_NAME' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors, PAPER_PRE_NAME : 'Paper Persentation  name  cannot be empty'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,PAPER_PRE_NAME : ''}})) ;
     break;
       case 'PAPER_PRE_DESC' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors, PAPER_PRE_DESC : 'Paper Persentation Description cannot be empty'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,PAPER_PRE_DESC : ''}})) ;
     break;
      case 'PAPER_PRE_RULES_FORMAT' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors, PAPER_PRE_RULES_FORMAT : 'Paper Persentation Rules Format  cannot be empty'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,PAPER_PRE_RULES_FORMAT : ''}})) ;
     break;
       case 'PAPER_PRE_BROC' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors, PAPER_PRE_BROC : 'Paper Persentation Broucture cannot be empty'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,PAPER_PRE_BROC : ''}})) ;
     break;

      case 'PAPER_PRES_PHNO' :
     value.length != 10 ?  this.setState(prevState => ({ errors:{...prevState.errors,PAPER_PRES_PHNO : 'Phone Number should have 10 digits'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,PAPER_PRES_PHNO : ''}})) ;
break;

     default:
      break;
  }
}


//sending data to parent class
            onChangedata(){
                if (this.state.chkbox){
        this.props.datatopass(this.props.number,this.state)
                }
                else{
                     this.props.datatopass(this.props.number,"")
                }
    }



//setting state for current classes starts
            HandleChangePPName({ target }){
   this.setState({
      PAPER_PRE_NAME: target.value },
       () => {
    this.onChangedata();
    });

            }
                        HandleChangePPDesc({ target }){
   this.setState({
      PAPER_PRE_DESC: target.value },
       () => {
    this.onChangedata();
    });

            }
                        HandleChangePPCoodEmail({ target }){
   this.setState({
      PAPER_PRES_EMAIL: target.value },
       () => {
    this.onChangedata();
    });

            }
                        HandleChangePPPhno({ target }){
   this.setState({
      PAPER_PRES_PHNO: target.value },
       () => {
    this.onChangedata();
    });

            }

                                    HandleChangePPRulesFmt({ target }){
   this.setState({
      PAPER_PRE_RULES_FORMAT: target.value },
       () => {
    this.onChangedata();
    });

            }
                                    HandleChangePPPerBroc({ target }){
   this.setState({
      PAPER_PRE_BROC: target.value },
       () => {
    this.onChangedata();
    });

            }
                                    handleChangeChk(event){

   this.setState({
      chkbox: event.target.checked },
       () => {

    this.onChangedata();
    });


            }

//setting state for current classes ends

    render(){
        return (







                        <div className="row" divnumber={this.props.number}>

                          <div className=" col-xs-12 col-sm-12 col-md-12" >
<div className="checkbox" >
    <label style={{color:"red"}}>
      <input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk.bind(this)}/>
      <span className="checkbox-decorator"><span className="check"></span><div className="ripple-container"></div></span>
      Select
    </label>
  </div>
  </div>







                    	<div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname={"PAPER_PRE_NAME"+this.props.number} className="bmd-label-floating">PAPER PRESENTATION NAME<span className="req-ind">*</span> </label>
    <input type="text" className="form-control" id={"PAPER_PRE_NAME"+this.props.number} value={this.state.PAPER_PRE_NAME} required={true} onChange={ this.HandleChangePPName.bind(this)} onBlur= {   this.validateField.bind(this,"PAPER_PRE_NAME")}/>
    <span className="bmd-help">You need to enter your Workshop Name.</span><br/>
      <span style={{color: "red"}}>{this.state.errors.PAPER_PRE_NAME }</span>
  </div>

</div>



    <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group">
    <label forname={"PAPER_PRE_DESC"+this.props.number} className="bmd-label-floating">PAPER PRESENTATION DESCRIPTION<span className="req-ind">*</span></label>
    <textarea className="form-control"rows="4" id={"PAPER_PRE_DESC"+this.props.number} value={this.state.PAPER_PRE_DESC} required={true} onChange={this.HandleChangePPDesc.bind(this)} onBlur= {   this.validateField.bind(this,"PAPER_PRE_DESC")}></textarea>
       <span className="bmd-help">You need to enter your Paper Persentation Description.</span><br/>
  <span style={{color: "red"}}>{this.state.errors.PAPER_PRE_DESC }</span>  </div>

  </div>


     	<div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname={"PAPER_PRES_EMAIL"+this.props.number} className="bmd-label-floating">PAPER PRESENTATION  CO-ORIDINATOR EMAIL<span className="req-ind">*</span> </label>
    <input type="email" className="form-control" id={"PAPER_PRES_EMAIL"+this.props.number}  value={this.state.PAPER_PRES_EMAIL} required={true} onChange={this.HandleChangePPCoodEmail.bind(this)} onBlur= {   this.validateField.bind(this,"PAPER_PRES_EMAIL")}/>
    <span className="bmd-help">You need to enter your Paper Persentation Coordinator Email.</span><br/>
  <span style={{color: "red"}}>{this.state.errors.PAPER_PRES_EMAIL }</span>  </div>


</div>




	<div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname={"PAPER_PRES_PHNO"+this.props.number} className="bmd-label-floating">PAPER PRESENTATION  CO-ORIDINATOR PHONE NO<span className="req-ind">*</span> </label>
    <input type="number" className="form-control"   id={"PAPER_PRES_PHNO"+this.props.number} value={this.state.PAPER_PRES_PHNO}  required={true} onChange={this.HandleChangePPPhno.bind(this)} onBlur= {   this.validateField.bind(this,"PAPER_PRES_PHNO")}/>
        <span className="bmd-help">You need to enter your Paper Persentation Coordinator Phone.</span><br/>
  <span style={{color: "red"}}>{this.state.errors.PAPER_PRES_PHNO }</span>  </div>


</div>




    <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group">
    <label forname={"PAPER_PRE_RULES_FORMAT"+this.props.number} className="bmd-label-floating">PAPER PRESENTATION RULES AND FORMAT<span className="req-ind">*</span></label>
    <textarea className="form-control"rows="4" id={"PAPER_PRE_RULES_FORMAT"+this.props.number} value={this.state.PAPER_PRE_RULES_FORMAT} required={true} onChange={this.HandleChangePPRulesFmt.bind(this)} onBlur= {   this.validateField.bind(this,"PAPER_PRE_RULES_FORMAT")}></textarea>
       <span className="bmd-help">You need to enter your Paper Persentation Rules and Format.</span><br/>
  <span style={{color: "red"}}>{this.state.errors.PAPER_PRE_RULES_FORMAT }</span>  </div>

  </div>





    <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group">
    <label forname={"PAPER_PRE_BROC"+this.props.number} className="bmd-label-floating">PAPER PRESENTATION BROCHURE<span className="req-ind">*</span></label>
    <textarea className="form-control"  rows="4" id={"PAPER_PRE_BROC"+this.props.number}value={this.state.PAPER_PRE_BROC}  required={true} onChange={this.HandleChangePPPerBroc.bind(this)} onBlur= {   this.validateField.bind(this,"PAPER_PRE_BROC")}></textarea>
     <span className="bmd-help">You need to enter your Paper Persentation Brochure.</span><br/>
  <span style={{color: "red"}}>{this.state.errors.PAPER_PRE_BROC }</span>  </div>
  </div>



</div>


        );
}}
