import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Notes from "./modules/Notes/Notes";
import Home from "./modules/home/Home";
import NoPage from "./modules/Nopage.js";
import PdfPage from "./modules/pdf/PdfPage";
import NotesForm from "./modules/Admin/UploadForm/NotesForm";
import "./index.css";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoPage />} />
      {/* <Route path="home" element={<Home />} /> */}
      <Route path="/notes" element={<Notes />} />
      <Route path="/pdfpage" element={<PdfPage />} />
      <Route path="/notesform" element={<NotesForm />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
