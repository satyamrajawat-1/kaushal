export default function Footer() {
  return (
    <footer className="bg-text text-cream py-8 text-center text-sm no-print">
      <p className="opacity-60 mb-2">
        Prototype developed for Smart India Hackathon 2026. Data is illustrative.
      </p>
      <p className="opacity-40">
        &copy; {new Date().getFullYear()} Kaushal Saath.
      </p>
    </footer>
  );
}
