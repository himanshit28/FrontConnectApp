import Base from "../components/Base";
import { Button, CardBody, Container, FormGroup, Label, Row, Col} from "reactstrap";
import {Card} from "reactstrap";
import {CardHeader} from "reactstrap";
import {Form} from "reactstrap";
import {Input}  from "reactstrap";


const Login=()=>{
    return(
    
       <div>
        <Base>
        <Container>
            <Row className="mt-4">
            <Col sm={{size:6, offset:3}}>
            <Card color="dark" outline> 
                <CardHeader>
                    <h3>Login Form</h3>
                </CardHeader>
                <CardBody>
                    <Form>
                        

                        <FormGroup>
                        <Label for="email">Enter Email

                        </Label>
                        <Input  type="email" placeholder="Enter here" id="email">
                        </Input>
                        </FormGroup>

                        <FormGroup>
                        <Label for="password">Enter Password

                        </Label>
                        <Input  type="password" placeholder="Enter here" id="email">
                        </Input>
                        </FormGroup>

                        <Container className="text-center">
                            <Button color="dark">Login</Button>
                            <Button color="secondary" type="reset" className="ms-2">Reset</Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
            </Col>
            </Row>
        </Container>
        </Base>
        </div>
    );
    
    }
    
    export default Login