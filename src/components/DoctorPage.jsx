import background from '../assets/bg-2.jpg';
import DoctorList from './DoctorList';

export default function DoctorPage() {
  return (
    <main>
      <section
        className="medical-team-section"
        style={{
          padding: '200px',
          background: `url(${background}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1>Equipo médico</h1>
              <p className="fs-4">
                Conoce a nuestro equipo médico, un grupo de profesionales
                altamente capacitados y dedicados a tu bienestar. Cada miembro
                aporta experiencia, compromiso y un enfoque humano para
                brindarte la mejor atención posible. Estamos aquí para cuidar de
                ti en cada paso del camino hacia la recuperación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col text-center mt-5 mb-5">
              <h2>Equipo médico</h2>
            </div>
          </div>

          <DoctorList />
        </div>
      </section>
    </main>
  );
}
