import React from "react";

// Define types for the props
interface ReadOnlyRowProps {
  contact: {
    id: string;
    fullName: string;
    address: string;
    phoneNumber: string;
    email: string;
  };
  handleEditClick: (event: React.MouseEvent<HTMLButtonElement>, contact: any) => void;
  handleDeleteClick: (contactId: string) => void;
}

const ReadOnlyRow: React.FC<ReadOnlyRowProps> = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="border-b">
      <td className="p-2">{contact.id}</td>
      <td className="p-2">{contact.fullName}</td>
      <td className="p-2">{contact.address}</td>
      <td className="p-2">{contact.phoneNumber}</td>
      <td className="p-2">{contact.email}</td>
      <td className="p-2 flex gap-2">
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
          className="p-1 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
          className="p-1 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
