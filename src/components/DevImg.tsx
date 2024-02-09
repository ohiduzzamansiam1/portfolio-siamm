import Image from "next/image";

function DevImg({
  containerStyles,
  imgSrc,
}: {
  containerStyles?: any;
  imgSrc: string;
}) {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} alt="" fill priority />
    </div>
  );
}

export default DevImg;
