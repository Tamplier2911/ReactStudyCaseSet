import './PostList.scss';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';    // fetchPosts,

import UserHeader from './UserHeader';

class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        // this.props.fetchPosts();
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map( post => {
            const title = post.title.split(' ').splice(0, 4).join(' ') + '.';
            return(
                <div className="section__post" key={post.id}>
                    <UserHeader userId={post.userId}/>
                    <div className="section__post-content">
                        <h3 className="section__post-title">{title}</h3>
                        <div className="section__post-body">{post.body+'.'}</div>
                        <div className="section__post-timeline">(Last Updated On: June 22, 2019)</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        // console.log(this.props.posts);           ////////////
        this.renderList();
        return(
            <section className="section">

                {this.renderList()}

            </section>
        );
    }
}

const mapStateToProps = state => {
    return { 
        posts: state.posts,
    };
  };

export default connect(mapStateToProps, 
    {fetchPostsAndUsers: fetchPostsAndUsers}
    )(PostList);