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
import { useEffect } from "react";

export default function ServicesPage() {

    useEffect(() => {
        const initMap = async () => {
            if (!window.google || !window.google.maps) return;

            const position = { lat: -37.8136, lng: 144.9730 }; // 1 Treasury Way

            const { Map } = await window.google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");

            const map = new Map(document.getElementById("services-map"), {
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

            {/* Full Contact Section */}
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
                    {/* Contact Info Box with Map underneath */}
                    <View className="contact-info-box">
                        <Flex direction="column" gap="1rem">
                            <Text fontSize="1.1rem" fontWeight="600" color="#ffffff">Get in Touch</Text>
                            <Text color="#f1f1f1">📞 Phone: (555) 123-4567</Text>
                            <Text color="#f1f1f1">✉️ Email: contact@contact.com</Text>
                            <Text color="#f1f1f1">🏢 Address: 123 Investigator Ave, Melbourne, VIC</Text>
                            <Text color="#f1f1f1">🕒 Mon–Fri: 9:00AM – 5:00PM</Text>
                        </Flex>

                        {/* Google Map embedded underneath info */}
                        <View className="map-wrapper" style={{ marginTop: "2rem" }}>
                            <div id="services-map" className="google-map"></div>
                        </View>
                    </View>


                    {/* Contact Form */}
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