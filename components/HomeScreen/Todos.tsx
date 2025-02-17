import { View, Text } from "react-native";
import React, { useContext } from "react";
import TodoCards from "./TodoCards";
import { FlatList } from "react-native-gesture-handler";
import { UserContext } from "../../store/user-context";

const todoData = [
  {
    title: "Achieve 30k steps every week for blood sugar",
    author: "Laurie Simons",
    date: "Sep 5, 2024",
  },
  {
    title: "Take up health Coaching",
    author: "Laurie Simons",
    date: "Sep 5, 2024",
  },
  {
    title: "Go to a nearby gym and workout for 30 mins",
    author: "Laurie Simons",
    date: "Sep 5, 2024",
  },
  {
    title: "Complete 2 courses of Dr. Laurie Simons",
    author: "Laurie Simons",
    date: "Sep 5, 2024",
  },
];

const Todos = () => {
  const { tasks } = useContext(UserContext);

  const completedTodos = Object.values(tasks).filter(
    (status) => status === true
  ).length;

  const percentage = (completedTodos / 4) * 100;

  return (
    <View className="py-10">
      <Text className="font-semibold text-2xl">
        Let's check off your to-dos
      </Text>
      <View>
        <Text className="mt-10 text-secondary">
          {completedTodos}/4 Completed
        </Text>
        <View className="mt-4 relative">
          <View
            className={`absolute z-10 bg-green-400 h-5 rounded-full`}
            style={{ width: `${percentage}%` }}
          />
          <View className="absolute w-full bg-green-100 h-5 rounded-full" />
        </View>
      </View>
      <View className="mt-10">
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{ gap: 15 }}
          data={todoData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TodoCards
              title={item.title}
              author={item.author}
              date={item.date}
              index={index}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Todos;
