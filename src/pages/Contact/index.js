import { useState } from "react";
import emailjs from "emailjs-com";
import {
  IoPhonePortraitOutline,
  IoMail,
  IoInformationCircle,
} from "react-icons/io5";
import {
  Flex,
  Box,
  Text,
  Stack,
  FormControl,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Button,
  Textarea,
  useColorMode,
  FormLabel,
  useToast,
} from "@chakra-ui/react";

const Contact = () => {
  let [formName, setName] = useState("");
  let [formEmail, setEmail] = useState("");
  let [formPhone, setPhone] = useState("");
  let [formSubject, setSubject] = useState("");
  let [formBody, setFormBody] = useState("");
  const toast = useToast();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "subject":
        setSubject(e.target.value);
        break;
      case "body":
        setFormBody(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_02btztc",
        "template_f119yjc",
        e.target,
        "user_cHlubb8PuipOBxZ6qcpcx"
      )
      .then(
        () => {
          toast({
            title: "Email successfully sent",
            description: "I will respond to your email within 24 hours.",
            status: "success",
            isClosable: true,
            position: "top",
          });

          setName("");
          setEmail("");
          setPhone("");
          setSubject("");
          setFormBody("");
        },
        (error) => {
          toast({
            title: "Something went wrong",
            description: error.text,
            status: "error",
            isClosable: true,
            position: "top",
          });
        }
      );
  };

  const { colorMode } = useColorMode();
  const inputBorder = { light: "gray.500", dark: "gray.200" };
  const bgColor = { light: "gray.200", dark: "gray.700" };

  return (
    <Flex justify="center" mt="5vh">
      <Box
        bg={bgColor[colorMode]}
        w={["80vw", "60vw", "60vw", "60vw"]}
        rounded="lg"
      >
        <Text as="h2" align="center" my="10px" fontSize="2xl" fontWeight="bold">
          Contact Me
        </Text>
        <form onSubmit={handleFormSubmit}>
          <Flex wrap="wrap" justify="center">
            <Stack spacing={3} width="40%" mx="auto" my="10px">
              <FormControl id="name" isRequired>
                <FormLabel>Name:</FormLabel>
                <InputGroup borderColor={inputBorder[colorMode]}>
                  <InputLeftElement
                    children={<Icon as={IoInformationCircle} />}
                  />
                  <Input
                    type="name"
                    placeholder="Name"
                    aria-label="Name"
                    name="name"
                    value={formName}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email:</FormLabel>
                <InputGroup borderColor={inputBorder[colorMode]}>
                  <InputLeftElement children={<Icon as={IoMail} />} />
                  <Input
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    name="email"
                    value={formEmail}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Phone:</FormLabel>
                <InputGroup borderColor={inputBorder[colorMode]}>
                  <InputLeftElement
                    children={<Icon as={IoPhonePortraitOutline} />}
                  />
                  <Input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="XXX-XXX-XXXX"
                    aria-label="Phone number"
                    name="phone"
                    value={formPhone}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
            </Stack>
            <Stack spacing={3} width="50%" mx="auto" my="10px">
              <FormControl isRequired>
                <FormLabel>Subject:</FormLabel>
                <InputGroup borderColor={inputBorder[colorMode]}>
                  <Input
                    type="text"
                    placeholder="Subject"
                    aria-label="Email subject line"
                    name="subject"
                    value={formSubject}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email Body:</FormLabel>
                <InputGroup borderColor={inputBorder[colorMode]}>
                  <Textarea
                    placeholder="What are you thinking?"
                    aria-label="Email body"
                    name="body"
                    value={formBody}
                    onChange={handleChange}
                    rows={5}
                  />
                </InputGroup>
              </FormControl>
            </Stack>

            <Text w="90%">
              If you are interested in hiring me and/or working together, please
              use this form to send me a brief email. I will contact you with 24
              hours of your initial query. Your email will only be used to
              respond to your original query.
            </Text>

            <Button
              type="submit"
              boxShadow="sm"
              w="30%"
              my="10px"
              _hover={{ boxShadow: "md" }}
              _active={{ boxShadow: "lg" }}
            >
              Send it!
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default Contact;
