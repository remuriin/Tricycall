import "./PaymentMethod.css";

const PaymentMethod = () => {
  return (
    <div className="payment-method-page">
      <div className="payment-method-card">
        <h2>Payment Method</h2>
        <h4 className="payment-method-subtitle">SELECT A PAYMENT METHOD</h4>

        <label className="payment-method-option">
          <input type="radio" name="payment" />
          <span>Cash</span>
        </label>

        <label className="payment-method-option">
          <input type="radio" name="payment" />
          <span>GCash</span>
        </label>

        <label className="payment-method-option">
          <input type="radio" name="payment" />
          <span>Credit / Debit Card</span>
        </label>

        <p className="payment-method-fare">Estimated fare: ₱30 – ₱45</p>

        <button className="payment-method-confirm-btn">CONFIRM</button>
      </div>
    </div>
  );
};

export default PaymentMethod;
