import Banner from "./component/banner/Banner";
import EarBuds from "./component/earBuds/EarBuds";
import Navbar from "./component/navbar/Navbar";
import SearchBar from "./component/searchBar/SearchBar";
import SmartWatch from "./component/smartwatch/SmartWatch";


export default function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Banner></Banner>
        <SearchBar></SearchBar>
        <section>
          <SmartWatch></SmartWatch>
          <EarBuds></EarBuds>
        </section>
      </main>
    </>
  );
}
