// eslint-disable-next-line react/prop-types
export default function Container({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
