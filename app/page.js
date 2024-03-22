import Banner from "./component/banner/Banner";
import EarBuds from "./component/earBuds/EarBuds";
import Navbar from "./component/navbar/Navbar";
import SearchBar from "./component/searchBar/SearchBar";
import SmartWatch from "./component/smartwatch/SmartWatch";
import Homepage from "./pages/homepage/homepage";

export default function Home() {
  return (
    <>

    <Navbar></Navbar>
    <main>
      <Homepage></Homepage>
    </main>
    </>
  );
}
