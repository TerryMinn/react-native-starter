import { SafeAreaView, View } from "react-native";
import React from "react";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

const index = () => {
  return (
    <SafeAreaView className="flex-1">
      <View>
        <Button>
          <Text>Button</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default index;
