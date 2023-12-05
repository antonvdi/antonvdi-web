import { useState, useMemo, useEffect, useContext } from "react";
import { generateMaze } from "./util";
import "./styles.scss";
import { ReactComponent as PenguinSVG } from "../../resources/penguin.svg";
import { ReactComponent as ChristmasTreeSVG } from "../../resources/christmastree.svg";
import { ChristmasContext } from "../../pages/MariaPage";

export default function BentGame() {
  const [status, setStatus] = useState("playing");
  const size = 20;

  const [userPosition, setUserPosition] = useState([0, 0]);
  const { context, setContext } = useContext(ChristmasContext);

  const maze = useMemo(() => generateMaze(size, size), [size]);

  useEffect(() => {
    const lastRowIndex = maze.length - 1;
    const lastColIndex = maze[0].length - 1;
    if (userPosition[0] === lastRowIndex && userPosition[1] === lastColIndex) {
      setStatus("won");
      setContext({ ...context, showTree: true });
    }
  }, [userPosition[0], userPosition[1]]);

  const makeClassName = (i: number, j: number) => {
    const rows = maze.length;
    const cols = maze[0].length;
    let arr = [];
    if (maze[i][j][0] === 0) {
      arr.push("topWall");
    }
    if (maze[i][j][1] === 0) {
      arr.push("rightWall");
    }
    if (maze[i][j][2] === 0) {
      arr.push("bottomWall");
    }
    if (maze[i][j][3] === 0) {
      arr.push("leftWall");
    }
    if (i === rows - 1 && j === cols - 1) {
      arr.push("destination");
    }
    if (i === userPosition[0] && j === userPosition[1]) {
      arr.push("currentPosition");
    }

    return arr.join(" ");
  };

  const handleMove = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (status !== "playing") {
      return;
    }
    const key = e.code;

    const [i, j] = userPosition;
    if ((key === "ArrowUp" || key === "KeyW") && maze[i][j][0] === 1) {
      setUserPosition([i - 1, j]);
    }
    if ((key === "ArrowRight" || key === "KeyD") && maze[i][j][1] === 1) {
      setUserPosition([i, j + 1]);
    }
    if ((key === "ArrowDown" || key === "KeyS") && maze[i][j][2] === 1) {
      setUserPosition([i + 1, j]);
    }
    if ((key === "ArrowLeft" || key === "KeyA") && maze[i][j][3] === 1) {
      setUserPosition([i, j - 1]);
    }
  };

  return (
    <div className="Game" onKeyDown={handleMove} tabIndex={1}>
      <p className="max-w-prose">
        Men åh nej! Juletræet er blevet sjålet! Hjælp Bent med at finde
        juletræet! Brug piletasterne til at bevæge dig
      </p>

      <table id="maze">
        <tbody>
          {maze.map((row, i) => (
            <tr key={`row-${i}`}>
              {row.map((cell, j) => (
                <td key={`cell-${i}-${j}`} className={makeClassName(i, j)}>
                  <div>
                    {makeClassName(i, j).includes("currentPosition") ? (
                      <PenguinSVG width="16px" height="16px" />
                    ) : makeClassName(i, j).includes("destination") ? (
                      <ChristmasTreeSVG width="22px" height="22px" />
                    ) : (
                      <></>
                    )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {status !== "playing" && (
        <div className="info">
          <div className="w-[120px] mt-2">
            <PenguinSVG width="100px" height="75px" />
            <p>
              <small>BENT REDDEDE JULEN</small>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
