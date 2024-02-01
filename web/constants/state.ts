import { TStateGroups } from "types";

export const STATE_GROUP_COLORS: {
  [key in TStateGroups]: string;
} = {
  todo: "#d9d9d9",
  in_progress: "#3f76ff",
  ready_for_qa: "#f59e0b",
  qa_passed: "#16a34a",
  qa_failed: "#dc2626",
  completed:"#f59e0b"
};

// "To Do"|"In Progress"|"Ready For QA"|"QA Passed"| "QA Failed"| "Completed";
