import { Heading, Text, Flex, View, Image, Button, Divider } from "@aws-amplify/ui-react";
import PropTypes from "prop-types";
import "@aws-amplify/ui-react/styles.css";

export default function LandingPage() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding="2rem"
      className="landing-page"
    >
      <Image
        src="/logo.png"
        alt="Private Eye Logo"
        style={{ height: "6em", marginBottom: "1em" }}
      />

      <Heading level={1} marginBottom="1rem">
        Shadowhawk Investigations
      </Heading>

      <Text fontSize="1.2rem" textAlign="center" maxWidth="700px" marginBottom="2rem">
        We are a premier private investigation company offering discreet, professional, and
        reliable services. Whether you need surveillance, background checks, or fraud
        investigation, Shadowhawk Investigations delivers results you can trust.
      </Text>

      <Divider margin="2rem 0" />

      <Heading level={2}>Our Services</Heading>

      <Flex
        wrap="wrap"
        gap="2rem"
        justifyContent="center"
        marginTop="2rem"
        maxWidth="900px"
      >
        <ServiceCard
          title="Surveillance"
          description="Covert monitoring for personal, legal, or corporate cases."
        />
        <ServiceCard
          title="Background Checks"
          description="Thorough checks for employment, personal relationships, and legal matters."
        />
        <ServiceCard
          title="Fraud Investigation"
          description="Uncover insurance, corporate, or identity fraud with expert precision."
        />
      </Flex>

      <Divider margin="2rem 0" />

      <Heading level={2}>Contact Us</Heading>
      <Text>Email: contact@shadowhawkinvestigations.com</Text>
      <Text>Phone: (555) 123-4567</Text>
      <Button variation="primary" marginTop="2rem">
        Request a Free Consultation
      </Button>
    </Flex>
  );
}

function ServiceCard({ title, description }) {
  return (
    <View
      border="1px solid #ccc"
      borderRadius="10px"
      padding="2rem"
      textAlign="center"
      width="250px"
    >
      <Heading level={3} marginBottom="1rem">
        {title}
      </Heading>
      <Text>{description}</Text>
    </View>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};