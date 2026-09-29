import "./App.css";
import Faq from "./components/Accordion/faq";
import LikeButton from "./components/LikeButton";
import LiveStreamUI from "./components/LiveStreamUI";
import MortgageCalculator from "./components/MortgageCalculator";
// import MouseTracker from "./components/MouseTracker";
import MultiStepForm from "./components/MultiStepForm";
import ProgressBarQue from "./components/Progressbar";
import PushNotification from "./components/PushNotification/PushNotification";
import StarRating from "./components/StarRating";
import TempratureConverter from "./components/TempratureConverter";
import Toast from "./components/Toast";
import MouseTracker from "./Practice/MouseTracker";

function App() {
  return (
    <>
      {/* <ProgressBarQue/> */}

      {/* <TempratureConverter /> */}
      {/* <StarRating starCount={5} filledStarCount={2} /> */}
      {/* <Toast/> */}
      {/* <Faq/> */}
      {/* <PushNotification /> */}
      {/* <LiveStreamUI /> */}
      <MouseTracker />
      {/* <MultiStepForm /> */}
      {/* <LikeButton /> */}
    </>
  );
}

export default App;
