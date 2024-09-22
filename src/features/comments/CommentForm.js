import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Label, 
    FormGroup
} from 'reactstrap';
//import { validateCommentForm } from '../../utils/validateCommentForm'

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
        <Button>
            Hell0
        </Button>
    )
}

export default CommentForm;