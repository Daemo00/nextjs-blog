import PropTypes from "prop-types";
import React from "react";

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
Layout.propTypes = {
  children: PropTypes.any,
};
