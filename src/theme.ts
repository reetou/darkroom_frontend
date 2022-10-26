import { transparentize } from "polished";

export const colors = {
  primary: "white",
  secondary: "rgba(0, 0, 0, 0.5)",
  text: "rgba(0, 0, 0, 1)",
  white: "rgba(255, 255, 255, 1)",
  highlight: "rgba(122, 74, 221, 1)",
  bold: "#272E35",
  dark: "#FFFFFF",
  light: "#EEEFF2",
  textLight: "rgba(0, 0, 0, 0.5)",
  secondaryDark: "#2C353D",
  successColor: "rgba(120, 208, 92, 1)",
  errorColor: "rgba(232, 65, 66, 1)",
  nodePropagationTime: {
    primary: "rgba(62, 100, 235, 1)",
    secondary: "rgba(0, 0, 0, 1)",
    inactive: "rgba(232, 65, 66, 0.2)",
    inactiveText: "#E84142",
    active: "rgba(255, 255, 255, 0.2)",
  },
  nodeStatus: {
    success: "rgba(120, 208, 92, 1)",
    warning: "rgba(243, 186, 47, 1)",
    error: "rgba(232, 65, 66, 1)",
  },
  integrations: {
    metamask: {
      color: "transparent",
      background: "rgba(255, 255, 255, 0.15)",
    },
  },
};

export const theme = {
  fontFamily: `'Poppins', sans-serif`,
  secondaryFontFamily: `'Poppins', sans-serif`,
  body: {
    backgroundColor: colors.dark,
  },
  sidebar: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    openBackgroundColor: "rgba(255, 255, 255, 0.85)",
    arrowShadow: "rgba(15, 15, 15, 0.5)",
    inactiveItemTextColor: "#777777",
    notAvailableColor: "rgba(47, 47, 47, 1)",
    item: {
      active: "transparent",
      hover: "rgba(255, 255, 255, 0.1)",
      press: "rgba(255, 255, 255, 0.05)",
      normal: "transparent",
    },
    menuButton: {
      normal: colors.dark,
      hover: colors.dark,
      press: colors.dark,
    },
  },
  input: {
    normal: "rgba(255, 255, 255, 0.1)",
    hover: "rgba(255, 255, 255, 0.2)",
    textColor: colors.dark,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  transition: {
    default: "0.3s",
    sidebar: "0.3s ease-in-out",
  },
  table: {
    headerBorderColor: "rgba(0, 0, 0, 0.1)",
    headerBorderWidth: "1px",
    highlightColor: "rgba(228, 219, 248, 1)",
    emojiBackgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  nodesTable: {
    headerColor: colors.text,
    stripeColor: "transparent",
    mobileLocationColor: "rgba(135, 135, 135, 1)",
  },
  requestsTable: {
    successColor: "rgba(69, 193, 29, 1)",
    failedColor: "rgba(219, 67, 67, 1)",
  },
  endpoint: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    sticky: {
      borderColor: "rgba(110, 117, 124, 0.1)",
      backgroundColor: "#FFFFFF",
    },
  },
  map: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    dotColor: "rgba(255, 255, 255, 0.2)",
    tableCommandBackgroundColor: "rgba(255, 255, 255, 0.1)",
    tableHeaderBorderColor: "rgba(255, 255, 255, 0.1)",
  },
  card: {
    cornerColor: "rgba(150, 161, 170, 1)",
    borderColor: "transparent",
    durationColor: "rgba(0, 0, 0, 0.75)",
  },
  modal: {
    background: "rgba(19, 19, 20, 0.9)",
    windowBackground: "white",
  },
  footer: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    copyrightColor: "rgba(0, 0, 0, 0.5)",
    subtitleColor: "rgba(0, 0, 0, 0.5)",
  },
  tooltip: {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
};
