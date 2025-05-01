import { Image, View, TouchableOpacity } from "react-native";
import { Plan } from "@/data";
import Spacing from "@/constants/Spacing";
import Colors from "@/constants/Colors";
import AppText from "../AppText";
import Font from "@/constants/Font";
import { Ionicons } from "@expo/vector-icons";
// import StarRating from 'react-native-star-rating-widget';
// import StarRating from "react-native-star-rating-widget";
// import { StarRatingDisplay } from "react-native-star-rating-widget";
import { useState } from "react";

interface Props {
  plan: Plan;
}

const WorkOutPlan = ({ plan }: Props) => {
  // const [rating, setRating] = useState(plan.rating);

  return (
    <TouchableOpacity
      style={{
        padding: Spacing.padding.sm,
        marginBottom: Spacing.margin.base,
        backgroundColor: Colors.primary,
        borderRadius: Spacing.borderRadius.base,
        flexDirection: "row",
      }}
      key={plan.id}
    >
      <Image
        source={plan.image}
        style={{
          width: 100,
          height: 100,
          borderRadius: Spacing.borderRadius.base,
        }}
      />
      <View
        style={{
          marginLeft: Spacing.margin.base,
          justifyContent: "space-between",
        }}
      >
        <AppText
          style={{
            fontFamily: Font["poppins-semiBold"],
          }}
        >
          {plan.name}
        </AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="calendar-outline" size={16} color={Colors.text} />
          <AppText
            style={{
              marginLeft: Spacing.margin.base,
            }}
          >
            {plan.duration} | {plan.location}
          </AppText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <Rating rating={plan.rating} max={5} iconWidth={20} iconHeight={20} /> */}
          {/* <StarRatingDisplay rating={plan.rating} /> */}
          {/* <StarRating rating={rating} onChange={setRating} /> */}

          <View style={{ flexDirection: "row" }}>
            <Ionicons name="star" size={16} color="yellow" />
            <Ionicons name="star" size={16} color="yellow" />
            <Ionicons name="star" size={16} color="yellow" />
            <Ionicons name="star" size={16} color="yellow" />
            <Ionicons name="star" size={16} color="yellow" />
          </View>
          <AppText
            style={{
              marginLeft: Spacing.margin.sm,
            }}
          >
            {plan.rating}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkOutPlan;
