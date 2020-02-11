import React from 'react';
import { Jumbotron, Col, Row, Container } from 'reactstrap';
import { Layout } from 'antd';
import './App.css';
import Post from './component/posts/Post';
import Story from './component/story/Story';

const { Header, Content, Footer } = Layout;


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      post: [
        {
          id: "1",
          user: "ardiuna",
          likes: "10",
          userPhoto: "https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=781&q=80",
          location: "PT. Mencari Cinta Sejati",
          photo: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
          caption: "well, this is embarassing"
        },
        {
          id: "2",
          user: "baheera",
          likes: "25",
          userPhoto: "https://images.unsplash.com/photo-1510516863697-99224a43369f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
          location: "PT. Mencari Cinta Sejati",
          photo: "https://source.unsplash.com/qDkso9nvCg0/600x799",
          caption: "por favor"
        },
        {
          id: "3",
          user: "riskaP",
          likes: "90",
          userPhoto: "https://images.unsplash.com/photo-1553524789-71a0231fc533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
          location: "PT. Mencari Cinta Sejati",
          photo: "https://source.unsplash.com/iecJiKe_RNg/600x799",
          caption: "greedisgood"
        },
        {
          id: "4",
          user: "kobebryant_",
          likes: "",
          userPhoto: "https://images.unsplash.com/photo-1485110168560-69d4ac37b23e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          location: "PT. Mencari Cinta Sejati",
          photo: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
          caption: "whosyourdaddy"
        },
        {
          id: "5",
          user: "ardiuna",
          likes: "",
          userPhoto: "https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=781&q=80",
          location: "PT. Mencari Cinta Sejati",
          photo: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
          caption: "imba spirit"
        },
        {
          id: "6",
          user: "riskaP",
          likes: "",
          userPhoto: "https://images.unsplash.com/photo-1553524789-71a0231fc533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
          location: "PT. Mencari Cinta Sejati",
          photo: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
          caption: "expecto patronum"
        },
        {
          id: "7",
          user: "ardiuna",
          likes: "",
          userPhoto: "https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=781&q=80",
          location: "PT. Mencari Cinta Sejati",
          photo: "https://source.unsplash.com/zh7GEuORbUw/600x799",
          caption: "wingardius leviosa"
        },
        {
          id: "8",
          user: "baheera",
          likes: "",
          userPhoto: "https://images.unsplash.com/photo-1510516863697-99224a43369f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
          location: "PT. Mencari Cinta Sejati",
          photo: "https://source.unsplash.com/PpOHJezOalU/800x599",
          caption: "cowabunga"
        },
        {
          id: "9",
          user: "riskaP",
          likes: "",
          userPhoto: "https://images.unsplash.com/photo-1553524789-71a0231fc533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
          location: "PT. Mencari Cinta Sejati",
          photo: "https://source.unsplash.com/I1ASdgphUH4/800x599",
          caption: "culametan met met"
        },
        {
          id: "10",
          user: "riskaP",
          likes: "",
          userPhoto: "https://images.unsplash.com/photo-1553524789-71a0231fc533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
          location: "PT. Mencari Cinta Sejati",
          photo: "https://source.unsplash.com/XiDA78wAZVw/600x799",
          caption: "siganamah dipentaanmah mbungsiamah"
        },
        {
          id: "11",
          user: "baheera",
          likes: "",
          userPhoto: "https://images.unsplash.com/photo-1510516863697-99224a43369f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
          location: "PT. Mencari Cinta Sejati",
          photo: "https://source.unsplash.com/x8xJpClTvR0/800x599",
          caption: "kulisificity"
        }
      ],
      story: [
        {
          id: "1",
          user: "ardiuna",
          storyPic: "https://images.unsplash.com/photo-1527351763580-a632234b2375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        },
        {
          id: "2",
          user: "baheera",
          storyPic: "https://images.unsplash.com/photo-1535928000113-907a4477394c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        },
        {
          id: "3",
          user: "riskaP",
          storyPic: "https://source.unsplash.com/5P91SF0zNsI/740x494"
        },
        {
          id: "4",
          user: "kobebryant_",
          storyPic: "https://images.unsplash.com/photo-1565065984462-ba608fda9ae1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "5",
          user: "rodissay",
          storyPic: "https://images.unsplash.com/photo-1433048980017-63f162f662b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        },
      ],
      top: 0,
    }
  }
  render() {
    let postCard = this.state.post.map(posting => {
      return (
        <Col sm="3" style={{paddingLeft:0, paddingRight:0, paddingTop:0, paddingBottom:"1rem"}}>
          <Post posting={posting} />
        </Col>
      )
    })
    let storyTab = this.state.story.map(storyPost => {
      return (
        <Col sm="3">
          <Story storyPost={storyPost} />
        </Col>
      )
    })
    return (
      <div>
        <Layout className="layout">
          <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#fafafa', paddingLeft: '16px'}} >
            <div className="Nav-brand-logo" />
          </Header>
          <Content style={{ marginTop: 64 }}>
            <Jumbotron >
                <Row className="row-story">
                  {storyTab}
                </Row>
            </Jumbotron>
            <Container fluid>
              <Row>
                {postCard}
              </Row>
            </Container>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>
    );
  }
};

export default App;