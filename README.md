import React from 'react'
import NavigationBar from '../../ui/NavigationBar';
import Paper from '@material-ui/core/Paper';
import { Button } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
/**
 * Displays SelectedShareChild
 * @returns SelectedShareChild component
 */
 const SelectedShareChild=({selectedShare})=>{
    return (
        <div class="container-fluid">
        <NavigationBar/>
        <h1>hello</h1>
        
              <div class="row" style={{backgroundColor:"green"}}>
              <div class="col-md-4" style={{margin:"20px",backgroundColor:"red"}}>
              <h3 style={{color:"blue"}}>{selectedShare.shareName}</h3> 
              <h6>About Company: {selectedShare.aboutCompany}</h6>
                  <h6>Managed by: {selectedShare.managingDirector}</h6>
                  <p>Price: Rs. {selectedShare.sharePrice}</p>
              </div>
              {/* Buy Shares */}
              {/* <div class="col-md-3">
              <Paper elevation={3}  style={{width:"22rem",margin:"10px"}}>
                        <div class="card-header"><strong style={{color:"green"}}>Buy Shares</strong></div>
                        <div class="card-title">Shares:{selectedShare.shareName}</div>
                        <div class="card-title">Price:Rs.{selectedShare.sharePrice}</div>
                        <p class="card-text"></p>
                        <div class="card-footer">
                            <Button id="buyButton"
                            >
                               Buy
                            </Button>
                        </div>
               </Paper>
              </div>
             */}
    
              <div class="col-md-8" style={{margin:"-20px",backgroundColor:"yellow"}}>
                    <Formik
                    initialValues={{
                        sharesQuantity: "",
                        sharesPrice: "",
                    
                    }}
                    validationSchema={Yup.object().shape({
                        sharesQuantity: Yup.string().required("Quantiy is required"),
                    })}
                    onSubmit={(fields) => {
                    }}
                    render={({ errors, touched }) => (
                        <Form className="form"> 
                            <div class="container">
                            <div class="row">
                                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                <div class="card card-signin my-5">
                                    <div class="card-body">
                                    <h5 class="card-title text-center">Buy Shares</h5>
                                    <div class="form-label-group">
                                        <label htmlFor="sharesQuantity">Shares Quantity</label>
                                        <Field
                                        name="sharesQuantity"
                                        type="text"
                                        className={
                                            "form-control" +
                                            (errors.sharesQuantity && touched.sharesQuantity
                                            ? " is-invalid"
                                            : "")
                                        }
                                        />
                                        <ErrorMessage
                                        name="sharesQuantity"
                                        component="div"
                                        className="invalid-feedback"
                                        />
                                    </div>

                                    <div class="form-label-group">
                                        <label htmlFor="sharesPrice">Price</label>
                                    
                                        <Field
                                        name="sharesPrice"
                                        type="text"
                                        className= "form-control" 
                                        
                                        />
                                    </div>
                                    <button
                                        class="btn btn-lg btn-primary btn-block text-uppercase"
                                        type="submit"
                                        style={{ margin: "10px" }}
                                    >
                                        Buy
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </Form>
                    )}
                    />
              </div>
     
              </div>  
       
        </div>           
  );
}
export default React.memo(SelectedShareChild);
