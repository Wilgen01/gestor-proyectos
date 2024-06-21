import { Card, Dropdown } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProjectCardProps {
    title: string;
    description: string;
    handleDelete: () => void;
}

function ProjectCard(props: Readonly<ProjectCardProps>) {
    const { title, description, handleDelete } = props;

    const handleEdit = () => {
        alert('Editar no está implementado aún');
    }

    return (
        <Card className="shadow-sm p-3 mb-4 bg-body-tertiary rounded border-0" style={{ position: 'relative' }}>
            <Card.Body>
                <Dropdown className='!absolute top-2 right-2'>
                    <Dropdown.Toggle as="a" bsPrefix="icon-button">
                        <BsThreeDotsVertical className='cursor-pointer' />
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                        <Dropdown.Item onClick={handleEdit}>Editar</Dropdown.Item>
                        <Dropdown.Item onClick={handleDelete}>Eliminar</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Card.Title className='hover:underline'>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
