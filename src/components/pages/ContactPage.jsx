import background from '../../assets/bg-3.jpg';

export default function ContactPage() {
  const onSubmit = (event) => {
    event.preventDefault();

    alert('Mensaje enviado');
  };

  return (
    <main>
      <section
        className="contact-section"
        style={{
          padding: '200px',
          background: `url(${background}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1>Contacto</h1>
              <p className="fs-4">
                ¡Estamos aquí para ayudarte! Si tienes preguntas, necesitas
                asistencia o quieres más información, no dudes en ponerte en
                contacto con nosotros. Completa el formulario y nuestro equipo
                te responderá lo antes posible. ¡Tu bienestar es nuestra
                prioridad!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input type="text" className="form-control" id="nombre" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="asunto" className="form-label">
                    Asunto
                  </label>
                  <input type="text" className="form-control" id="asunto" />
                </div>
                <div className="mb-3">
                  <label htmlFor="mensaje" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    className="form-control"
                    id="mensaje"
                    rows="3"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <div className="col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16781.35830596649!2d-71.24099795052393!3d-34.98516712157657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966457c6e067c9e1%3A0x61321273f71c71eb!2sHospital%20Nuevo%20de%20Curic%C3%B3!5e0!3m2!1ses-419!2scl!4v1729206282980!5m2!1ses-419!2scl"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación hospital"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}