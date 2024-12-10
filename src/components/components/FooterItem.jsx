// eslint-disable-next-line react/prop-types
export default function FooterItem({ changePage, page, name }) {
  return (
    <li className="nav-item">
      <a
        href="#"
        className="nav-link px-2 text-body-secondary"
        onClick={(event) => changePage(event, page)}
      >
        {name}
      </a>
    </li>
  );
}
