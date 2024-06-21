import { useState } from "react";
import BasicModal from "../../components/Modal/BasicModal";
import NavBar from "../../components/NavBar/NavBar";
import ProjectCard from "./ProjectCard";
import CreateProject from "./CreateProject";
import { useFetch } from "../../core/hooks/useFetch";
import { getToken } from "../../core/utilities/ManageSession";
import { Project } from "../../core/models/projectModel";


const baseUrl = import.meta.env.VITE_BASE_API_URL;

function DashBoard() {
    const [showModal, setShowModal] = useState(false);
    const { data, refetch } = useFetch<Project[]>(`${baseUrl}/api/v1/projects`, getToken());

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSuccess = () => {
        refetch();
        handleCloseModal();
    }

    return (
        <>
            <NavBar />
            <BasicModal show={showModal} handleClose={handleCloseModal} title="Crear nuevo Proyecto">
                <CreateProject handleCancel={handleCloseModal} handleSuccess={handleSuccess} />;
            </BasicModal>
            <main className="container">
                <section className="d-flex justify-content-between mt-5 mb-5">
                    <h1 className="h2 m-0">Bienvenido Wilgen García</h1>
                    <button type="button" className="btn btn-primary" onClick={handleOpenModal}>Crear nuevo Proyecto</button>
                </section>

                <div className="row cursor-pointer">
                    {data?.map(project => (
                        <div key={project.id} className="col-sm-6 mb-sm-0">
                            <ProjectCard title={project.name} description={project.description} />
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

export default DashBoard;