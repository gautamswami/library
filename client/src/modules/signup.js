import "./signup.css";

export default function Signup() {
  return (
    <div className="signup">
      <h5 className="gyc">Get you credentials?</h5>
      <br />
      <p className="p1">
        Want to share your knowledge. We will verify you in no time that you are
        a teacher and send you your credentials.
      </p>
      <br />
      <form className="requestcredentials" action="">
        <input type="text" placeholder="Full Name" id="FullName" required />{" "}
        <br />
        <select id="dropdownyou" required>
          <option value="0"> You are </option>
          <option value="1"> HOD </option>
          <option value="2"> Teacher </option>
          <option value="3"> className Repsentative(CR)</option>
          <option value="4"> Principal </option>
        </select>
        <br />
        <input type="email" id="email" placeholder="your@mail.com" required />
        <p className="p2">
          *please enter your mail you want to get your credentials
        </p>
        <br />
        <input type="file" id="myFile" name="filename" required />
        <p id="p3">
          *We will verify that you are a teacher, To give you access of
          uploading files on our website
        </p>
        <br />
        <br />
        <br />
        <button type="submit" id="signup2" value="SIGNUP">
          Get you credentials
        </button>
      </form>
    </div>
  );
}
