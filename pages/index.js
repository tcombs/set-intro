import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
} from "@chakra-ui/react";

const doSomeStuff = () => {
  console.log("Doing Stuff");
};

const InputForm = () => {
  return (
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
        <FormHelperText>Be precise</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="dur">Duration Seconds</FormLabel>
        <NumberInput min={0} max={10} precision={5}>
          <NumberInputField id="dur" placeholder="2.1" />
        </NumberInput>
        <FormHelperText>Be precise</FormHelperText>
      </FormControl>

      <Button colorScheme="purple" isFullWidth onClick={doSomeStuff}>
        Submit
      </Button>
    </VStack>
  );
};

const Home = () => {
  return (
    <Center>
      <Container>
        <InputForm />
      </Container>
    </Center>
  );
};
export default Home;
