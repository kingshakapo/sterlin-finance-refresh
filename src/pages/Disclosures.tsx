import { LegalPage } from "@/components/site/LegalPage";

const Disclosures = () => (
  <LegalPage
    eyebrow="Legal"
    title="Disclosures"
    subtitle="Regulatory disclosures and important information regarding Sterling Finance & Investment."
    updated="January 2025"
    intro="Sterling Finance & Investment provides financial advisory, brokerage and asset-management services. The disclosures below are provided in accordance with the Financial Advisory and Intermediary Services Act (FAIS) and other applicable regulations."
    sections={[
      {
        heading: "Regulatory status",
        body: "Sterling Finance & Investment operates in accordance with the regulatory framework applicable to financial services providers in South Africa. Authorisation details and FSP registration information are available on request."
      },
      {
        heading: "Conflicts of interest",
        body: "Sterling maintains a Conflicts of Interest Management Policy designed to identify, prevent and manage actual or potential conflicts that may arise in the course of business. A copy of the policy is available upon request."
      },
      {
        heading: "Risk warning",
        body: [
          "All investments involve risk, including the possible loss of principal. Past performance is not a reliable indicator of future results.",
          "The value of investments and any income from them may rise or fall and investors may not get back the amount originally invested. Currency fluctuations may also affect the value of investments held in foreign currencies."
        ]
      },
      {
        heading: "Suitability",
        body: "Information published on this website is general in nature and does not take into account the specific investment objectives, financial situation or particular needs of any person. Clients should obtain independent advice before making any investment decision."
      },
      {
        heading: "Fees and remuneration",
        body: "Details of fees, commissions and any other remuneration earned by Sterling in connection with the services it provides are disclosed in writing prior to the conclusion of any engagement."
      },
      {
        heading: "Complaints",
        body: "Sterling has a formal complaints process. Complaints may be submitted in writing to compliance@sterlinfin.com and will be acknowledged and addressed in accordance with our Complaints Resolution Policy."
      },
      {
        heading: "FAIS Ombud",
        body: "Clients who are not satisfied with the resolution of a complaint may refer the matter to the Office of the FAIS Ombud, whose contact details are available at www.faisombud.co.za."
      },
      {
        heading: "Professional indemnity",
        body: "Sterling maintains professional indemnity and fidelity insurance cover appropriate to the nature and scale of the services provided."
      }
    ]}
  />
);

export default Disclosures;
