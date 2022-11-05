import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"3px solid"}
      borderColor={"purple.700"}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"bold"} isTruncated color={"purple.300"}>
            {title}
          </StatLabel>
          <StatNumber fontSize={"4xl"} fontWeight={"bold"}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={"auto"} color={"purple.500"} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Statistics() {
  return (
    <Flex
      maxW="7xl"
      mx={"auto"}
      px={{ base: 2, sm: 12, md: 17 }}
      justifyContent={"center"}
      height={"100vh"}
      direction={"column"}
      position={"relative"}
    >
      <Box
        bgImage={"linear-gradient(to right, #8c1eaa, #272842)"}
        filter={"blur(1000px)"}
        position={"absolute"}
        width={"300px"}
        height={"100vh"}
        top={"0%"}
        left={"30%"}
        zIndex={"-900"}
      ></Box>
      <chakra.h1
        textAlign={"center"}
        fontSize={"6xl"}
        paddingBottom={20}
        fontWeight={"900"}
      >
        <Text
          bgGradient="linear(to-r, #7928CA, #FF0080)"
          bgClip="text"
          display={"inline"}
        >
          비담
        </Text>
        과 함께라면
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"심리적 안정감"}
          stat={"상승"}
          icon={<BsPerson size={"3em"} />}
        />
        <StatsCard
          title={"관리해야 할 계정"}
          stat={"1"}
          icon={<FiServer size={"3em"} />}
        />
        <StatsCard
          title={"보상으로 제공하는 NFT"}
          stat={"7"}
          icon={<GoLocation size={"3em"} />}
        />
      </SimpleGrid>
    </Flex>
  );
}
