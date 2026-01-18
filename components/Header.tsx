import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="flex items-center gap-1 md:flex-1">
        <Image
          src="/assets/icons/docs.png"
          alt="Logo with name"
          width={35}
          height={35}
          className="hidden md:block"
        />
        <h1 className="text-2xl">Paperly</h1>
      </Link>
      {children}
    </div>
  );
};

export default Header;
