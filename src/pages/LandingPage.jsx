import {
    Heading,
    Text,
    Flex,
    View,
    Image,
    Button,
    Divider,
} from "@aws-amplify/ui-react";
import PropTypes from "prop-types";
import "@aws-amplify/ui-react/styles.css";
import './LandingPage.css';

export default function LandingPage() {
    return (
        <Flex direction="column" className="landing-page">
            {/* Fixed Navbar */}
            <View
                as="nav"
                backgroundColor="#000"
                padding="1rem 2rem"
                borderBottom="1px solid #333"
                position="fixed"
                top="0"
                left="0"
                right="0"
                zIndex="9999"
            >
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    maxWidth="1200px"
                    margin="0 auto"
                    width="100%"
                    flexWrap="wrap"
                >
                    <Image
                        src="/proof-logo.png"
                        alt="Proof Integrity Solutions Logo"
                        style={{ height: "3.5em" }}
                    />

                    <Flex
                        gap="1.5rem"
                        alignItems="center"
                        justifyContent="center"
                        flex="1"
                    >
                        <Button variation="link" colorTheme="white">Services</Button>
                        <Button variation="link" colorTheme="white">About</Button>
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

            <div className="parallax">
                <div className="parallax-content">
                    <Heading level={1} color="white">Investigations and Security Solutions</Heading>
                    <Text fontSize="1.2rem" marginTop="0.75rem">
                        We are a premier private investigation company offering discreet, professional,
                        and reliable services. Whether you need surveillance, background checks, or
                        fraud investigation, Proof Integrity Solutions delivers results you can trust.
                    </Text>
                    <Button variation="primary" marginTop="1.5rem">
                        Explore Services
                    </Button>
                </div>
            </div>

            {/* Rest of the page */}
            <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                padding="2rem"
                marginTop="2rem"
            >
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
