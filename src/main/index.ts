import { UsecaseError } from "../usecases/errors/usecase-error";
import writeValuesSheet from "./factory";

const initialize = async () => {
  try {
    writeValuesSheet.writeResults();
  } catch (e) {
    if (e instanceof UsecaseError) {
      console.error("Use case error: " + e.message);
    } else {
      console.error("Google Sheets API Error");
    }
  }
};

initialize();
