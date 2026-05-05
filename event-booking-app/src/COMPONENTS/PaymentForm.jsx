import { useNavigate } from "react-router-dom";

export default function PaymentForm() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/success")}>
      Pay Now
    </button>
  );
}