"use client";

import { ApolloProvider } from "@apollo/client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import client from "../../apollo/apollo-client";
import { theme } from "../lib/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <SessionProvider>{children}</SessionProvider>
        </ChakraProvider>
      </CacheProvider>
    </ApolloProvider>
  );
};

export default Providers;
