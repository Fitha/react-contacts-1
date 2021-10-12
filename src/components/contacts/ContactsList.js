import { useContext } from "react";

import styled from "styled-components";

import ContactCard from "./ContactCard";

import { ContactsContext } from "../../Context/ContactsContext";

const ContactListBox = styled.div`
  padding: 20px 10px;
  background: #e4e4e4;
`;

const ContactList = () => {
  const { contacts } = useContext(ContactsContext);

  return (
    <ContactListBox>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          firstName={contact.firstName}
          lastName={contact.lastName}
          phoneNumber={contact.phoneNumber}
          profilePic={contact.profilePic}
        />
      ))}
    </ContactListBox>
  );
};

export default ContactList;
