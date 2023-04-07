import Image from "next/image";

import styles from "@/styles";
import textStyles from "@/styles/Slug.module.css";

export function EntrepreneurCard(props) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl min-w-[500px] max-h-[400px] h-fit overflow-scroll">
      <div className="w-full max-w-[400px] h-full mx-auto flex flex-col justify-center items-center space-y-4 font-sans">
        <div className="w-fit max-h-[350px] overflow-clip rounded-lg shadow-2xl">
          <Image
            key={props.image}
            src={props.image}
            alt="Image"
            className="object-cover"
            height={props.data.height}
            width={props.data.width}
          />
        </div>
        <div>
          <h1 className="font-bold text-3xl">
            Meet the Entrepreneur:{" "}
            <span className={styles.header2}>{props.data.name}</span> from{" "}
            <span className={styles.header2}>{props.data.origin}</span>
          </h1>
          <div
            className={`pt-2 text-lg ${textStyles.content}`}
            dangerouslySetInnerHTML={{ __html: props.data.description.html }}
          ></div>
        </div>
      </div>
    </div>
  );
}
