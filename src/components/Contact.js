import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tcmf9e9",
        "template_9cojzgh",
        form.current,
        "nbqHPhX9tjeiacviI"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col items-center w-full h-screen pb-28">
      <div className="pt-28 text-center mb-12">
        <h1 className="text-4xl mb-4">Contact</h1>
        <p>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>
      <Form ref={form} onSubmit={sendEmail} className="md:w-full lg:w-128">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            type="text"
            as="textarea"
            rows={10}
            placeholder="Enter message"
          />
        </Form.Group>
        <button
          className="bg-violet-600 text-slate-50 px-10 py-2 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Contact;
