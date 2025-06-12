import PartnersCarousel from "@/src/components/partnerspage/PartnerCarousel";
import partners from "@/data/partners_data.json";

export default function PartnersPage() {
  return (
      <PartnersCarousel partners={partners} />
  );
}
