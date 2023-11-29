import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const loaderContainerStyles  = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh'
}
const Loader = () => {
  return (
    <Container style={loaderContainerStyles}>
      <Spinner animation="border" variant="primary" />
    </Container>
  );
}

export default Loader;