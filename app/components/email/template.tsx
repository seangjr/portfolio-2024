import React from "react";

interface EmailTemplateProps {
  name: string;
}
const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name }) => {
  return (
    <div>
      <h1>Hi, {name}!</h1>
      <p>
        Thank you for reaching out to me. I will get back to you as soon as
        possible.
      </p>
      <p>Best Regards,</p>
      <p>Sean Relampagos</p>
    </div>
  );
};

export default EmailTemplate;
