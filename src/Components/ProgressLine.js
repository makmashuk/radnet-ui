import React, { useEffect, useState } from "react";
const ProgressLine = ({
    backgroundColor = "#e5e5e5",
    visualParts = [
        {
            percentage: "0%",
            color: "white"
        }
    ]
}) => {
    // Starting values needed for the animation
    // Mapped by "visualParts" so it can work with multiple values dynamically
    // It's an array of percentage widths
    const [widths, setWidths] = useState(
        visualParts.map(() => {
            return 0;
        })
    );
    console.log(widths);

    useEffect(() => {
        requestAnimationFrame(() => {
            // Set a new array of percentage widths based on the props
            setWidths(
                visualParts.map(item => {
                    return item.percentage;
                })
            );
        });
    }, [visualParts]);

    return (
        <>
            <div className="progressLabel">{label}</div>
            <div
                className="progressVisualFull"
                // to change the background color dynamically
                style={{
                    backgroundColor
                }}
            >
                {visualParts.map((item, index) => {
                    // map each part into separate div and each will be animated
                    // because of the "transition: width 2s;" css in class "progressVisualPart"
                    // and because of the new width ("widths[index]", previous one was 0)
                    return (
                        <div
                            key={index}
                            style={{
                                width: widths[index],
                                backgroundColor: item.color
                            }}
                            className="progressVisualPart"
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ProgressLine;