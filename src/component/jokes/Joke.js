import React from 'react';
import { 
    Card, 
    CardBody, 
    CardTitle, 
    Button, 
    Fade, 
    CardText 
} from 'reactstrap';
import './App.css';

class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
      }

    render() {
        let { setup, punchline, src } = this.props.humor;
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{setup}</CardTitle>
                        <Button color="primary" onClick={this.toggle}>Laugh</Button>
                        <Fade in={this.state.fadeIn} className='my-2'>
                            <CardText>{punchline}</CardText>
                        </Fade>
                        <img src={src} style={{width: "100%", height: "100%"}} />
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

export default Joke;