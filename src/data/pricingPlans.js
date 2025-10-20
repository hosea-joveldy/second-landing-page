export const pricingPlans = [
  {
    name: "Starter",
    price: "$0.00",
    description: "For individuals or small teams just getting started.",
    buttonText: "Start for Free",
    features: [
      "Up to 3 active projects",
      "Real-time collaboration for 3 members",
      "Basic task and project management tools",
      "Cloud sync across devices",
      "Email support"
    ],
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "For growing teams that need advanced collaboration tools.",
    buttonText: "Upgrade to Pro",
    features: [
      "Unlimited projects and members",
      "Advanced analytics dashboard",
      "Custom workflows and automations",
      "Integration with Google Drive, and Notion",
      "Priority support"
    ],
    differentThanOther: true
  },
  {
    name: "Premium",
    price: "$39.99",
    description: "For large companies that require full control and scalability.",
    buttonText: "Upgrade to Premium",
    features: [
      "Everything in Pro, plus:",
      "Dedicated success manager",
      "SSO & advanced admin controls",
      "Custom deployment options",
      "24/7 enterprise-grade support"
    ],
  }
];
