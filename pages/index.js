import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ReactPlayer from "react-player/youtube";
import {
  Center,
  Container,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  NumberInput,
  NumberInputField,
  Link,
  Button,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

const InputForm = (setupVideo) => {
  return (
    <Box padding={16}>
      <VStack>
        <FormControl>
          <FormLabel htmlFor="youtube-url">
            <Link href="https://youtube.com" isExternal>
              Youtube
            </Link>{" "}
            URL
          </FormLabel>
          <Input
            id="youtube-url"
            type="text"
            placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="min">Start Minutes</FormLabel>
          <NumberInput min={0} precision={0}>
            <NumberInputField id="min" placeholder="2" />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="sec">Start Seconds</FormLabel>
          <NumberInput min={0} precision={5}>
            <NumberInputField id="sec" placeholder="45.653" />
          </NumberInput>
          <FormHelperText>Be precise.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="dur">Duration Seconds</FormLabel>
          <NumberInput min={0} max={10} precision={5}>
            <NumberInputField id="dur" placeholder="2.1" />
          </NumberInput>
          <FormHelperText>Be precise.</FormHelperText>
        </FormControl>

        <Button colorScheme="purple" isFullWidth onClick={setupVideo}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

const Home = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [startMins, setStartMins] = useState(0);
  const [startSecs, setStartSecs] = useState(0);
  const [duration, setDuration] = useState(0);

  const setupVideo = () => {};

  return (
    <Center>
      <Container>
        <InputForm setupVideo />
        <VStack>
          <ReactPlayer
            playing
            controls
            url="https://www.youtube.com/watch?v=Mh5LY4Mz15o?start=30&end=31"
            youtubeConfig={{ playerVars: { start: 30, end: 35 } }}
          />
        </VStack>
      </Container>
    </Center>
  );
};
export default Home;
