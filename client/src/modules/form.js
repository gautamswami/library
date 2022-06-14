import "./form.css";

export default function Form() {
  return (
    <>
      <div>
        <form className="inputnotes">
          <div className="BTN">
            <button id="NOTES">NOTES</button>
            <button id="LAB">LAB</button>
            <button id="PYP">PREVIOUS YEAR EXAM</button>
          </div>
          <br />
          <div className="branch">
            <label>BRANCH</label>
            <br />
            <input type="radio" name="BRANCH" value="B.TECH" />
            B.TECH
            <br />
            <input type="radio" name="BRANCH" value="B.PHARM" />
            B.PHARM
            <br />
            <input type="radio" name="BRANCH" value="BBA" id="BBA" />
            BBA
            <br />
            <input type="radio" name="BRANCH" value="MBA" id="MBA" />
            MBA
            <br />
            <input type="radio" name="BRANCH" value="BFSI" id="BFSI" />
            BFSI
            <br />
            <input type="radio" name="BRANCH" value="D.PHARM" id="D.PHARM" />
            D.PHARM
            <br />
            <input type="radio" name="BRANCH" value="D.VOC" id="D.VOC" />
            D.VOC
            <br />
          </div>

          <hr />

          <div>empty</div>
        </form>
      </div>
    </>
  );
}
