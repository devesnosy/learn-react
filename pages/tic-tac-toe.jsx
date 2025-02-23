"use client";

import ProgressBar from "../components/progress-bar";

function Square() {
  return <button style={{ width: "100px", height: "100px" }}></button>;
}

export default function TicTacToe() {
  const tableRows = [];
  for (let i = 0; i < 3; i++) {
    const rowElems = [];
    for (let j = 0; j < 3; j++) {
      rowElems.push(
        <td>
          <Square />
        </td>,
      );
    }
    tableRows.push(<tr>{rowElems}</tr>);
  }
  return (
    <table style={{ margin: "auto" }}>
      <tbody>{tableRows}</tbody>
    </table>
  );
}
