import Container from './Container';

// eslint-disable-next-line react/prop-types
export default function Loading({ text, size }) {
  return (
    <Container className="text-center">
      <Container
        className="spinner-border text-primary"
        role="status"
        style={{ width: size, height: size }}
      >
        <span className="visually-hidden">{text}</span>
      </Container>
    </Container>
  );
}
