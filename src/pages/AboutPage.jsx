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
import { useEffect } from "react";

export default function AboutPage() {

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
                        <Link to="/contact">
                            <Button variation="primary">Contact Us</Button>
                        </Link>
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
        </Flex>
    );
}