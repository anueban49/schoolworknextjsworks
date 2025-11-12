const Board = () => {
    return (
        <div className="w-[750px] aspect-square text-center bg-green-700 grid grid-cols-30">
        </div>
    )
}
const Cell = () => {
    for (let i = 1; i <= 30; i++) {
        for (let j = 0; j <= 30; j++) {
            document.createElement("div");
            div.className = "cell";
            div.appendChild("Board");
        }
    }
  
}
const grow = (s) => {
    if (s.getFood === true) {
        s.length += 1;
    }
    // s.getFood ? s.length += 1 : return s;
}
function spawnCoor() {
    let y= Math.floor(Math.random()) * 30 + 1;
    let x= Math.floor(Math.random()) * 30 + 1;
    return [x, y];
}
let gameOn = false;
const Button = (btnText, btnAction()) => {
    return (
        <div {btnAction()}
        className="w-20 h-[30px] p-3 text-center flex flex-row">
            {btnText}
        </div>
    )
}
const dead = (s) => {
    if (s.head.Coor === )
}
const Snake = {
    length: 1,
    head: spawnCoor(),

}