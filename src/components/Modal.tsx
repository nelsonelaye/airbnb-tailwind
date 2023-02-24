import ReactDOM from "react-dom/client";
import Rheostat from "rheostat";

const Modal = () => {
  const root = ReactDOM.createRoot(
    document.getElementById("slider-root") as HTMLElement
  );

  return root.render(<Rheostat min={1} max={100} values={[1, 100]} />);
};

export default Modal;
