export function CtaStrip({ contact }) {
  return (
    <section className="cta-strip">
      <div className="wrap">
        <h2>For further details</h2>
        <div className="contact-line">
          Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a> &nbsp;·&nbsp; Phone: {contact.phone}
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return <footer>&copy; {new Date().getFullYear()} Agrivaluechain. Rural Livelihood Development.</footer>;
}
