import { CommonHeader } from "@/components/CommonHeader";
import { CustomView } from "@/components/CustomView";
import React from "react";

interface InboxScreenProps {}

export const InboxScreen: React.FC<InboxScreenProps> = () => {
  return (
    <CustomView>
      <CommonHeader screenName="Inbox" />
    </CustomView>
  );
};
