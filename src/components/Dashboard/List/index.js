import React from 'react'
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Tooltip from "@mui/material/Tooltip";
import { convertNumber } from '../../../functions/convertNumber';
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";


function List({ coin }) {
  const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
  return (
    <Link to={`/coins/${coin.id}`} ref={ref}>
      <tr
        className="list-row"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Tooltip title="Logo" placement="bottom-start">
          <td className="td-imgae">
            <img src={coin.image} className="coin-logo" />
          </td>
        </Tooltip>
        <Tooltip title="Symbol" placement="bottom-start">
          <td>
            <div className="name-col">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip title="Price change 24Hrs" placement="bottom-start">
          {coin.price_change_percentage_24h > 0 ? (
            <td className="chip-flex">
              <div className="prise-flex">
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </div>
              <div className="icon-chip td-icon">
                <TrendingUpRoundedIcon />
              </div>
            </td>
          ) : (
            <td className="chip-flex">
              <td className="prise-flex chip-red ">
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>
              <td className="icon-chip chip-red td-icon">
                <TrendingDownRoundedIcon />
              </td>
            </td>
          )}
        </Tooltip>
        <Tooltip title="Current Price" placement="bottom-start">
          <td>
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
          </td>
        </Tooltip>
        <Tooltip title="Total Volume" placement="bottom-start">
          <td>
            <p className="total_value1  td-total-volume">
              {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-start">
          <td className="desktop-td-mkt ">
            <p className="total_value1">${coin.market_cap.toLocaleString()}</p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-start">
          <td className="mobile-td-mkt">
            <p className="total_value1">${convertNumber(coin.market_cap)}</p>
          </td>
        </Tooltip>
      </tr>
    </Link>
  );
}

export default List;