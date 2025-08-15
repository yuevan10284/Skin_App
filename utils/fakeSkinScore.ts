export const fakeSkinScore = () => {
  const score = Math.floor(Math.random() * 41) + 60; // 60-100
  let description = "";
  
  if (score > 85) {
    description = "Glowing skin. Keep it up!";
  } else if (score > 70) {
    description = "Good skin. Light redness or dryness.";
  } else {
    description = "You may need hydration or acne care.";
  }
  
  return { score, description };
};
