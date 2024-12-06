import React from 'react';
import axios from 'axios';
import styles from "./styles/homepage.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "./resources/images/AndysConcrete/sideWalkDemoStart.jpg",
        "./resources/images/AndysConcrete/sideWalkDemoFirstMiddle.jpg",
        "./resources/images/AndysConcrete/sideWalkDemoSecondMiddle.jpg",
        "./resources/images/AndysConcrete/sideWalkDemoFirstFinal.jpg",
        "./resources/images/AndysConcrete/sideWalkDemoFinalFinal.jpg"
      ],
      email: '',
      message: '',
      files: [],
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleMultiImageUpload = this.handleMultiImageUpload.bind(this);
    this.sendClientEmail = this.sendClientEmail.bind(this);
  }

  handleTextChange(event) {
    let stateTarget = event.target.id;
    let value = event.target.value;
    this.setState({ [stateTarget]: value });
    console.log(this.state);
  }

  handleMultiImageUpload(event) {
    console.log(event);
  }

  // sendClientEmail(event) {
  //   axios.post('/email', {
  //     email: this.state.email,
  //     message: this.state.message,
  //     files: 'this.files'
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // }

  render() {
    return (
      <div >
        <p> yo 2</p>
        <div className={styles.body}>
          <header>
            <div className="primer-content">
              <h1>David Cruz</h1>
            </div>
            <nav>
              <a className="nav-item" href="/comingSoon/index.html" target="_blank">Comming soon....</a>
              <a className="nav-item" href="../contactMe/index.html">Contact Page</a>
            </nav>
          </header>
          <div className="main-content">
            <h2 className="specialty">Senior Software Engineer</h2>
            <h3>PROFESSIONAL EXPERIENCE</h3>
            <div className="context">
              {/* <!-- grid, give plenty of space to the first item ".project" --> */}
              <p className="company"><b>Humana</b></p>
              <p className="location">Remote</p>
              <p className="title"><i>Senior Software Engineer</i></p>
              <p className="duration">2022 - Current</p>
            </div>
            <ul>
              <li>Architected Next.js application in 3 months to then immediately authors 10 web pages</li>
              <li>Coordinated directly with business weekly to direct development, and polish story details</li>
              <li>Crafted and documented 11 AEM Headful and 16 Headless custom components</li>
              <li>Managed 8 offshore resources establishing governance for best coding practices</li>
              <li>Integrated Vue and 17  proprietary npm packages into a Headful AEM service</li>
              <li>Responsible for reviewing merge requests from 10 developers</li>
            </ul>

            <div className="context">
              {/* <!-- grid, give plenty of space to the first item ".project" --> */}
              <p className="company"><b>Contractor at Humana</b></p>
              <p className="location">Remote</p>
              <p className="title"><i>Frontend Engineer</i></p>
              <p className="duration">2021 - 2022</p>
            </div>
            <ul>
              <li>Fabricated 40 hours of Frontend stories from scratch with business prompts to outline the development path</li>
              <li>Delivered knowledge transfer weekly to 3 other engineers to assure best practices and standards</li>
              <li>Researched daily and aligned our team weekly with ADA and brand requirements to assure </li>
              <li>Lead the development of 2 frameworkless single page application implementing mapbox</li>
              <li>Performed 1 interview a month with soft skills and hard skills in mind including a code challenge to build my team</li>
            </ul>

            <div className="context">
              {/* <!-- grid, give plenty of space to the first item ".project" --> */}
              <p className="company"><b>Cimarron Lumber and Supply</b></p>
              <p className="location">Kansas City MO</p>
              <p className="title"><i>Full Stack Developer</i></p>
              <p className="duration">2021 - 2021</p>
            </div>
            <ul>
              <li>Learned PHP and Laravel in 2 weeks, deploying an application 3 weeks later</li>
              <li>Spearheaded the companies first docker solution resulting in the companies first training portal</li>
              <li>Conceived then delivered 2 applications within 3 months with unfamiliar tools (Laravel, and Vue)</li>
            </ul>

            <div className="context">
              {/* <!-- grid, give plenty of space to the first item ".project" --> */}
              <p className="company"><b>Entry level work</b></p>
              <p className="location">Atchison KS and Kansas City MO</p>
              <p className="title"><i>Full Stack Developer</i></p>
              <p className="duration">2012 - 2020</p>
            </div>

            <div className="context">
              {/* <!-- grid, give plenty of space to the first item ".project" --> */}
              <p className="company"><b>CellShock Repairs</b></p>
              <p className="location">Atchison KS</p>
              <p className="title"><i>CEO</i></p>
              <p className="duration">2012 - 2015</p>
            </div>
            <ul>
              <li>Contracted with 6 other business owners to serve one another in a symbiotic relationship</li>
              <li>Met with 3 customers a day to educate, buy sell and process devices like iPhones, PlayStations, and laptops</li>
              <li>Researched, and developed processes to reduce overhead by 90% in some cases</li>
            </ul>

            <section className="se-projects">
              <h3>SOFTWARE ENGINEERING PROJECTS</h3>
              <div className="context">
                {/* <!-- grid, give plenty of space to the first item ".project" --> */}
                <p className="project"><b>Centerwell Marketing</b></p>
                <p className="responsibility"><i>Frontend Lead</i></p>
                <p className="utilities">Next, TS, GraphQL, NPM, Next.js, AEM</p>
              </div>
              <ul>
                <summary>Architected the entire frontend approach to a marketing campaign</summary>
                <li>Drafted technical approach to support authoring and developing of 16 components</li>
                <li>Applied agile workflow to deliver on 10 pages in 3 months to clinch the cancelation of an expensive contract</li>
                <li>Researched, and developed processes to reduce overhead by 90% in some cases</li>
              </ul>

              <div className="context">
                {/* <!-- grid, give plenty of space to the first item ".project" --> */}
                <p className="project"><b>AEM Foundation</b></p>
                <p className="responsibility"><i>Full Stack Lead</i></p>
                <p className="utilities">Vue, JavaScript, AEM, Java, ADO, GraphQL, NPM, TS, Next.js, Webpack, GitHub</p>
              </div>
              <ul>
                <summary>Lead a team of engineers to enhance and develop components in a headful AEM application for a year</summary>
                <li>Owned POCs and Spike stories once a month to document, and establish standards</li>
                <li>Curated stories to lead 4 frontend engineers to pick up and develop during offshore hours</li>
                <li>Delivered production level code daily to resolve stories, and bugs to provide enhancements and features</li>
              </ul>

              <div className="context">
                {/* <!-- grid, give plenty of space to the first item ".project" --> */}
                <p className="project"><b>Nucleus Liaison</b></p>
                <p className="responsibility"><i>Frontend Lead</i></p>
                <p className="utilities">Nucleus, Headless / Headful AEM 6.3, Content Fragments, lit, React, Typescript, Vue</p>
              </div>
              <ul>
                <summary>Onboard new teams and team members to the nuances and documentation involving proprietary npm packages</summary>
                <li>Integrated lit/react, and Nucleus form groups to allow for dynamic form system to be created</li>
                <li>Used future goals to help determine which path forward would server our stakeholders the best</li>
                <li>Detailed stories to align 3 engineers on 40 hours of story points every week for 6 months</li>
              </ul>
            </section>

            <div >
              <section className="technical-skills">
                <h4>Technical Skills</h4>
                <div className="dedication">
                  <p><b>Frontend</b></p>
                  <p>React, Vue, Bootstrap, CoreUI, Webpack, Bable, Bluebird, CORS, Moment, HTML5, CSS3, SASS,  C3, jQuery, Next.js, D3, service workers, Progressive Web Apps, CoralUI</p>
                </div>
                <div className="dedication">
                  <p><b>Back End</b></p>
                  <p>RESTfulAPI, Node.js, Express, XAMPP, Mongoose, Maria, Eloquent, PostgreSQL, MySQL, Sequelize, MongoDB, Cassandra, Path, Putty</p>
                </div>
                <div className="dedication">
                  <p><b>Languages & Tools</b></p>
                  <p>Adobe Experience Manager (Headless & Headful), Maven, JavaScript( ES5, ES6+), PHP, Laravel, Composer, VS Code, artisan, npm, WSL, Mocha, Chia, Jest, Puppeteer, Enzyme, AWS-EC2, Git, Docker, git lab, Azure DevOps, Mapbox, GraphQL, PowerPoint, Word, Sheets</p>
                </div>
              </section>
              <section className="education">
                <h4>Education</h4>
                <div className="dedication">
                  <p><b>AEM Tech Courses</b></p>
                  <p>2023 - 2024</p>
                </div>
                <div className="dedication">
                  <p><b>Hack Reactor Software Engineering Immersive</b></p>
                  <p>2020 - 2020</p>
                </div>
                <div className="dedication">
                  <p><b>Wichita State University</b></p>
                  <p>2013 - 2014</p>
                </div>
                <div className="dedication">
                  <p><b>Highland Community College</b></p>
                  <p>2012 - 2013</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;