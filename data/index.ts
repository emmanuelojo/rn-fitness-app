import { ImageSourcePropType } from "react-native";

interface User {
  name: string;
  profile: ImageSourcePropType;
}
export const user: User = {
  name: "tugane",
  profile: require("@/assets/images/avatar.jpeg"),
};

export interface Category {
  id: number;
  name: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Squats",
  },
  {
    id: 2,
    name: "Pushup",
  },
  {
    id: 3,
    name: "Jumping",
  },
  {
    id: 4,
    name: "Squats",
  },
];

export interface Exercise {
  id: number;
  name: string;
  time: string;
  image: ImageSourcePropType;
  set: number;
}

// list of workouts exercises
export const exercises: Exercise[] = [
  {
    id: 1,
    name: "Jumping Jacks",
    time: "00:45",
    image: require("@/assets/images/exercises/jumping-jacks.png"),
    set: 2,
  },
  {
    id: 2,
    name: "Squats",
    time: "00:30",
    image: require("@/assets/images/exercises/squats.png"),
    set: 2,
  },
  {
    id: 3,
    name: "Biceps",
    time: "00:30",
    image: require("@/assets/images/exercises/biceps.png"),
    set: 2,
  },
  {
    id: 4,
    name: "Squats",
    time: "00:30",
    image: require("@/assets/images/exercises/Squats.jpeg"),
    set: 2,
  },
  {
    id: 5,
    name: "Pushup",
    time: "00:50",
    image: require("@/assets/images/exercises/Pushup.jpeg"),
    set: 2,
  },
  {
    id: 6,
    name: "Jumping",
    time: "00:45",
    image: require("@/assets/images/exercises/Jumping.jpeg"),
    set: 2,
  },
];

export interface Workout {
  id: number;
  name: string;
  coach: string;
  image: ImageSourcePropType;
  exercises: Exercise[];
  rating: number;
  minutes: number;
  calories: number;
  description: string;
}

// list of workouts
export const workouts: Workout[] = [
  {
    id: 1,
    name: "Lower body training",
    coach: "Dasha Gaivoronski",
    image: require("@/assets/images/workouts/frederik-rosar-uQOBWxjSd-4-unsplash.jpg"),
    exercises,
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Proident cupidatat laboris deserunt aute irure commodo do nisi cillum ullamco sint dolore magna. Cillum ad fugiat velit tempor nostrud. Non pariatur irure ea dolor nulla exercitation. Amet quis adipisicing ullamco do in et ullamco mollit excepteur ipsum tempor.",
  },
  {
    id: 2,
    name: "Body Pump",
    coach: "Dasha Gaivoronski",
    image: require("@/assets/images/workouts/photo-1434682966726-19ad3a76e143.jpeg"),
    exercises,
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Amet pariatur non ullamco non tempor nostrud in occaecat amet enim qui. Est deserunt ut eiusmod ipsum. Consectetur ex aute dolore magna voluptate Lorem pariatur aliqua elit ex consequat non ex.",
  },
  {
    id: 3,
    name: "Leg muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("@/assets/images/workouts/alora-griffiths-AkEr0jc5Lvs-unsplash.jpeg"),
    exercises,
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Anim aliquip et labore est voluptate. Mollit mollit Lorem anim quis veniam laborum irure esse. Quis pariatur enim id magna non et occaecat Lorem ad deserunt reprehenderit magna esse. Consequat aliqua aliquip proident et fugiat dolor eu dolor Lorem elit duis exercitation pariatur. Enim tempor veniam eiusmod deserunt est excepteur laborum id id pariatur non ipsum. Tempor id irure ipsum anim minim commodo dolor veniam. Eiusmod reprehenderit aliquip officia elit sit ex.",
  },
  {
    id: 4,
    name: "Arms muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("@/assets/images/workouts/photo-1546483875-ad9014c88eba.jpeg"),
    exercises,
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Cupidatat ad deserunt elit mollit deserunt dolor aliquip velit eu. Consequat culpa aute labore aliqua excepteur proident sint eiusmod sunt ea anim magna ea. Eiusmod minim nostrud anim sunt fugiat aliqua nisi quis adipisicing consectetur. Velit elit amet labore ullamco ea enim nulla.",
  },
  {
    id: 5,
    name: "Leg muscle strength",
    coach: "Dasha Gaivoronski",
    image: require("@/assets/images/popular-workouts/pw-1.jpg"),
    exercises,
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Reprehenderit ut nisi irure duis irure velit laborum irure aliqua. Eiusmod dolor culpa mollit occaecat minim Lorem ex occaecat voluptate. Nisi esse velit veniam laborum sunt. Incididunt velit quis do id reprehenderit deserunt. Sint magna excepteur aute elit non ut in ex et nostrud.",
  },
  {
    id: 6,
    name: "Full body strength",
    coach: "Dasha Gaivoronski",
    image: require("@/assets/images/workouts/spencer-davis-0ShTs8iPY28-unsplash.jpeg"),
    exercises,
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Nulla consequat ullamco proident labore exercitation enim consectetur. Cillum ex veniam mollit id exercitation. Quis in labore labore elit reprehenderit elit eiusmod.",
  },
  {
    id: 7,
    name: "Glutes",
    coach: "Dasha Gaivoronski",
    image: require("@/assets/images/workouts/victor-freitas-KkYWWpurqbE-unsplash.jpeg"),
    exercises,
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Minim eu exercitation laboris tempor voluptate est voluptate cillum. Ad tempor eu minim esse enim. Ex reprehenderit exercitation deserunt reprehenderit minim irure consectetur et.",
  },
  {
    id: 8,
    name: "Abs and core",
    coach: "Dasha Gaivoronski",
    image: require("@/assets/images/workouts/photo-1434682966726-19ad3a76e143.jpeg"),
    exercises,
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Ullamco commodo nostrud esse excepteur labore enim elit excepteur. Et non minim enim fugiat culpa sit sint irure irure amet reprehenderit enim non velit. Consectetur incididunt velit velit voluptate velit. Sint ex magna in aliquip. Dolore sunt deserunt cillum nostrud.",
  },
];

