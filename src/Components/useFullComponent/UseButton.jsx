const UseButton = ({
  text = "Book Appointment",
  to = "/contact",
  fullWidth = true,
}) => {
  return (
    <>
      <style>{`
      .book-blue-btn {
  background: linear-gradient(145deg, #16a34a, #0e8339 40%, #052e16);
  color: #fff !important;
  padding: 12px 32px !important;
  border-radius: 50px !important;
  font-weight: 600;
  font-size: 15px;
  animation: floatingGlow 3.5s infinite ease-in-out;
  transition: 0.4s;
  display: inline-block;
  text-decoration: none;
}

.book-blue-btn:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(11, 78, 53, 0.5);
}

@keyframes floatingGlow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
      `}</style>

      <Link
        className={`btn book-blue-btn ${fullWidth ? "w-100" : ""}`}
        to={to}
      >
        {text}
      </Link>
    </>
  );
};
export default UseButton;