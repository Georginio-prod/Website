import React, { Component } from "react";
import Field from "../Common/Field";
import { withFormik} from "formik";
import * as Yup from 'yup';
const fields = {
    sections: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name*' },
            { name: 'email', elementName: 'input', type: 'text', placeholder: 'Your email*' },
            { name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number*' }
        ],
        [
            { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message*' }
        ]
    ]
}

class Contact extends Component {




    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>

                    <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={this.props.handleSubmit}>
                        <div className="row">
                            {fields.sections.map((section, sectionIndex) => {
                                console.log("Rendering section", sectionIndex, "with", section);
                                return (
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field, i) => {
                                            return <Field
                                                {...field}
                                                key={i}
                                                value={this.props.values[field.name]}
                                                name={field.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={this.props.touched[field.name]}
                                                errors={this.props.errors[field.name]}
                                            />
                                        })}
                                    </div>

                                )
                            })}

                            <div className="text-center">
                                <button className="btn btn-primary btn-xl text-uppercase"
                                        id="submitButton"
                                        type="submit"

                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}


export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message:'',
    }),

     validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Come on bro , your name is longer than that').required('You must give us your name.'),
         email: Yup.string().email('You need to give us a valid email ').required('We need your email.'),
         phone: Yup.string()
             .min(8, 'Please provide your 10 digit phone number.')
             .max(20, 'Your phone number is too long')
             .required('We need a phone number to reach you at.'),
         message: Yup.string().min(100, 'you need to provide us more detailed information').required('Message is required.')
     }),

    handleSubmit: (values, {setSubmitting}) => {
        console.log("VALUES", values);
        alert("You've submitted the form" + JSON.stringify(values));
    }
})(Contact);
