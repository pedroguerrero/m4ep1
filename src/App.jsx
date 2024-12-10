import { useState } from 'react';
import hospitalSvg from './assets/hospital-icon.svg';
import Image from './components/components/Image';
import MainPage from './components/pages/MainPage';
import Header from './components/components/Header';
import NavBar from './components/components/NavBar';
import Footer from './components/components/Footer';
import Button from './components/components/Button';
import DoctorPage from './components/pages/DoctorPage';
import ContactPage from './components/pages/ContactPage';
import PatientsPage from './components/pages/PatientsPage';
import Container from './components/components/Container';

function App() {
  const [pageActive, setPageActive] = useState('index');
  const [showNav, setShowNav] = useState(false);
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
          <Container className="container-fluid">
            <Button
              className="navbar-toggler"
              type="button"
              aria-controls="nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowNav((s) => !s)}
            >
              <span className="navbar-toggler-icon"></span>
            </Button>

            <Container
              className={`collapse navbar-collapse ${showNav && 'show'}`}
              id="nav"
            >
              <a
                className="navbar-brand d-flex align-items-center"
                href="#"
                onClick={(e) => changePage(e, 'index')}
              >
                <Image src={hospitalSvg} alt="" height="40" className="me-2" />
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
            </Container>
          </Container>
        </NavBar>
      </Header>

      {pages[pageActive]}

      <Footer changePage={changePage} />
    </>
  );
}

export default App;
