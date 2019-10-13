import './StreamCreate.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
// import { metaProperty } from '@babel/types';

class StreamCreate extends Component {

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    };

    render(){
        return(
            <div className="form">
                <div className="form__title">Create new stream:</div>
                <StreamForm onSubmit={this.onSubmit}></StreamForm>
            </div>
        );
    };
}

export default connect(null, { createStream })(StreamCreate);