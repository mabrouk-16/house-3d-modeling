import React from "react";

function MyCanvas() {

    // 
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // Array to store lines
    var lines = [];
    var deleteButtons = []; // Array to store delete buttons

    // Set initial coordinates
    var startX, startY;
    var endX, endY;
    var isDrawing = false;

    // Function to draw lines
    function drawLines() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw all stored lines
      lines.forEach(function (line, index) {
        ctx.beginPath();
        ctx.moveTo(line.startX, line.startY);
        ctx.lineTo(line.endX, line.endY);
        ctx.stroke();

        // Add delete button for each line if not added already
        if (!deleteButtons[index]) {
          var deleteButton = document.createElement("button");
          deleteButton.innerHTML = "X";
          deleteButton.style.position = "absolute";
          deleteButton.style.left = (line.startX + line.endX) / 2 + "px";
          deleteButton.style.top = (line.startY + line.endY) / 2 + "px";
          deleteButton.addEventListener("click", function () {
            deleteLine(index);
          });
          document.body.appendChild(deleteButton);
          deleteButtons[index] = deleteButton;
        }
      });

      // If currently drawing, draw the current line
      if (isDrawing) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    }

    // Function to handle mouse down event
    canvas.addEventListener("mousedown", function (event) {
      // Set the starting point of the line
      startX = event.offsetX;
      startY = event.offsetY;
      isDrawing = true;
    });

    // Function to handle mouse move event
    canvas.addEventListener("mousemove", function (event) {
      if (isDrawing) {
        // Set the ending point of the line
        endX = event.offsetX;
        endY = event.offsetY;

        // Restrict the line to horizontal or vertical
        var dx = Math.abs(endX - startX);
        var dy = Math.abs(endY - startY);

        if (dx > dy) {
          // Snap to horizontal line
          endY = startY;
        } else {
          // Snap to vertical line
          endX = startX;
        }

        // Redraw the canvas with the current line
        drawLines();
      }
    });

    // Function to handle mouse up event
    canvas.addEventListener("mouseup", function (event) {
      if (isDrawing) {
        // Save the current line
        lines.push({ startX: startX, startY: startY, endX: endX, endY: endY });

        // Reset drawing state
        isDrawing = false;

        // Redraw the canvas with the new line
        drawLines();

        // Draw 3D walls
        drawWalls();
      }
    });

    // Function to delete a specific line
    function deleteLine(index) {
      lines.splice(index, 1);
      // Remove the delete button element
      document.body.removeChild(deleteButtons[index]);
      deleteButtons[index] = null; // Set the delete button to null
      drawLines();
      drawWalls();
    }

    // Function to handle save button click event
    document
      .getElementById("saveButton")
      .addEventListener("click", function () {
        // Convert canvas content to image
        var image = canvas.toDataURL("image/png");

        // Create a temporary link element
        var link = document.createElement("a");
        link.href = image;
        link.download = "drawing.png";

        // Simulate click on the link to download the image
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });

  return (
    <canvas
    
      id="myCanvas"
      width="800"
      height="600"
      style={{ border: "1px solid black" }}
    ></canvas>
  );
}

export default MyCanvas;
