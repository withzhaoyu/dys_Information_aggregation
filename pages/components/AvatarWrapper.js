import Image from "next/image";
const AvatarWrapper = (props) => {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        display: "inline-block",
        borderRadius: "50%",
        border: "5px solid",
        overflow: "hidden",
        borderColor: props.live ? "green" : "grey",
        filter: props.live ? "grayscale(0)" : "grayscale(1)",
      }}
    >
      <Image width="100%" height="100%" alt={props.name} src={props.src} />
    </div>
  );
};

export default AvatarWrapper;
