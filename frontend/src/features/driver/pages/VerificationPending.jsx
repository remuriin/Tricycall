import "./VerificationPending.css";

const VerificationPending = () => {
  return (
    <div className="verification-page">
      <div className="verification-content">
        <div className="verification-icon">📋</div>

        <h2>Verification Pending</h2>
        <p className="verification-desc">
          We're reviewing your documents. This usually takes 1-2 business days. We'll notify you once you're approved.
        </p>

        <button className="verification-support-btn">CONTACT SUPPORT</button>
      </div>
    </div>
  );
};

export default VerificationPending;
