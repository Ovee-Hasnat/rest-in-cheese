import React, { Component } from "react";
import { Form, Button, Input } from 'reactstrap';



class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            comment: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        this.props.addComment(this.props.dishId, this.state.author, this.state.comment);
        this.setState({
            author: '',
            comment: '',
        })
        event.preventDefault();
    }


    render() {
        //console.log(this.props)
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    name="author"
                    value={this.state.author}
                    placeholder="Your Name"
                    onChange={this.handleInputChange}
                    required
                />
                <br />
                <Input
                    type="textarea"
                    name="comment"
                    value={this.state.comment}
                    placeholder="Your comment"
                    onChange={this.handleInputChange}
                    required />
                <br />
                <Button
                    type="submit">Submit Comment</Button>
            </Form>
        )
    }
}

export default CommentForm;