export function CtaStrip({ contact }) {
  return (
    <section className="cta-strip" id="contact">
      <div className="wrap">
        <h2>For further details</h2>
        <div className="contact-line">
          <span className="contact-method">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            <span>Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a></span>
          </span>
          <span className="contact-method">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 3a14 14 0 0 1-8-8l3-2-2-5Z" />
            </svg>
            <span>Phone: <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a></span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return <footer>&copy; {new Date().getFullYear()} Agrivaluechain. Rural Livelihood Development.</footer>;
}
