import { format } from "date-fns";
import { enGB } from "date-fns/locale";

export const formatDateCustom = (date: Date) => {
  try {
    return format(date, "MMMM yyyy", { locale: enGB })
      .replace(/^./, c => c.toUpperCase());
  } catch (error) {
    return String(error);
  }
};
