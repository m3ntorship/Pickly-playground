import "../src/css/index.css";

// Add Decorators
export const decorators = [
  (Story) => (
    <div className="font-sans">
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
