import { CommonHeader } from "@/components/CommonHeader";
import { Text, View } from "@/components";
import React from "react";

interface InboxScreenProps {}

export const InboxScreen: React.FC<InboxScreenProps> = () => {
  return (
    <View.SafeAreaView>
      <CommonHeader screenName="Inbox" />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Still under construction
        </Text>
      </View>
    </View.SafeAreaView>
  );
};
