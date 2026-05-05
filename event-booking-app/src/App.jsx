import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<ErrorPage />} />

    </>
  );
}

export default App;