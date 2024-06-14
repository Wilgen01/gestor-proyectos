import { useState } from "react";
import BasicModal from "../../components/Modal/BasicModal";
import NavBar from "../../components/NavBar/NavBar";
import ProjectCard from "./ProjectCard";

function DashBoard() {
    const projects = [
        {
            id: 1,
            title: 'PTC-001: Seguimiento Logístico',
            description: 'Proyecto para seguimiento de envíos'
        },
        {
            id: 2,
            title: 'PTC-002: Sistema de Facturación',
            description: 'Proyecto para facturación de servicios'
        },
        {
            id: 3,
            title: 'PTC-003: Bot de Whatsapp con IA',
            description: 'Proyecto para automatizar respuestas'
        }
    ]

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <NavBar />
            <BasicModal show={showModal} handleClose={handleCloseModal} title="Titulo">
                <p>Contenido del modal</p>
            </BasicModal>
            <main className="container">
                <section className="d-flex justify-content-between mt-5 mb-5">
                    <h1 className="h2 m-0">Bienvenido Wilgen García</h1>
                    <button type="button" className="btn btn-primary" onClick={handleOpenModal}>Crear nuevo Proyecto</button>
                </section>

                <div className="row cursor-pointer">
                    {projects.map(project => (
                        <div key={project.id} className="col-sm-6 mb-sm-0">
                            <ProjectCard title={project.title} description={project.description} />
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

export default DashBoard;