const IncomingTemplate = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  return (
    <div>
      <h2>Hey Sean, you have an incoming message from {name}!</h2>
      <a
        href={`mailto:${email}`}
        style={{
          color: "blue",
        }}
      >
        {email}
      </a>
      <p
        style={{
          whiteSpace: "pre-line",
        }}
      >
        {message}
      </p>
    </div>
  );
};

export default IncomingTemplate;
