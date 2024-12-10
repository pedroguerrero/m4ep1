/* eslint-disable react/prop-types */
import Row from './Row';
import ServiceItem from './ServiceItem';

export default function ServiceList({ services }) {
  return (
    <Row>
      {services.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </Row>
  );
}
