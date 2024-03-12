import "./Preloader.css";

function Preloader(props) {
  return (
    <>
      <div
        className={
          props.fullScreen
            ? "preloader__container_full-screen"
            : "preloader__container"
        }
      >
        <i className="preloader__circle"></i>
      </div>
    </>
  );
}

export default Preloader;
