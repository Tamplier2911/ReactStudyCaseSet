import './StreamEdit.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {};
    }

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    };
    componentDidUpdate(){};
    componentWillUnmount(){};

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    values = (stream) => {
        return {
            title: stream.title,
            description: stream.description
        }
    }

    render() {
        if(this.props.stream) {
            return(
                <div className="form">
                    <div className="form__title">Edit your stream:</div>
                    <StreamForm 
                        initialValues={this.values(this.props.stream)}
                        onSubmit={this.onSubmit}
                    />
                </div>
            );
        } else {
            return <div>Loading...</div>
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
