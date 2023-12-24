import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import style from "./style.module.css";
export default function SkeletonComp({ number }) {
  return Array(number)
    .fill(0)
    .map((_, index) => {
      return (
        <div  className={style.parent} key={index}>
          <div className={style.card}>
            <div
              className="image_container1"
              style={{ marginTop: "1px", paddingBottom: "5px" }}
            >
              <Skeleton count={1} height={240} />
            </div>
          </div>
        </div>
      );
    });
}
