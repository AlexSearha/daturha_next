import {
  BandcampIcon,
  IconFacebook,
  IconInstagram,
  IconYoutube,
} from "./lib/icons"

export default function Footer() {
  const actualYear = new Date().getFullYear()
  return (
    <>
      <div className="bg-text h-44">
        <div className="flex flex-col gap-8 justify-center items-center h-full">
          <div id="socials" className="flex gap-6">
            <IconFacebook />
            <IconInstagram />
            <IconYoutube />
            <BandcampIcon />
          </div>
          <p className="text-center text-sm text-white">
            {`© ${actualYear} Daturha. All rights reserved.`}
          </p>
        </div>
      </div>
    </>
  )
}
