// Update details
import React, { useState } from "react";
import "./UpdateDetails.css";
import EditIcon from "../../assets/icons/edit.svg";
import SaveIcon from "../../assets/icons/save.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import DeleteIcon from "../../assets/icons/delete.svg";

interface Details {
  title: string;
  content: string;
}

const UpdateDetails = ({
  initialDetails,
  onSave,
  onDelete,
}: {
  initialDetails: Details;
  onSave: (details: Details) => void;
  onDelete: () => void;
}) => {
  const [details, setDetails] = useState(initialDetails);
  const [isEditing, setIsEditing] = useState(false);
  const [tempDetails, setTempDetails] = useState(initialDetails);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setDetails(tempDetails);
    setIsEditing(false);
    onSave(tempDetails);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
    setTempDetails(details);
  };
  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <div className="update-details">
      {isEditing ? (
        <textarea
          value={tempDetails.content}
          onChange={(e) => setTempDetails({ ...tempDetails, content: e.target.value })}
          className="update-textarea"
          placeholder="Edit details here"
          title="Edit details"
        />
      ) : (
        <div className="update-content">
          <h2>{details.title}</h2>
          <p>{details.content}</p>
        </div>
      )}
      <div className="update-actions">
        {isEditing ? (
          <>
            <button
              type="button"
              onClick={handleSaveClick}
              className="save-button"
              aria-label="Save changes"
            >
              <SaveIcon />
            </button>
            <button
              type="button"
              onClick={handleCancelClick}
              className="cancel-button"
              aria-label="Cancel editing"
            >
              <CancelIcon />
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={handleEditClick}
              className="edit-button"
              aria-label="Edit details"
            >
              <EditIcon />
            </button>
            <button
              type="button"
              onClick={handleDeleteClick}
              className="delete-button"
              aria-label="Delete item"
            >
              <DeleteIcon />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UpdateDetails;
