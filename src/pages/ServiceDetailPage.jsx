import { useParams, Link } from "react-router-dom";
import { Heading, Text, Flex, Button, View, Image } from "@aws-amplify/ui-react";
import services from "../data/services";

export default function ServiceDetailPage() {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return (
            <Flex direction="column" alignItems="center" padding="4rem">
                <Heading level={2} color="white">Service Not Found</Heading>
                <Link to="/services">
                    <Button marginTop="2rem">Back to Services</Button>
                </Link>
            </Flex>
        );
    }

    return (
        <Flex direction="column" backgroundColor="#000" color="#f1f1f1" minHeight="100vh">
            {/* Navbar */}
            <View className="navbar">
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    maxWidth="1200px"
                    margin="0 auto"
                    width="100%"
                    flexWrap="wrap"
                >
                    <Link to="/">
                        <Image
                            src="/proof-logo.png"
                            alt="Proof Integrity Solutions Logo"
                            style={{ height: "3.5em", cursor: "pointer" }}
                        />
                    </Link>

                    <Flex gap="1.5rem" alignItems="center" justifyContent="center" flex="1">
                        <Link to="/services">
                            <Button variation="link" colorTheme="white">Services</Button>
                        </Link>
                        <Link to="/about">
                            <Button variation="link" colorTheme="white">About</Button>
                        </Link>
                        <Button variation="link" colorTheme="white">Resources</Button>
                    </Flex>

                    <Flex gap="1rem" alignItems="center" flexShrink="0">
                        <Text fontSize="0.9rem" color="white" whiteSpace="nowrap">
                            📞 (555) 123-4567
                        </Text>
                        <Button variation="primary">Contact Us</Button>
                    </Flex>
                </Flex>
            </View>

            {/* Content Section */}
            <Flex
                direction="column"
                alignItems="center"
                padding="4rem 2rem"
                marginTop="6rem" // 👈 Push content below the fixed navbar
            >
                <Heading level={1} color="#047d95" marginBottom="1rem">{service.title}</Heading>
                <Text maxWidth="800px" fontSize="1.1rem" lineHeight="1.75">
                    {service.description}
                </Text>

                <Link to="/services">
                    <Button marginTop="2rem" variation="primary">← Back to Services</Button>
                </Link>
            </Flex>
        </Flex>
    );
}