import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import Overview from "@/components/case-study/Overview";
import VisualSection from "@/components/case-study/VisualSection";
import NextCaseStudy from "@/components/case-study/NextCaseStudy";
import { voit } from "@/lib/case-studies/voit";
import { caseStudyMetadata } from "@/lib/case-studies/metadata";
import CaseStudyJsonLd from "@/components/case-study/CaseStudyJsonLd";

export const metadata = caseStudyMetadata({
  title: voit.title,
  description: voit.summary,
  path: "/work/voit",
});

export default function VoitPage() {
  return (
    <CaseStudyLayout>
      <CaseStudyJsonLd title={voit.title} description={voit.summary} path="/work/voit" />
      <Overview title={voit.title} intro={voit.intro} meta={voit.meta} />

      {voit.visuals.map((section, i) => (
        <VisualSection key={i} section={section} />
      ))}

      <NextCaseStudy href={voit.next.href} label={voit.next.label} />
    </CaseStudyLayout>
  );
}
