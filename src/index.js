import "./style.css";

console.log("testing");

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
  // eslint-disable-next-line no-undef
} else if (process.env.NODE_ENV === "production") {
  console.log("Looks like we are in production mode!");
}
