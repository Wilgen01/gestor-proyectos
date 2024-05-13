function Login() {
    return (
        <main className="d-flex justify-content-center align-items-center" style={{ height: '100vh', position: 'relative' }}>
            <div className="w-100 bg-primary" style={{position: 'absolute', height: '50vh' , top: 0, zIndex: -1}}></div>
            <div className="shadow p-5 bg-white" style={{ width: 450 }}>
                <h1 className="h3 w-75 text-center m-auto fw-bold mb-5 text-dark">Bienvenido a Gestor de proyectos</h1>
                <form>
                    <input type="text" className="form-control mb-3" placeholder="Correo" />
                    <input type="password" className="form-control mb-3" placeholder="Contraseña" />
                    <button type="button" className="btn btn-primary w-100 mb-2">Iniciar sesión</button>
                    <button type="button" className="btn btn-outline-primary w-100 mb-2">Crea una cuenta</button>
                    <span>¿Olvidaste tu contraseña? <strong>Recuperar contraseña</strong></span>
                </form>
            </div>
        </main>
    );
}

export default Login;