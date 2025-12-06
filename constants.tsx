import React from 'react';
import { Truck, Clock, ShieldCheck, Leaf } from 'lucide-react';
import { Feature, Step } from './types';

export const WHATSAPP_NUMBER = "+918368937757";
export const WHATSAPP_MESSAGE_PREFILL = "Hi! I'd like to order some fresh groceries.";

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Mandi to Table",
    description: "Sourced directly from local mandis every morning at the date of delivery to ensure maximum freshness.",
    icon: Leaf
  },
  {
    id: 2,
    title: "Scheduled Delivery",
    description: "We deliver on dedicated weekly routes so your kitchen stays stocked with fresh produce.",
    icon: Truck
  },
  {
    id: 3,
    title: "Quality Guarantee",
    description: "Not satisfied with the quality? We offer an instant no-questions-asked refund.",
    icon: ShieldCheck
  },
  {
    id: 4,
    title: "Always On Time",
    description: "We deliver at the agreed time, every time. No surprises, no delays, just predictable service you can always rely on.",
    icon: Clock
  }
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Say Hello",
    description: "Simply say 'Hi' on WhatsApp to see today's fresh stock list and daily specials."
  },
  {
    number: "02",
    title: "Confirm Order",
    description: "Send us your list. We'll confirm availability and total price instantly."
  },
  {
    number: "03",
    title: "Quick Delivery",
    description: "Sit back and relax. We deliver your fresh groceries to your doorstep within hours."
  }
];