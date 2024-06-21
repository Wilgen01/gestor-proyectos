import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Project } from "../../core/models/projectModel";
import { getToken, removeToken } from "../../core/utilities/ManageSession";
import { useNavigate } from "react-router-dom";

interface CreateProjectProps {
    handleCancel: () => void;
    handleSuccess: () => void;
}

function CreateProject({ handleCancel, handleSuccess }: Readonly<CreateProjectProps>) {
    const navigate = useNavigate();
    const [formWasValidated, setFormWasValidated] = useState(false);
    const [formData, setFormData] = useState<Project>({
        name: '',
        description: '',
        status: true
    });
    const baseUrl = import.meta.env.VITE_BASE_API_URL;


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setFormWasValidated(true);

        if (!event.currentTarget.checkValidity()) {
            event.stopPropagation();
            return;
        }

        try {
            const response = await fetch(`${baseUrl}/api/v1/projects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken()}`
                },
                body: JSON.stringify(formData)
            })

            if (response.status === 401) {
                alert('No tienes permisos para crear proyectos');
                removeToken();
                navigate('/');
                return;

            }

            if (response.status !== 200) {
                alert('Ocurrió un error al crear el proyecto');
                return;
            }
            handleSuccess();
        } catch (error) {
            alert('Ocurrió un error al crear el proyecto');
        }
    };

    return (
        <Form onSubmit={handleSubmit} className={formWasValidated ? 'was-validated' : 'needs-validation'} noValidate>
            <Form.Group controlId="formName" className="mb-2">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa el nombre del proyecto"
                />
            </Form.Group>

            <Form.Group controlId="formDescription" className="mb-4">
                <Form.Label>Descripción:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa una descripción"
                />
            </Form.Group>

            <div className="d-flex gap-2 justify-content-end">
                <Button variant="secondary" type="button" onClick={handleCancel}>
                    Cancelar
                </Button>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </div>
        </Form>
    );
}

export default CreateProject;