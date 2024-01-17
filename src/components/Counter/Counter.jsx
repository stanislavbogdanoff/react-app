import "./Counter.css";

const Counter = ({ number }) => {
  console.log(number);
  return (
    <div>
      <h2>{number}</h2>
    </div>
  );
};

export default Counter;
