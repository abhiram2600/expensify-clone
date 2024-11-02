import { expensifyLogo, profilePlaceHolder } from "@/assets/images";
import { GenericIconGreen } from "@/assets/images/icons";
import GenericIcon from "@/assets/images/icons/generic-icon.svg";

export enum status {
  ALL = "All",
  DRAFTS = "Drafts",
  OUTSTANDING = "Outstanding",
  APPROVED = "Approved",
  PAID = "Paid",
}

export type valueType = string | number | Date | undefined;

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
  from: string;
  to: string;
  fromImage: any;
  toImage: any;
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
    to: "Abhiram",
    from: "Expensify",
    fromImage: expensifyLogo,
    toImage: profilePlaceHolder,
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
    to: "Abhiram",
    from: "Expensify",
    fromImage: expensifyLogo,
    toImage: profilePlaceHolder,
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
    to: "Abhiram",
    from: "Expensify",
    fromImage: expensifyLogo,
    toImage: profilePlaceHolder,
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
    to: "Abhiram",
    from: "Expensify",
    fromImage: expensifyLogo,
    toImage: profilePlaceHolder,
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
    to: "Abhiram",
    from: "Expensify",
    fromImage: expensifyLogo,
    toImage: profilePlaceHolder,
  },
  {
    id: 6,
    amount: 100,
    status: status.PAID,
    receipt: "",
    merchant: "xyz",
    description: "",
    date: new Date("2024-10-25"),
    category: "",
    paid: false,
    to: "Abhiram",
    from: "Expensify",
    fromImage: expensifyLogo,
    toImage: profilePlaceHolder,
  },
  {
    id: 7,
    amount: 12,
    status: status.APPROVED,
    receipt: "",
    merchant: "xyz",
    description: "",
    date: new Date("2024-10-26"),
    category: "",
    paid: true,
    to: "Abhiram",
    from: "Expensify",
    fromImage: expensifyLogo,
    toImage: profilePlaceHolder,
  },
  {
    id: 8,
    amount: 1,
    status: status.OUTSTANDING,
    receipt: "",
    merchant: "",
    description: "",
    date: new Date("2024-10-27"),
    category: "",
    paid: false,
    to: "Abhiram",
    from: "Expensify",
    fromImage: expensifyLogo,
    toImage: profilePlaceHolder,
  },
];

export const filters = [
  {
    icon: GenericIcon,
    iconSelected: GenericIconGreen,
    type: status.ALL,
  },
  {
    icon: GenericIcon,
    iconSelected: GenericIconGreen,
    type: status.DRAFTS,
  },
  {
    icon: GenericIcon,
    iconSelected: GenericIconGreen,
    type: status.OUTSTANDING,
  },
  {
    icon: GenericIcon,
    iconSelected: GenericIconGreen,
    type: status.APPROVED,
  },
  {
    icon: GenericIcon,
    iconSelected: GenericIconGreen,
    type: status.PAID,
  },
];
