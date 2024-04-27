import Link from "next/link"

export default function DesktopMenu() {
  return (
    <nav>
      <ul className="text-slate-900 flex gap-2">
        <li>
          <Link href="#music" className="transition hover:text-slate-400">
            MUSIC
          </Link>
        </li>
        <li>
          <Link href="#band" className="transition hover:text-slate-400">
            BAND
          </Link>
        </li>
        <li>
          <Link href="#tour" className="transition hover:text-slate-400">
            TOUR
          </Link>
        </li>
        <li>
          <Link href="#contact" className="transition hover:text-slate-400">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  )
}
