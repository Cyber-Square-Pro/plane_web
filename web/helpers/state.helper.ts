// types
import { IStateResponse } from "types";

export const orderStateGroups = (unorderedStateGroups: IStateResponse | undefined): IStateResponse | undefined => {
  if (!unorderedStateGroups) return undefined;
  return Object.assign({ todo: [], in_progress: [], ready_for_qa: [], qa_passed: [], qa_failed: [],completed: [] }, unorderedStateGroups);
};
