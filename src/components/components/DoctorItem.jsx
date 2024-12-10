/* eslint-disable react/prop-types */
export default function DoctorItem({
  img,
  name,
  specialty,
  experience,
  description,
}) {
  return (
    <div className="col-md-3 mb-5">
      <div className="card text-center">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <h5>{specialty}</h5>
          <p className="card-text">
            {description}
            <br />
            <strong>Experiencia:</strong> {experience} años
          </p>
        </div>
      </div>
    </div>
  );
}
