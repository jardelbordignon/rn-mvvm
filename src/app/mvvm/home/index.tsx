import { useHomeModel } from "./home.model";
import { HomeView } from "./home.view";

export function Home() {
  const props = useHomeModel()

  return <HomeView {...props} />
}