export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto text-center">
          <h1>About Me</h1>
          <div className="about-image">
            <img src="src\assets\20240908_135442.jpg" alt="Profile"
            style={{
            width: '300px',
            height: '300px',
            objectFit: 'cover'
            }} />
    </div>
          <p className="lead">
            Hello, my name is Leland Mitchell. I am an aspiring full-stack web developer with a passion for creating and designing websites.
          </p>
          <p>
            I am currently enrolled in Michigan State's full stack coding bootcamp. I have experience with HTML, CSS, JavaScript, Node.js, Express.js, MySQL, Python, and React.js.
          </p>
        </div>
      </div>
    </div>
  );
}