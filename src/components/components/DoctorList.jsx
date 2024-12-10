/* eslint-disable react/prop-types */
import Row from './Row';
import DoctorItem from './DoctorItem';

export default function DoctorList({ doctors }) {
  return (
    <Row>
      {doctors.map((doctor) => (
        <DoctorItem key={doctor.id} {...doctor} />
      ))}
    </Row>
  );
}
