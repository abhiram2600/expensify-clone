import GenericIcon from "@/assets/images/icons/generic-icon.svg";

export enum status {
  ALL = "All",
  DRAFTS = "Drafts",
  OUTSTANDING = "Outstanding",
  APPROVED = "Approved",
  PAID = "Paid",
}

export type ledgerItemType = {
  id: number;
  amount: number;
  status: status;
  receipt: string;
  merchant: string;
  description: string;
  date: Date;
  category: "";
  paid: boolean;
};

export const doNotUseItDirectlyData: ledgerItemType[] = [
  {
    id: 1,
    amount: 12,
    status: status.APPROVED,
    receipt: "",
    merchant: "",
    description: "",
    date: new Date("2024-10-23"),
    category: "",
    paid: false,
  },
  {
    id: 2,
    amount: 43,
    status: status.DRAFTS,
    receipt: "",
    merchant: "xyz",
    description: "",
    date: new Date("2024-10-24"),
    category: "",
    paid: true,
  },
  {
    id: 3,
    amount: 100,
    status: status.PAID,
    receipt: "",
    merchant: "xyz",
    description: "",
    date: new Date("2024-10-25"),
    category: "",
    paid: false,
  },
  {
    id: 4,
    amount: 12,
    status: status.APPROVED,
    receipt: "",
    merchant: "xyz",
    description: "",
    date: new Date("2024-10-26"),
    category: "",
    paid: true,
  },
  {
    id: 5,
    amount: 1,
    status: status.OUTSTANDING,
    receipt: "",
    merchant: "",
    description: "",
    date: new Date("2024-10-27"),
    category: "",
    paid: false,
  },
];

export const filters = [
  {
    icon: GenericIcon,
    type: status.ALL,
  },
  {
    icon: GenericIcon,
    type: status.DRAFTS,
  },
  {
    icon: GenericIcon,
    type: status.OUTSTANDING,
  },
  {
    icon: GenericIcon,
    type: status.APPROVED,
  },
  {
    icon: GenericIcon,
    type: status.PAID,
  },
];
