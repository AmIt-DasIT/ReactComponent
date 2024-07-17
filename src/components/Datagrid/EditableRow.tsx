import React from "react";

// Define types for the props
interface EditableRowProps {
  editFormData: {
    id: any;
    fullName: string;
    address: string;
    phoneNumber: string;
    email: string;
  };
  handleEditFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCancelClick: () => void;
}

const EditableRow: React.FC<EditableRowProps> = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr className="border-b">
      <td className="p-2">
        <input
          type="text"
          required
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.id}
          disabled
          className="w-full pl-2.5 p-1 border border-gray-300 rounded disabled:bg-gray-100"
        />
      </td>
      <td className="p-2">
        <input
          type="text"
          required
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
          className="w-full pl-2.5 p-1 border border-gray-300 rounded"
        />
      </td>
      <td className="p-2">
        <input
          type="text"
          required
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
          className="w-full pl-2.5 p-1 border border-gray-300 rounded"
        />
      </td>
      <td className="p-2">
        <input
          type="text"
          required
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
          className="w-full pl-2.5 p-1 border border-gray-300 rounded"
        />
      </td>
      <td className="p-2">
        <input
          type="email"
          required
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
          className="w-full pl-2.5 p-1 border border-gray-300 rounded"
        />
      </td>
      <td className="p-2 flex gap-2">
        <button
          type="submit"
          className="p-1 text-white bg-green-500 rounded hover:bg-green-600 w-16"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleCancelClick}
          className="p-1 text-white bg-red-500 rounded hover:bg-red-600 w-16"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
