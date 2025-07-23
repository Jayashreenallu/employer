import React from "react";
 // Assuming you have a CSS file for styling
import "./DashBoardStyles.css";

const JobProviderDashboard = () => {
  const company = localStorage.getItem("selectedCompany");

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to {company} Dashboard</h1>
      <p className="dashboard-desc">Use the navigation above to manage your job postings.</p>
    </div>
  );
};

export default JobProviderDashboard;
