import { Html } from "@react-email/html";
import { Body, Container, Heading, Row, Text } from "@react-email/components";
import * as React from "react";

export default function Email({
  email,
  name,
  message,
}: {
  email: string;
  name: string;
  message: string;
}) {
  return (
    <Html lang="en">
      <Body style={bodyStyles}>
        <Container style={contanierStyles}>
          <Row
            style={{
              marginBottom: "14px",
            }}
          >
            <Heading
              style={{
                ...textStyles,
                ...headingStyles,
              }}
            >
              Contact message from {name}
            </Heading>
          </Row>
          <Row>
            <Text
              style={{
                ...textStyles,
                fontSize: "14px",
                margin: "0px 0px 14px 0px",
              }}
            >
              {message}
            </Text>
            <Text
              style={{
                ...textStyles,
                fontSize: "14px",
                margin: "0px",
              }}
            >
              Sender — {email}
            </Text>
          </Row>
        </Container>
      </Body>
    </Html>
  );
}

const bodyStyles = {
  backgroundColor: "#fff",
  fontFamily: "Arial,Helvetica,sans-serif",
  color: "#1D1C1D",
  padding: "32px 0px",
};

const contanierStyles = {
  maxWidth: "600px",
  backgroundColor: "#fff",
  color: "#1D1C1D",
  paddingTop: "56px",
  paddingBottom: "56px",
  paddingLeft: "36px",
  paddingRight: "36px",
};

const textStyles = {
  fontFamily: "Arial,Helvetica,sans-serif",
  color: "#1D1C1D",
  fontWeight: "400",
};

const headingStyles = {
  display: "inline-block",
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "100%",
  margin: "0px",
};

const buttonStyles = {
  width: "fit-content",
  margin: "0 auto",
  backgroundColor: "#21212E",
  fontFamily: "Arial,Helvetica,sans-serif",
  fontSize: "14px",
  color: "#fff",
  fontWeight: 500,
  borderRadius: "10px",
};
