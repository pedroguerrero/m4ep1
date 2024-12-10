import { useState } from 'react';
import MainPage from './components/MainPage';
import DoctorPage from './components/DoctorPage';
import ContactPage from './components/ContactPage';
import PatientsPage from './components/PatientsPage';
import hospitalSvg from './assets/hospital-icon.svg';

function App() {
  const [pageActive, setPageActive] = useState('index');
  const pages = {
    index: <MainPage />,
    'equipo-medico': <DoctorPage />,
    'citas-pacientes': <PatientsPage />,
    contacto: <ContactPage />,
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nav"
              aria-controls="nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="nav">
              <a
                className="navbar-brand d-flex align-items-center"
                href="#"
                onClick={() => setPageActive('index')}
              >
                <img src={hospitalSvg} alt="" height="40" className="me-2" />
                VidaPlena
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className={`nav-link ${pageActive === 'index' && 'active'}`}
                    aria-current="page"
                    href="#"
                    onClick={() => setPageActive('index')}
                  >
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      pageActive === 'equipo-medico' && 'active'
                    }`}
                    href="#"
                    onClick={() => setPageActive('equipo-medico')}
                  >
                    Equipo médico
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      pageActive === 'citas-pacientes' && 'active'
                    }`}
                    href="#"
                    onClick={() => setPageActive('citas-pacientes')}
                  >
                    Citas Pacientes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      pageActive === 'contacto' && 'active'
                    }`}
                    href="#"
                    onClick={() => setPageActive('contacto')}
                  >
                    Contacto
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-primary abrir-agenda"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Reserva tu hora
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {pages[pageActive]}

      <footer>
        <ul className="nav justify-content-center border-bottom mb-3 mt-5">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary"
              onClick={() => setPageActive('index')}
            >
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary"
              onClick={() => setPageActive('equipo-medico')}
            >
              Equipo médico
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary"
              onClick={() => setPageActive('contacto')}
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
    </>
  );
}

export default App;
