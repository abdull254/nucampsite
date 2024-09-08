import {Button, Label, Col, FormGroup} from 'reactstrap';
import { Formik,Field, Form} from 'formik';

const ContactForm = () => {
    
    const handleSubmit = (values, {resetForm}) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }
    return (
        <Formik
            initialValues = {{
                firstName: '',
                lastName: '',
                pjonrNum: '',
                email: '',
                agree: '',
                contactType: 'By Phone',
                feedback: ''
            }}
        >
            <Form onSubmit={handleSubmit}>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                        First Name
                    </Label>
                    <Col md='10'>
                        <Field classsName='form-control'  name='firstName' plascehoder='First Name'/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                        Last Name
                    </Label>
                    <Col md='10'>
                        <Field classsName='form-control' name='lastName' placeholder='Last Name' />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='phoneNum' md='2'>
                        Phone
                    </Label>
                    <Col md='10'>        
                        <Field classsName='form-control' name='phoneNum' placeholder='Phone' />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='10'>
                         <Field classsName='form-control' name='email' placeholder='Email' />
                   </Col>
                </FormGroup>
                <FormGroup row>
                    <Label check md={{ size: 4, offset: 2 }} >
                        <Field
                            name='agree'
                            type='checkbox'
                            className='form-check-input'
                         /> {' '}   
                        May we contact you?  
                    </Label>
                    <Col md='4'>  
                          <Field 
                                classsName='form-control' 
                                name='contact-type' 
                                as='select'
                           >
                            <option>By Phone</option>
                            <option>By Email</option>
                          </Field>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='feedback' md='2'>
                            Your Feedback
                    </Label>
                    <Col md='10'>
                        <Field 
                            classsName='form-control' 
                            name='feedback' 
                            as='textarea' 
                            rows='12'
                         />
                    </Col>
                </FormGroup>
                <FormGroup row>
                   <Col md={{ size:10, offset:2}}>
                    <Button type='submit' color='primary' >
                        Send Feedback
                    </Button>
                   </Col>
                </FormGroup>
            </Form>
        </Formik>    
    )
}

export default ContactForm;