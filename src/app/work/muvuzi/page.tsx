import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import Overview from "@/components/case-study/Overview";
import VisualSection from "@/components/case-study/VisualSection";
import NextCaseStudy from "@/components/case-study/NextCaseStudy";
import { muvuzi } from "@/lib/case-studies/muvuzi";
import { caseStudyMetadata } from "@/lib/case-studies/metadata";
import CaseStudyJsonLd from "@/components/case-study/CaseStudyJsonLd";

export const metadata = caseStudyMetadata({
  title: muvuzi.title,
  description: muvuzi.summary,
  path: "/work/muvuzi",
});

export default function MuvuziPage() {
  return (
    <CaseStudyLayout>
      <CaseStudyJsonLd title={muvuzi.title} description={muvuzi.summary} path="/work/muvuzi" />
      <Overview title={muvuzi.title} intro={muvuzi.intro} meta={muvuzi.meta} />

      {muvuzi.visuals.map((section, i) => (
        <VisualSection key={i} section={section} />
      ))}

      <NextCaseStudy href={muvuzi.next.href} label={muvuzi.next.label} />
    </CaseStudyLayout>
  );
}
