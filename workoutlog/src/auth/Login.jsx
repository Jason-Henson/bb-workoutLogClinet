import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log(username, password);
    
   const handleSubmit = (e) => {
       e.preventDefault();
       fetch('http://localhost:3001/user/login', {
           method: 'POST',
           body: JSON.stringify({user:{email: username, password: password}}),
           headers: new Headers({
               'Content-Type': 'application/json'
           })
       }).then(
           (response) => response.json()
       ).then((data) => {
           props.updateToken(data.sessionToken);
       })
   }

    return ( 
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password" value={password} />
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
     );
};
 
export default Login;