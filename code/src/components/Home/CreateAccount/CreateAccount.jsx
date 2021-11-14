import "./CreateAccount.css";

const CreateAccount = () => {

    return (
        <>
            <div>
                <section className="create--text">
                    <h2 className="create--text--title">Aprenda a criar sites e aplicativos</h2>
                    <p className="create--text--paragraph">
                        Se você busca desenvolver novas habilidades na programação 
                        está no lugar certo. Oferecemos cursos gratuitos na área do desenvolvimento web e mobile para 
                        auxiliar na qualificação ou profissionalização.
                    </p>
                    <a className="create--text--link" href="">Cadastrar-se</a>
                </section>

                <section className="create--video">
                <iframe src="https://www.youtube.com/embed/2t8ycK8D4Rk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </section>
            </div>
        </>
    )
}

export default CreateAccount;