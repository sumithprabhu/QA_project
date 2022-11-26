import React ,{useState} from "react";
import "./Portfolio.scss";
import { images } from "../../constants";

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('Ethereum');
    const handleWorkFilter = (item) => {
        setActiveFilter(item);
      };
  return (
    <div className="app__portfolio" id="portfolio">
      <div className="app__portfolio-title">PORTFOLIO</div>
      <p>Latest Work</p>
      <div className="app__portfolio-filter">
        {["Ethereum", "Solana","NFT","Binance SC"].map(
          (item) => (
            <div
              key={item}
              onClick={() => handleWorkFilter(item)}
              className={`app__portfolio-filter-item ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <div className="app__portfolio-work">
              <div className="app__portfolio-work-item">
                <img src={images.work} />
                <p>StackOS Audit Report</p>
                <div className="app__portfolio-work-item-button">
                    <div>View</div>
                    <div>Download</div>
                </div>
              </div>
              <div className="app__portfolio-work-item">
                <img src={images.work} />
                <p>StackOS Audit Report</p>
                <div className="app__portfolio-work-item-button">
                    <div>View</div>
                    <div>Download</div>
                </div>
              </div>
              <div className="app__portfolio-work-item">
                <img src={images.work} />
                <p>StackOS Audit Report</p>
                <div className="app__portfolio-work-item-button">
                    <div>View</div>
                    <div>Download</div>
                </div>
              </div>

      </div>
    </div>
  );
};


export default Portfolio;
