import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import FileDown from "../../../../assets/filedown.svg";
//import pdfMake from 'pdfmake/build/pdfmake.js';
import { type } from "os";
import "./download-button.css";
const htmlStringToPdf = async () => {
  //   const blob = await new Blob([document.querySelector(".preview").innerHTML]);
  //   const docDefinition = {
  //     content: [blob],
  //   };
  //   pdfMake.createPdf(docDefinition).open();
  const capture = document.querySelector(".preview");
  const canvas = await html2canvas(capture, {});
  const imgData = canvas.toDataURL("img/png");
  const doc = new jsPDF("p", "mm", "a4");
  const height = doc.internal.pageSize.getHeight();
  const width = doc.internal.pageSize.getWidth();
  doc.addImage(imgData, "PNG", 0, 0, width, height);
  doc.save("CV.pdf");
};
type props={
    style:string;
}
const DownloadButton = ({style}: props) => {
  return (
    <button
      className={`download-button button ${style}`}
      onClick={htmlStringToPdf}
    >
      <div className="button-text">Download</div>
      <img src={FileDown} alt="preview" className="Icon" />
    </button>
  );
};
export default DownloadButton;
