import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:leland.a.mitchell2@gmail.com?subject=Message from ${formData.name}&body=${formData.message} (${formData.email})`;
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">Contact Me</h1>
      <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" rows={3} value={formData.message} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">Send Message</Button>
      </Form>
    </Container>
  );
}