export interface Plan {
  id: number;
  name: string;
  duration: string;
  image: ImageSourcePropType;
  location: string;
  rating: number;
  minutes: number;
  calories: number;
  description: string;
}

// list of workout plans
export const workoutPlans: Plan[] = [
  {
    id: 1,
    name: "Leg muscle strength",
    duration: "8 weeks",
    location: "Home",
    image: require("@/assets/images/workouts/photo-1434682966726-19ad3a76e143.jpeg"),
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Quis consequat esse laborum enim eiusmod duis culpa enim nulla consequat aute. Amet exercitation deserunt nulla et sit do. Eu fugiat et anim labore. Minim non laboris in anim.",
  },
  {
    id: 2,
    name: "Body Pump",
    duration: "8 weeks",
    location: "Home",
    image: require("@/assets/images/workouts/photo-1541534741688-6078c6bfb5c.jpeg"),
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Velit aute culpa et sit aliqua quis incididunt consectetur esse do minim. Cupidatat cillum labore aliqua cupidatat exercitation minim occaecat nostrud Lorem culpa do proident ea. Voluptate amet irure nulla velit cillum magna dolore. Cillum labore ea ut Lorem adipisicing excepteur laboris ullamco magna dolor do consectetur ipsum. Magna aliquip est pariatur exercitation aute.",
  },
  {
    id: 3,
    name: "Leg muscle strength",
    duration: "8 weeks",
    location: "Home",
    image: require("@/assets/images/workouts/photo-1546483875-ad9014c88eba.jpeg"),
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "Labore laborum laborum dolore laboris occaecat commodo. Do dolore commodo laborum exercitation non dolore nostrud elit voluptate velit excepteur officia ullamco reprehenderit. Quis nostrud tempor ullamco exercitation. Est reprehenderit elit ex consequat adipisicing laborum.",
  },
  {
    id: 4,
    name: "Leg muscle strength",
    duration: "8 weeks",
    location: "Home",
    image: require("@/assets/images/workouts/photo-1434682966726-19ad3a76e143.jpeg"),
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "In velit culpa dolor in amet amet pariatur consectetur enim ea. Minim in labore nostrud labore officia labore velit proident labore aliquip ipsum ipsum ullamco aliquip. Magna anim reprehenderit nisi irure pariatur non. Ipsum minim ad ipsum cillum consequat. Ipsum aliquip ad nulla laborum reprehenderit esse commodo non.",
  },
];

