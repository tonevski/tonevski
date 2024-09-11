import ContactItem from "./ContactItem"

const Contact = () => {
  return (
    <section className="pt-16">
      <h2 className="text-gray-500 pb-6">Contact</h2>

      <ContactItem
        contact="Email"
        contactText="nikola@tonevski.com"
        contactLink="mailto:nikola@tonevski.com"
      ></ContactItem>

      <ContactItem
        contact="LinkedIn"
        contactText="nikola-tonevski"
        contactLink="https://linkedin.com/in/nikola-tonevski"
      ></ContactItem>

      <ContactItem
        contact="GitHub"
        contactText="tonevski"
        contactLink="https://github.com/tonevski"
      ></ContactItem>

      <ContactItem
        contact="X"
        contactText="tonevski_"
        contactLink="https://twitter.com/tonevski_"
      ></ContactItem>
    </section>
  )
}

export default Contact
