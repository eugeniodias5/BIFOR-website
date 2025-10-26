import { Link } from "@heroui/link";
import { Button } from "@heroui/button"; 
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { DownloadIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col md:flex-row items-stretch gap-10 w-full">
        <div className="order-1 md:order-2 w-full md: grid grid-cols-1 gap-6">
          <div className="w-full flex flex-row gap-4 items-center justify-center md:justify-center">
            <div>
              <img
                src="/yt-bb-dog/ytbb-dog-logo.jpg"
                alt="YT-BB-Dog Logo"
                className="h-16 w-24"
              />
            </div>
            <h1 className="text-3xl font-extrabold">YT-BB-Dog</h1>
          </div>

          <div>
            <p>
              The YT-BB-Dog is a short-term dog re-identification dataset. It is a variation of the
              <Link isExternal showAnchorIcon href="https://research.google.com/youtube-bb/">
                YT-BB dataset
              </Link>, extracting dogs bounding boxes from video frames of multiples videos.
            </p>
            <p>It is composed of:</p>
            <ul className="list-disc list-inside">
              <li>2,723 dogs' sequences.</li>
              <li>27,036 images</li>
            </ul>
          </div>

          <div className="text-1xl w-full flex items-center justify-center">
            <Button color="danger" showAnchorIcon as={Link} anchorIcon={<DownloadIcon />}>
              <h2>Download (1.0 Gb)</h2>
            </Button>
          </div>
        </div>

        <div className="order-2 md:order-1 flex flex-col gap-5 items-center md:items-start">
          <div className="relative w-full flex justify-center">
            <iframe
              className="w-[350px] h-[180px] sm:w-[350pxpx] sm:h-[180px] md:w-[300px] md:h-[180px] lg:w-[420px] lg:h-[240px] xl:w-[480px] xl:h-[270px]"
              src="https://www.youtube.com/embed/0OzSKEslbhY?autoplay=1&mute=1&loop=1&playlist=0OzSKEslbhY"
              title="YT-BB-Dog preview"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{ border: 0 }}
            />
          </div>
          <div>IMAGES</div>
        </div>
      </div>
    </section>
  );
}
