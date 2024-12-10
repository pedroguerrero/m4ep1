// eslint-disable-next-line react/prop-types
export default function ServiceItem({ name, description, img }) {
  return (
    <div className="col-md-4 mb-5">
      <div className="card text-center">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}
