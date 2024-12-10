import { useState } from 'react';
import MainPage from './components/pages/MainPage';
import DoctorPage from './components/pages/DoctorPage';
import ContactPage from './components/pages/ContactPage';
import PatientsPage from './components/pages/PatientsPage';
import hospitalSvg from './assets/hospital-icon.svg';
import Header from './components/components/Header';
import NavBar from './components/components/NavBar';
import Footer from './components/components/Footer';

function App() {
  const [pageActive, setPageActive] = useState('index');
  const pages = {
    index: <MainPage />,
    'equipo-medico': <DoctorPage />,
    'citas-pacientes': <PatientsPage />,
    contacto: <ContactPage />,
  };

  const changePage = (event, page) => {
    event.preventDefault();

    setPageActive(page);
  };

  return (
    <>
      <Header>
        <NavBar>
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
                onClick={(e) => changePage(e, 'index')}
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
                    onClick={(e) => changePage(e, 'index')}
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
                    onClick={(e) => changePage(e, 'equipo-medico')}
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
                    onClick={(e) => changePage(e, 'citas-pacientes')}
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
                    onClick={(e) => changePage(e, 'contacto')}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </NavBar>
      </Header>

      {pages[pageActive]}

      <Footer changePage={changePage} />
    </>
  );
}

export default App;
