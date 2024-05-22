interface ProjectCardProps {
    title: string;
    description: string;
}

function ProjectCard(props : Readonly<ProjectCardProps>) {

    const { title, description } = props;

    return (
        <div className="card shadow-sm p-3 mb-4 bg-body-tertiary rounded border border-0">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>

    );
}

export default ProjectCard;