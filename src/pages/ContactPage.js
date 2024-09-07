import {Col, Row, Container} from 'reactstrap';
import SubHeader from '../components/SubHeader';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact Us'/>
            <Row className='row-content align-items-center'>
                <Col className='sm-4'>
                  <h5>Our Address</h5>
                  <address>
                        1 Nucmap Way
                        <br/>
                        Seattle, WA 98001
                        <br/>
                        U.S.A
                    </address>
                </Col>
                <Col>
                  <a
                    role='button'
                    className='btn brn-link'
                    href='tel: +16126703339'  
                  >
                    <i className='fa fa-phone' />
                  </a>
                  <br/>
                  <a 
                    role='button'
                    className='btn btn-link'
                    href='mailto:ajey44@gmial.com'
                    >
                        <i className='fa fa-envelope-o'/>
                    </a>
                </Col>

            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h2> Send Us Your Feedback</h2>
                    <hr/>
                </Col>
                <Col md='10'>
                    TBD: ContactForm
                </Col>
            </Row>
        </Container>
    )
}

export default ContactPage;