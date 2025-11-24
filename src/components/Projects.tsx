import projects from '../data/Projects.json';

type ProjectProps = {
    title: string;
    description?: string;
    uri: string;
    github?: string;
    imgUri?: string;
    imgPath?: string;
    stack: string[];
    compact?: boolean;
};

/**
 * Project section returns a list of projects by reading from Projects.json config
 */
export const Projects = () => {
    return (
        <section className='projects'>
            <h2> Some of my projects </h2>
            {renderProjects(projects.primary)}

            <h2> Mini Games </h2>
            <div className='secondary-projects'>{renderProjects(projects.secondary)}</div>

            <a className='repo' href='https://github.com/mlmar/mlmar.github.io'>
                <div className='img-wrapper'>
                    <img src='/images/github.png' alt='Github' />
                </div>
                View the repo for this website
            </a>
        </section>
    );
};

function renderProjects(projects: ProjectProps[], compact = false) {
    return projects.map((project) => <Project {...project} compact={compact} key={project.uri} />);
}

const Project = (props: ProjectProps) => {
    const { title, description, uri, github, imgUri, imgPath, stack, compact = false } = props;
    return (
        <article className='project'>
            <a className='img-wrapper' href={uri}>
                <img src={imgUri || imgPath} alt={title + ' Image'} />
            </a>
            <div className='description'>
                <h3>
                    {title}
                    {github && (
                        <a className='git img-wrapper' href={github}>
                            <img src='/images/github.png' alt='Github' />
                        </a>
                    )}
                </h3>
                <p> {description} </p>
                <div className={'stack-container' + (compact ? ' compact' : '')}>
                    {stack.map((s) => (
                        <label className='stack gray' key={s}>
                            {s}
                        </label>
                    ))}
                </div>
            </div>
        </article>
    );
};
