import GenericIcon from "@/assets/images/icons/generic-icon.svg";

enum STATUS {
  DRAFTS,
  OUTSTANDING,
  APPROVED,
  PAID,
}

export const ledgerItems = [
  {
    id: 1,
    amount: 12,
    status: STATUS.APPROVED,
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
    status: STATUS.DRAFTS,
  },
  {
    id: 3,
    amount: 100,
    status: STATUS.PAID,
  },
  {
    id: 4,
    amount: 12,
    status: STATUS.APPROVED,
  },
  {
    id: 5,
    amount: 1,
    status: STATUS.OUTSTANDING,
  },
];

export const filters = [
  {
    icon: GenericIcon,
    name: "All",
  },
  {
    icon: GenericIcon,
    name: "Drafts",
  },
  {
    icon: GenericIcon,
    name: "Outstanding",
  },
  {
    icon: GenericIcon,
    name: "Approved",
  },
  {
    icon: GenericIcon,
    name: "Paid",
  },
];
