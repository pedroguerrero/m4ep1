import FooterItem from './FooterItem';
import SocialNetworkIcon from './SocialNetworkIcon';

// eslint-disable-next-line react/prop-types
export default function Footer({ changePage }) {
  return (
    <footer>
      <ul className="nav justify-content-center border-bottom mb-3 mt-5">
        <FooterItem changePage={changePage} page="index" name="Inicio" />
        <FooterItem
          changePage={changePage}
          page="equipo-medico"
          name="Equipo médico"
        />
        <FooterItem
          changePage={changePage}
          page="citas-pacientes"
          name="Citas Pacientes"
        />
        <FooterItem changePage={changePage} page="contacto" name="Contacto" />
      </ul>

      <ul className="nav justify-content-center list-unstyled p-3 d-flex">
        <SocialNetworkIcon className="fs-4" icon="twitter" />
        <SocialNetworkIcon className="ms-3 fs-4" icon="instagram" />
        <SocialNetworkIcon className="ms-3 fs-4" icon="facebook" />
      </ul>

      <p className="text-center text-body-secondary">© 2024 VidaPlena</p>
    </footer>
  );
}
