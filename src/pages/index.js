import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from "gatsby-image"
import AOS from 'aos'
import TagList from '../components_new/Tags'
import Timeline from '../components_new/Timeline'
import 'aos/dist/aos.css';
import styles from './css/index.module.css'
import '../styles/font-awesome/all.css'


const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbarLinks}>
        <div><a href="#about" className={styles.link}>About</a></div>
        <div><a href="#experience" className={styles.link}>Experience</a></div>
        <div><a href="/resume.pdf" className={styles.link}>Resume</a></div>
      </nav>
    </div>
  )
}

const Divider = ({ handleScroll }) => {
  return (
    <div className={styles.divider}
      onClick={handleScroll}
      data-aos="fade-up"
      data-aos-anchor="#header"
      data-aos-delay="500">
      <div></div>
      <div></div>
    </div>
  )
}

class Index extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      offset: 500,
      once: true,
    })
  }

  handleScroll(evt) {
    evt.preventDefault()
    window.scrollTo({ left: 0, top: window.pageYOffset + window.innerHeight, behavior: 'smooth'})
  }

  render() {
    const { data, location } = this.props
    const { github, linkedin } = data.site.siteMetadata.social

    return (
      <div>
        <Navbar />
        <div className={styles.layout}>
          <div className={styles.container}>
            <header id="header" className={styles.header}>
              <div
                className={styles.headerPretext}
                data-aos="fade-up"
                data-aos-anchor="#header">
                Hi, my name is
              </div>
              <h1
                className={styles.headerMain}
                data-aos="fade-up"
                data-aos-anchor="#header"
                data-aos-delay="100"
              >
                Roland Zhou
              </h1>
              <div
                className={styles.headerDescription}
                data-aos="fade-up"
                data-aos-anchor="#header"
                data-aos-delay="200"
              >
              I'm a software engineer based in New York City specializing in building Machine Learning driven systems and scalable applications.</div>
              <div className={styles.headerNav}
                data-aos="fade-up"
                data-aos-anchor="#header"
                data-aos-delay="350">
                <a href={linkedin}>
                  <div className={styles.wrapper}>
                    <span>
                      <i className="fab fa-linkedin-in"></i>
                    </span>
                  </div>
                </a>
                <a href={`https://github.com/${github}`}>
                <div className={styles.wrapper}>
                  <span>
                    <i className="fab fa-github"></i>
                  </span>
                </div>
                </a>
                <a href="#">
                  <div className={styles.wrapper}>
                    <span>
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </a>
              </div>
              <div className={styles.buttonContainer}>
                <div className={styles.button}
                  data-aos="fade-up"
                  data-aos-anchor="#header"
                  data-aos-delay="350">
                  <a href="#about" onClick={evt => this.handleScroll(evt)}>Tell Me More</a>
                </div>
              </div>
            </header>

            <section
              id="about"
              className={styles.about}>
              <div className={styles.aboutContainer}>
                <div className={styles.aboutText}>
                  <h2
                    data-aos="fade-up"
                    data-aos-anchor="#about"
                    data-aos-delay="200">
                    About
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-anchor="#about"
                    data-aos-delay="300">Hello! I'm Roland, a software engineer based in New York City who enjoys building scalable data driven and AI enabled systems.</p>
                  <p
                    data-aos="fade-up"
                    data-aos-anchor="#about"
                    data-aos-delay="400">
                    After graduating from <span style={{ color: 'Dodgerblue', fontWeight: 500 }}>Columbia University</span>, I joined the Cognitive Computing team at <span style={{ color: 'Dodgerblue', fontWeight: 500}}>FactSet</span>, where I apply machine learning to language and text related problems. My projects have been in the realm of entity recognition and disambiguation, as well as information retrieval.</p>
                  <p
                    data-aos="fade-up"
                    data-aos-anchor="#about"
                    data-aos-delay="500">When I'm not writing code, I like trying new cooking recipes, weight lifting, and traveling. When I am coding, I typically work with:</p>
                  <p
                    data-aos="fade-up"
                    data-aos-anchor="#about"
                    data-aos-delay="500">
                  </p>
                  <ul
                    data-aos="fade-up"
                    data-aos-anchor="#about"
                    data-aos-delay="600">
                    <TagList tags={['Python', 'Javascript (ES6+)', 'Go', 'PyTorch', 'React', 'Node.js', 'Docker', 'AWS']} withLabel={false} />
                  </ul>
                </div>
                <div className={styles.aboutImage}>
                  <Image
                    fixed={data.avatar.childImageSharp.fixed}
                    alt={"Me"}
                    fadeIn={true}
                  />
                </div>
              </div>
              <Divider handleScroll={evt => this.handleScroll(evt)} />
            </section>
            <section id="experience" className={styles.experience}>
              <Timeline
                events={['FactSet1', 'FactSet2', 'Uni1', 'UHS']}
                descriptions={{
                  FactSet1: {
                    title: 'ML Engineer',
                    company: 'FactSet',
                    dates: 'Jan 2019 - Present',
                    description: 'Develop machine learning models to tackle a variety of NLP problems. Working on problems related to entity recognition and information retrieval (relevance ranking, search etc.). Scale services to improve content pipelines which deliver millions of dollars in ASV.'
                  },
                  FactSet2: {
                    title: 'ML Intern',
                    company: 'FactSet',
                    dates: 'May - Aug 2018',
                    description: 'Developed and deployed a real-time document retrieval system over millions of internal system tickets. Delivered as a proof of concept that would erase manual overhead for client support consultants when engaging with customers.'
                  },
                  ['Uni1']: {
                    title: 'Data Analytics Intern',
                    dates: 'Jan - May 2016',
                    company: 'Binghamton',
                    description: 'Created scripts to automate various manual data processing workflows. Performed statistical analysis over anonymized student data to determine causal factors of academic probation and other educational planning related questions.'
                  },
                  UHS: {
                    title: 'Engineer Intern',
                    dates: 'Sep - Dec 2015',
                    company: 'UHS',
                    description: 'Developed a dashboard and CRUD application to automate monitoring of patients undergoing cardiac rehab. Communicated with nurses, gathered requirements and followed an agile process to deliver a product which reduced paperwork and manual data entry significantly.'
                  },
                }}
              />
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          github
          linkedin
        }
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic-cropped.jpg/" }) {
      childImageSharp {
        fixed(width: 350, height: 350, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
