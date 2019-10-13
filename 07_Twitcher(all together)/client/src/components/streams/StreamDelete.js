import './StreamDelete.scss';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';


class StreamDelete extends Component {
    componentDidMount(){
        // this.props.match.params.id
        this.props.fetchStream(this.props.match.params.id);
    };

    renderTitle(){
        if (!this.props.stream) {
            return `Loading...`;
        }
        return `${this.props.stream.title}`
    };

    renderDesc(){
        if (!this.props.stream) {
            return `Loading...`;
        }
        return `${this.props.stream.description}`
    };

    onCancel(){
        return history.push('/');
    };
    
    onDelete = () => {
        const id = this.props.match.params.id;
        return this.props.deleteStream(id);
    }

    renderActions() {
        // const id = this.props.match.params.id;
        return(
            <React.Fragment>
                <button className="modal-btn modal-delete" onClick={this.onDelete}>Delete</button>
                {/* <button className="modal-btn modal-delete" onClick={() => this.props.deleteStream(id)}>Delete</button> */}
                <button className="modal-btn modal-cancel" onClick={this.onCancel}>Cancel</button>
            </React.Fragment>
        );
    };

    render(){
        return(
            <div>
                <Modal
                    title="Delete Stream"
                    desc="Are you sure, that you want to delete this stream?"
                    streamTitle={this.renderTitle()}
                    StreamDesc={this.renderDesc()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return(
        {stream: state.streams[ownProps.match.params.id]}
    );
}
// ownProps - access to propeties of current component
// ownProps - have to be passed as an argument to mapStateToProps
// props.match.params.id - are reflected from browser router
export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);