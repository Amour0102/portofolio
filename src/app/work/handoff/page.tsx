import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import Overview from "@/components/case-study/Overview";
import VisualSection from "@/components/case-study/VisualSection";
import NextCaseStudy from "@/components/case-study/NextCaseStudy";
import { handoff } from "@/lib/case-studies/handoff";
import { caseStudyMetadata } from "@/lib/case-studies/metadata";
import CaseStudyJsonLd from "@/components/case-study/CaseStudyJsonLd";

export const metadata = caseStudyMetadata({
  title: handoff.title,
  description: handoff.summary,
  path: "/work/handoff",
});

export default function HandoffPage() {
  return (
    <CaseStudyLayout>
      <CaseStudyJsonLd title={handoff.title} description={handoff.summary} path="/work/handoff" />
      <Overview title={handoff.title} intro={handoff.intro} meta={handoff.meta} />

      {handoff.visuals.map((section, i) => (
        <VisualSection key={i} section={section} />
      ))}

      <NextCaseStudy href={handoff.next.href} label={handoff.next.label} />
    </CaseStudyLayout>
  );
}
