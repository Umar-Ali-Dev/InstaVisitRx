export interface QueueRequest {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  provider: string;
  status: "Waiting provider" | "Waiting Response" | "Provider Respond" | "Completed" | "Resend Prescription" | "Prescription Sent" | "Prescription Failed";
}

// Sample data
const sampleData: QueueRequest[] = [
  {
    id: 1,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "---",
    status: "Waiting provider",
  },
  {
    id: 2,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Provider Respond",
  },
  {
    id: 3,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Completed",
  },
  {
    id: 4,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "---",
    status: "Waiting provider",
  },
  {
    id: 5,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Resend Prescription",
  },
  {
    id: 6,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Prescription Sent",
  },
  {
    id: 7,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "---",
    status: "Waiting provider",
  },
  {
    id: 8,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Prescription Failed",
  },
  {
    id: 9,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Provider Respond",
  },
  {
    id: 10,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "---",
    status: "Waiting provider",
  },
  {
    id: 11,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Completed",
  },
  {
    id: 12,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Prescription Sent",
  },
  {
    id: 13,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "---",
    status: "Waiting provider",
  },
  {
    id: 14,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Resend Prescription",
  },
  {
    id: 15,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Provider Respond",
  },
  {
    id: 16,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "---",
    status: "Waiting provider",
  },
  {
    id: 17,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Prescription Failed",
  },
  {
    id: 18,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Completed",
  },
  {
    id: 19,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "---",
    status: "Waiting provider",
  },
  {
    id: 20,
    fullName: "Jospan Franklin",
    email: "Jospan@gmail.com",
    phone: "(987) 876 8768",
    provider: "Dr. Alina Star",
    status: "Prescription Sent",
  },
];

// Generate more data for realistic pagination (995 total)
const generateMoreData = (): QueueRequest[] => {
  const statuses: QueueRequest["status"][] = [
    "Waiting provider",
    "Provider Respond",
    "Completed",
    "Resend Prescription",
    "Prescription Sent",
    "Prescription Failed",
    "Waiting Response",
  ];
  const providers = ["---", "Dr. Alina Star", "Dr. John Smith", "Dr. Sarah Johnson"];
  
  const additionalData: QueueRequest[] = [];
  for (let i = 21; i <= 995; i++) {
    additionalData.push({
      id: i,
      fullName: `Patient ${i}`,
      email: `patient${i}@gmail.com`,
      phone: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100} ${Math.floor(Math.random() * 9000) + 1000}`,
      provider: providers[Math.floor(Math.random() * providers.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }
  return [...sampleData, ...additionalData];
};

// Export the generated data
export const queueRequestsData = generateMoreData();