export interface TodaysPlan extends Plan {
  level: number;
  progress: number;
}

// list of today's plan
export const todayPlans: TodaysPlan[] = [
  {
    id: 1,
    name: "Push up",
    duration: "8 weeks",
    location: "Home",
    image: require("@/assets/images/todays-plan/tp-1.jpg"),
    rating: 5,
    minutes: 52,
    calories: 350,
    description: "100 push ups a day",
    level: 2,
    progress: 50,
  },
  {
    id: 2,
    name: "Sit up",
    duration: "8 weeks",
    location: "Home",
    image: require("@/assets/images/todays-plan/tp-2.jpg"),
    rating: 5,
    minutes: 52,
    calories: 350,
    description: "20 sit ups a day",
    level: 1,
    progress: 20,
  },
  {
    id: 3,
    name: "Knee Push up",
    duration: "8 weeks",
    location: "Home",
    image: require("@/assets/images/todays-plan/tp-3.jpg"),
    rating: 5,
    minutes: 52,
    calories: 350,
    description: "50 knee push ups a day",
    level: 3,
    progress: 80,
  },
  {
    id: 4,
    name: "Leg muscle strength",
    duration: "8 weeks",
    location: "Home",
    image: require("@/assets/images/workouts/photo-1546483875-ad9014c88eba.jpeg"),
    rating: 5,
    minutes: 52,
    calories: 350,
    description: "In velit cult nisim consequat.",
    level: 2,
    progress: 45,
  },
];

export interface BestForYou {
  id: number;
  name: string;
  duration: string;
  image: ImageSourcePropType;
  level: string;
}

// list of best for you
export const bestForYou: BestForYou[] = [
  {
    id: 1,
    name: "Belly fat burner",
    duration: "10 mins",
    image: require("@/assets/images/best-for-you/bfu-1.jpg"),
    level: "Beginner",
  },
  {
    id: 2,
    name: "Lose fat",
    duration: "10 mins",
    image: require("@/assets/images/best-for-you/bfu-2.jpg"),
    level: "Beginner",
  },
  {
    id: 3,
    name: "Plank",
    duration: "5 mins",
    image: require("@/assets/images/best-for-you/bfu-3.jpg"),
    level: "Beginner",
  },
  {
    id: 4,
    name: "Build Chest",
    duration: "30 mins",
    image: require("@/assets/images/best-for-you/bfu-4.jpg"),
    level: "Beginner",
  },
];

export interface Challenge {
  id: number;
  name: string;
  bgColour: string;
  textColour: string;
  // icon: React.ReactNode;
  // icon: any
  image: ImageSourcePropType;
}

// list of challenges
export const challenges: Challenge[] = [
  {
    id: 1,
    name: "Plank Challenge",
    bgColour: "#BBF246",
    textColour: "#192126",
    // icon: FireBigIcon,
    image: require("@/assets/images/challenges/plank.png"),
  },
  {
    id: 2,
    name: "Sprint Challenge",
    bgColour: "#192126",
    textColour: "#FFFFFF",
    // icon: FireBigIcon,
    image: require("@/assets/images/challenges/sprint.png"),
  },
  {
    id: 3,
    name: "Squat Challenge",
    bgColour: "#FFFFFF",
    textColour: "#192126",
    // icon: FireBigIcon,
    image: require("@/assets/images/challenges/squat.png"),
  },
];

// list of warm ups
export const warmUps: BestForYou[] = [
  {
    id: 1,
    name: "Leg exercises",
    duration: "10 mins",
    image: require("@/assets/images/warm-ups/legs.jpg"),
    level: "Beginner",
  },
  {
    id: 2,
    name: "Backwards lunges",
    duration: "5 mins",
    image: require("@/assets/images/warm-ups/lunges.jpg"),
    level: "Beginner",
  },
];
