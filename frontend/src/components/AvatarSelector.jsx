import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function AvatarSelector({ onSelect }) {
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/app/user/profile/avatars")
      .then((res) => setAvatars(res.data))
      .catch((err) => console.error("failed to load avatars", err));
  }, []);

  function handleSelect(id) {
    setSelectedAvatar(id);
    if (onSelect) {
      onSelect(id);
    }
  }

  return (
    <div className="flex flex-wrap gap-4">
      {avatars.map(({ presetId, imageUrl }) => (
        <img
          key={presetId}
          src={imageUrl}
          alt={presetId}
          className={`w-24 h-24 rounded-full cursor-pointer border-4 ${
            selectedAvatar === presetId
              ? "border-blue-500"
              : "border-transparent"
          }`}
          onClick={() => handleSelect(presetId)}
        />
      ))}
    </div>
  );
}

export default AvatarSelector;
