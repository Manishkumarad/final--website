const projects = {
  "college-finance": {
    slug: "college-finance",
    title: "College_Finance",
    subtitle: "Scalable finance platform for colleges — secure payments and analytics.",
    industry: "Higher Education / Finance",
    heroImage: "\images\financialcard.png",
    overview: `A finance management platform for colleges handling student fees, payments, transaction reconciliation, reporting, and admin dashboards. Built for high concurrency across multiple campuses with strict security and auditability.`,
    metrics: [
      { label: "Reconciliation Automation", value: 48 },
      { label: "Reporting latency (avg)", value: 2, suffix: "s" },
      { label: "Throughput (peak)", value: 5000, suffix: "TPS" }
    ],
    features: [
      "Fee tracking system",
      "Admin dashboard",
      "Reports & analytics",
      "Secure transactions"
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "PostgreSQL", "Stripe", "AWS"],
    sections: [
      { title: 'Dashboard & Reporting', body: 'Unified dashboards that aggregate payments, outstanding balances and cohort analytics in real time.', image: '/images/college-finance-1.svg', imagePosition: 'top' },
      { title: 'Transactions & Reconciliation', body: 'High-throughput transaction processing with automated reconciliation workflows and dispute handling.', image: '/images/college-finance-2.svg', imagePosition: 'left' },
      { title: 'Admin & Multi-tenant Controls', body: 'Role-based admin panels, tenant scoping and audit logs for regulatory compliance.', image: '/images/college-finance-3.svg', imagePosition: 'left' }
    ],
  },

  "scholorai": {
    slug: "scholorai",
    title: "ScholorAI",
    subtitle: "AI-powered student assistant for personalized learning.",
    industry: "EdTech / Personalized Learning",
    heroImage: "/images/ScholorAI dashboard.png",
    overview: `An AI-powered student assistant that provides tailored study material, Q&A, recommendations and workflow automation using a RAG-enabled GenAI pipeline.`,
    metrics: [
      { label: "Completion uplift", value: 38, suffix: "%" },
      { label: "AI-resolved queries", value: 70, suffix: "%" }
    ],
    features: ["AI chatbot", "Personalized recommendations", "Study assistant workflows"],
    tech: ["Next.js", "OpenAI", "Pinecone", "PostgreSQL"],
  },

  "42-ai-agent": {
    slug: "42-ai-agent",
    title: "42 AI Agent",
    subtitle: "Autonomous multi-agent automation platform.",
    industry: "Automation / Enterprise AI",
    heroImage: "/images/42-ai-agent-1.svg",
    overview: `A platform of autonomous AI agents orchestrating data retrieval, workflow automation, and decision-making across enterprise systems in real time.`,
    metrics: [
      { label: "Throughput improvement", value: 300, suffix: "%" },
      { label: "Manual tasks reduced", value: 50, suffix: "%" }
    ],
    features: ["Task automation", "Multi-agent communication", "Workflow execution engine"],
    tech: ["Node.js", "Kubernetes", "Kafka", "Temporal", "Vector DB"],
  },

  "real-estate-crm": {
    slug: "real-estate-crm",
    title: "Real Estate CRM",
    subtitle: "CRM tailored for property teams to increase conversions.",
    industry: "Real Estate / PropTech",
    heroImage: "/images/real-estate.png",
    overview: `CRM for brokers and property managers offering lead management, sales pipeline visualization, client tracking, and automation.`,
    metrics: [
      { label: "Lead-to-close increase", value: 35, suffix: "%" },
      { label: "Pipeline velocity", value: 40, suffix: "%" }
    ],
    features: ["Lead tracking", "Sales funnel visualization", "Customer management", "Notifications & reminders"],
    tech: ["Next.js", "PostgreSQL", "Elasticsearch", "Redis"],
  }
};

export default projects;
