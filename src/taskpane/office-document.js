/* global Excel Office console */

const insertText = async (text) => {
  // Write text to the top left cell.
  try {
    Excel.run(async (context) => {
      const sheet = context.workbook.worksheets.getActiveWorksheet();
      const range = sheet.getRange("A1");
      range.values = [[text]];
      range.format.autofitColumns();
      return context.sync();
    });
  } catch (error) {
    console.log("Error: " + error);
  }
};

// Function to open a popup dialog
const openPopup = (url, options = { height: 75, width: 25 }) => {
  // Ensure that the URL parameter is provided
  if (!url) {
    console.error("URL is required to open a popup.");
    return;
  }

  try {
    Office.context.ui.displayDialogAsync(url, options, (result) => {
      if (result.status === Office.AsyncResultStatus.Failed) {
        console.error(`Failed to open dialog: ${result.error.message}`);
      } else {
        // Dialog opened successfully
        const dialog = result.value;

        // You can add event handlers if needed, for example:
        dialog.addEventHandler(Office.EventType.DialogMessageReceived, (arg) => {
          console.log(arg.message);
          // Handle message received from dialog here
          // Optionally, you can close the dialog
          // dialog.close();
        });
      }
    });
  } catch (error) {
    console.error(`Error opening popup: ${error}`);
  }
};

export { insertText, openPopup };
