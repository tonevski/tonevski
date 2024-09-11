import React from "react"

interface ContactItemProps {
  contact: string
  contactText: string
  contactLink: string
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  contactText,
  contactLink,
}) => {
  return (
    <div className="flex space-x-4 pb-4">
      <p className="min-w-24 text-sm text-gray-400">{contact}</p>
      <div>
        <h3 className="text-sm text-gray-700">
          <a href={contactLink} className="hover:underline" target="_blank">
            {contactText}
          </a>
        </h3>
      </div>
    </div>
  )
}

export default ContactItem
