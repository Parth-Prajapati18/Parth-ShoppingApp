import React from "react";
import { Email, Item, Span} from 'react-html-email';

const EmailTemplate = ({
    appDate,
    appTime,
    email,
    firstName,
    lastName,
    phone,
    ring,
    storeLocation,
  }) => {
    return (
      <Email title="Appointment Confirmation">
        <Item>
          <Span fontSize={18} fontWeight="bold">
            Appointment Confirmation
          </Span>
        </Item>
        <Item>
          <Span>Dear {firstName} {lastName},</Span>
        </Item>
        <Item>
          <Span>Your virtual diamond appointment has been scheduled:</Span>
        </Item>
        <Item>
          <Span>Date: {appDate}</Span>
        </Item>
        <Item>
          <Span>Time: {appTime}</Span>
        </Item>
        <Item>
          <Span>Email: {email}</Span>
        </Item>
        <Item>
          <Span>Phone: {phone}</Span>
        </Item>
        <Item>
          <Span>Ring: {ring}</Span>
        </Item>
        <Item>
          <Span>Store Location: {storeLocation}</Span>
        </Item>
      </Email> 
    );
  };
  
  export default EmailTemplate;