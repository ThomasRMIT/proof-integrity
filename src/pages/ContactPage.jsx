// src/pages/ContactPage.jsx
import {
    Flex,
    Heading,
    Text,
    TextField,
    TextAreaField,
    Button,
    View,
    Image,
} from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import "./LandingPage.css";

export default function ContactPage() {
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
                        <Link to="/contact">
                            <Button variation="link" colorTheme="white">Contact</Button>
                        </Link>
                    </Flex>

                    <Flex gap="1rem" alignItems="center" flexShrink="0">
                        <Text fontSize="0.9rem" color="white" whiteSpace="nowrap">
                            📞 (555) 123-4567
                        </Text>
                        <Link to="/contact">
                            <Button variation="primary">Contact Us</Button>
                        </Link>
                    </Flex>
                </Flex>
            </View>

            {/* Content */}
            <Flex
                direction="column"
                alignItems="center"
                padding="4rem 2rem"
                maxWidth="700px"
                margin="6rem auto 4rem auto"
                gap="1.5rem"
            >
                <Heading level={1} color="#047d95">Contact Us</Heading>
                <Text fontSize="1.05rem" textAlign="center">
                    Have a question or need help with an investigation? Fill out the form below and we'll get back to you.
                </Text>

                <TextField
                    label="Full Name"
                    placeholder="Your Name"
                    labelColor="white"
                    isRequired
                />
                <TextField
                    label="Email Address"
                    placeholder="you@example.com"
                    type="email"
                    labelColor="white"
                    isRequired
                />
                <TextField
                    label="Phone Number"
                    placeholder="Optional"
                    type="tel"
                    labelColor="white"
                />
                <TextAreaField
                    label="Message"
                    placeholder="Type your message here..."
                    labelColor="white"
                    rows={6}
                    isRequired
                />

                <Button variation="primary" size="large">
                    Submit
                </Button>
            </Flex>
        </Flex>
    );
}  