import * as React from 'react';

interface EmailTemplateProps {
  fullName: string;
  phone:string;
  email:string;
  message:string;
  files: [];
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
 fullName,
}) => (
  <div>
    <h1>Welcome, {fullName}!</h1>
  </div>
);