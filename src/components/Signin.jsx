import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Signin() {

    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);
            console.log(formProps);

            let res = await AxiosService.post(`${ApiRoutes.SIGN_IN.path}`, formProps)
            console.log(res.status);

            if (res.status === 200) {

                toast.success(res.data.message)

                sessionStorage.setItem("token", res.data.token)
                sessionStorage.setItem("role", res.data.role)

                if (res.data.role === 'admin')
                    navigate('/admin')
                else if (res.data.role === 'user')
                    navigate('/user')
            }
        } catch (error) {
            console.log(error);
            /* toast.error(error.response.data.message || error.message) */
        }
    }

    return <>
        <div className='signin-wrapper'>
            <h1 className='textAlignCenter'>Signin to continue</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </>
}

export default Signin