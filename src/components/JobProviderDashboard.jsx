import React from "react";
import "./DashBoardStyles.css";

const JobProviderDashboard = () => {
  const company = localStorage.getItem("selectedCompany");

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Company Logo"
          className="dashboard-logo"
        />
        <h1 className="dashboard-title">Welcome to {company} Dashboard</h1>
        <p className="dashboard-desc">Manage your job postings with ease.</p>
      </div>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Post a Job</h3>
          <p>Create and publish new job openings.</p>
        </div>
        <div className="card">
          <h3>Manage Listings</h3>
          <p>View and edit all your job postings.</p>
        </div>
        <div className="card">
          <h3>View Applications</h3>
          <p>Track applications submitted by candidates.</p>
        </div>
        <div className="card">
          <h3>Company Profile</h3>
          <p>Update your company information and branding.</p>
        </div>
      </div>
    </div>
  );
};

export default JobProviderDashboard;
