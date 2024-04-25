import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="flex flex-col">
      <ul className="text-slate-900 flex flex-col gap-2">
        <li><Link href='#'>BAND</Link></li>
        <li><Link href='#'>TOUR</Link></li>
        <li><Link href='#'>MUSIC</Link></li>
        <li><Link href='#'>CONTACT</Link></li>

      </ul>
    </nav>
  );
}
