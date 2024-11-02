import { CommonHeader } from "@/components/CommonHeader";
import { View } from "@/components";
import React from "react";

interface InboxScreenProps {}

export const InboxScreen: React.FC<InboxScreenProps> = () => {
  return (
    <View.SafeAreaView>
      <CommonHeader screenName="Inbox" />
    </View.SafeAreaView>
  );
};
