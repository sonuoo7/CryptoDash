import React from "react";
import "./style.css";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Grid({ coin }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Link to={`/coins/${coin.id}`} ref={ref}>
      <div
        className={`grid-container
         ${
           coin.price_change_percentage_24h < 0
             ? "grid-container-red"
             : "grid-container-green"
         } `}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="info-flex">
          <img src={coin.image} className="coin-logo" />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>

        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="prise-flex">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip">
              <TrendingUpIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="prise-flex chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-red">
              <TrendingDownIcon />
            </div>
          </div>
        )}
        <div className="info-container">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </div>
        <p className="total_value">
          Total Volume:${coin.total_volume.toLocaleString()}
        </p>
        <p className="total_value">
          Market Cup: ${coin.market_cap.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}

export default Grid;
