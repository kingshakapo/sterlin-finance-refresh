import { LegalPage } from "@/components/site/LegalPage";

const Privacy = () => (
  <LegalPage
    eyebrow="Legal"
    title="Privacy Policy"
    subtitle="How Sterling Finance & Investment collects, uses and protects your information."
    updated="January 2025"
    intro="Sterling Finance & Investment (‘Sterling’, ‘we’, ‘our’) is committed to protecting the privacy of clients, prospective clients and visitors to our website. This policy describes the personal information we collect, how we use it, and the rights available to you under the Protection of Personal Information Act (POPIA) and other applicable laws."
    sections={[
      {
        heading: "Information we collect",
        body: [
          "We may collect personal information that you provide directly to us — including your name, contact details, identification documents, financial information and professional background — when you engage our services, attend an event, or correspond with our team.",
          "We also collect technical information automatically when you visit our website, including IP address, browser type, device identifiers, pages visited and referring URLs."
        ]
      },
      {
        heading: "How we use your information",
        body: [
          "Your information is used to provide and improve our advisory, brokerage and asset-management services; to comply with regulatory and legal obligations; to perform client due diligence; and to communicate with you about market updates, events and matters relating to your engagement.",
          "We do not sell personal information to third parties."
        ]
      },
      {
        heading: "Lawful basis for processing",
        body: "We process personal information on the basis of your consent, the performance of a contract, our legitimate business interests, and to comply with legal and regulatory obligations applicable to financial services providers."
      },
      {
        heading: "Disclosure to third parties",
        body: "We may share information with regulated service providers, custodians, auditors, legal counsel and regulators where necessary. All third parties are bound by confidentiality and data-protection obligations consistent with this policy."
      },
      {
        heading: "International transfers",
        body: "Where information is transferred outside South Africa, we ensure that appropriate safeguards are in place, including contractual protections and recognised data-transfer mechanisms."
      },
      {
        heading: "Data retention",
        body: "We retain personal information only as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law and regulatory record-keeping obligations."
      },
      {
        heading: "Your rights",
        body: "You have the right to access, correct or delete the personal information we hold about you, to object to certain processing, and to lodge a complaint with the Information Regulator. To exercise any of these rights, please contact privacy@sterlinfininvestment.com."
      },
      {
        heading: "Security",
        body: "We maintain appropriate technical and organisational measures designed to protect personal information against unauthorised access, alteration, disclosure or destruction."
      },
      {
        heading: "Contact",
        body: "Questions regarding this policy may be directed to our Information Officer at privacy@sterlinfininvestment.com or to our registered office in Cape Town."
      }
    ]}
  />
);

export default Privacy;
