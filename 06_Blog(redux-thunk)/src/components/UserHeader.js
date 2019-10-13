import './UserHeader.scss';
import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { fetchUser } from '../actions';

class UserHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId);
    // }

    render() {
        const { user } = this.props;
        
        if(!user) {
            return <div>Loading...</div>;
        }
        return(
            <div className="user-header">
                <figure className="user-header__figure">
                    <img src="https://bit.ly/2YuU0We" alt="authors smile" className="user-header__image"></img>
                    <div className="user-header__name">
                        <span className="user-header__by">by</span> {user.name}
                    </div>
                </figure>
            </div>
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return{
        user: state.users.find( user => user.id === ownProps.userId),
    };
};

export default connect(mapStateToProps, {/*fetchUser: fetchUser*/})(UserHeader);