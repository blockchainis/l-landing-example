import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  Image,
  Box,
} from "@chakra-ui/react";
import lockedImage from "@assets/locked.png";

export default function Hero() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          당신의{" "}
          <Text as={"span"} color={"purple.400"}>
            비
          </Text>
          밀을{" "}
          <Text as={"span"} color={"purple.400"}>
            담
          </Text>
          아주세요{" "}
        </Heading>
        <Text color={"white.500"} maxW={"3xl"}>
          당신의 비밀을 영원히 안전하게 보관해주는 서비스 비담입니다.
          <br />
          블록체인 기술을 활용해 당신의 비밀을 어느 누구도 확인할 수 없습니다.
          또한 당신의 비밀을 어느 누구도 삭제할 수 없습니다. 오로지 당신만
          확인할 수 있고 간직할 수 있습니다.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            bg={"purple.400"}
            _hover={{ bg: "purple.500" }}
          >
            비담 시작하기
          </Button>
          <Button
            rounded={"full"}
            px={6}
            bg={"gray.500"}
            _hover={{ bg: "gray.600" }}
          >
            비담 알아보기
          </Button>
        </Stack>
        <Flex w={"full"} justifyContent={"center"} alignItems={"self"}>
          <Flex
            height={{ sm: "5rem", lg: "10rem" }}
            width={{ sm: "5rem", lg: "10rem" }}
            justify={"center"}
            align={"center"}
            position={"relative"}
            mt={10}
          >
            <Image
              height={{ sm: "5rem", lg: "10rem" }}
              src={lockedImage}
            ></Image>
            <Box
              bgImage={"linear-gradient(to right, #F213A4, #040BBF)"}
              width={"100%"}
              height={"100%"}
              position={"absolute"}
              filter={"blur(90px)"}
            ></Box>
          </Flex>
        </Flex>
      </Stack>
    </Container>
  );
}

const ImageBox = () => {
  return (
    <Box>
      <Image></Image>
    </Box>
  );
};
