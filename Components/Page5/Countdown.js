import CountDown from "react-native-countdown-component";

export default function Count(props) {
  return (
    <CountDown
      until={props.time}
      size={30}
      onFinish={() => {
        alert("Time is up! Submitting recording for AI to evaluate...");
        props.finishComponent(true);
        props.setCam(false);
      }}
      digitStyle={{ backgroundColor: "#FFF" }}
      digitTxtStyle={{ color: "#1CC625" }}
      timeToShow={["M", "S"]}
      timeLabels={{ m: "MM", s: "SS" }}
    />
  );
}
