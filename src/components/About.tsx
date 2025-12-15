/**
 *  About header to display icon and contact information
 */
export const About = () => {
    return (
        <header className='about'>
            <div className='img-wrapper logo'>
                <img src='/images/m.ico' alt='M Icon' />
            </div>
            <article className='summary'>
                <h2 className='bold'> Hi I'm Marcus. </h2>
                <p>
                    I'm a full-stack software engineer with experience in React, Java, PL/SQL, and more. I'm currently
                    exploring Python, FastAPI and AI models.
                </p>
            </article>
            <section className='info'>
                {aboutItems.map((item) => {
                    return (
                        <a href={item.url} key={item.url}>
                            <div className='img-wrapper'>
                                <img src={item.icon} alt={item.type + ' icon'} />
                            </div>
                            <span> {item.label} </span>
                        </a>
                    );
                })}
            </section>
        </header>
    );
};

const aboutItems = [
    {
        label: 'martinezmarcus240@gmail.com',
        url: 'mailto:martinezmarcus240@gmail.com',
        icon: '/images/email.png',
        type: 'email',
    },
    {
        label: 'github.com/mlmar',
        url: 'https://github.com/mlmar',
        icon: '/images/github.png',
        type: 'Github',
    },
    {
        label: 'linkedin.com/in/martinez-marcus',
        url: 'https://linkedin.com/in/martinez-marcus',
        icon: '/images/linkedin.png',
        type: 'LinkedIn',
    },
];
