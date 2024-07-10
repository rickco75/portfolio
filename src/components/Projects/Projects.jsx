import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Projects = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const skillsStyle = {
    padding: '0 20px',
    marginBottom: '20px',
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333',
  };

  const skillsListStyle = {
    paddingLeft: '20px',
    listStyleType: 'disc',
  };

  const descriptionStyle = {
    marginBottom: '20px',
  };

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Skills" />
          <Row>
            <Col lg={12} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <div style={skillsStyle}>
                    <ul style={skillsListStyle}>
                      <li>TypeScript</li>
                      <li>Node.js</li>
                      <li>React</li>
                      <li>GraphQL</li>
                      <li>MS SQL</li>
                      <li>Postgres</li>
                      <li>MongoDB</li>
                      <li>HTML & CSS</li>
                      <li>SQLite</li>
                      <li>DynamoDB</li>
                      <li>MySQL</li>
                      <li>AWS - Amplify, AppSync</li>
                      <li>Wrike</li>
                      <li>Git, GitLab</li>
                      <li>Visual Studio Code</li>
                      <li>Agile Project Management</li>
                      <li>ORM - Objection, Prisma, TypeORM</li>
                      <li>Mocha, Jest, Cypress</li>
                      <li>New Relic</li>
                      <li>Apollo Server, Apollo Federation</li>
                      <li>Docker</li>
                    </ul>
                  </div>
                  <div style={descriptionStyle}>
                    <Row>
                      <Col md={6}>
                        <p>Extensive experience with large and complex distributed architectures.</p>
                      </Col>
                      <Col md={6}>
                        <p>Managed multiple microservices and used Apollo Federation.</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>Created dashboards with New Relic and wrote unit tests with Mocha.</p>
                      </Col>
                      <Col md={6}>
                        <p>Wrote E2E tests using Cypress for front-end applications.</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>Actively participated in daily standup meetings and sprint planning.</p>
                      </Col>
                      <Col md={6}>
                        <p>Optimized GraphQL queries and mutations for lowest possible latency.</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>Performed load testing using K6 and created detailed documentation in Confluence.</p>
                      </Col>
                      <Col md={6}>
                        <p>Worked with Kafka as a message broker between microservices.</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>Utilized multiple databases including MongoDB, MS SQL Server, and Postgres.</p>
                      </Col>
                      <Col md={6}>
                        <p>Implemented serverless functionality with AWS Amplify, AppSync, DynamoDB, Cognito, and Lambdas.</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>Developed and maintained a GraphQL API using Node.js and Apollo Server.</p>
                      </Col>
                      <Col md={6}>
                        <p>Managed PostgreSQL databases and implemented Role-Based Access Control (RBAC).</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>Integrated frontend with PostgreSQL database through GraphQL API.</p>
                      </Col>
                      <Col md={6}>
                        <p>Developed and maintained microservice architecture focusing on modularity and scalability.</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>Influenced numerous students through teaching and mentorship at Woz-U.</p>
                      </Col>
                      <Col md={6}>
                        <p>Managed significant MSSQL databases and migrated legacy applications to React.</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>Crafted dynamic live dashboards and automated various processes.</p>
                      </Col>
                      <Col md={6}>
                        <p>Optimized databases and participated in weekly agile team meetings.</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>Created comprehensive documentation for various applications.</p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
