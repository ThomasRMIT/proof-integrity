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
import "./LandingPage.css";
import React, { useEffect, useRef, useState } from "react";

export default function LandingPage() {
    const scrollRef = useRef(null);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let animationFrameId;
        let lastTime = performance.now();
        const speed = 0.2; // pixels per ms

        const scroll = (time) => {
            const delta = time - lastTime;
            lastTime = time;

            if (!paused) {
                container.scrollLeft += delta * speed;
                if (Math.ceil(container.scrollLeft) >= container.scrollWidth - container.clientWidth - 1) {
                    container.scrollLeft = 0;
                }
            }

            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [paused]);

    return (
        <Flex direction="column">
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
                    <Image
                        src="/proof-logo.png"
                        alt="Proof Integrity Solutions Logo"
                        style={{ height: "3.5em" }}
                    />

                    <Flex gap="1.5rem" alignItems="center" justifyContent="center" flex="1">
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

            {/* Hero Section */}
            <div className="parallax">
                <div className="parallax-content">
                    <Heading level={1} color="white" marginBottom="1rem" fontWeight="500">
                        Investigations and Security Solutions
                    </Heading>
                    <Text fontSize="1.15rem" lineHeight="1.7" color="white">
                        We are a premier private investigation company offering discreet,
                        professional, and reliable services. Whether you need surveillance,
                        background checks, or fraud investigation, Proof Integrity Solutions
                        delivers results you can trust.
                    </Text>
                    <Button variation="primary" marginTop="2rem">
                        Explore Services
                    </Button>
                </div>
            </div>

            {/* Services Section */}
            <div className="services-section">
                <Divider />
                <Heading level={2} style={{ textAlign: "center", marginTop: "1.5rem" }}>
                    Our Services
                </Heading>

                <div
                    className="services-scroll-container"
                    ref={scrollRef}
                >
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            setPaused={setPaused}
                        />
                    ))}
                </div>
            </div>

            {/* Contact Section */}
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

const services = [
    { title: "Investigations", description: "Investigative services to commercial clients, sporting organisations, legal firms, insurance, private and government organisations." },
    { title: "Integrity Reviews", description: "Review your integrity systems and processes with tailored solutions." },
    { title: "Sports Integrity", description: "Immediate and careful response to sensitive matters of integrity in sports." },
    { title: "Background Checks", description: "Thorough screening for employment, business partnerships, and more." },
    { title: "Digital Forensics", description: "Uncover digital evidence with expert analysis and court-ready reporting." },
    { title: "Surveillance", description: "Discreet and reliable monitoring services for individuals and organizations." },
    { title: "Insurance Fraud", description: "Detect and document fraudulent insurance claims with precision." },
    { title: "Missing Persons", description: "We specialize in tracing and locating missing people with compassion." },
    { title: "Case Review", description: "Detailed evaluation of previous investigations and reports." },
    { title: "Corporate Espionage", description: "Identify and respond to threats of insider information leaks." },
];

function ServiceCard({ title, description, setPaused }) {
    return (
        <View
            className="service-card"
            borderRadius="12px"
            padding="2rem"
            textAlign="center"
            width="280px"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <Heading level={3} marginBottom="1rem" color="white">
                {title}
            </Heading>
            <Text fontSize="0.95rem" lineHeight="1.5" color="white">
                {description}
            </Text>
        </View>
    );
}

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    setPaused: PropTypes.func.isRequired,
};