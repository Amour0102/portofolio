import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import Overview from "@/components/case-study/Overview";
import VisualSection from "@/components/case-study/VisualSection";
import NextCaseStudy from "@/components/case-study/NextCaseStudy";
import { acMobility } from "@/lib/case-studies/ac-mobility";
import { caseStudyMetadata } from "@/lib/case-studies/metadata";
import CaseStudyJsonLd from "@/components/case-study/CaseStudyJsonLd";

export const metadata = caseStudyMetadata({
  title: acMobility.title,
  description: acMobility.summary,
  path: "/work/ac-mobility",
});

export default function AcMobilityPage() {
  return (
    <CaseStudyLayout>
      <CaseStudyJsonLd title={acMobility.title} description={acMobility.summary} path="/work/ac-mobility" />
      <Overview title={acMobility.title} intro={acMobility.intro} meta={acMobility.meta} />

      {acMobility.visuals.map((section, i) => (
        <VisualSection key={i} section={section} />
      ))}

      <NextCaseStudy href={acMobility.next.href} label={acMobility.next.label} />
    </CaseStudyLayout>
  );
}
