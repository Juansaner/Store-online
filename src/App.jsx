import Card from "./components/Card";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="h-[90vh] flex p-8 gap-8 pt-0">
        <Sidebar />
        <div className="flex-1 h-full overflow-y-scroll">
          {/* Portada */}
          <div className=" mb-4 relative rounded-2xl">
            <img
              src="https://www.semana.com/resizer/eA9u4q1SEA5LHOiGFnylGQtNiOA=/arc-anglerfish-arc2-prod-semana/public/NZKBIQZAFFH7FPZGOILFPZJZGY.jpg"
              className="w-full h-[300px] object-cover md:object-top rounded-2xl"
            />
          </div>
          <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-8 ">
            <Card
              img="https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png"
              title="Marvel's Spider-Man"
              category="PS5"
              price="51"
            />
            <Card
              img="https://image.api.playstation.com/vulcan/ap/rnd/202010/0108/uxdypYdPjRXXKfSc1CxiLClp.png"
              title="Litle Nightmares"
              category="PS4"
              price="40"
            />
            <Card
              img="https://img.asmedia.epimg.net/resizer/4hlOVvBKGnSxogfSWJcU1Yd3aY0=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/OWB4JPZROFKERI2UGZCXBH6XPA.jpg"
              title="Ghost of Tsushima"
              category="PS5"
              price="48"
            />
            <Card
              img="https://store-images.s-microsoft.com/image/apps.12368.13739535057760905.d290a0fa-1de3-43d4-9eb3-3453bfbc6707.2f43efce-f3a0-42b7-83fc-ceb34e8868e9"
              title="Call of Duty Warzone 2.0"
              category="PC"
              price="120"
            />
            <Card
              img="https://store-images.s-microsoft.com/image/apps.11179.13668282042107954.874f4821-1931-4173-aee3-0eed5c78ce55.5e9896f6-415e-4233-89da-d05cb61e48a6"
              title="Hogwarts Legacy"
              category="XBOX"
              price="99"
            />
            <Card
              img="https://cdn1.epicgames.com/offer/50118b7f954e450f8823df1614b24e80/EGS_FallGuys_Mediatonic_S2_1200x1600-f8dd257a8537df053a64c4e5063e62ea"
              title="Fall Guys"
              category="PC"
              price="32"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
