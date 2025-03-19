import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaPython } from 'react-icons/fa';
import { SiTypescript } from "react-icons/si";

export default function Resume() {
    return (
      <div className="container mt-5 text-center">
        <h2>Resume</h2>
        <a href="/src/assets/Leland Programing resume.pdf" className="btn btn-primary my-3" download>
          Download My Resume
        </a>
        <div className="row">
          <div className="col-md-6">
            <h3>Frontend Skills</h3>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <div className="text-center">
                <FaHtml5 size={50} color="#E44D26" />
                <p>HTML</p>
              </div>
              <div className="text-center">
                <FaCss3Alt size={50} color="#1572B6" />
                <p>CSS</p>
              </div>
              <div className="text-center">
                <FaJs size={50} color="#F7DF1E" />
                <p>JavaScript</p>
              </div>
              <div className="text-center">
                <FaReact size={50} color="#61DAFB" />
                <p>React</p>
              </div>
              <div className="text-center">
                <SiTypescript size={50} color="#3178C6" />
                <p>TypeScript</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Backend Skills</h3>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <div className="text-center">
                <FaNodeJs size={50} color="#83CD29" />
                <p>Node.js</p>
              </div>
              <div className="text-center">
                <FaDatabase size={50} color="#4479A1" />
                <p>SQL</p>
              </div>
              <div className="text-center">
                <FaPython size={50} color="#3776AB" />
                <p>Python</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
