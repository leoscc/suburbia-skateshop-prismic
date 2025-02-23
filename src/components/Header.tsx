import Link from "next/link";
import { ButtonLink } from "./ButtonLink";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="header absolute inset-0 z-50 ~h-32/48 ~p-4/6 md:h-32">
      <div>
        <Link href="/">Logo</Link>

        <nav>
          <ul>
            <li>Boards</li>
            <li>Boards</li>
            <li>Boards</li>
          </ul>
        </nav>

        <div>
          <ButtonLink href="" icon="cart" color="purple" aria-label="Cart (1)">
            Cart (1)
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
