import React from 'react';
import Business from '../Business/Business.js'; // Import the Business component
import './BusinessList.css'; //  corresponding CSS file for styling

const BusinessList = ({ businesses }) => {
    if(!businessInfo) {
        return (
          <div id="business-list">
            <p>No results found. Please enter valid search words.</p>
          </div>
        )
      }
  return (
    <div className="business-list">
      {
        businessInfo.businesses.map((business) => (
          <Business key={business.id} {...business} />
        ))
      }
    </div>
  );
};

export default BusinessList;