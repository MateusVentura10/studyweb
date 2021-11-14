import "./About.css";

const About = () => {
    
    return (
        <>
            <div>
                <section className="about--video">
                    <iframe src="https://www.youtube.com/embed/2t8ycK8D4Rk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </section>

                <section className="about--text">
                    <h2 className="about--text--title">Como fazer para estudar na StudyWeb</h2>
                    <p className="about--text--paragraph">Se você busca desenvolver novas habilidades na programação está no lugar certo. 
                        Oferecemos cursos gratuitos na área do desenvolvimento web e mobile para auxiliar 
                        na qualificação ou profissionalização do profissional que atua ou deseja atuar 
                        nesta área.
                    </p>
                    <a className="about--text--link" href="">Veja como funciona</a>
                </section>
            </div>
        </>
    )
}

export default About;