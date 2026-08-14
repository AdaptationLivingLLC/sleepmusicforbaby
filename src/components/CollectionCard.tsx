import type { CatalogCollection } from "@/lib/catalog";

type CollectionCardProps = {
  collection: CatalogCollection;
};

/**
 * Reusable collection card for the music catalog.
 * Shows collection name, description, artwork, planned releases, and a link.
 */
const CollectionCard = ({ collection }: CollectionCardProps) => {
  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1.5 border-gold-ornate"
      style={{
        backgroundColor: "rgba(7, 18, 43, 0.72)",
        boxShadow: "0 18px 50px -20px rgba(7, 18, 43, 0.45)",
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={collection.artwork}
          alt={`${collection.name} — moonlit bedtime illustration`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-2xl font-semibold leading-snug text-gold-24k">
          {collection.name}
        </h3>
        <p
          className="mt-3 flex-1 font-body text-base leading-relaxed"
          style={{ color: "#D9E0EC" }}
        >
          {collection.description}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-body text-sm" style={{ color: "#D9E0EC" }}>
            {collection.plannedReleases} planned releases
          </span>
          <a
            href={`#${collection.slug}`}
            className="font-body text-base font-semibold transition-colors hover:text-moonlight"
            style={{ color: "#F5E7B2" }}
          >
            View Collection →
          </a>
        </div>
      </div>
    </article>
  );
};

export default CollectionCard;
