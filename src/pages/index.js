import { useState } from "react";

// const pages = () => {
//   const [sigma, setSigma] = useState("password");
//   const change = (type) => {
//     if (type === "password") {
//       setSigma("text");
//     } else {
//       setSigma("password");
//     }
//   };
//   return (
//     <div>
//       <input placeholder="sigma..." id="sigma" type={sigma} />
//       <button onClick={() => change(sigma)}>C</button>
//     </div>
//   );
// };

// export default pages;

const pages = () => {
  const [opValue, setOpValue] = useState("");
  const setValue = (color) => {
    setOpValue(color);
  };

  return (
    <div className="sigma" style={{ backgroundColor: opValue }}>
      <select
        onChange={(event) => setValue(event.target.value)}
        className="sigma1 sigma2"
      >
        <option value="red" className="sigma2">
          red
        </option>
        <option value="blue" className="sigma2">
          blue
        </option>
        <option value="yellow" className="sigma2">
          yellow
        </option>
        <option value="green" className="sigma2">
          green
        </option>
      </select>
    </div>
  );
};
export default pages;
