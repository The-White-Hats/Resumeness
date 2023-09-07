import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import FileDown from "../../../../assets/filedown.svg";
//import pdfMake from 'pdfmake/build/pdfmake.js';
// import { type } from "os";
import "./download-button.css";
const htmlStringToPdf = async (location: string) => {
  const capture =
    location === "/resume" || location === "/resume/preview"
      ? (document.querySelector(".preview")! as HTMLElement)
      : (document.querySelector(".letter-preview")! as HTMLElement);

  const canvas = await html2canvas(capture, {});
  const imgData = canvas.toDataURL("img/png");
  const doc = new jsPDF("p", "mm", "a4");
  const height = doc.internal.pageSize.getHeight();
  const width = doc.internal.pageSize.getWidth();
  const fileName = (location === "/resume" || location === "/resume/preview") ? "Resume" : "Cover-Letter";
  doc.addImage(imgData, "PNG", 0, 0, width, height);
  doc.save(`${fileName}.pdf`);
};
type props = {
  style: string;
};
const DownloadButton = ({ style = "" }: props) => {
  return (
    <button
      className={`download-button button ${style}`}
      onClick={() => htmlStringToPdf(location.pathname)}
    >
      <div className="button-text">Download</div>
      <img src={FileDown} alt="preview" className="Icon" />
    </button>
  );
};

export {htmlStringToPdf as Download};
export default DownloadButton;
