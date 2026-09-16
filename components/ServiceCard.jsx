import React from 'react';
import Link from 'next/link';

const ICON_COLORS = ['icon-blue', 'icon-yellow', 'icon-brown', 'icon-green'];

export default function ServiceCard({ service, index = 0 }) {
  const iconBg = ICON_COLORS[index % ICON_COLORS.length];

  return (
    <article className="service-card">
      <div className="img">
        <img loading="lazy" src={service.image} alt={service.title} />
      </div>
      <div className="card-meta">
        <div className={`icon-box ${iconBg}`}>{service.icon}</div>
        <div className="card-num">{service.id}</div>
      </div>
      <div className="body flex-1 flex flex-col justify-between">
        <div>
          <h3>{service.title}</h3>
          <p className="hidden sm:block">{service.tagline}</p>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-3 mt-3 sm:mt-6">
          <Link
            href={`/services/${service.slug}`}
            className="btn btn-outline !text-[10.5px] sm:!text-[13px] !py-1.5 sm:!py-2.5 !px-1.5 sm:!px-4 rounded-md flex-1 min-w-0 text-center justify-center font-bold"
          >
            View Details
          </Link>
          <a
            href="/contact"
            className="btn btn-primary !text-[10.5px] sm:!text-[13px] !py-1.5 sm:!py-2.5 !px-1.5 sm:!px-4 rounded-md flex-1 min-w-0 text-center justify-center font-bold"
          >
            Contact Now
          </a>
        </div>
      </div>
    </article>
  );
}
