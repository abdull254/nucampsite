import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser, selectCurrentUser } from "./userSlice";
import {
    Modal,
    ModalBody,
    ModalHeader,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import defaultAvatar from '../../app/assets/img/unicorn.png';
import { validateUserLoginForm } from "../../utils/validateUserLoginForm";

const UserLoginForm = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();


    const handleLogin = (values) => {
        const currentUser = {
            id: Date.now(),
            avatar: defaultAvatar,
            username: values.username,
            password: values.password
        };
        dispatch(setCurrentUser(currentUser));
        setLoginModalOpen(false);
        console.log("sbmit is working ")
    };

    return (
        <>
             <span className="navbar-text ml-auto">
                {currentUser ? (
                    <div style={{width:'4rem', height:'4rem'}}>
                        <img 
                            src={currentUser.avatar}
                            alt='user'
                            style={{width: '100%', height: '100%'}}
                        />
                    </div>
                ) : (
                    <Button
                        outline
                        onClick={() => setLoginModalOpen(true)}
                        style={{color: 'white', border: '1px solid white'}}
                    >
                        <i className="fa fa-sign-in fa-lg"/> Login
                    </Button>
                )}
             </span>
             <Modal isOpen={loginModalOpen} >
                <ModalHeader toggle={ () => setLoginModalOpen(false)}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Formik 
                        initialValues={{
                            username:'',
                            password:''
                            }} 
                        onSubmit={handleLogin} 
                        validate={ validateUserLoginForm } 
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Field className='form-control' id='username' name='username' placeholder='Username'/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Field  className='form-control' id='password' name='password' placeholder='Password'/>
                            </FormGroup>
                            <Button type="submit" color="primary">Login</Button>
                        </Form>
                    </Formik>
                </ModalBody>   
             </Modal>
        </>
    )
}

export default UserLoginForm;
