import ReactDom from "react-dom";

const PopupDom = ({ children }: any) => {
  if (process.browser) {
    const el = document.getElementById("popupDom");
    return ReactDom.createPortal(children, el);
  }
};

export default PopupDom;
