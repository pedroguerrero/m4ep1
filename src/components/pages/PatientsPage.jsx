import { useState, useEffect } from 'react';
import background from '../../assets/bg.jpg';
import Row from '../components/Row';
import Modal from '../components/Modal';
import Button from '../components/Button';
import { getDoctors } from '../utils/doctor';
import Container from '../components/Container';

export default function PatientsPage() {
  const [patient, setPatient] = useState({
    name: '',
    date: '',
    doctor: '',
    doctorId: 2,
    price: 0,
  });
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const setPatientAttribute = (attribute, value) => {
    setPatient((patient) => ({
      ...patient,
      [attribute]: value,
    }));
  };

  useEffect(() => {
    getDoctors()
      .then((doctors) => setDoctors(doctors))
      .catch(() => alert('Error al obtener los medicos'));
  }, []);

  return (
    <>
      <Modal
        title="Agendar Paciente"
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={() => {
          setPatients((patients) => [...patients, patient]);

          setShowModal(false);
        }}
      >
        <Container className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            id="nombre"
            className="form-control"
            placeholder="Nombre"
            onChange={(event) =>
              setPatientAttribute('name', event.target.value.trim())
            }
            value={patient.name}
          />
        </Container>

        <Container className="mb-3">
          <label htmlFor="fecha" className="form-label">
            Fecha
          </label>
          <input
            id="fecha"
            className="form-control"
            placeholder="Fecha"
            type="date"
            onChange={(event) =>
              setPatientAttribute('date', event.target.value)
            }
            value={patient.date}
          />
        </Container>

        <Container className="mb-3">
          <label htmlFor="doctor" className="form-label">
            Doctor
          </label>
          <select
            value={patient.doctorId}
            className="form-select"
            id="doctor"
            onChange={(event) => {
              const doctorId = Number(event.target.value);
              const { name } = doctors.find((doctor) => doctor.id === doctorId);
              setPatientAttribute('doctor', name);
              setPatientAttribute('doctorId', doctorId);
            }}
          >
            <option value="0" disabled={true}>
              Seleccione un medico
            </option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
        </Container>

        <Container className="mb-3">
          <label htmlFor="valor" className="form-label">
            Valor Consulta
          </label>
          <input
            id="valor"
            className="form-control"
            placeholder="10000"
            type="number"
            onChange={(event) =>
              setPatientAttribute('price', Number(event.target.value))
            }
            value={patient.price}
          />
        </Container>
      </Modal>

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

        <section>
          <Container className="container mt-5">
            <Row>
              <Container className="col-md-12 text-end">
                <Button
                  className="btn btn-primary"
                  onClick={() => {
                    setPatient({
                      name: '',
                      date: '',
                      doctorId: 0,
                      doctor: '',
                      price: 0,
                    });
                    setShowModal(true);
                  }}
                >
                  Agendar Paciente
                </Button>
              </Container>
            </Row>
          </Container>
        </section>

        <section>
          <Container className="container mt-5">
            <Row>
              <Container className="col-md-12">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Doctor</th>
                      <th scope="col">Valor Consulta</th>
                    </tr>
                  </thead>

                  <tbody>
                    {patients.map(({ name, date, doctor, price }, index) => (
                      <tr key={index}>
                        <td>{name}</td>
                        <td>{date.split('-').reverse().join('-')}</td>
                        <td>{doctor}</td>
                        <td>{price.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Container>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
