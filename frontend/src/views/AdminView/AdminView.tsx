import FooterView from "../../components/Footer/FooterView";
import StripeView from "./StripeView";
import ContentView from "./ContentView";

export default function AdminView() {
  return (
    <>
      <StripeView />
      <ContentView />
      <FooterView />
    </>
  );
}
