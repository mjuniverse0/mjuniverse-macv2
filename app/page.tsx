import { BentoGrid } from "@/components/bento-grid";
import { CreatorsStrip } from "@/components/creators-strip";
import { HeroHome } from "@/components/hero-home";
import { SocialRow } from "@/components/social-row";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <CreatorsStrip />
      <BentoGrid />
      <SocialRow />
    </>
  );
}
