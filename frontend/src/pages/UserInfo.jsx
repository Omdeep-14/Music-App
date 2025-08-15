import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router";

function UserInfo() {
  const navigate = useNavigate();
  const { isLoaded, user } = useUser();

  useEffect(() => {
    if (!isLoaded) return;

    if (user.publicMetadata.hasOnBoarded) {
      navigate("/user/user-home");
    } else {
      navigate("/landingForm");
    }
  }, [isLoaded, user, navigate]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      Loading...
    </div>
  );
}

export default UserInfo;
