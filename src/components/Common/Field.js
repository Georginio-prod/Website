import React, { Component } from "react";

class Field extends Component {
    render() {
        const { name, elementName, type, placeholder, value, onChange } = this.props;

        return (
            <div className="form-group">
                {elementName === 'input' ? (
                    <input
                        className="form-control"
                        id={name}
                        type={type}
                        placeholder={placeholder}
                        data-sb-validations="required"
                        required="required"
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />
                ) : (
                    <textarea
                        className="form-control"
                        id={name}
                        placeholder={placeholder}
                        data-sb-validations="required"
                        data-validation-required-message="Please enter a message"
                        required="required"
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                        style={{
                            height: "100%",
                            minHeight: "15.5rem"
                        }}
                    ></textarea>
                )}
                <p className="help-block text-danger">
                    {(this.props.touched && this.props.errors)&&
                        <span>{this.props.errors}</span>
                    }

                </p>
                <div className="invalid-feedback" data-sb-feedback={`${name}:required`}>
                    {elementName === 'input' ? "A name is required." : "A message is required."}
                </div>

            </div>

        );
    }
}

export default Field;
