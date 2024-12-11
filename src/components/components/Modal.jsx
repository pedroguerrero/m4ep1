import Button from './Button';
import Container from './Container';

/* eslint-disable react/prop-types */
export default function Modal({
  title,
  children,
  showModal,
  onClose,
  okText,
  onSuccess,
}) {
  return (
    <Container
      className="modal fade show"
      tabIndex="-1"
      style={{
        display: `${showModal ? 'block' : 'none'}`,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Container className="modal-dialog">
        <Container className="modal-content">
          <Container className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {title}
            </h5>
            <Button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
              onClick={onClose}
            ></Button>
          </Container>
          <Container className="modal-body">{children}</Container>
          <Container className="modal-footer">
            <Button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Cerrar
            </Button>
            <Button
              type="button"
              className="btn btn-primary"
              onClick={onSuccess}
            >
              {okText || 'Aceptar'}
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
