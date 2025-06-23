import { client } from '@/lib/sanity'

export default function PartnerPage({ partner }) {
  return (
    <div className="container my-5">
      <h1 className="mb-4">{partner.name}</h1>
      <div className="card p-4">
        <img
          src={partner.logoUrl}
          alt={`${partner.name}-logo`}
          objectFit="contain"
          style={{ maxHeight: "100px", maxWidth: "100px" }}
        />
        <h4 className="mt-3">{partner.solution}</h4>
        <p>{partner.description}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const partners = await client.fetch(`
    *[_type == "partner"] | order(name asc) {
      name
    }
  `)

  const paths = partners.map((partner) => ({
    params: { id: partner.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const partners = await client.fetch(`
    *[_type == "partner"] | order(name asc) {
      name,
      solution,
      description,
      "logoUrl": logo.asset->url
    }
  `)

  const partner = partners.find((p) => p.name === params.id) || null;

  return {
    props: {
      partner,
      revalidate: 60,
    },
  };
}
