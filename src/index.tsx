import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import reportWebVitals from "reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
function getMetric({ name, value }: { name: string; value: number }) {
  if (process.env.NODE_ENV === "production") return;

  const color = (value: string) => {
    switch (value) {
      case "GOOD":
        return "#0CCE6B";
      case "STABLE":
        return "#FFA400";
      case "POOR":
        return "#FF4E42";
    }
  };

  const { type, metric, status } = ((): {
    type: string;
    metric: string;
    status: string;
  } => {
    switch (name) {
      case "TTFB":
        return {
          type: "최초응답시간",
          metric: `${Math.ceil(value)}ms`,
          status: "",
        };
      case "FCP":
        return {
          type: "최초로딩소요시간",
          metric: `${Math.ceil(value)}ms`,
          status: "",
        };
      case "LCP":
        // 로딩 성능 | 2.5sec 미만 GOOD | 4.0sec 미만 적정 | 4.0sec 이상 POOR
        return {
          type: "렌더링소요시간",
          metric: `${Math.ceil(value)}ms`,
          status: value < 250 ? "GOOD" : value < 400 ? "STABLE" : "POOR",
        };
      case "FID":
        // 최초 입력 지연 | 100ms 미만 GOOD | 300ms 미만 적정 | 300ms 이상 POOR
        return {
          type: "이벤트반응속도",
          metric: `${Math.ceil(value)}ms`,
          status: value < 100 ? "GOOD" : value < 300 ? "STABLE" : "POOR",
        };
      case "CLS":
        // 시각적 안정성 | 0.1 미만 GOOD | 0.25 미만 적정 | 0.25 이상 POOR
        return {
          type: "레이아웃변동시간",
          metric: `${value.toFixed(2)}`,
          status: value < 0.1 ? "GOOD" : value < 0.25 ? "STABLE" : "POOR",
        };
      default:
        return { type: "", metric: "", status: "" };
    }
  })();

  type &&
    console.log(`[${type}] ${metric} %c${status}`, `color: ${color(status)}`);
}
reportWebVitals(getMetric);
