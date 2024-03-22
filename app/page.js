import Navbar from "./component/navbar/Navbar";
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
