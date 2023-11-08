import { HeaderLogoProps } from '@models';

export default function NavLogo({ children }: HeaderLogoProps) {
  return (
    <a href="#" className="flex h-10 w-36 shrink-0 items-center">
      {children}
    </a>
  );
}
