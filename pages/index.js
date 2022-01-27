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
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Center>
      <Container>
        <VStack>
          <FormControl>
            <FormLabel htmlFor="youtube-url">Youtube URL</FormLabel>
            <Input
              id="youtube-url"
              type="text"
              placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="min">Start Minutes</FormLabel>
            <NumberInput min={0} precision={0}>
              <NumberInputField id="min" />
            </NumberInput>
            <FormHelperText>e.g. 5</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="sec">Start Seconds</FormLabel>
            <NumberInput min={0} precision={5}>
              <NumberInputField id="sec" />
            </NumberInput>
            <FormHelperText>e.g. 34.56</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="dur">Duration Seconds</FormLabel>
            <NumberInput min={0} max={10} precision={5}>
              <NumberInputField id="dur" />
            </NumberInput>
            <FormHelperText>e.g. 2.45</FormHelperText>
          </FormControl>
        </VStack>
      </Container>
    </Center>
  );
};
export default Home;
