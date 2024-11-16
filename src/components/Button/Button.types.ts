import { ColorsAvailable } from "../../theme/types";

export type ButtonVariant = "filled" | "outlined" | "text";
export type ButtonColor = Extract<ColorsAvailable, "primary" | "secondary">;
