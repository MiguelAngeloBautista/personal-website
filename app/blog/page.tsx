
import PageHeader from "./components/PageHeader";
import Navbar from "@/components/blog/Navbar";
import Articles from "@/components/blog/Articles";

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

export default function Profile() {


  return (
    <div className="bg-white dark:bg-black text:black dark:text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <PageHeader heading={"My Blog"} text="Checkout Something Cool" />
      <Articles limit={Number(process.env.NEXT_PUBLIC_PAGE_LIMIT)} loadMore={true}/>
      
    </div>
  );
}