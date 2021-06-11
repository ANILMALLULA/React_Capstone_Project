function ResultMessage({ msg, color }) {
  return msg !== "" ? (
    <h3 className={`text-center text-${color}`} style={{ fontSize: "20px" }}>
      {msg}
    </h3>
  ) : null;
}

export default ResultMessage;
