import React from 'react'
import { Form, Button } from 'react-bootstrap'

export const Contact = () => (
	<div>
		<h2>Soittele. :)</h2>
		<p>
		puhelin: 20039487817
		</p>
    <br></br>
    <h2>Tai lähetä viesti.</h2>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Sähköposti osoitteesi</Form.Label>
        <Form.Control type="email" placeholder="esim. matti.meikalainen@gmail.com" />
        <Form.Text className="text-muted">
          Tarvitsemme sähköpostisi yhteydenottoa varten.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Viesti</Form.Label>
        <Form.Control as="textarea" rows="4" />
      </Form.Group>
      
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Haluan saada sähköpostiini tarjouksia ja uutisia." />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Lähetä
      </Button>
    </Form>
	</div>
	)