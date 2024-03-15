import Banner from "./component/banner/Banner";
import Navbar from "./component/navbar/Navbar";
import SearchBar from "./component/searchBar/SearchBar";


export default function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Banner></Banner>
        <SearchBar></SearchBar>
      </main>
    </>
  );
}
