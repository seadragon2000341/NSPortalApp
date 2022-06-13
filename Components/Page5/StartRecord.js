import CountDown from "react-native-countdown-component";

export default function StartRecord(props) {
  return (
    <CountDown
      until={props.time}
      size={30}
      onFinish={() => {
        props.setCam(true)
      }}
      digitStyle={{ backgroundColor: "#FFF" }}
      digitTxtStyle={{ color: "#1CC625" }}
      timeToShow={["M", "S"]}
      timeLabels={{ m: "MM", s: "SS" }}
    />
  );
}
