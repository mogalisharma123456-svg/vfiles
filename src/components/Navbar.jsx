export default function Navbar() {
  const links = ["hero", "about", "highlights", "services", "contact"];
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-accent">V Films</h1>
      <div className="hidden md:flex gap-6 text-gray-700">
        {links.map((l) => (
          <a key={l} href={`#${l}`} className="hover:text-accent transition">{l.charAt(0).toUpperCase() + l.slice(1)}</a>
        ))}
      </div>
    </nav>
  );
}
