import * as React from "react";
import { Button, Field, tokens, makeStyles } from "@fluentui/react-components";
import { openPopup } from "../office-document";

const useStyles = makeStyles({
  instructions: {
    fontWeight: tokens.fontWeightSemibold,
    marginTop: "20px",
    marginBottom: "10px",
  },
  textPromptAndInsertion: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textAreaField: {
    marginLeft: "20px",
    marginTop: "30px",
    marginBottom: "20px",
    marginRight: "20px",
    maxWidth: "50%",
  },
});

const PopupOpener = () => {
  const styles = useStyles();
  const shortUrl = "https://www.google.com/";
  const longUrl =
    "https://www.google.com/search?q=black&tbm=isch&ved=2ahUKEwj4oPLC8M2EAxW4KmIAHV_7DJcQ2-cCegQIABAA&oq=black&gs_lp=EgNpbWciBWJsYWNrMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgUQABiABDIKEAAYgAQYigUYQ0iEDlCWB1iwC3AAeACQAQCYAbMBoAHRB6oBAzAuNrgBA8gBAPgBAYoCC2d3cy13aXotaW1nwgIEECMYJ4gGAQ&sclient=img&ei=_xHfZbilDbjViLMP3_azuAk&bih=824&biw=1512&rlz=1C5GCEM_enPL1062PL1062#imgrc=kenR_Rt2kfPLkM";
  return (
    <div className={styles.textPromptAndInsertion}>
      <Field className={styles.instructions}>Click the button to open popup.</Field>
      <Button appearance="primary" disabled={false} size="large" onClick={() => openPopup(shortUrl)}>
        Open Short URL Popup
      </Button>
      <Button appearance="primary" disabled={false} size="large" onClick={() => openPopup(longUrl)}>
        Open Long URL Popup
      </Button>
    </div>
  );
};

export default PopupOpener;
