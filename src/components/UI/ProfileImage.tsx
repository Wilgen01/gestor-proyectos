interface ProfileImageProps {
    src?: string;
    nombre: string;
    size: string;
}

function ProfileImage({ src, nombre, size }: Readonly<ProfileImageProps>) {

    const getInitials = (name: string) => {
        const nombresSeparados = name.split(" ").slice(0, 2);
        return nombresSeparados.map((n) => n[0]).join("").toUpperCase();
    }

    if (src) {
        return <img src={src} alt="Profile" className="rounded-circle" style={{ width: `${size}px`, height: `${size}px` }} />;
    }
    else {
        return (
            <div className="d-flex justify-content-center align-items-center rounded-circle bg-primary" style={{ width: `${size}px`, height: `${size}px` }}>
                <span className="fw-bold text-white" style={{userSelect: 'none'}}>{getInitials(nombre)}</span>
            </div>
        )
    }
}

export default ProfileImage;