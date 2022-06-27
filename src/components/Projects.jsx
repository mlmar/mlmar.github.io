import data from "../data/Projects.json";

const Projects = () => {
  return (
    <section className="projects">
      <h2> Some of my projects </h2>
      {data.map((p, i) => <Project {...p} key={i}/>)}
      <a className="repo" href="https://github.com/mlmar.github.io">
        <div className="img-wrapper">
          <img src="/images/github.png" alt="Github"/> 
        </div>
        View the repo for this website 
      </a>
    </section>
  )
}

const Project = (props) => {
  const { title, description, uri, github, imgUri, imgPath, stack } = props;
  return (
    <article className="project">
      <a className="img-wrapper" href={uri}> <img src={imgUri || imgPath} alt={uri}/> </a>
      <div className="description">
        <h3> 
          {title} 
          {github && <a className="git img-wrapper" href={github}> <img src="/images/github.png" alt="Github"/> </a>}
        </h3>
        <p> {description} </p>
        <div>
          {stack.map((s) => <label className="stack gray" key={s}> {s} </label>) }
        </div>
      </div>
    </article>
  )
}

export default Projects;