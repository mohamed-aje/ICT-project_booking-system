import React, { useEffect, useState } from "react";
import "./styles/DashBoard.css";
import ReactTooltip from "react-tooltip";

const FloorFiveLayout = ({ setSelectedDeskID, setOccupied, ...props }) => {
  //const [style, setStyles] = useState([]);
  const floorFiveData = props.floorFiveData;
  const selectedDesk = props.selectedDesk;
  const [currentDesk, setDesk] = useState();
  const [isLoading, setLoading] = useState(true);
  //const desksOnFloorCount = props.desksOnFloorCount;
  const occupiedDesks = props.occupiedDesks;

  useEffect(() => {
    setDesk(selectedDesk);
    !floorFiveData ? setLoading(true) : setLoading(false);
    ReactTooltip.rebuild();
  });

  const selectDesk = (e) => {
    let id = e.target.attributes.id.value;
    setDesk(id);
    setSelectedDeskID(id);
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1173 435" {...props}>
      <defs></defs>
      <g id="Layer_2" data-name="Layer 2">
        <path
          className="cls-1"
          d="m766.18 424.93-.51-117.45 2.06.04v-9.18l203.63.18 13.07 22.73 1 .5 71.47-.5-.08 103.68H766.18zM77 13.33v165.49h135.45l.2 16.18h28.48v-42.86h181.93v44.11h26.45v-49.19h99.15v17.57h39.79V13.33H77z"
        />
        <path
          className="cls-1"
          d="m1056.76 286.33 47.74-2-.18-82.54h-88.24l-.47-4.91H969.4v-17.42h-29.08V202h-8.39v32.41l-.57.08-.38.09-.91.24c-.54.14-1 .26-1.49.41l-6 1.92c-4.12 1.33-8.39 2.72-12.62 4-5.72 1.68-11.57 3.24-17.39 4.63-5 1.19-10.05 2.2-15 3.18l-1.94.39c-4.52.9-8.27 1.58-11.8 2.13-3.86.61-7.83 1.07-11.33 1.48s-7.34.81-11.5 1.2c-2.83.27-5.84.5-9.18.72s-6.26.38-9.1.48c-2 .08-4 .12-6 .16l-4 .1-.21.09-.33.12-.16.05h-46.81l.27-54.22h-7l-.08-18.09h-31.9L712 198.82l-2.29.43-39.71.18-.07 2.46-3.72.05.11 42.17 3 .15.25 22.08H533.3v-69.59H422.86v5.05h-8.19V253.32a8 8 0 0 0 .08.93c0 .17.05.34.06.51l.12 1.1H368l-.15-.05-.34-.12-.23-.09-4-.1c-2 0-4-.08-5.95-.16-2.85-.1-5.83-.26-9.12-.48s-6.34-.45-9.17-.72c-4.16-.39-7.92-.78-11.5-1.2s-7.47-.87-11.33-1.48c-3.53-.55-7.28-1.23-11.8-2.13l-1.95-.39c-4.91-1-10-2-15-3.18-5.83-1.39-11.67-2.95-17.39-4.63-4.24-1.24-8.5-2.63-12.62-4l-6-1.92c-.47-.15-.95-.27-1.49-.41l-.92-.24-.65-.17-.11-.8a6.34 6.34 0 0 1-.14-1.17V201.61H241l-.17-6.15h-27.78v2.39h-47.53v3.73l-89 .25.17 82.45 47.72.68.17 37.33h69.3v-16.51l47 .17v-9.36h184.88v2.08h-2.65v7.19h335.08v-7.06h-2.06v-2.18h216.78l12.26 22.6.81 1.1 70.4-.59v-30.84Z"
          transform="translate(.5 -.5)"
        />
        <path
          className="cls-1"
          d="M243.2 154.8v36.45l59.1.2V154.8h-59.1zM304.76 154.8h56.79v36.73h-56.79zM363.93 154.8h56.79v36.74h-56.79zM451.89 149.45h28.64l-.2 44.87h-28.38l-.06-44.87zM483.08 149.45h28.72v44.83h-28.69l-.03-44.83zM514.35 149.6v22.39h32.08v-22.17l-32.08-.22z"
        />
        <path
          className="cls-1"
          d="M513.81 173.61H546v21.18h-32.26s.07-21.79.07-21.18Z"
          transform="translate(.5 -.5)"
        />
        <path
          className="cls-1"
          d="M940.16 152.14h-182.2v30.91h-31.94l-18.6-17.8-2.15-.51H592.5V13.94l511.98-.04-.06 165.06H940.07l.09-26.82z"
        />
        <path
          className="cls-1"
          d="M759.76 155.3h59V192h-59Z"
          transform="translate(.5 -.5)"
        />
        <path className="cls-1" d="M821.71 154.8h56.66v36.55h-56.66z" />
        <path
          className="cls-1"
          d="M880.69 155.33h56.44v37h-7v2.28h-49.45s-.25-39.54.01-39.28Z"
          transform="translate(.5 -.5)"
        />
        <path
          className="cls-1"
          d="M78.74 416.6h-6.91v8.33h-27.8l-.01-134.18h30.51v-1.99h47.09v136.17H78.74v-8.33zM241.82 424.93l.05-8.5 15.34-.05.12-108.74H196.1l.13 17h-71.82v100.29h117.41z"
        />
        <path
          className="cls-1"
          d="M249.51 298.21h163.15v9.01l174.91.37v117.34H248.39l-.02-6.23h10.42V305.34h-9.28v-7.13zM651.36 424.93h-58.72l.16-117.4h58.42M653.56 307.51l110.49-.06-.09 118.05-110.4-.57V307.51zM1058.84 288.76l-.78 136.17h78.77l-.22-135.18h-30.99l-.04-1.39-46.74.4z"
        />
        <path
          className="cls-1"
          d="M680.61 167.61h25.15l17.53 17.09-13.13 13.3h-29.55Z"
          transform="translate(.5 -.5)"
        />
      </g>
      <g id="Layer_1" data-name="Layer 1">
        <path
          className="cls-2"
          d="M418.9 93.32h8.1v8.9c-1.59.46-10.77.57-13.74.12v-8.86l3.52-.34V60.37h2.09Zm4 .76v7.54h3.65v-7.54ZM982.47 320.39l1.68-1.16c.73.69.33 1.12 4.27.91 12.6 0 25.21-.11 37.82-.11h2.76l.08 2.17s-34.89.09-43.59.13a3.69 3.69 0 0 1-3.02-1.94ZM757.89 93.41h9v9h-9ZM250.14 102.51h-9v-9.07h9Z"
          transform="translate(.5 -.5)"
        />
        <path
          className="cls-2"
          d="M181.3 246.76h4.62v2.5h-4.62zM162.5 246.76h4.62v2.5h-4.62z"
        />
        <path
          className="cls-3"
          d="m921.05 235.27 6-1.93c.51-.16 1-.29 1.6-.44l.27-.06V198.86a2.45 2.45 0 0 0 0-.36.67.67 0 0 0-.24 0H767.99a6.27 6.27 0 0 0-.74.05c-.07 1-.14 2-.22 3.06h-.3V253.83H780L918.76 236ZM931 222.73v9.73a6.35 6.35 0 0 1-.13 1.17l-.12.8-.28.08.58-.08V202v11.25ZM764.66 254.25a6.34 6.34 0 0 0 .09-.93v-51.68l-.26 54.22.11-1.1Z"
          transform="translate(.5 -.5)"
        />
        <path
          className="cls-2"
          d="M936.93 155.39v15.3h2.46l.06-18.05h-79v2.66h17.36v36.55l-56.51-.15v-36.4h17.23v-2.66h-38.15v2.66h18.5V192H760v-36.7h18.45v-2.66h-20.67v49.05h7v51.68a6.34 6.34 0 0 1-.09.93l-.06.51-.11 1.1h46.83l.15-.05.34-.12.21-.09 4-.1c2 0 4-.08 6-.16 2.84-.1 5.82-.26 9.09-.48s6.34-.45 9.17-.72c4.15-.39 7.91-.78 11.48-1.2s7.47-.87 11.32-1.48c3.52-.55 7.27-1.23 11.78-2.13l1.95-.39c4.91-1 10-2 14.94-3.18a349.17 349.17 0 0 0 17.37-4.63c4.23-1.24 8.49-2.63 12.6-4l6-1.92c.47-.15 1-.27 1.49-.41l.91-.24.37-.09.28-.08.12-.8a6.35 6.35 0 0 0 .13-1.17v-30.44h8.37v-11.26h-2.62v1.57H930l-.06 2.28h-49.32v-39.27Zm-24.4 43.12h16.2a.67.67 0 0 1 .24 0 2.45 2.45 0 0 1 0 .36V232.85l-.27.06c-.58.15-1.09.28-1.6.44l-6 1.93-2.29.74c-3.39 1.09-6.83 2.19-10.26 3.2-5.67 1.68-11.48 3.23-17.26 4.61-4.92 1.18-10 2.18-14.88 3.16l-1.94.39c-4.49.9-8.2 1.57-11.69 2.12-3.82.6-7.77 1.06-11.25 1.46s-7.29.81-11.43 1.2c-2.82.27-5.8.5-9.11.72s-6.21.37-9 .47c-2 .08-3.95.12-5.92.16l-4 .1a2.67 2.67 0 0 0-.93.24h-44.39V201.63h.3c.08-1.06.15-2 .22-3.06a6.27 6.27 0 0 1 .74-.05q72.29-.02 144.52-.01Z"
          transform="translate(.5 -.5)"
        />
        <path className="cls-2" d="m939.87 201.52.02-11.25h-.02v11.25z" />
        <path
          className="cls-3"
          d="M412.39 253.86V199.16c0-.18-.05-.35-.07-.53a8.44 8.44 0 0 0-1.2-.1H250.55c-.08 1.05-.15 2.06-.22 3.14h-.17v30.8a2.56 2.56 0 0 0 0 .39l.26.06c.58.15 1.1.28 1.61.44l6 1.93 2.11.68 138.7 17.91Z"
          transform="translate(.5 -.5)"
        />
        <path
          className="cls-2"
          d="M248.14 201.65v30.81a6.34 6.34 0 0 0 .14 1.17l.11.8v-32.78Z"
          transform="translate(.5 -.5)"
        />
        <path
          className="cls-2"
          d="M422.56 153v-.35H403.4v2.66h16.85V192H363.6v-36.7h18v-2.66h-37.92v2.66h17.56V192h-56.65v-36.7h17.15v-2.66h-38.16v2.66h18.55V192l-58.95-.2v-36.5h18.46v-2.66H241v.36h-.06v48.68h7.51v32.78l.64.17.92.24c.54.14 1 .26 1.49.41 2 .63 4 1.27 6 1.92 4.12 1.33 8.38 2.72 12.61 4a349.17 349.17 0 0 0 17.37 4.63c5 1.19 10 2.2 14.94 3.18l1.95.39c4.51.9 8.25 1.58 11.78 2.13 3.85.61 7.81 1.07 11.32 1.48s7.32.81 11.48 1.2c2.83.27 5.83.5 9.16.72s6.26.38 9.1.48c2 .08 4 .12 5.95.16l4 .1.23.09.34.12.15.05h46.56V201.8h8.18V153Zm-54.39 100.86h-.06a2.67 2.67 0 0 0-.93-.24l-4-.1c-2 0-3.94-.08-5.92-.16-2.82-.1-5.78-.26-9-.47s-6.3-.45-9.11-.72c-4.14-.39-7.88-.78-11.43-1.2s-7.43-.86-11.24-1.46c-3.5-.55-7.21-1.22-11.7-2.12l-1.94-.39c-4.9-1-10-2-14.88-3.16-5.78-1.38-11.59-2.93-17.26-4.61-3.5-1-7-2.15-10.44-3.26l-2.11-.68-6-1.93c-.51-.16-1-.29-1.61-.44l-.26-.06a2.56 2.56 0 0 1 0-.39V201.67h.17c.07-1.08.14-2.09.22-3.14H411.09a8.44 8.44 0 0 1 1.2.1c0 .18 0 .35.07.53V253.86h-44.19Z"
          transform="translate(.5 -.5)"
        />
        <path
          className="cls-2"
          d="M414.38 255.86h.27l-.12-1.1c0-.17 0-.34-.06-.51a8 8 0 0 1-.08-.93v-42.76 45.3Z"
          transform="translate(.5 -.5)"
        />
        <path
          className="cls-2"
          d="M423.06 196.25h.01v5.05h-.01zM194.4 305.32h2.41v19.31h-2.41z"
        />
        <path
          className="cls-2"
          d="M299.1 298.71h90.12v-2.08H299.1ZM480.91 307.92v-2h-58.1v-7.17h2.65v-2.08h-13.28v2.08h1v9Z"
          transform="translate(.5 -.5)"
        />
        <path className="cls-2" d="M149.72 321.64h47.09v3h-47.09z" />
        <path
          className="cls-2"
          d="M725.83 183.55c-5.81-5.69-11.64-11.36-17.43-17.06a4.22 4.22 0 0 0-3.27-1.2H678.6l.13 31.59h-44l.21-29.24h24.46v-2.41h-66.91V65.94c0-2.8.16-5.37-.13-8h-4.55v107.19h-39.76v-17.45c-20.61-.14-76.39.06-97.91-.08h-1v49.35h2.32V150h28.52l-.19 44.87H473v2h9.5v-46.89h28.64v44.8h-7.04v2.08h9.49v-23.25h1.67v-1.12h-1.67V150.1l32 .22v22.17h-15.26v1.12h15.37v21.18h-12.83v14.09h4.69v-6.8h50v42.13h-50.22v-4.44h-4.47v26.71l136.06-.12-.25-22.08-3-.15v-5.6h-1.51v5.68h-71.52v-42.14H664v4.94h1.56v-5.07l3.72-.05.06-2.46h40.6a4.75 4.75 0 0 0 1.37-.57c-.59-1.64-1.77-1.68-3-1.68h-24.54c-.86 0-1.72-.07-2.7-.12v-29.45c.86-.05 1.64-.12 2.43-.12h20.66a4.57 4.57 0 0 1 3.59 1.53c4 4 15.9 15.72 15.9 15.72l-.31.5.72.6 2.18-1.5c-.24-.52-.3-.69-.41-.79Zm-138.34 13.37h-37.78V169h37.78Zm.14 65.93-51.19.2v-13.81h51.21c.02 4.65-.02 13.61-.02 13.61Zm5-13.46h72.66v13.87c-24.2.05-48.34 0-72.66 0Zm37.94-52.45h-37.9v-27.71l37.93-.23ZM1111.85 284.44a4 4 0 0 1-.18-.56V143.64h-8.46v35.82H968.42v17.44h2.25v-13.62c3.53-.46 42-.31 44.09.19l.28 18.34h88.13V228h.18v56.34h-30.54c-5.42 0-10.85 0-16.26-.35a37.72 37.72 0 0 1-18.12-6.23 39.62 39.62 0 0 1-14.43-15.85 36.14 36.14 0 0 1-4.21-14.63c-.23-4.79-.28-9.58-.42-14.37 0-.84-.1-1.67-.15-2.49H1015c0 .92-.11 1.7-.11 2.48 0 3.92-.06 7.84.06 11.75a53.47 53.47 0 0 0 .71 6.41 42.28 42.28 0 0 0 4.84 14 19.64 19.64 0 0 1 .78 2h-50v2h51.67c7.9 11.16 19 17.34 32.32 19.85v1.89h2.46c0-.53.09-1.06.13-1.51l47-.4v2.28h18.72v-6.72Zm-8.74-87.77c-1.83.5-80.2.66-84.62.15v-13.63h84.62Zm6.49-51v19.57a35.89 35.89 0 0 0-4.4 0v-19.6Zm0 56.17v23.72c-1.41-.06-2.87-.06-4.4 0v-23.75Z"
          transform="translate(.5 -.5)"
        />
        <path
          className="cls-2"
          d="M1145.2 290.64h-31.9v-6.5h31.9Zm-29.88-2h27.85v-2.5h-27.85ZM847.76 298.75c-.07-.76-.12-1.35-.19-2.12H971.9l1.08 1.86a4.05 4.05 0 0 1-2.39.54l-31.19-.09v8.95H930v-9Z"
          transform="translate(.5 -.5)"
        />
        <path
          className="cls-3"
          d="M1057.91 427h35.29v3.64h-35.29zM604.94 427h143.67v3.64H604.94zM70.44 427v3.64H40.22v-26.23h2.73V427h27.49zM1056.34 427v3.64H949.45l-.09-3.64h106.98zM75.11 201.38v23.92H71.4v-23.91l3.71-.01z"
        />
        <path
          className="cls-3"
          d="M1140.5 405.09v26.05h-30.12v-3.64H1138v-22.4Z"
          transform="translate(.5 -.5)"
        />
        <path
          className="cls-3"
          d="M260.31 427h143.8v3.64h-143.8zM75.11 130.45v23.6l-3.71.04v-23.64h3.71zM44.96 285.72h12.21v3.25H44.96z"
        />
        <path
          className="cls-3"
          d="M161.62 196.89H77.17v-13.67h84.31Z"
          transform="translate(.5 -.5)"
        />
        <path
          className="cls-3"
          d="M432.65 427h143.82v3.64H432.65zM777.06 427h143.75v3.64H777.06zM231.88 427v3.64H87.79l.05-3.64h144.04z"
        />
        <path
          className="cls-2"
          d="M604.21 433.14c-3 .49-24.78.62-28.24.12v-.12ZM1150 284.68h-14.46v2.53c.07 2.88.21 5.75.21 8.62v109.26h.26v20.33h-27.85c-.2-2.9.21-5.66-.26-8.35h-7v8.35h-43.49c0-25.24 0-107.31.12-109.19l-2.27-.06v3.56l-3.35.09-.08 1.92a28.4 28.4 0 0 0 4 .9v102.79H938v-8.33h-7v8.33H765.9c0-11.33-.51-117.45-.51-117.45h2.05v-9.18h34.77l.06-2.23h-46.88v2.18h2.06v6.94l-22.66.06.06 2.19 28.9-.06-.07 108.93-5 .28v8.27H653.54V308h59.68v-2.18l-61.87.12v119.49h-58.58l.16-117.4h36.71c-.07-.83-.16-2.34-.16-2.34l-102.59.06s0 1.63.05 2.34h60.77v117.34H421.44v-8.28h-7.07v8.28h-165v-6.23h10.4V305.84h-9.26v-7.13h25.68v-2.08h-35.38V306H220.5v2.15h36.72l-.12 108.74-15.3.05-.05 8.5H124.66v-100.3h1.42v-3h-1.42v-5.34h-2.78v108.63H79.1v-8.33h-6.89v8.33H44.47V291.25h12.21v.16H74.9l.52-2.15h46.46v-2h2.78v1.69h.18c2.66-.6 5.22-1 7.67-1.78a46 46 0 0 0 23.54-16.51 3.35 3.35 0 0 1 3-1.47c7 .06 14.1 0 21.15 0h27.45a14.27 14.27 0 0 0 1.48-.15v-2h-23.69v-19.66l-2.24.12v19.39h-24.41l.32-.79s4.85-10 5.63-15.48c.18-1.26.42-3.81.49-5.08.22-4.47.06-9 .07-13.43a16.36 16.36 0 0 0-.18-1.71H161c0 .91-.11 1.69-.12 2.47-.06 4 0 8-.16 12a39.67 39.67 0 0 1-8.58 23.49c-8.22 10.38-19 15.94-32.41 16.13s-27.05.05-40.58 0c-.69 0-1.38-.11-2.28-.18V225.8h-.18v-23.93l88.9-.25v-3.73h2.59v-2.5h-2.59v-12l44.23.11v11.89h-1.2v2.5H213v-2.5h-.78l-.13-16.07H76.79v-24.8h-.15V131h.2V15.91a11.37 11.37 0 0 1 .3-1.5c6.64-.54 339.77.06 339.77.06v21.76h2.18V14.44h168.8v13.04c0 2.16-.12 4.25.11 6.31h4.41c.28-6.59-.12-13 .23-19.39H847.5v21.89l2.21-.1V14.4h253.67v138.93h8.26V17.41a9.51 9.51 0 0 1 .06-2.39c.91-3.55.24-7.11.42-10.89H69.11l-.19 119.67v30.81h-.21v47.27h.21v23.92h-.34v48.89c0 3.2.1 6.48-.08 9.93h-9.41v-.18H37.82v.21l-24.82.11V294h24.48v110.91h.23v28.23h1104.8v-28.26a1 1 0 0 0 .14-.24 4 4 0 0 0 .08-.48 1.69 1.69 0 0 0 0-.23 1.93 1.93 0 0 0 0-.24V295.52a1.93 1.93 0 0 1 0-.24v-.48a.86.86 0 0 1 0-.23.85.85 0 0 1 .14-.19l.43-.44h6.7v-9.26ZM77.17 183.22h84.31l.14 13.67H77.17ZM70.9 131h3.71v23.6H70.9Zm0 70.94h3.71v23.86H70.9Zm-26.44 84.28h12.21v3.25H44.46Zm25.48 144.92H39.72v-26.23h2.73v22.59h27.49Zm161.44 0H87.29v-3.64h144Zm172.22 0H259.81v-3.64H403.6Zm172.37 0H432.15v-3.64H576Zm172.14 0H604.44v-3.64h143.67Zm172.19 0H776.56v-3.64H920.3Zm135.54 0H949l-.09-3.64h107Zm36.86 0h-35.29v-3.64h35.29Zm47.8 0h-30.12v-3.64H1138v-22.4h2.48Z"
          transform="translate(.5 -.5)"
        />
        <path
          className="cls-2"
          d="M748.61 432.64h28.45v.21h-28.45zM404.1 432.64h28.55v.2H404.1z"
        />
        <path
          className="cls-2"
          d="m938.64 433.14-18.34.11v-.11Z"
          transform="translate(.5 -.5)"
        />
        <path className="cls-2" d="M1093.2 432.64h17.68v.21h-17.68z" />
        <path
          className="cls-2"
          d="M87.26 433.14v.25l-17.31.11v-.36Z"
          transform="translate(.5 -.5)"
        />
        <path className="cls-2" d="M231.88 432.64h28.43v.19h-28.43z" />
        <path
          className="cls-2"
          d="M121.87 289.26v3.54h2.79v-3.88l-2.43.34Z"
          transform="translate(.5 -.5)"
        />
        <path
          className="cls-2"
          d="M125.16 286.73v1.69l-2.43.34h-.35v-2.03h2.78z"
        />
        {!isLoading
          ? floorFiveData.map((item) => {
              return (
                <g key={item["id"]}>
                  <path
                    onClick={selectDesk}
                    id={item["id"]}
                    className={
                      currentDesk == item["id"] ? "selected" : item.style
                    }
                    d={item["d"]}
                    transform={"transform" in item ? item["transform"] : null}
                  ></path>

                  {item["user"] != null ? (
                    <circle
                      data-for="user"
                      data-tip={item["user"]}
                      data-iscapture="true"
                      className="cls-5"
                      cx={item["cx"]}
                      cy={item["cy"]}
                      r={5.25}
                    ></circle>
                  ) : null}
                </g>
              );
            })
          : null}

        <path
          style={{
            stroke: "#fff",
            strokeMiterlimit: 10,
            fill: "none",
          }}
          d="M.5.5h1172v434H.5z"
        />
        <text className="cls-7" transform="translate(87.5 59)">
          {"1"}
        </text>
        <text className="cls-7" transform="translate(142 59)">
          {"2"}
        </text>
        <text className="cls-7" transform="translate(170 59)">
          {"3"}
        </text>
        <text className="cls-7" transform="translate(251.75 59)">
          {"8"}
        </text>
        <text className="cls-7" transform="translate(310.75 59)">
          {"9"}
        </text>
        <text className="cls-7" transform="translate(360.25 59)">
          {"10"}
        </text>
        <text className="cls-7" transform="translate(383.25 59)">
          {"13"}
        </text>
        <text className="cls-7" transform="translate(428.75 59)">
          {"14"}
        </text>
        <text className="cls-7" transform="translate(484.5 59)">
          {"15"}
        </text>
        <text className="cls-7" transform="translate(506.75 59)">
          {"16"}
        </text>
        <text className="cls-7" transform="translate(484.5 132)">
          {"19"}
        </text>
        <text className="cls-7" transform="translate(506.75 132)">
          {"18"}
        </text>
        <text className="cls-7" transform="translate(305.75 98.67)">
          {"11"}
        </text>
        <text className="cls-7" transform="translate(360.25 98.67)">
          {"12"}
        </text>
        <text className="cls-7" transform="translate(452.25 370.5)">
          {"52"}
        </text>
        <text className="cls-7" transform="translate(452.25 410.17)">
          {"53"}
        </text>
        <text className="cls-7" transform="translate(507.75 410.17)">
          {"54"}
        </text>
        <text className="cls-7" transform="translate(343.25 410.17)">
          {"62"}
        </text>
        <text className="cls-7" transform="translate(397.75 410.17)">
          {"63"}
        </text>
        <text className="cls-7" transform="translate(207.75 353.17)">
          {"65"}
        </text>
        <text className="cls-7" transform="translate(215.25 400.17)">
          {"66"}
        </text>
        <text className="cls-7" transform="translate(167.75 406.17)">
          {"67"}
        </text>
        <text className="cls-7" transform="translate(160.25 360.17)">
          {"64"}
        </text>
        <text className="cls-7" transform="translate(266.25 410.17)">
          {"60"}
        </text>
        <text className="cls-7" transform="translate(320.75 410.17)">
          {"61"}
        </text>
        <text className="cls-7" transform="translate(304.25 322.67)">
          {"58"}
        </text>
        <text className="cls-7" transform="translate(358.75 322.67)">
          {"59"}
        </text>
        <text className="cls-7" transform="translate(562.25 401.67)">
          {"55"}
        </text>
        <text className="cls-7" transform="translate(562.25 362.17)">
          {"56"}
        </text>
        <text className="cls-7" transform="translate(562.25 337.67)">
          {"57"}
        </text>
        <text className="cls-7" transform="translate(647.92 59)">
          {"21"}
        </text>
        <text className="cls-7" transform="translate(647.92 98.67)">
          {"20"}
        </text>
        <text className="cls-7" transform="translate(672.58 59)">
          {"22"}
        </text>
        <text className="cls-7" transform="translate(672.58 98.67)">
          {"24"}
        </text>
        <text className="cls-7" transform="translate(729.25 59)">
          {"23"}
        </text>
        <text className="cls-7" transform="translate(729.25 98.67)">
          {"25"}
        </text>
        <text className="cls-7" transform="translate(812.92 59)">
          {"26"}
        </text>
        <text className="cls-7" transform="translate(812.92 98.67)">
          {"28"}
        </text>
        <text className="cls-7" transform="translate(869.25 59)">
          {"27"}
        </text>
        <text className="cls-7" transform="translate(869.25 98.67)">
          {"29"}
        </text>
        <text className="cls-7" transform="translate(985.17 59)">
          {"32"}
        </text>
        <text className="cls-7" transform="translate(985.17 98.67)">
          {"34"}
        </text>
        <text className="cls-7" transform="translate(1041.5 59)">
          {"33"}
        </text>
        <text className="cls-7" transform="translate(1041.5 98.67)">
          {"35"}
        </text>
        <text className="cls-7" transform="translate(973.5 346)">
          {"43"}
        </text>
        <text className="cls-7" transform="translate(1029.83 346)">
          {"44"}
        </text>
        <text className="cls-7" transform="translate(814.83 410)">
          {"49"}
        </text>
        <text className="cls-7" transform="translate(789.17 410)">
          {"48"}
        </text>
        <text className="cls-7" transform="translate(789.17 322.33)">
          {"47"}
        </text>
        <text className="cls-7" transform="translate(856.5 322.33)">
          {"45"}
        </text>
        <text className="cls-7" transform="translate(824.83 328.67)">
          {"46"}
        </text>
        <text className="cls-7" transform="translate(871.17 410)">
          {"50"}
        </text>
        <text className="cls-7" transform="translate(898.83 410)">
          {"51"}
        </text>
        <text className="cls-7" transform="translate(954.17 409.33)">
          {"41"}
        </text>
        <text className="cls-7" transform="translate(1010.5 409.33)">
          {"42"}
        </text>
        <text className="cls-7" transform="translate(1070.25 59)">
          {"36"}
        </text>
        <text className="cls-7" transform="translate(1070.25 98.67)">
          {"37"}
        </text>
        <text className="cls-7" transform="translate(1081.25 163.17)">
          {"38"}
        </text>
        <text className="cls-7" transform="translate(1039 163.17)">
          {"39"}
        </text>
        <text className="cls-7" transform="translate(996.25 163.17)">
          {"40"}
        </text>
        <text className="cls-7" transform="translate(896.58 59)">
          {"30"}
        </text>
        <text className="cls-7" transform="translate(896.58 98.67)">
          {"31"}
        </text>
        <text className="cls-7" transform="translate(554 98.67)">
          {"17"}
        </text>
        <text className="cls-7" transform="translate(94 95.5)">
          {"4"}
        </text>
        <text className="cls-7" transform="translate(91 163.75)">
          {"5"}
        </text>
        <text className="cls-7" transform="translate(138.5 163.75)">
          {"6"}
        </text>
        <text className="cls-7" transform="translate(184 163.75)">
          {"7"}
        </text>
        <text className="cls-8" transform="translate(287.5 133.5)">
          {"MONITILATOIMISTO"}
        </text>
        <text className="cls-8" transform="translate(335.19 365.81)">
          {"HILJAINENTYÖ"}
        </text>
        <text className="cls-8" transform="translate(855.96 364.81)">
          {"HILJAINENTYÖ"}
        </text>
        <text className="cls-8" transform="translate(222.77 322.27)">
          <tspan x={-18} y={0}>
            {"CALL"}
          </tspan>
          <tspan x={-18} y={16.8}>
            {"CENTER"}
          </tspan>
        </text>
        <text className="cls-8" transform="translate(569.81 291.96)">
          {"KÄYTÄVÄ"}
        </text>
        <text className="cls-8" transform="translate(316.73 279.65)">
          {"KÄYTÄVÄ"}
        </text>
        <text className="cls-8" transform="translate(829.81 279.65)">
          {"KÄYTÄVÄ"}
        </text>
        <text className="cls-8" transform="translate(804.5 133.5)">
          {"MONITILATOIMISTO"}
        </text>
        <text className="cls-23" transform="translate(520.27 187.27)">
          {"WC"}
        </text>
        <text className="cls-23" transform="translate(690.27 187.27)">
          {"WC"}
        </text>
        <text className="cls-23" transform="translate(488.35 177.27)">
          {"WC"}
        </text>
        <text className="cls-23" transform="translate(457.42 177.27)">
          {"WC"}
        </text>
        <text className="cls-23" transform="translate(549.11 226.5)">
          {"HISSI"}
        </text>
        <text className="cls-23" transform="translate(597.45 226.5)">
          {"TAVARAHISSI"}
        </text>
      </g>
    </svg>
  );
};
export default FloorFiveLayout;
