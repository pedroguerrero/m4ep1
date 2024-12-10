import background from '../../assets/bg.jpg';
import Row from '../components/Row';
import Container from '../components/Container';

export default function PatientsPage() {
  return (
    <main>
      <section
        className="patients-section"
        style={{
          padding: '200px',
          background: `url(${background}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <Container className="container text-center">
          <Row>
            <Container className="col">
              <h1>Agendamiento de Pacientes</h1>
              <p className="fs-4">Generar agendamiento de pacientes</p>
            </Container>
          </Row>
        </Container>
      </section>
    </main>
  );
}
