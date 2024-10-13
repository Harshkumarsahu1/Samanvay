import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Your Child's Future, Our Focus: Early Disorder Evaluation",
  description: "This is Contact Page | Your Child's Future, Our Focus: Early Disorder Evaluation",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Contact us for better  | Your Child's Future, Our Focus: Early Disorder Evaluation."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
