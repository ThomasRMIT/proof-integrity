// src/pages/ServicesPage.jsx
import {
    Heading,
    Text,
    Flex,
    View,
    Image,
    Button,
    Divider,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import services from "../data/services";

export default function ServicesPage() {
    return (
        <Flex direction="column" className="services-page" style={{ backgroundColor: "#000", color: "#f1f1f1" }}>
            {/* Navbar (same as LandingPage) */}
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
                        <Link to="/contact">
                            <Button variation="primary">Contact Us</Button>
                        </Link>
                    </Flex>
                </Flex>
            </View>

            {/* Page Heading */}
            <div
                style={{
                    backgroundImage: "url('/services.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: "8rem 2rem 6rem 2rem",
                    textAlign: "center",
                    position: "relative",
                    marginTop: "4rem"
                }}
            >
                {/* Optional dark overlay for readability */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        zIndex: 1
                    }}
                />
                <Flex direction="column" alignItems="center" style={{ position: "relative", zIndex: 2 }}>
                    <Heading level={1} color="#ffffff" marginBottom="1rem">Our Services</Heading>
                    <Text
                        textAlign="center"
                        maxWidth="700px"
                        fontSize="1.1rem"
                        color="#f1f1f1"
                    >
                        From surveillance and background checks to corporate fraud investigations,
                        we offer a full range of discreet and professional investigative services.
                    </Text>
                </Flex>
            </div>


            <Divider />

            {/* Services Grid */}
            {/* Services Grid */}
            <Flex
                wrap="wrap"
                justifyContent="center"
                gap="2rem"
                padding="3rem 2rem"
                className="services-grid"
            >
                {services.map((service, index) => (
                    <Link
                        key={index}
                        to={`/services/${service.slug}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <ServiceCard
                            title={service.title}
                            description={service.description}
                        />
                    </Link>
                ))}
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

{
    services.map((service, index) => (
        <Link key={index} to={`/services/${service.slug}`} style={{ textDecoration: "none" }}>
            <ServiceCard title={service.title} description={service.description} />
        </Link>
    ))
}


function ServiceCard({ title, description }) {
    return (
        <View
            className="service-card"
            borderRadius="12px"
            padding="2rem"
            textAlign="center"
            width="280px"
            style={{
                backgroundColor: "#111",
                cursor: "pointer",
                transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
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
};