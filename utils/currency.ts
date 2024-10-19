// Create our number formatter.
export const vndFormatter = new Intl.NumberFormat("vn-VN", {
  style: "currency",
  currency: "VND",
  trailingZeroDisplay: "stripIfInteger",
});
