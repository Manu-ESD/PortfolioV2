import { TypeAnimation } from "react-type-animation";

const DesignationReleave = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Frontend Developer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Web Designer",
        1000,
        "ReactJS Developer",
        1000,
        "Youtuber",
        1000,
        "Tech Enthusiast",
        1000,
      ]}
      wrapper="span"
      speed={5}
      style={{
        fontSize: "1.5rem",
        display: "inline-block",
        color: "Black",
        fontWeight: "bold",
      }}
      repeat={Infinity}
    />
  );
};

export default DesignationReleave;
