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

  const sectionTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const skillsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    fontSize: '16px',
  };

  const skillsBlockStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    backgroundColor: '#f5f5f5',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
  };

  const skillsItemStyle = {
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: '#e0f7fa',
    color: '#00796b',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
  };

  const descriptionRowStyle = (index) => ({
    backgroundColor: index % 2 === 0 ? '#e6f7ff' : '#fff3e6',
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

  const workSummaries = [
    'Led the development of Mastery Logistics Systems’ Transportation Management System, managing microservices with Apollo Federation and Kafka.',
    'Developed scalable GraphQL APIs using Node.js and Apollo Server at 4th Down Solutions, integrating AWS services and PostgreSQL.',
    'Mentored students at Woz-U, helping them master web technologies.',
    'Streamlined web applications and internal systems for C&H Construction, leading a small development team.',
    'Migrated legacy ColdFusion applications to React at Lipsey Logistics and optimized database systems for improved performance.',
    'Spearheaded eCommerce growth through development and optimization efforts at Visiture.',
    'Contributed to ColdFusion projects and database operations at UPS Corporate Headquarters, improving application performance.'
  ];

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Skills" />
          <Row>
            <Col lg={12} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div style={skillsContainerStyle}>
                  <div>
                    <div style={sectionTitleStyle}>Programming Languages & Frameworks:</div>
                    <div style={skillsBlockStyle}>
                      <span style={skillsItemStyle}>TypeScript</span>
                      <span style={skillsItemStyle}>React</span>
                      <span style={skillsItemStyle}>GraphQL</span>
                      <span style={skillsItemStyle}>ColdFusion</span>
                      <span style={skillsItemStyle}>HTML</span>
                      <span style={skillsItemStyle}>CSS</span>
                    </div>
                  </div>
                  <div>
                    <div style={sectionTitleStyle}>Databases:</div>
                    <div style={skillsBlockStyle}>
                      <span style={skillsItemStyle}>MS SQL</span>
                      <span style={skillsItemStyle}>Postgres</span>
                      <span style={skillsItemStyle}>MongoDB</span>
                      <span style={skillsItemStyle}>SQLite</span>
                      <span style={skillsItemStyle}>DynamoDB</span>
                      <span style={skillsItemStyle}>MySQL</span>
                    </div>
                  </div>
                  <div>
                    <div style={sectionTitleStyle}>Cloud & DevOps:</div>
                    <div style={skillsBlockStyle}>
                      <span style={skillsItemStyle}>AWS (Amplify, AppSync)</span>
                      <span style={skillsItemStyle}>Docker</span>
                      <span style={skillsItemStyle}>Kubernetes</span>
                      <span style={skillsItemStyle}>AKC</span>
                      <span style={skillsItemStyle}>Git / GitLab</span>
                      <span style={skillsItemStyle}>Visual Studio Code</span>
                    </div>
                  </div>
                  <div>
                    <div style={sectionTitleStyle}>Testing & Monitoring:</div>
                    <div style={skillsBlockStyle}>
                      <span style={skillsItemStyle}>Mocha</span>
                      <span style={skillsItemStyle}>Jest</span>
                      <span style={skillsItemStyle}>Cypress</span>
                      <span style={skillsItemStyle}>K6</span>
                      <span style={skillsItemStyle}>New Relic</span>
                      <span style={skillsItemStyle}>Grafana</span>
                      <span style={skillsItemStyle}>Lens</span>
                    </div>
                  </div>
                  <div>
                    <div style={sectionTitleStyle}>Project Management & Collaboration:</div>
                    <div style={skillsBlockStyle}>
                      <span style={skillsItemStyle}>Agile Project Management</span>
                      <span style={skillsItemStyle}>Wrike</span>
                      <span style={skillsItemStyle}>JIRA (JQL)</span>
                      <span style={skillsItemStyle}>Confluence</span>
                      <span style={skillsItemStyle}>PagerDuty</span>
                    </div>
                  </div>
                  <div>
                    <div style={sectionTitleStyle}>APIs & Back-End Technologies:</div>
                    <div style={skillsBlockStyle}>
                      <span style={skillsItemStyle}>Apollo Server</span>
                      <span style={skillsItemStyle}>Apollo Federation</span>
                      <span style={skillsItemStyle}>Kafka</span>
                      <span style={skillsItemStyle}>Node.js</span>
                    </div>
                  </div>
                  <div>
                    <div style={sectionTitleStyle}>Feature Management:</div>
                    <div style={skillsBlockStyle}>
                      <span style={skillsItemStyle}>LaunchDarkly (Feature Flags)</span>
                    </div>
                  </div>
                  <div>
                    <div style={sectionTitleStyle}>ORM:</div>
                    <div style={skillsBlockStyle}>
                      <span style={skillsItemStyle}>Objection</span>
                      <span style={skillsItemStyle}>Prisma</span>
                      <span style={skillsItemStyle}>TypeORM</span>
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          <Title title="Work History Summary" />
          <Row>
            <Col lg={12} sm={12}>
              {workSummaries.map((summary, index) => (
                <Fade key={index} left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                  <Row style={descriptionRowStyle(index)}>
                    <Col>
                      <p style={descriptionTextStyle}>{summary}</p>
                    </Col>
                  </Row>
                </Fade>
              ))}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;