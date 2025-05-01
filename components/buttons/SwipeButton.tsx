import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Gesture, GestureDetector, PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
  interpolateColor,
  runOnJS,
} from "react-native-reanimated";

const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 56;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;
const H_WAVE_RANGE = SWIPEABLE_DIMENSIONS + 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

interface Props {
  onToggle: () => void;
}

const SwipeButton = ({ onToggle }: Props) => {
  // Animated value for X translation
  const X = useSharedValue(0);
  // Toggled State
  // const [toggled, setToggled] = useState(false);
  // Gesture Handler Events

  const animatedGestureHandler = useAnimatedGestureHandler({
    // onStart: (_, ctx) => {
    //   ctx.completed = toggled;
    // },
    onActive: (e, ctx) => {
      let newValue;
      if (ctx.completed) {
        newValue = H_SWIPE_RANGE + e.translationX;
      } else {
        newValue = e.translationX;
      }

      if (newValue >= 0 && newValue <= H_SWIPE_RANGE) {
        X.value = newValue;
      }
    },
    onEnd: () => {
      if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
        X.value = withSpring(0);
        // runOnJS(handleComplete)(false);
      } else {
        X.value = withSpring(H_SWIPE_RANGE);
        // runOnJS(handleComplete)(true);
      }
    },
  });

  // const animatedGestureHandler = Gesture.Pan()
  // .onStart((e:any, ctx:any) => {
  //       let newValue;
  //       if (ctx.completed) {
  //         newValue = H_SWIPE_RANGE + e.translationX;
  //       } else {
  //         newValue = e.translationX;
  //       }

  //       if (newValue >= 0 && newValue <= H_SWIPE_RANGE) {
  //         X.value = newValue;
  //       }

  //       X.value = translationX.value;

  //     })
  //     .onEnd(() => {
  //       if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
  //         X.value = withSpring(0);
  //         // runOnJS(handleComplete)(false);
  //       } else {
  //         X.value = withSpring(H_SWIPE_RANGE);
  //         // runOnJS(handleComplete)(true);
  //       }})

  const InterpolateXInput = [0, H_SWIPE_RANGE];
  const AnimatedStyles = {
    // swipeCont: useAnimatedStyle(() => {
    //   return {};
    // }),
    // colorWave: useAnimatedStyle(() => {
    //   return {
    //     width: H_WAVE_RANGE + X.value,

    //     opacity: interpolate(X.value, InterpolateXInput, [0, 1]),
    //   };
    // }),
    swipeable: useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          X.value,
          [0, BUTTON_WIDTH - SWIPEABLE_DIMENSIONS - BUTTON_PADDING],
          ["#06d6a0", "#fff"]
        ),
        transform: [{ translateX: X.value }],
      };
    }),
    // swipeText: useAnimatedStyle(() => {
    //   return {
    //     opacity: interpolate(
    //       X.value,
    //       InterpolateXInput,
    //       [0.7, 0],
    //       Extrapolate.CLAMP,
    //     ),
    //     transform: [
    //       {
    //         translateX: interpolate(
    //           X.value,
    //           InterpolateXInput,
    //           [0, BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS],
    //           Extrapolate.CLAMP,
    //         ),
    //       },
    //     ],
    //   };
    // }),
  };

  {
    /* */
  }

  //     <View style={styles.swiperContainer}>
  // <GestureDetector gesture={animatedGestureHandler}>
  //         <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]} />

  //         </GestureDetector>

  //       <Text>Swipe Button</Text>
  //     </View>

  return (
    <View style={styles.swiperContainer}>
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]} />
      </PanGestureHandler>

      <Text>Swipe Button</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  swiperContainer: {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    backgroundColor: "green", //  '#fff',
    borderRadius: BUTTON_HEIGHT,
    padding: BUTTON_PADDING,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  colorWave: {
    position: "absolute",
    left: 0,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
  },
  swipeable: {
    position: "absolute",
    left: BUTTON_PADDING,
    height: SWIPEABLE_DIMENSIONS,
    width: SWIPEABLE_DIMENSIONS,
    borderRadius: SWIPEABLE_DIMENSIONS,
    zIndex: 3,
  },
  swipeText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    zIndex: 2,
    color: "#1b9aaa",
  },
});

export default SwipeButton;
