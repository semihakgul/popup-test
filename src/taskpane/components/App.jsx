import * as React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import PopupOpener from "./PopupOpener";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App = (props) => {
  const styles = useStyles();
  // The list items are static and won't change at runtime,
  // so this should be an ordinary const, not a part of state.

  return (
    <div className={styles.root}>
      <Header logo="assets/logo-filled.png" title={props.title} message="Welcome" />
      <PopupOpener />
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
