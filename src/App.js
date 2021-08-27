import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import useFetchItems from "./hooks/useFetchItems";
import coffeeList from "./mocks/itemList.json";

export default function App() {
  const fetchedItems = useFetchItems(coffeeList);

  return (
    <BrowserRouter>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/">
              <ItemListContainer itemList={fetchedItems} />
            </Route>

            <Route exact path="/category/:id">
              <ItemListContainer itemList={fetchedItems} />
            </Route>

            <Route exact path="/search/:id">
              <ItemListContainer itemList={fetchedItems} />
            </Route>

            <Route exact path="/item/:id">
              <ItemDetailContainer item={fetchedItems} />
            </Route>

            <Route exact path="/cart">
              <Cart />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
