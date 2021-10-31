import PropTypes from "prop-types";

import style from "./Statistics.module.scss";

export function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {stats.map((stat) => (
          <li
            style={{ backgroundColor: getColor()}}
            className={style.item}
            key={stat.id}
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function getColor() {
  return `tomato`;
}