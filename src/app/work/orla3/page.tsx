import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import Overview from "@/components/case-study/Overview";
import VisualSection from "@/components/case-study/VisualSection";
import NextCaseStudy from "@/components/case-study/NextCaseStudy";
import { orla3 } from "@/lib/case-studies/orla3";
import { caseStudyMetadata } from "@/lib/case-studies/metadata";
import CaseStudyJsonLd from "@/components/case-study/CaseStudyJsonLd";

export const metadata = caseStudyMetadata({
  title: orla3.title,
  description: orla3.summary,
  path: "/work/orla3",
});

export default function Orla3Page() {
  return (
    <CaseStudyLayout>
      <CaseStudyJsonLd title={orla3.title} description={orla3.summary} path="/work/orla3" />
      <Overview title={orla3.title} intro={orla3.intro} meta={orla3.meta} />

      {orla3.visuals.map((section, i) => (
        <VisualSection key={i} section={section} />
      ))}

      <NextCaseStudy href={orla3.next.href} label={orla3.next.label} />
    </CaseStudyLayout>
  );
}
