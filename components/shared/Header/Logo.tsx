import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link className="h-auto" href="/">
      <Image
        src="/images/KBQTECH-HUB-YELLOW.png"
        alt="KBQ TECH-HUB"
        width={50}
        height={50}
        priority
      />
    </Link>
  );
}
