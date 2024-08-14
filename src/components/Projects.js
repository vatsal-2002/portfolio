import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Calendly Clone",
      description: "Complete Design & Development",
      imgUrl: "https://cdn.mos.cms.futurecdn.net/W3yFiCjbmPia2u3qk9kKci.jpg",
      link: "https://github.com/vatsal-2002/meetingschedular",
    },
    {
      title: "E-Learning",
      description: "Complete Backend development",
      imgUrl: "https://static.wixstatic.com/media/65246d_c7bd3ba476fb4191af59a11494ad027f~mv2.jpg/v1/fill/w_600,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/65246d_c7bd3ba476fb4191af59a11494ad027f~mv2.jpg",
      link: "https://github.com/vatsal-2002/online-Learning",
    },
    {
      title: "online-Meal",
      description: "Static Design & Development",
      imgUrl: "https://media.assettype.com/analyticsinsight/import/wp-content/uploads/2021/04/Online-Food-Delivery.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
      link: "https://online-meal-rho.vercel.app/",
    },
    {
      title: "Dice Game",
      description: "Static Design & Development",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSm3fJ74IzWy46MpeEq4agdUjIJ_wZ0Y4CTg&s",
      link: "https://react-projects-rust.vercel.app/",
    },
    {
      title: "To-DO-LIST",
      description: "Static Design & Development",
      imgUrl: "https://media.istockphoto.com/id/1193476717/photo/male-hands-making-a-to-do-list-in-a-notebook-over-an-office-desk.webp?b=1&s=170667a&w=0&k=20&c=p7MUCCTnL9eCmBr0FEBNs_4GFPg7yniFVz3m94k5OQQ=",
      link: "https://github.com/vatsal-2002/To-Do-List",
    },
    {
      title: "QUIZ-APPLICATION",
      description: "Static Design & Development",
      imgUrl: "https://d1ymz67w5raq8g.cloudfront.net/Pictures/480xany/6/5/5/509655_shutterstock_1506580442_769367.jpg",
      link: "https://github.com/vatsal-2002/Quize-application",
    }
  ];

  const handleProjectClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>In this all project, I applied my skills in HTML, CSS, JavaScript, React, Node.js, Express.js, API design, and MySQL. Each project helped me deepen my understanding and practical experience with these technologies.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={project.link ? () => handleProjectClick(project.link) : undefined}
                              />
                            );
                          })}
                        </Row>
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
  );
};
