import React, { useState } from "react";
import { Box, VStack, Text, Image, IconButton, Heading, useToast } from "@chakra-ui/react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const moods = [
  { id: 1, name: "Happy", image: "https://images.unsplash.com/photo-1590698933947-a202b069a861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhY2V8ZW58MHx8fHwxNzEzMjYyNTI2fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Energized", image: "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ2V0aWMlMjBwZXJzb258ZW58MHx8fHwxNzEzMjYyNTI3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Tired", image: "https://images.unsplash.com/photo-1554188572-9d184b57d8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aXJlZCUyMHBlcnNvbnxlbnwwfHx8fDE3MTMyNjI1Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Anxious", image: "https://images.unsplash.com/photo-1473106995954-101fc128abc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbnhpb3VzJTIwcGVyc29ufGVufDB8fHx8MTcxMzI2MjUyOHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 5, name: "Motivated", image: "https://images.unsplash.com/photo-1555817129-2fa6b81bd8e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3RpdmF0ZWQlMjBwZXJzb258ZW58MHx8fHwxNzEzMjYyNTI5fDA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);
  const [selectedMoods, setSelectedMoods] = useState([]);
  const toast = useToast();

  const handleSwipe = (direction) => {
    if (direction === "right") {
      setSelectedMoods([...selectedMoods, moods[currentMoodIndex]]);
      toast({
        title: `You selected ${moods[currentMoodIndex].name}`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
    setCurrentMoodIndex((prevIndex) => (prevIndex + 1) % moods.length);
  };

  return (
    <Box p={4}>
      <Heading mb={8}>Swipe Your Mood</Heading>
      {currentMoodIndex < moods.length ? (
        <VStack spacing={8}>
          <Image src={moods[currentMoodIndex].image} alt={moods[currentMoodIndex].name} boxSize="200px" objectFit="cover" borderRadius="lg" />
          <Text fontSize="2xl">{moods[currentMoodIndex].name}</Text>
          <Box>
            <IconButton icon={<FaThumbsDown />} aria-label="Dislike" onClick={() => handleSwipe("left")} size="lg" mr={4} />
            <IconButton icon={<FaThumbsUp />} aria-label="Like" onClick={() => handleSwipe("right")} size="lg" />
          </Box>
        </VStack>
      ) : (
        <Box>
          <Text fontSize="xl" mb={4}>
            Your selected moods:
          </Text>
          {selectedMoods.map((mood) => (
            <Text key={mood.id}>{mood.name}</Text>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Index;
