import { useState } from 'react';
import docImg from '../../assets/doc-1.png';
import DoctorItem from './DoctorItem';

export default function DoctorList() {
  const [doctors] = useState([
    {
      img: docImg,
      name: 'Dra. Andrea',
      specialty: 'Pediatría',
      experience: 4,
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    {
      img: docImg,
      name: 'Dra. Camila',
      specialty: 'Cardiología',
      experience: 5,
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    {
      img: docImg,
      name: 'Dra. Barbara',
      specialty: 'Cirugía',
      experience: 6,
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    {
      img: docImg,
      name: 'Dra. Pia',
      specialty: 'Traumatología',
      experience: 7,
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
  ]);

  return (
    <div className="row">
      {doctors.map((doctor, index) => (
        <DoctorItem key={index} {...doctor} />
      ))}
    </div>
  );
}
