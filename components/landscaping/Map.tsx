export function Map() {
  return (
    <section className="h-96 relative">
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0032778643344!2d101.677507!3d3.106742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4acf3c4cd80d%3A0xbd2e87d885981b5c!2sLot%205704%2C%20Jalan%20Desa%20Utama%2C%20Taman%20Desa%2C%2058100%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1685504123456!5m2!1sen!2smy"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Rent A Pot Landscape location map"
          aria-label="Location map for Rent A Pot Landscape in Taman Desa, Kuala Lumpur"
        ></iframe>
      </div>
    </section>
  );
}
