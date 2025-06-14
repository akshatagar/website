import PartnersCarousel from "@/src/components/partnerspage/PartnerCarousel";
import path from "path";
import fs from "fs";

export default function PartnersPage({ partners }) {
  return (
      <PartnersCarousel partners={partners} />
  );
}

// This function runs at build time on the server
export async function getStaticProps() {
  // Read partners data from the file system
  const filePath = path.join(process.cwd(), "data", "partners_data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const partners = JSON.parse(fileContents);

  return {
    props: {
      partners,
    },
    // Re-generate the page at most once per hour (in seconds)
    // This is useful if your partners data changes occasionally
    revalidate: 3600,
  };
}
