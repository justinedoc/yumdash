import { TabsTrigger1 } from "../../ui/CustomTabsTrigger-1";
import RestaurantCard from "../_components/ResturantCard";
import RestaurantList from "../_components/ResturantList";
import { restaurants } from "../data/resturants";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";

function Home() {
  return (
    <section className="p-5 bg-[#fafafa]">
      <h1 className="font-medium text-2xl">Hi Jane!</h1>
      <p className="text-sm text-gray-500">We are ready to take your order!</p>
      <RestaurantList
        icon={
          <svg
            width="26"
            height="27"
            viewBox="0 0 26 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13.5C1 7.84358 1 5.01411 2.75705 3.25705C4.51411 1.5 7.34232 1.5 13 1.5C18.6564 1.5 21.4859 1.5 23.2429 3.25705C25 5.01411 25 7.84232 25 13.5C25 19.1564 25 21.9859 23.2429 23.7429C21.4859 25.5 18.6577 25.5 13 25.5C7.34358 25.5 4.51411 25.5 2.75705 23.7429C1 21.9859 1 19.1577 1 13.5Z"
              fill="#FE9801"
              stroke="#DDDDDD"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.6839 12.9264C18.6839 10.846 18.6434 10.0552 16.4102 10.0552H8.88175C7.67796 10.0552 7.54027 9.77103 8.28806 8.82619L9.58911 7.18408M7.31543 14.0733C7.31543 16.1538 7.35585 16.9445 9.58911 16.9445H17.1175C18.3213 16.9445 18.459 17.23 17.7112 18.1736L16.4102 19.8157"
              fill="#FE9801"
            />
            <path
              d="M18.6839 12.9264C18.6839 10.846 18.6434 10.0552 16.4102 10.0552H8.88175C7.67796 10.0552 7.54027 9.77103 8.28806 8.82619L9.58911 7.18408M7.31543 14.0733C7.31543 16.1538 7.35585 16.9445 9.58911 16.9445H17.1175C18.3213 16.9445 18.459 17.23 17.7112 18.1736L16.4102 19.8157"
              stroke="#DDDDDD"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        title="Order Again From"
        render={restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      />
      <RestaurantList
        title="Resturants Near You"
        render={restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
        actionLabel="30 - 40mins away"
        action={() => console.log("see more clicked")}
      />

      <Tabs defaultValue="recommended" className="w-full my-15">
        <TabsList className="bg-transparent">
          <TabsTrigger1 value="recommended">
            Recommended Resturants
          </TabsTrigger1>
          <TabsTrigger1 value="discounted">Discounted Resturants</TabsTrigger1>
        </TabsList>
        <TabsContent value="recommended">
          <RestaurantList
            className="my-0"
            render={restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
          />
        </TabsContent>
        <TabsContent value="discounted">
          <RestaurantList
            className="my-0"
            render={restaurants.reverse().map((restaurant) => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
          />
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default Home;
