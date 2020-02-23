import React from "react";
import { ChartLabel, ChartLabelspan } from "../../../atoms/labels/ChartLabel";

const feedbacks = [
  {text:"Goed zo" , color:"green" },
  {text:"Kan beter" , color:"orange" },
  {text:"Opgelet" , color:"red" }
]

export default function ChartFeedback() {
  return (
    <>
      {feedbacks.map((feedback, i) => (
        <ChartLabel key={i}>
          <ChartLabelspan color={feedback.color}></ChartLabelspan>
          {feedback.text}
        </ChartLabel>
      ))}
    </>
  );
}
