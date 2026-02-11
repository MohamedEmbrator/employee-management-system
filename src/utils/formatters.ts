import { getCurrencySymbol } from "./currency";

export function formatPriceWithCurrency(price: number, currency: string) {
  if (!price) return "Not set";
  const symbol = getCurrencySymbol(currency);
  return `${symbol}${price.toFixed(2)}`;
}

export function formatFileSize(bytes: number) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export function getFileType(filename) {
  const ext = filename.split(".").pop().toLowerCase();
  if (["pdf"].includes(ext)) return "pdf";
  if (["doc", "docx"].includes(ext)) return "doc";
  if (["jpg", "jpeg", "png", "gif", "bmp"].includes(ext)) return "image";
  if (["zip", "rar", "7z", "tar", "gz"].includes(ext)) return "archive";
  if (["xls", "xlsx"].includes(ext)) return "excel";
  if (["ppt", "pptx"].includes(ext)) return "powerpoint";
  if (["txt", "rtf", "md"].includes(ext)) return "text";
  return "other";
}

export function getFileIcon(fileType: string) {
  switch (fileType) {
    case "pdf":
      return "file-pdf";
    case "doc":
      return "file-word";
    case "image":
      return "file-image";
    case "archive":
      return "file-archive";
    case "excel":
      return "file-excel";
    case "powerpoint":
      return "file-powerpoint";
    case "text":
      return "file-alt";
    default:
      return "file";
  }
}
