import React from 'react';
import { Row, Col } from 'reactstrap';
import './Story.css';

class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        let { user, storyPic } = this.props.storyPost;
        return (
            <Col xs="auto" >
                <Row>
                    <Col className="col-story col-centered">
                        <img src={storyPic} style={{ height: "64px", width: "64px", borderRadius:"100%"}} />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col className="col-story col-centered">
                        { user }
                    </Col>
                </Row>
            </Col>
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};

export default Story;