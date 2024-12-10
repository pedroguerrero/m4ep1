// eslint-disable-next-line react/prop-types
export default function SocialNetworkIcon({ icon, ...props }) {
  return (
    <li {...props}>
      <a
        className="text-body-secondary"
        target="_blank"
        href="#"
        aria-label={icon}
      >
        <i className={`bi bi-${icon}`}></i>
      </a>
    </li>
  );
}
