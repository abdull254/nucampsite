import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label
} from 'reactstrap';
import { validateCommentForm } from '../../utils/validateCommentForm'

const CommentForm = ({campsiteId}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handlesubmit = (values) => {
        const comment = {
            campsiteId: parseInt(campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.cmmentText,
            date: new Date(Date.now()).toISOString()
        }

        console.log('comment', comment);
        setModalOpen(false)
    }
    return(
        <>
            <Button onClick={() => setModalOpen(true)}>
                <i className="fa fa-pencil fa-lg" /> Add Comment
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Add Comment
                </ModalHeader>
                <ModalBody>
                    <Formik initialValues={{
                                rating: undefined,
                                author:'',
                                commentText:'',
                            }} 
                            onSubmit={handlesubmit}
                            validate={validateCommentForm}
                    >
                            <Form>
                                <FormGroup>
                                    <Label htmlFor='rating'>Rating</Label>
                                    <Field 
                                        name='rating'
                                        as='select'
                                        className='form-control'
                                     >
                                      <ErrorMessage name="rating">
                                        {(msg)=> <p className='text-danger'> {msg}</p> }  
                                      </ErrorMessage> 
                                        <option>Select...</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Field>   
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='author'>Your Name</Label>
                                    <Field
                                        name='author'
                                        placeholder='Your Name'
                                        className='form-control'
                                    />  
                                    <ErrorMessage name="author">
                                        {(msg)=> <p className='text-danger'> {msg}</p> }  
                                    </ErrorMessage> 
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='commentText'>Comment</Label>
                                    <Field
                                        name='commentText'
                                        as='textarea'
                                        rows='12'
                                        className='form-control'
                                    />
                                    <ErrorMessage name="contactForm">
                                        {(msg)=> <p className='text-danger'> {msg}</p> }
                                    </ErrorMessage>
                                </FormGroup>
                                <Button type='submit' color='primary'>
                                            Submit
                                </Button>
                            </Form>
                    </Formik>
                 </ModalBody>
            </Modal>
        </>
    )
}

export default CommentForm;