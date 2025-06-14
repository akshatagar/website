import path from "path";
import fs from "fs";
import Image from "next/image";

export default function PartnerPage({ partner }) {
  return (
    <div className="container my-5">
      <h1 className="mb-4">{partner.name} Page</h1>
      <div className="card p-4">
        <Image
          src={partner.logo}
          alt={`${partner.name}-logo`}
          width={200}
          height={100}
          objectFit="contain"
        />
        <h4 className="mt-3">{partner.solution}</h4>
        <p>{partner.description}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "partners_data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const partners = JSON.parse(fileContents);

  const paths = partners.map((partner) => ({
    params: { id: partner.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "data", "partners_data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const partners = JSON.parse(fileContents);

  const partner = partners.find((p) => p.name === params.id) || null;

  return {
    props: {
      partner,
    },
  };
}
