import useScreenDetect from "@/app/hooks/screenDetect"
import DesktopMenu from "./menu-versions/DesktopMenu"
import MobileMenu from "./menu-versions/MobileMenu"

export default function NavMenu() {
  const isDesktopSize = useScreenDetect()

  return <>{isDesktopSize ? <MobileMenu /> : <DesktopMenu />}</>
}
