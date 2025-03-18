export default function Contact() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("leland.a.mitchell2@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <p>
        Please contact me at:{" "}
        <span
          style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
          onClick={copyToClipboard}
        >
          leland.a.mitchell2@gmail.com
        </span>
      </p>
    </div>
  );
}
