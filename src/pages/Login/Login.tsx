import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formWasValidated, setformWasValidated] = useState(false);
    const navigate = useNavigate();
    const baseUrl = import.meta.env.VITE_BASE_API_URL;

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setformWasValidated(true);

        if (!event.currentTarget.checkValidity()) {
            event.stopPropagation();
            return;
        }

        try {
            const response = await fetch(`${baseUrl}/authentication`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })

            if (response.status !== 200) {
                alert('Credenciales incorrectas');
                return;
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            navigate('/dashboard');
        } catch (error) {
            alert('Ocurrió un error al iniciar sesión, intenta de nuevo');
        }


    }

    return (
        <main className="d-flex justify-content-center align-items-center" style={{ height: '100vh', position: 'relative' }}>
            <div className="w-100 bg-primary" style={{ position: 'absolute', height: '50vh', top: 0, zIndex: -1 }}></div>
            <div className="shadow p-5 bg-white" style={{ width: 450 }}>
                <h1 className="h3 w-75 text-center m-auto fw-bold mb-5 text-dark">Bienvenido a Gestor de proyectos</h1>
                <form onSubmit={handleSubmit} className={formWasValidated ? 'was-validated' : 'needs-validation'} noValidate>
                    <input type="email" value={username} onChange={handleEmailChange} className="form-control mb-3" placeholder="Correo" required />
                    <input type="password" value={password} onChange={handlePasswordChange} className="form-control mb-3" placeholder="Contraseña" required />
                    <button type="submit" className="btn btn-primary w-100 mb-2">Iniciar sesión</button>
                    <button type="button" className="btn btn-outline-primary w-100 mb-2">Crea una cuenta</button>
                    <span>¿Olvidaste tu contraseña? <strong>Recuperar contraseña</strong></span>
                </form>
            </div>
        </main>
    );
}

export default Login;