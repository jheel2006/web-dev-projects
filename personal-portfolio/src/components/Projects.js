import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Adventures of Sleepy Steve",
      description: "An engaging and entertaining approach to improving sleep hygiene",
      imgUrl: projImg1,
      projURL:"https://github.com/jheel2006/jheel2006.github.io/tree/main/30MFF_Website"
    },
    {
      title: "Day in the Life of an NYUAD Cat",
      description: "An interactive web-based comic that takes viwers on a fictional journey through the eyes of a campus cat at NYUAD",
      imgUrl: projImg2,
      projURL:"https://github.com/jheel2006/jheel2006.github.io/tree/main/Interactive_Comic"
    },
    {
      title: "What's Happening at NYUAD?",
      description: "A cinematic and interactive sound design experience that combines real-life scenarios with elements of mystery and science-fiction",
      imgUrl: projImg3,
      projURL:"https://github.com/jheel2006/jheel2006.github.io/tree/main/Sound_Project"
    },
    {
      title: "How to Find a Partner for your Origami Swan?",
      description: "A web-based video project that explores the hypothetical scenario of an origami's romantic escapades ",
      imgUrl: projImg4,
      projURL:"https://github.com/jheel2006/jheel2006.github.io/tree/main/VideoProject"
    },
    {
      title: "Siha Sans Frontières",
      description: "A platform that leverages quantum machine learning to transform healthcare in underrepresented communities",
      imgUrl: projImg5,
      projURL:"https://github.com/jheel2006/Siha-Sans-Frontieres"
    },
    {
      title: "Leap Ninja",
      description: "A user-friendly Python based gaming experience where players guide a ninja on an upward ascent while navigating a challenging landscape of platforms and obstacles",
      imgUrl: projImg6,
      projURL: "https://github.com/jheel2006/Leap-Ninja"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In my projects section, you'll find a collection of work that represents my passion for innovation, problem-solving and commitment to delivering high-quality solutions. From building websites to tackling complex algorithms, each project is a chance for me to push boundaries, learn invaluable lessons and ultimately, make a tangible impact.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}                                
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Future projects will be added here!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Future projects will be added here!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
