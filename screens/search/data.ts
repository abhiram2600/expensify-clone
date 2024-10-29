import GenericIcon from "@/assets/images/icons/generic-icon.svg";

export enum status {
  ALL = "All",
  DRAFTS = "Drafts",
  OUTSTANDING = "Outstanding",
  APPROVED = "Approved",
  PAID = "Paid",
}

export const ledgerItems = [
  {
    id: 1,
    amount: 12,
    status: status.APPROVED,
    receipt: "",
    merchant: "",
    description: "",
    date: "",
    category: "",
    paid: "",
  },
  {
    id: 2,
    amount: 43,
    status: status.DRAFTS,
    receipt: "",
    merchant: "",
    description: "",
    date: "",
    category: "",
    paid: "",
  },
  {
    id: 3,
    amount: 100,
    status: status.PAID,
    receipt: "",
    merchant: "",
    description: "",
    date: "",
    category: "",
    paid: "",
  },
  {
    id: 4,
    amount: 12,
    status: status.APPROVED,
    receipt: "",
    merchant: "",
    description: "",
    date: "",
    category: "",
    paid: "",
  },
  {
    id: 5,
    amount: 1,
    status: status.OUTSTANDING,
    receipt: "",
    merchant: "",
    description: "",
    date: "",
    category: "",
    paid: "",
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
