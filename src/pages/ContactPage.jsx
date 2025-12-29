import Contact from "../features/contacts/Contact";
import usePageTitle from "../hooks/usePageTitle";

function ContactPage() {
  usePageTitle("Contact");
  return <Contact />;
}

export default ContactPage;
