/*import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="left_part">
            <p>
              Copyright 2024 - AVR CLUB VIT Chennai
            </p>
          </div>  
        </div>
      </div>
    </footer>
  );
};
export default Footer;
*/
import Link from "next/link";

const Footer = () => {
  const names = [
    "Name1",
    "Name2",
    "Name3",
    "Name4",
    "Name5",
    "Name6"
  ];

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="left_part">
            <p>
              Copyright 2024 - AVR CLUB VIT Chennai 
            </p>
            <p>Website credits: {names.join(", ")}</p>
          </div>  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
