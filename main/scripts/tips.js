const highlightTips = () => {
    const tips = document.querySelectorAll(".tips");
    for (const tip of tips) {
        tip.addEventListener("mouseover", event => {
            tip.className = "tipsHighlight";
        });
        tip.addEventListener("mousout", event => {
            tip.className = "";
        })
    }
};

export default highlightTips
