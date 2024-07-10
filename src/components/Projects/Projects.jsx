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

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Skills" />
          <Row>
            <Col lg={12} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <div>
                    <p>
                      <ul>
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
                    </p>
                    <p>
                      <ul>
                        <li>Extensive experience with large and complex distributed architectures.</li>
                        <li>Managed multiple microservices and used Apollo Federation.</li>
                        <li>Created dashboards with New Relic and wrote unit tests with Mocha.</li>
                        <li>Wrote E2E tests using Cypress for front-end applications.</li>
                        <li>Actively participated in daily standup meetings and sprint planning.</li>
                        <li>Optimized GraphQL queries and mutations for lowest possible latency.</li>
                        <li>Performed load testing using K6 and created detailed documentation in Confluence.</li>
                        <li>Worked with Kafka as a message broker between microservices.</li>
                        <li>Utilized multiple databases including MongoDB, MS SQL Server, and Postgres.</li>
                        <li>Implemented serverless functionality with AWS Amplify, AppSync, DynamoDB, Cognito, and Lambdas.</li>
                        <li>Developed and maintained a GraphQL API using Node.js and Apollo Server.</li>
                        <li>Managed PostgreSQL databases and implemented Role-Based Access Control (RBAC).</li>
                        <li>Integrated frontend with PostgreSQL database through GraphQL API.</li>
                        <li>Developed and maintained microservice architecture focusing on modularity and scalability.</li>
                        <li>Influenced numerous students through teaching and mentorship at Woz-U.</li>
                        <li>Managed significant MSSQL databases and migrated legacy applications to React.</li>
                        <li>Crafted dynamic live dashboards and automated various processes.</li>
                        <li>Optimized databases and participated in weekly agile team meetings.</li>
                        <li>Created comprehensive documentation for various applications.</li>
                      </ul>
                    </p>
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
