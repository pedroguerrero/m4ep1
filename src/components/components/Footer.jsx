// eslint-disable-next-line react/prop-types
export default function Footer({ changePage }) {
  return (
    <footer>
      <ul className="nav justify-content-center border-bottom mb-3 mt-5">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link px-2 text-body-secondary"
            onClick={(e) => changePage(e, 'index')}
          >
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link px-2 text-body-secondary"
            onClick={(e) => changePage(e, 'equipo-medico')}
          >
            Equipo médico
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link px-2 text-body-secondary"
            onClick={(e) => changePage(e, 'contacto')}
          >
            Contacto
          </a>
        </li>
      </ul>

      <ul className="nav justify-content-center list-unstyled p-3 d-flex">
        <li className="fs-4">
          <a
            className="text-body-secondary"
            target="_blank"
            href="#"
            aria-label="Twitter"
          >
            <i className="bi bi-twitter"></i>
          </a>
        </li>
        <li className="ms-3 fs-4">
          <a
            className="text-body-secondary"
            target="_blank"
            href="#"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </li>
        <li className="ms-3 fs-4">
          <a
            className="text-body-secondary"
            target="_blank"
            href="#"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </li>
      </ul>

      <p className="text-center text-body-secondary">© 2024 VidaPlena</p>
    </footer>
  );
}
