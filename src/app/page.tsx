import Link from "next/link";
import Header from "my-portfolio/components/Header";
import Body from "my-portfolio/components/Body";

export default function HomePage() {
  return (
    <main>
      <div className="home">
        <Header/>
        <Body/>

      </div>
    </main>
  );
}
