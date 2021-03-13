import React from "react";
import { Accordian, OptForm } from "../components";
import faqsData from "../fixtures/faqs";

export function FaqsContainer() {
  return (
    <Accordian>
      <Accordian.Title>Frequently Asked Questions</Accordian.Title>

      {faqsData.map((item) => (
        <Accordian.Item key={item.id}>
          <Accordian.Header>{item.header}</Accordian.Header>
          <Accordian.Body>{item.body}</Accordian.Body>
        </Accordian.Item>
      ))}

      <OptForm>
        <OptForm.Input placeholder="Email here" />
        <OptForm.Button>Try now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Enter your email to sign up or restart your membership
        </OptForm.Text>
      </OptForm>
    </Accordian>
  );
}
