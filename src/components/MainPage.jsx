import background from '../assets/bg.jpg';
import patient1 from '../assets/patient-1.png';
import patient2 from '../assets/patient-2.png';
import patient3 from '../assets/patient-3.png';
import ServiceList from './ServiceList';

export default function MainPage() {
  return (
    <main>
      <section
        className="welcome-section"
        style={{
          padding: '200px',
          background: `url(${background}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1>¡Bienvenido al Hospital VidaPlena!</h1>
              <p className="fs-4">
                Estamos aquí para cuidarte con calidez y profesionalismo.
                Nuestro compromiso es brindarte atención médica de calidad y
                apoyo en cada paso de tu recuperación. Tu salud es nuestra
                prioridad. ¡Cuenta con nosotros!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-3">
          <div className="row">
            <div className="col text-center mt-5 mb-5">
              <h2>Servicios</h2>
            </div>
          </div>

          <ServiceList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col text-center mb-5">
              <h2>Testimonios de pacientes</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-5">
              <div className="card text-center">
                <img src={patient1} className="card-img-top" alt="" />
                <div className="card-body">
                  <h3 className="card-title">Card title</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-5">
              <div className="card text-center">
                <img src={patient3} className="card-img-top" alt="" />
                <div className="card-body">
                  <h3 className="card-title">Pedro Guerrero</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-5">
              <div className="card text-center">
                <img src={patient2} className="card-img-top" alt="" />
                <div className="card-body">
                  <h3 className="card-title">Card title</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
