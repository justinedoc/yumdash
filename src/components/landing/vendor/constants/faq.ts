import rocket from "@/assets/icons/rocket.svg";
import message from "@/assets/icons/message.svg";
import subscription from "@/assets/icons/subscription.svg";

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQGroup = {
  image: string;
  items: FAQItem[];
};

export const faqData: FAQGroup[] = [
  {
    image: rocket,
    items: [
      {
        question: "Getting started?",
        answer: "Visit Yumdash to create an account and start ordering easily.",
      },
      {
        question: "Order without account?",
        answer:
          "Yes, you can order as a guest, though signing up offers extra benefits.",
      },
      {
        question: "Special instructions?",
        answer: "Add notes during checkout to customize your order.",
      },
      {
        question: "How to add items?",
        answer:
          "Browse our menu, select items, and add them to your cart effortlessly.",
      },
    ],
  },
  {
    image:subscription ,
    items: [
      {
        question: "Special order notes?",
        answer:
          "Enter any special instructions in the designated field during checkout.",
      },
      {
        question: "Support hours?",
        answer: "Our customer support is available 24/7 to assist you.",
      },
      {
        question: "Support phone?",
        answer: "Yes, call our hotline at 123-456-7890 for assistance.",
      },
      {
        question: "Report an issue?",
        answer: "Visit our support page or email us at support@yumdash.com.",
      },
    ],
  },
  {
    image: message,
    items: [
      {
        question: "Feedback/complaint?",
        answer:
          "We value your feedback. Use our form to share complaints or suggestions.",
      },
      {
        question: "FAQ available?",
        answer:
          "Yes, check our FAQ section on the website for common questions.",
      },
      {
        question: "Subscription benefits?",
        answer:
          "Subscribers enjoy exclusive deals, faster delivery, and more perks.",
      },
      {
        question: "Subscribe?",
        answer:
          "Sign up on Yumdash and choose a subscription plan that fits your needs.",
      },
    ],
  },
];
