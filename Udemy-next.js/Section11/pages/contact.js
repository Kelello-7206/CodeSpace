import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

function ContactPage() {
  return (
    <Fragment>
      <Head>
      <title>Contact Me</title>
      <meta name='description' content='Send your message' />
      </Head>
      <ContactForm />
    </Fragment>
  )
}

export default ContactPage;