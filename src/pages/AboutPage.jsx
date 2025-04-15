// src/pages/AboutPage.jsx
import {
    Heading,
    Text,
    Flex,
    View,
    Image,
    Divider,
    Card,
    Button,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function AboutPage() {
    return (
        <Flex direction="column" style={{ backgroundColor: "#000", color: "#f1f1f1" }}>
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
                        style={{ height: "3.5em" }}
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

            {/* Content */}
            <Flex direction="column" alignItems="center" marginTop="8rem" padding="2rem" gap="1.5rem">
                <Heading level={1} color="#047d95">About Us</Heading>

                <Text maxWidth="900px" fontSize="1.05rem">
                    Proof Integrity Solutions was established to uniquely specialise in investigating all matters of integrity.
                    We are experienced in assisting companies and sporting organisations to address integrity issues to create
                    a more productive and amiable environment. We also assist non-profit organisations through impartial external
                    investigations and integrity reviews.
                </Text>

                <Divider style={{ width: "100%", backgroundColor: "#222" }} />

                <Flex
                    direction="row"
                    wrap="wrap"
                    justifyContent="center"
                    alignItems="stretch"
                    gap="2rem"
                    maxWidth="1200px"
                    padding="2rem"
                >
                    <Card backgroundColor="#111" borderRadius="12px" padding="2rem" maxWidth="350px" flex="1">
                        <Image
                            src="/james.png"
                            alt="James Williams"
                            style={{ borderRadius: "12px", marginBottom: "1rem", width: "100%", objectFit: "cover", height: "250px" }}
                        />
                        <Heading level={3} color="white" marginBottom="0.5rem">James Williams — Director</Heading>
                        <Text fontSize="0.95rem" color="#f1f1f1">
                            James Williams, the founder and company director, is the principal licensed investigator. With a background
                            as an integrity manager for a large organisation, James is respected for his work ethic, professionalism, and
                            determination to achieve the best outcome for clients. His qualifications include:
                        </Text>
                        <ul style={{ marginTop: "0.75rem", lineHeight: "1.6" }}>
                            <li>Masters in Criminology/Criminal Justice</li>
                            <li>Diploma in Government Fraud</li>
                            <li>Security and Risk Management</li>
                            <li>Training and Assessment</li>
                            <li>Investigative Services</li>
                        </ul>
                    </Card>

                    <Card backgroundColor="#111" borderRadius="12px" padding="2rem" maxWidth="350px" flex="1">
                        <Image
                            src="/wendy.png"
                            alt="Wendy Williams"
                            style={{ borderRadius: "12px", marginBottom: "1rem", width: "100%", objectFit: "cover", height: "250px" }}
                        />
                        <Heading level={3} color="white" marginBottom="0.5rem">Wendy Williams — Director & Operations Manager</Heading>
                        <Text fontSize="0.95rem" color="#f1f1f1">
                            Wendy Williams brings over 10 years of investigation experience and additional expertise in business management.
                            She is known for her attention to detail and specialises in:
                        </Text>
                        <ul style={{ marginTop: "0.75rem", lineHeight: "1.6" }}>
                            <li>Workplace investigations</li>
                            <li>Sporting organisation integrity</li>
                            <li>Dispute resolution in boards and committees</li>
                            <li>High-quality report writing and editing</li>
                        </ul>
                    </Card>

                    <Card backgroundColor="#111" borderRadius="12px" padding="2rem" maxWidth="350px" flex="1">
                        <Image
                            src="/megan.png"
                            alt="Megan Shaw"
                            style={{ borderRadius: "12px", marginBottom: "1rem", width: "100%", objectFit: "cover", height: "250px" }}
                        />
                        <Heading level={3} color="white" marginBottom="0.5rem">Megan Shaw — Senior Case Manager</Heading>
                        <Text fontSize="0.95rem" color="#f1f1f1">
                            Megan Shaw brings operational expertise and a background in government policy and administration.
                            She is an expert in:
                        </Text>
                        <ul style={{ marginTop: "0.75rem", lineHeight: "1.6" }}>
                            <li>Case and office management</li>
                            <li>Surveillance activity investigations</li>
                            <li>People management</li>
                            <li>Government liaison</li>
                        </ul>
                    </Card>
                </Flex>

            </Flex>

            <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                gap="1.25rem"
                className="contact-section"
            >
                <Divider />
                <Heading level={2}>Contact Us</Heading>
                <Text color="#f1f1f1">Email: contact@contact.com</Text>
                <Text color="#f1f1f1">Phone: (555) 123-4567</Text>
                <Button variation="primary" marginTop="1.5rem">
                    Request a Free Consultation
                </Button>
            </Flex>
        </Flex>
    );
}