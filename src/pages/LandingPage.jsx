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
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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

    useEffect(() => {
        const initMap = async () => {
            // Only run if google maps has loaded
            if (!window.google || !window.google.maps) return;

            const position = { lat: -37.8136, lng: 144.9730 }; // 1 Treasury Way, Melbourne

            const { Map } = await window.google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");

            const map = new Map(document.getElementById("map"), {
                center: position,
                zoom: 16,
                mapId: "DEMO_MAP_ID",
            });

            new AdvancedMarkerElement({
                map,
                position,
                title: "1 Treasury Way, Melbourne",
            });
        };

        if (window.google && window.google.maps && window.google.maps.importLibrary) {
            initMap();
        }
    }, []);

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
<Flex direction="column" className="page-content">
            {/* Hero Section */}
            <div className="parallax">
                <div className="parallax-content">
                    <Heading level={1} color="#047d95" marginBottom="1rem" fontWeight="600">
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

            {/* Secondary Parallax Section */}
            <div
                className="parallax secondary-parallax"
                style={{ backgroundImage: `url("/business-office-photographer-brochure-0084.jpg")` }}
            >
                <div className="parallax-content full-width-content-box">
                    <Heading level={2} color="#047d95" fontWeight="600">
                        Trusted Corporate Solutions
                    </Heading>
                    <Text fontSize="1.1rem" lineHeight="1.6" color="white" marginTop="0.5rem">
                        From internal reviews to high-profile investigations, our team ensures thorough, discreet service every time.
                    </Text>
                </div>
            </div>

            {/* Contact Section */}
            <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                gap="2rem"
                className="contact-section"
            >
                <Divider />
                <Heading level={2}>Contact Us</Heading>

                <Flex
                    direction="row"
                    width="100%"
                    maxWidth="1000px"
                    gap="3rem"
                    justifyContent="space-between"
                    flexWrap="wrap"
                >
                    {/* Company Info - Left Side */}
                    <View className="contact-info-box">
                        <Flex direction="column" gap="1rem">
                            <Text fontSize="1.1rem" fontWeight="600" color="#ffffff">Get in Touch</Text>
                            <Text color="#f1f1f1">📞 Phone: (555) 123-4567</Text>
                            <Text color="#f1f1f1">✉️ Email: contact@contact.com</Text>
                            <Text color="#f1f1f1">🏢 Address: 123 Investigator Ave, Melbourne, VIC</Text>
                            <Text color="#f1f1f1">🕒 Mon–Fri: 9:00AM – 5:00PM</Text>
                        </Flex>

                        {/* Move map here */}
                        <View className="map-wrapper" style={{ marginTop: "2rem" }}>
                            <div id="map" className="google-map" />
                        </View>
                    </View>

                    {/* Contact Form - Right Side */}
                    <View as="form" flex="1" minWidth="300px">
                        <Flex direction="column" gap="1rem">
                            <input type="text" placeholder="Full Name" className="contact-input" />
                            <input type="text" placeholder="Phone Number" className="contact-input" />
                            <input type="email" placeholder="Email Address" className="contact-input" />
                            <input type="text" placeholder="Organisation" className="contact-input" />
                            <textarea rows="5" placeholder="Your Enquiry..." className="contact-input" />
                            <Button variation="primary" width="fit-content" alignSelf="flex-end">Submit</Button>
                        </Flex>
                    </View>
                </Flex>
            </Flex>

            {/* Footer */}
            <View as="footer" className="footer">
                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    padding="2rem"
                    color="#aaa"
                    textAlign="center"
                >
                    <Text>&copy; {new Date().getFullYear()} Proof Integrity Solutions. All rights reserved.</Text>
                    <Text>ABN: 12 345 678 910 | Email: contact@contact.com | Phone: (555) 123-4567</Text>
                </Flex>
            </View>
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