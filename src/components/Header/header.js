import Link from "./link";
import SearchProduct from "./searchProduct";

function Header()
{
  return(
    <div class="container-fluid">
      <Link />
      <SearchProduct />
    </div>
  );
}

export default Header;