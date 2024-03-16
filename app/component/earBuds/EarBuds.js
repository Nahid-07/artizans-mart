import Link from "next/link";
import Card from "../productCard/Card";

const EarBuds = () => {
    const data = [
        {
          productName: "Colmy-p71",
          id : 1,
          prodImg:
            "https://images.unsplash.com/photo-1710302101414-37d0434a0fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
          prodDesc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit soluta eligendi porro voluptas libero, corporis error cupiditate repellat natus obcaecati similique recusandae temporibus laboriosam deleniti necessitatibus eveniet magnam at? Temporibus.",
          price: 20,
        },
        {
          productName: "Colmy-p71",
          id : 2,
          prodImg:
            "https://images.unsplash.com/photo-1710302101414-37d0434a0fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
          prodDesc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit soluta eligendi porro voluptas libero, corporis error cupiditate repellat natus obcaecati similique recusandae temporibus laboriosam deleniti necessitatibus eveniet magnam at? Temporibus.",
          price: 20,
        },
        {
          productName: "Colmy-p71",
          id : 3,
          prodImg:
            "https://images.unsplash.com/photo-1710302101414-37d0434a0fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
          prodDesc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit soluta eligendi porro voluptas libero, corporis error cupiditate repellat natus obcaecati similique recusandae temporibus laboriosam deleniti necessitatibus eveniet magnam at? Temporibus.",
          price: 20,
        },
        {
          productName: "Colmy-p71",
          id : 4,
          prodImg:
            "https://images.unsplash.com/photo-1710302101414-37d0434a0fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
          prodDesc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit soluta eligendi porro voluptas libero, corporis error cupiditate repellat natus obcaecati similique recusandae temporibus laboriosam deleniti necessitatibus eveniet magnam at? Temporibus.",
          price: 20,
        },
        {
          productName: "Colmy-p71",
          id : 5,
          prodImg:
            "https://images.unsplash.com/photo-1710302101414-37d0434a0fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
          prodDesc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit soluta eligendi porro voluptas libero, corporis error cupiditate repellat natus obcaecati similique recusandae temporibus laboriosam deleniti necessitatibus eveniet magnam at? Temporibus.",
          price: 20,
        },
      ];
    return (
        <div className="max-w-7xl mx-auto lg:mt-24 mt-12">
        <div className="mb-6 flex justify-between px-5 lg:px-0">
            <h4 className="text-orange-500 lg:text-4xl text-2xl">Earbuds</h4>
            <button className="bg-orange-500 lg:px-6 px-3 text-white font-semibold rounded-md">
            <Link href='/'>See all</Link>
            </button>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-5 gap-5 px-5 lg:px-0">
    {
        data.map(d => <Card key={d.id} product={d}
        ></Card>)
    }
  </div>
    </div>
    );
};

export default EarBuds;