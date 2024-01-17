import { Button, CardBody, Container, FormGroup, Label, Row, Col} from "reactstrap";
import Base from "../components/Base";
import {Card} from "reactstrap";
import {CardHeader} from "reactstrap";
import {Form} from "reactstrap";
import {Input}  from "reactstrap";
import { useEffect, useState } from "react";
import {toast} from 'react-toastify';

import { signup } from "../services/user-service";
const Signup=()=>{
    const [data,setData]=useState({
        name:'',
        email:'',
        password:''
    });

    const [error,setError]=useState({errors:{},
    isError:false})

    useEffect(()=>{
        console.log(data );
    })

    const handleChange=(e,fieldprop)=>{
setData({...data,[fieldprop]:e.target.value})



    }

    const resetData=()=>{
        setData({
            name:'',
        email:'',
        password:''
        })
    }

    const submitForm=(e)=>{
        e.preventDefault();

        console.log(data);

        signup(data).then((resp)=>{
        console.log(resp);
        console.log("success");
        toast.success("User is successfully registered");
        setData({name:'',
        email:'',
        password:''})
        }).catch((error)=>{console.log(error) 
            console.log("error log")})
    }
    return(
        <Base>
        <Container>
            <Row className="mt-4">
                
            <Col sm={{size:6, offset:3}}>
            <Card color="dark" outline> 
                <CardHeader>
                    <h2>Fill Information to Register</h2>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={submitForm}> 
                        <FormGroup>
                        <Label for="name">Enter name

                        </Label>
                        <Input  type="text" placeholder="Enter here" id="name" onChange={(e)=>handleChange(e,'name')} value={data.name}>
                        </Input>
                        </FormGroup>

                        <FormGroup>
                        <Label for="email">Enter Email

                        </Label>
                        <Input  type="email" placeholder="Enter here" id="email" onChange={(e)=>handleChange(e,'email')} value={data.email}> 
                        </Input>
                        </FormGroup>

                        <FormGroup>
                        <Label for="password">Enter Password

                        </Label>
                        <Input  type="password" placeholder="Enter here" id="password" onChange={(e)=>handleChange(e,'password')} value={data.password}>
                        </Input>
                        </FormGroup>

                        <Container className="text-center">
                            <Button color="dark">Register</Button>
                            <Button color="secondary" type="reset" className="ms-2" onClick={resetData}>Reset</Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
            </Col>
            </Row>
        </Container>
        </Base>
    )
}

export default Signup;