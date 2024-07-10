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

  const descriptionRowStyle = (index) => ({
    backgroundColor: index % 2 === 0 ? '#e6f7ff' : '#fff3e6',  // Vibrant alternating colors
    padding: '10px 20px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #d9d9d9',
  });

  const descriptionTextStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333',
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
                  {[
                    'Managed various teams of developers and led daily standups.',
                    'Ensured excellent code quality avoiding tech debt.',
                    'Utilized SCRUM and other agile project management.',
                    'Maintained excellent communication between all teams and stakeholders.',
                    'Extensive experience with large and complex distributed architectures.',
                    'Managed multiple microservices and used Apollo Federation.',
                    'Created dashboards with New Relic and wrote unit tests with Mocha.',
                    'Wrote E2E tests using Cypress for front-end applications.',
                    'Actively participated in daily standup meetings and sprint planning.',
                    'Optimized GraphQL queries and mutations for lowest possible latency.',
                    'Performed load testing using K6 and created detailed documentation in Confluence.',
                    'Worked with Kafka and various other message brokers to communicate between different distributed microservices.',
                    'Utilized multiple databases including MongoDB, MS SQL Server, and Postgres.',
                    'Implemented serverless functionality with AWS Amplify, AppSync, DynamoDB, Cognito, and Lambdas.',
                    'Developed and maintained a GraphQL API using Node.js and Apollo Server.',
                    'Managed PostgreSQL databases and implemented Role-Based Access Control (RBAC).',
                    'Integrated frontend with PostgreSQL database through GraphQL API.',
                    'Developed and maintained microservice architecture focusing on modularity and scalability.',
                    'Influenced numerous students through teaching and mentorship at Woz-U.',
                    'Managed significant MSSQL databases and migrated legacy applications to React.',
                    'Crafted dynamic live dashboards and automated various processes.',
                    'Optimized databases and participated in weekly agile team meetings.',
                    'Created comprehensive documentation for all aspects of the Software Development Lifecycle and company architecture.',
                  ].map((description, index) => (
                    <Fade key={index} left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                      <Row style={descriptionRowStyle(index)}>
                        <Col>
                          <p style={descriptionTextStyle}>{description}</p>
                        </Col>
                      </Row>
                    </Fade>
                  ))}
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
