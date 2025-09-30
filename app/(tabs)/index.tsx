import WrappedJoinRoom from "@/components/JoinRoom";
import "../global.css";

function HomeScreen() {

  return (
     <WrappedJoinRoom/>
  )
}

export default function Index() {
  return (
      <HomeScreen />
  );
}
