import Link from "./link";
import Search from "./search";

function Header()
{
  return(
    <div class="container-fluid">
      <Link />
      <Search />
    </div>
  );
}

export default Header;