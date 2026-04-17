import { LegalPage } from "@/components/site/LegalPage";

const Terms = () => (
  <LegalPage
    eyebrow="Legal"
    title="Terms of Use"
    subtitle="The terms governing your access to and use of the Sterling Finance & Investment website."
    updated="January 2025"
    intro="By accessing or using this website, you agree to be bound by these Terms of Use. If you do not accept these terms, please discontinue use of the site."
    sections={[
      {
        heading: "Information purposes only",
        body: "The content of this website is provided for general information only. It does not constitute investment, legal, tax or accounting advice, nor an offer or solicitation to buy or sell any security or financial instrument."
      },
      {
        heading: "No client relationship",
        body: "Use of this website does not create an advisory, brokerage or fiduciary relationship between you and Sterling. Any such relationship is established only through a written engagement agreement."
      },
      {
        heading: "Forward-looking statements",
        body: "Certain statements on this website may be forward-looking. Such statements involve known and unknown risks and uncertainties; actual results may differ materially from those expressed or implied."
      },
      {
        heading: "Intellectual property",
        body: "All content, trademarks, logos and materials displayed on this website are the property of Sterling Finance & Investment or its licensors and are protected by applicable intellectual-property laws. No portion may be reproduced, redistributed or transmitted without prior written consent."
      },
      {
        heading: "Third-party links",
        body: "This website may contain links to third-party websites. Sterling has no control over, and accepts no responsibility for, the content, policies or practices of any third-party site."
      },
      {
        heading: "Limitation of liability",
        body: "To the maximum extent permitted by law, Sterling shall not be liable for any direct, indirect, incidental or consequential loss arising from your use of, or reliance upon, this website or its content."
      },
      {
        heading: "Jurisdiction",
        body: "These Terms of Use are governed by the laws of the Republic of South Africa. Any dispute shall be subject to the exclusive jurisdiction of the South African courts."
      },
      {
        heading: "Updates",
        body: "We may update these Terms of Use from time to time. Continued use of the website following any changes constitutes acceptance of the revised terms."
      }
    ]}
  />
);

export default Terms;
