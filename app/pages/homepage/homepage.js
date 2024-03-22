import Banner from "@/app/component/banner/Banner";
import EarBuds from "@/app/component/earBuds/EarBuds";
import SearchBar from "@/app/component/searchBar/SearchBar";
import SmartWatch from "@/app/component/smartwatch/SmartWatch";


const Homepage = () => {
    return (
       <>
        <Banner></Banner>
        <section>
            <SearchBar></SearchBar>
            <SmartWatch></SmartWatch>
            <EarBuds></EarBuds>
        </section>
       </>
    );
};

export default Homepage;