import React, { Component } from "react";
import { Button, FormGroup, Label, Col } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';


const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val);



class Contact extends Component {

    handleSubmit = values => {
        console.log(values);
    }

    render() {
        document.title = "RIC . Contact"
        return (
            <div className="container">
                <div className="row row-content" style={{ paddindLeft: "20px", textAlign: "left", margin: '20px 0' }}>
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={values => this.handleSubmit(values)} style={{ margin: '20px 0' }}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".firstname"
                                        name="firstname"
                                        placeholder="Firstname"
                                        className="form-control"
                                        validators={
                                            { required }
                                        }
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: "Required!"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lastname"
                                        name="lastname"
                                        placeholder="Lastname"
                                        className="form-control"
                                        validators={
                                            { required }
                                        }
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: "Required!"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={
                                            {
                                                required,
                                                validEmail
                                            }
                                        }
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: "Required! ",
                                            validEmail: "Invalid Email"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Telephone</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".telnum"
                                        name="telnum"
                                        placeholder="Telephone Number"
                                        className="form-control"
                                        validators={
                                            {
                                                required,
                                                isNumber
                                            }
                                        }
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: "Required! ",
                                            isNumber: "Invalid Number"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                            />
                                            <em>May we contact you?</em>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>

                                    <Control.select
                                        model=".contactType"
                                        name="contactType"
                                        className="form-control"
                                    >
                                        <option>Telephone</option>
                                        <option>Email</option>
                                    </Control.select>

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".message"
                                        name="message"
                                        rows="9"
                                        className="form-control"
                                        validators={
                                            {
                                                required
                                            }
                                        }
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={{
                                            required: "Required!",
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="success">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;