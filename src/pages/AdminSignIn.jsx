import { useState } from "react";
import { Flex, Heading, TextField, Button, View, Text } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function AdminSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Placeholder for real sign-in logic
    console.log("Admin sign-in attempted with:", { email, password });
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding="2rem"
      height="100vh"
    >
      <Heading level={1} marginBottom="1rem">
        Admin Sign In
      </Heading>

      <View as="form" onSubmit={handleSignIn} width="300px">
        <TextField
          label="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          marginBottom="1rem"
        />

        <TextField
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          marginBottom="1rem"
        />

        <Button type="submit" variation="primary" width="100%">
          Sign In
        </Button>
      </View>

      <Text fontSize="0.9rem" marginTop="2rem" color="#888">
        Authorized personnel only.
      </Text>
    </Flex>
  );
}