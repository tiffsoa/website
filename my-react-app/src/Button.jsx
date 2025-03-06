function Button() {
  //for inline css, don't forget that jsx uses pascal case
  const styles = {
    backgroundColor: "rgb(88, 147, 236)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={styles}>Click me</button>;
}

export default Button;
