import React, { useState, useEffect } from "react";

var lines = [];
function CanvasDrawing(props) {
  const [generate, setGenerate] = useState(false);
  var deleteButtons = [];
  useEffect(() => {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var isDrawing = false;
    var isFirstLineDrawn = false;
    var gridWidth = 25; // Adjust the grid width as needed
    var startX, startY, endX, endY;

    function drawGrid() {
      ctx.beginPath();
      ctx.lineWidth = 2; // Set grid line width to 2
      for (let x = 0; x <= canvas.width; x += gridWidth) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = 0; y <= canvas.height; y += gridWidth) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.strokeStyle = "#ccc"; // Grid color
      ctx.stroke();
    }

    function drawLines() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      lines.forEach(function (line, index) {
        ctx.beginPath();
        ctx.strokeStyle = "#000"; // Line color
        ctx.lineWidth = 6; // Set line width to 6
        ctx.lineCap = "round"; // Set lineCap to round for smoother edges
        ctx.moveTo(line.startX, line.startY);
        ctx.lineTo(line.endX, line.endY);
        ctx.stroke();

        // Draw width text above the line
        const textX = (line.startX + line.endX) / 2 + 10;
        const textY = (line.startY + line.endY) / 2 - 10; // Adjust the vertical position as needed
        ctx.font = "18px Arial "; // Adjust font size and style as needed
        ctx.fillStyle = "#000"; // Text color
        ctx.fillText(String(`${(line.width / 50).toFixed(1)} m`), textX, textY);

        if (!deleteButtons[index]) {
          var deleteButton = document.createElement("button");
          deleteButton.innerHTML = "x";
          deleteButton.style.position = "absolute";
          deleteButton.style.left = (line.startX + line.endX) / 2 + "px";
          deleteButton.style.top = (line.startY + line.endY) / 2 + "px";
          deleteButton.addEventListener("click", function () {
            deleteLine(index, 1);
          });
          document.body.appendChild(deleteButton);
          deleteButtons[index] = deleteButton;
        }
      });
    }

    canvas.addEventListener("mousedown", function (event) {
      if (!isFirstLineDrawn) {
        isFirstLineDrawn = true;
      }

      startX = Math.round(event.offsetX / gridWidth) * gridWidth;
      startY = Math.round(event.offsetY / gridWidth) * gridWidth;
      isDrawing = true;
    });

    canvas.addEventListener("mousemove", function (event) {
      if (isDrawing) {
        endX = Math.round(event.offsetX / gridWidth) * gridWidth;
        endY = Math.round(event.offsetY / gridWidth) * gridWidth;

        drawLines();
        ctx.beginPath();
        ctx.strokeStyle = "#f00"; // Set line color to red (for example)
        ctx.lineWidth = 6; // Set line width to 6
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    });

    canvas.addEventListener("mouseup", function (event) {
      if (isDrawing) {
        isDrawing = false;
        endX = Math.round(event.offsetX / gridWidth) * gridWidth;
        endY = Math.round(event.offsetY / gridWidth) * gridWidth;
        const width = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2); // Calculate line width
        lines.push({
          startX: startX,
          startY: startY,
          endX: endX,
          endY: endY,
          width: width,
        });
        drawLines();
      }
    });

    function deleteLine(index, number) {
      lines.splice(index, number);
      document.body.removeChild(deleteButtons[index]);
      deleteButtons[index] = null;
      drawLines();
    }

    drawGrid(); // Initial drawing of grid
    return () => {
      deleteButtons.map((btn) => btn.remove());
    };
  }, []);

  return (
    <>
      <canvas
        id="myCanvas"
        width={800}
        height={600}
        style={{ border: "1px solid black" }}
      />
      <button onClick={() => props.sendData(lines, generate)}>send</button>
    </>
  );
}

export default CanvasDrawing;
