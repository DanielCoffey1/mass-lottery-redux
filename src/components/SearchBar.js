import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './SearchBar.css';

class SearchBar extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui-error-message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label className="search-bar">Enter Game ID: </label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formProps) {
    console.log(formProps);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="error">
        <Field name="drawNumber" component={this.renderInput} />
        <button>Submit</button>
      </form>
    );
  }
}

const validate = (formProps) => {
  const errors = {};
  if (!formProps.drawNumber) {
    errors.drawNumber = 'You must enter a Game ID';
  }
  return errors;
};

export default reduxForm({
  form: 'SearchBar',
  validate,
})(SearchBar);
