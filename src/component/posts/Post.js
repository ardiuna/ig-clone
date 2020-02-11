import React from 'react';
import { 
    Card, 
    CardBody, 
    CardTitle,
    CardText,
    Col,
    Row
} from 'reactstrap';
import './Post.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
      }

    render() {
        let { user, userPhoto, likes, location, photo, caption } = this.props.posting;
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <Row>
                                <Col xs="3">
                                    <img src={userPhoto} style={{width: "58px", height: "58px", borderRadius: "100%"}} />
                                </Col>
                                <Col xs="9">
                                    <Row>
                                        <Col className="font-weight-bold" xs="12" style={{marginBottom: "5px", marginTop: "5px"}}>
                                            {user}
                                        </Col>
                                        <Col xs="12">
                                            {location}
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CardTitle>
                        <img src={photo} style={{width: "100%", height: "100%"}} />
                        <Row className="mt-1 row-post">
                            <Col xs="1">
                                <div className="logo-like" />
                            </Col>
                            <Col xs="1">
                                <div className="logo-komen" />
                            </Col>
                            {/* <Col xs="1">
                                <div className="logo-share" />
                            </Col> */}
                            <Col xs={{size : 1, offset: 8}} style={{marginLeft: "71%"}}>
                                <div className="logo-bookmark" />
                            </Col>
                        </Row>
                        <Row className="mt-1 row-post">
                            <Col xs="auto">
                                <CardText className="font-weight-bold">{user}</CardText>
                            </Col>
                            <Col xs="auto">
                                <CardText>{caption}</CardText>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }

    toggle() {
        this.setState({
          fadeIn: !this.state.fadeIn
        });
    }
};

export default Post;