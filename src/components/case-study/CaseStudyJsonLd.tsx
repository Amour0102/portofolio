import { caseStudyJsonLd } from "@/lib/case-studies/metadata";

// Renders CreativeWork + BreadcrumbList structured data for a case study.
export default function CaseStudyJsonLd(props: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd(props)) }}
    />
  );
}
