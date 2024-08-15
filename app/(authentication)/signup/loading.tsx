import SignupSkeleton from "@/components/SignupSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignupSkeleton />
    </div>
  );
};

export default loading;
