import { client } from '@/lib/sanity'

export default function PartnerPage({ partner }) {
  return (
    <div className="container my-5">
      <div className="card p-4">
      <h1 className="mb-4 text-center">{partner.name}</h1>
        <img
          src={partner.logoUrl}
          alt={`${partner.name}-logo`}
          objectFit="contain"
          style={{ maxHeight: "150px", maxWidth: "150px", margin: "0 auto" }}
        />
        <p className='mt-5'>{partner.description}</p>
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
