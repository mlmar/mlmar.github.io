const mail = "martinezmarcus240@gmail.com";
const git = "github.com/mlmar";
const linkedin = "linkedin.com/in/martinez-marcus";

const About = () => {
  return (
    <header className="about">
      <div className="img-wrapper logo">
        <img src="/images/m.ico"/>
      </div>
      <p> 
        <Bold>Hi I'm Marcus</Bold>. I graduated from <Bold href="https://ucsd.edu/">UCSD</Bold> and I'm currently a software engineer at <Bold href="https://www.home.neustar/">Neustar</Bold>.
      </p>
      <section className="info">
        <a href={"mailto:" + mail}> <div className="img-wrapper"> <img src="/images/mail.png"/> </div> <span> {mail} </span> </a>
        <a href={"https://" + git}> <div className="img-wrapper"> <img src="/images/github.png"/> </div> <span> {git} </span> </a>
        <a href={"https://" + linkedin}> <div className="img-wrapper"> <img src="/images/linkedin.png"/> </div>  <span> {linkedin} </span></a>
      </section>
    </header>
  )
}

const Bold = ({ children, href }) => {
  return href ?
    <a className="bold" href={href}>{children}</a>
    :
    <span className="bold">{children}</span>
}

export default About;