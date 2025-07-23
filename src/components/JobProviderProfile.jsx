import React, { useEffect, useState } from "react";
import "./DashBoardStyles.css";

const JobProviderProfile = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const companyName = localStorage.getItem("selectedCompany") || "";
  const companyId = parseInt(localStorage.getItem("selectedCompanyId"));

  useEffect(() => {
    const loadData = async () => {
      try {
        const jobsRes = await fetch("http://localhost:5000/jobs");
        const jobsData = await jobsRes.json();

        const companyJobs = jobsData.filter((job) => job.companyId === companyId);
        const jobIds = companyJobs.map((job) => job.id);

        const appsRes = await fetch("http://localhost:5000/applications");
        const appsData = await appsRes.json();

        const filteredApps = appsData.filter((app) => jobIds.includes(app.jobId));
        setApplications(filteredApps);
      } catch (error) {
        console.error("Error loading applications:", error);
      } finally {
        setLoading(false);
      }
    };

    if (companyId) {
      loadData();
    } else {
      setLoading(false);
    }
  }, [companyId]);

  return (
    <div className="profile-container">
      <h2 className="profile-title">{companyName} – Job Applications</h2>

      {loading ? (
        <p className="profile-loading">Loading...</p>
      ) : applications.length === 0 ? (
        <p className="profile-no-data">No applications received yet.</p>
      ) : (
        <div className="application-list">
          {applications.map((app) => (
            <div className="application-card" key={app.id}>
              <p><strong>Candidate Name:</strong> {app.candidateName}</p>
              <p><strong>Email:</strong> {app.email}</p>
              <p>
                <strong>Resume:</strong>{' '}
                <a href={app.resume} target="_blank" rel="noreferrer">
                  View Resume
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobProviderProfile;
