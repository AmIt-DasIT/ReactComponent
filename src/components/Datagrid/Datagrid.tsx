import React, { useState, Fragment, ChangeEvent, FormEvent } from "react";
import { nanoid } from "nanoid"; //random id generator library
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

// Define types for the data
interface Contact {
  id: any;
  fullName: string;
  address: string;
  phoneNumber: string;
  email: string;
}

const Datagrid: React.FC = () => {
  const [dataSource, setDataSource] = useState<Contact[]>(data);

  // Add form data state
  const [addFormData, setAddFormData] = useState<Contact>({
    id: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  // Edit form data state
  const [editFormData, setEditFormData] = useState<Contact>({
    id: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  // Edit contact ID state
  const [editContactId, setEditContactId] = useState<string | null>(null);

  // Handle add form change
  const handleAddFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name") as keyof Contact;
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  // Handle edit form change
  const handleEditFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name") as keyof Contact;
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  // Handle add form submit
  const handleAddFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newContact: Contact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...dataSource, newContact];
    setDataSource(newContacts);
  };

  // Handle edit form submit
  const handleEditFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    const editedContact: Contact = {
      id: editContactId!,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...dataSource];
    const index = dataSource.findIndex(
      (contact) => contact.id === editContactId
    );
    newContacts[index] = editedContact;

    setDataSource(newContacts);
    setEditContactId(null);
  };

  // Handle edit click
  const handleEditClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    contact: Contact
  ) => {
    event.preventDefault();

    setEditContactId(contact.id);
    const formValues = {
      id: contact.id,
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    setEditFormData(formValues);
  };

  // Handle cancel click
  const handleCancelClick = () => {
    setEditContactId(null);
  };

  // Handle delete click
  const handleDeleteClick = (contactId: string) => {
    const newContacts = dataSource.filter(
      (contact) => contact.id !== contactId
    );
    setDataSource(newContacts);
  };

  return (
    <div className="app-container p-4 text-black">
      <form onSubmit={handleEditFormSubmit}>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="w-full border-b bg-gray-200">
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Address</th>
              <th className="p-2 text-left">Phone Number</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((contact) => (
              <Fragment key={contact.id}>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2 className="mt-4 mb-2 text-lg font-semibold text-white">Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit} className="flex gap-2">
        <input
          type="text"
          name="fullName"
          required
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
          className="px-2 border border-gray-300 rounded outline-none h-9 "
        />
        <input
          type="text"
          name="address"
          required
          placeholder="Enter an address..."
          onChange={handleAddFormChange}
          className="px-2 border border-gray-300 rounded outline-none h-9 "
        />
        <input
          type="text"
          name="phoneNumber"
          required
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
          className="px-2 border border-gray-300 rounded outline-none h-9 "
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
          className="px-2 border border-gray-300 rounded outline-none h-9 "
        />
        <button
          type="submit"
          className="h-9 w-20 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Datagrid;
