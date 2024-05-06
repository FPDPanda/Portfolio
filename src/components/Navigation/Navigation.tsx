import React, { FC, MutableRefObject } from "react";
import { NavigationWrapper } from "./Navigation.styled";
import { Link } from "react-router-dom";
import scrollController from "../../features/ScrollControllerFeature";

interface NavigationProps {
  introSectionReference: MutableRefObject<any>;
  projectsSectionReference: MutableRefObject<any>;
  aboutmeSectionReference: MutableRefObject<any>;
  footerSectionReference: MutableRefObject<any>;
}

const Navigation: FC<NavigationProps> = ({
  introSectionReference,
  projectsSectionReference,
  aboutmeSectionReference,
  footerSectionReference,
}) => (
  <NavigationWrapper>
    <div
      id="logo"
      onClick={() => scrollController.scrollToSection(introSectionReference)}
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAA9CAYAAADs3jRMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL/SURBVHgB7ZzLcdswEIb/JA24BJSg3HIjO7A6EG45qhSnA24qcDqgO0gJ0DE3+ZqTQoxDW6MhFw+CeInfDC4muAC/AUVgCfoLyuNhKN+H8m0of4fyBxvWdEO5XBX1/28CG0a0rMtEOeNtVG7MsMO0uLFElfcZZdEwx05DeUVESpO3Z479wsYsAvwt22BjFol5cWckYK3btkX4qcMjc+yFOaYfMi0KgfAxIg4IxxnzI2+uHXlVp0PmEOwvzIUW/O+dmDhHTtTLViDBfWTY0jGx+4n6kqmfnUACPzKWClRM3ONNXWnRl2wEEsydXSJQGGLurupKh74kF0iw76wuCu4cHeL9duxPMoEEt476drZ3iPccqU+LILh3Uo8K14X7gyHm40R919EXVSAhjjjN3hB3imwFEhBNnKZj4vbMedkJJMQVp1FM7IPh3GwEEuKLaw3xhUWM5AIJ8cVpngzxbUkmkJBGHMBf8BPciC6QkE6cMLTTwJ1oAgnpxGkk046CP6sLJKQVp+FWCtYXMsNqAgnpxWl8Ep8uBBdIyENca2gzVHvBBBLyEAf4ryp8WCzwB/IRp1FMu0eEZ5HAi0cRWAfTdood1kHAz0NWt6xL4jMUviPvfaJOyENgD8NtEphqHhqmxGeDsFQ1XZFMG6G3U1Q3Ue6Y+M8IR5VLNMXEPiAMVSYHWkNcgeVUm5YKlfico+qEaMjE5y1Vp+KFIU4Df6p/CSSZ8xX8uYvXjz3CX8hdvPh23U5hw91sudgbzvHZ25K1uBGCeydvVwodU7eHOx0KEDdCcB991yimrk/iU6EQcSME+85ef8FjSnwKuCNRkLgRgrmzh5tz1kp8ShQkboRgL07TM/WXriokChI3QrATJ8CPjAbLkShI3AiBF6eRmBcXMvEpUZC4kQb86OG2U4RMfGoEKvsicu3tFNXSIvwUJQkpvvQ2ffp5wsYsCgi6qrgbTFmUtbZTVIGWN/ewUCiM2L95r0P5ire54Onm2AsK4xPSom/TcQ72E5H/L8pS/gEHQZSJbxn4DwAAAABJRU5ErkJggg=="
        id="logo"
        alt="logo"
      />
    </div>
    <ul id="menu">
      <li
        className="menu__item"
        onClick={() => scrollController.scrollToSection(introSectionReference)}
      >
        <div>
          <p className="menu__link">Home</p>
          <img
            src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00OTguMTk1MzEyIDIyMi42OTUzMTJjLS4wMTE3MTgtLjAxMTcxOC0uMDIzNDM3LS4wMjM0MzctLjAzNTE1Ni0uMDM1MTU2bC0yMDguODU1NDY4LTIwOC44NDc2NTZjLTguOTAyMzQ0LTguOTA2MjUtMjAuNzM4MjgyLTEzLjgxMjUtMzMuMzI4MTI2LTEzLjgxMjUtMTIuNTg5ODQzIDAtMjQuNDI1NzgxIDQuOTAyMzQ0LTMzLjMzMjAzMSAxMy44MDg1OTRsLTIwOC43NDYwOTMgMjA4Ljc0MjE4N2MtLjA3MDMxMy4wNzAzMTMtLjE0MDYyNi4xNDQ1MzEtLjIxMDkzOC4yMTQ4NDQtMTguMjgxMjUgMTguMzg2NzE5LTE4LjI1IDQ4LjIxODc1LjA4OTg0NCA2Ni41NTg1OTQgOC4zNzg5MDYgOC4zODI4MTIgMTkuNDQ1MzEyIDEzLjIzODI4MSAzMS4yNzczNDQgMTMuNzQ2MDkzLjQ4MDQ2OC4wNDY4NzYuOTY0ODQzLjA3MDMxMyAxLjQ1MzEyNC4wNzAzMTNoOC4zMjQyMTl2MTUzLjY5OTIxOWMwIDMwLjQxNDA2MiAyNC43NDYwOTQgNTUuMTYwMTU2IDU1LjE2Nzk2OSA1NS4xNjAxNTZoODEuNzEwOTM4YzguMjgxMjUgMCAxNS02LjcxNDg0NCAxNS0xNXYtMTIwLjVjMC0xMy44Nzg5MDYgMTEuMjg5MDYyLTI1LjE2Nzk2OSAyNS4xNjc5NjgtMjUuMTY3OTY5aDQ4LjE5NTMxM2MxMy44Nzg5MDYgMCAyNS4xNjc5NjkgMTEuMjg5MDYzIDI1LjE2Nzk2OSAyNS4xNjc5Njl2MTIwLjVjMCA4LjI4NTE1NiA2LjcxNDg0MyAxNSAxNSAxNWg4MS43MTA5MzdjMzAuNDIxODc1IDAgNTUuMTY3OTY5LTI0Ljc0NjA5NCA1NS4xNjc5NjktNTUuMTYwMTU2di0xNTMuNjk5MjE5aDcuNzE4NzVjMTIuNTg1OTM3IDAgMjQuNDIxODc1LTQuOTAyMzQ0IDMzLjMzMjAzMS0xMy44MDg1OTQgMTguMzU5Mzc1LTE4LjM3MTA5MyAxOC4zNjcxODctNDguMjUzOTA2LjAyMzQzNy02Ni42MzY3MTl6bTAgMCIvPjwvc3ZnPg=="
            className="nav-icon"
            alt="Home icon"
          />
        </div>
      </li>
      <li
        className="menu__item"
        onClick={() =>
          scrollController.scrollToSection(projectsSectionReference)
        }
      >
        <div>
          <p className="menu__link">Projects</p>
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PGc+PHBhdGggZD0iTTQyNCw4SDg4QTQwLjA0LDQwLjA0LDAsMCwwLDQ4LDQ4VjQ2NGE0MC4wNCw0MC4wNCwwLDAsMCw0MCw0MEg0MjRhNDAuMDQsNDAuMDQsMCwwLDAsNDAtNDBWNDhBNDAuMDQsNDAuMDQsMCwwLDAsNDI0LDhaTTM5Miw0ODhIMjgwVjQxNkgzOTJabTAtODhIMjgwdi04SDM5MlptMjQsODhoLThWMzg0YTgsOCwwLDAsMC04LThIMjcyYTgsOCwwLDAsMC04LDhWNDg4aC04VjM1Ni4zOWw4MC01MC45MSw4MCw1MC45MVptMzItMjRhMjQuMDMxLDI0LjAzMSwwLDAsMS0xNiwyMi42MlYzNTJhOCw4LDAsMCwwLTMuNzEtNi43NWwtODgtNTZhNy45NzMsNy45NzMsMCwwLDAtOC41OCwwbC04OCw1NkE4LDgsMCwwLDAsMjQwLDM1MlY0ODhIODhhMjQuMDMyLDI0LjAzMiwwLDAsMS0yNC0yNFY3Mkg0NDhabTAtNDA4SDY0VjQ4QTI0LjAzMiwyNC4wMzIsMCwwLDEsODgsMjRINDI0YTI0LjAzMiwyNC4wMzIsMCwwLDEsMjQsMjRaIi8+PHBhdGggZD0iTTQyNCw4OEgyNjRhOCw4LDAsMCwwLTgsOHY4MGE4LDgsMCwwLDAsOCw4SDQyNGE4LDgsMCwwLDAsOC04Vjk2QTgsOCwwLDAsMCw0MjQsODhabS04LDgwSDI3MlYxMDRINDE2WiIvPjxwYXRoIGQ9Ik00MjQsMjAwSDI2NGE4LDgsMCwwLDAsMCwxNkg0MjRhOCw4LDAsMCwwLDAtMTZaIi8+PHBhdGggZD0iTTM2MCwyMzJIMjY0YTgsOCwwLDAsMCwwLDE2aDk2YTgsOCwwLDAsMCwwLTE2WiIvPjxwYXRoIGQ9Ik0zOTIsMjMyaC04YTgsOCwwLDAsMCwwLDE2aDhhOCw4LDAsMCwwLDAtMTZaIi8+PHBhdGggZD0iTTIzMiwyNjRIODhhOCw4LDAsMCwwLDAsMTZIMjMyYTgsOCwwLDAsMCwwLTE2WiIvPjxwYXRoIGQ9Ik04OCwzMTJIMjAwYTgsOCwwLDAsMCwwLTE2SDg4YTgsOCwwLDAsMCwwLDE2WiIvPjxwYXRoIGQ9Ik04OCwzNDRoOTZhOCw4LDAsMCwwLDAtMTZIODhhOCw4LDAsMCwwLDAsMTZaIi8+PHBhdGggZD0iTTIzMiwyOTZoLThhOCw4LDAsMCwwLDAsMTZoOGE4LDgsMCwwLDAsMC0xNloiLz48cGF0aCBkPSJNMjMyLDg4SDg4YTgsOCwwLDAsMC04LDhWMjQwYTgsOCwwLDAsMCw4LDhIMjMyYTgsOCwwLDAsMCw4LThWOTZBOCw4LDAsMCwwLDIzMiw4OFptLTg4LDE2aDMydjY0SDE0NFptODAsMTI4SDk2VjEwNGgzMnY3MmE4LDgsMCwwLDAsOCw4aDQ4YTgsOCwwLDAsMCw4LThWMTA0aDMyWiIvPjxwYXRoIGQ9Ik04OCw0OGgxNmE4LDgsMCwwLDAsMC0xNkg4OGE4LDgsMCwwLDAsMCwxNloiLz48cGF0aCBkPSJNMTI4LDQ4aDE2YTgsOCwwLDAsMCwwLTE2SDEyOGE4LDgsMCwwLDAsMCwxNloiLz48cGF0aCBkPSJNMTY4LDQ4aDE2YTgsOCwwLDAsMCwwLTE2SDE2OGE4LDgsMCwwLDAsMCwxNloiLz48cGF0aCBkPSJNMjI0LDM2MEg4OGE4LDgsMCwwLDAtOCw4djQ4YTgsOCwwLDAsMCw4LDhIMjI0YTgsOCwwLDAsMCw4LThWMzY4QTgsOCwwLDAsMCwyMjQsMzYwWm0tOCw0OEg5NlYzNzZIMjE2WiIvPjwvZz48L3N2Zz4K"
            className="nav-icon"
            alt="Projects icon"
          />
        </div>
      </li>
      <li
        className="menu__item"
        onClick={() =>
          scrollController.scrollToSection(aboutmeSectionReference)
        }
      >
        <div>
          <p className="menu__link">About Me</p>
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNDc4Ljc1NnB4IiBoZWlnaHQ9IjQ3OC43NTZweCIgdmlld0JveD0iMCAwIDQ3OC43NTYgNDc4Ljc1NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc4Ljc1NiA0NzguNzU2OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjUwLjYzNSwxMjUuMDgzYy00OC4yMDMtMTAuNDEzLTY2LjI3NywyNi40MDMtODUuOTg3LDYzLjg0MmMtMTkuNzEzLDM3LjQzMi0yNC44MDgsNDkuODU4LTY2LjQ5Myw2NC43NzEKCQkJYy0xOS41NjIsNi45OTItMzUuNDIsMTQuNzUxLTQ2LjgwNSwyMS4wMzRjLTkuNTA2LDMuODk2LTE4LjA0Niw5LjYwNi0yNS4xMzcsMTcuMjUyYy00NS40MTIsNDguOTYzLTUuOTU3LDg1LjU2Miw0Mi43MjUsMTMwLjcwMwoJCQljNDguNjc2LDQ1LjEzOSw4OC4xMzUsODEuNzM5LDEzMy41NCwzMi43NjVjMy40NzctMy43NDcsNi40NDgtNy44MTEsOC45NjctMTIuMTM1bDAuMDE0LDAuMDA4CgkJCWMxNi4xMTItMjIuMTE3LDE2LjYzNy05Ny41MjQsNzUuMzI0LTExMS4xMjZjNjEuMzEzLTE0LjIxOSw0Ni42NzgtNTkuNTgyLDQ2LjY3OC01OS41ODIKCQkJYy0xNi4wMjksMTcuMjc5LTY4LjM1OCw0NC44MzUtNzYuODkxLDEwLjEyN2MtNi4wMDMtMjQuMzg2LDguMTMyLTQ1LjkyMSwxNy4wOC01Ni42YzEuMjg2LTEuNTI4LDIuNDYxLTIuODU1LDMuNDYzLTMuOTE3CgkJCWMxLjkyNy0yLjA1NiwzLjE4Mi0zLjIwMiwzLjE4Mi0zLjIwMmwtMC4yMDUtMC4xNzJsODguOTA1LTEwMC42NjdjMTIuNzI4LTE0LjE2OCwyNy45MzYtNy4xMzMsMjcuOTM2LTcuMTMzCgkJCWM3LjE0Ni0zNS44NzksNzMuMDQ4LTkwLjE4OCw3My4wNDgtOTAuMTg4czUuMjg5LDAuOCwwLjczNy0xMy44MTVjLTQuNTU3LTE0LjYxMy0xNS40NCw1LjYxMi0yMy40MzIsNi4wODMKCQkJQzQzOS4yOTYsMTMuNjAzLDQzOC4xNjIsMCw0MzguMTYyLDBsLTg4LjIzOSw3MC45ODljNC43NDQsOS43NDgsNC43MzYsMTYuNTY1LDMuNTcsMjAuOTM3TDIzNS42NTUsMjExLjE4OQoJCQljLTE5LjMzNSw2LjEzNy0yOS4wOTQtMy45MzQtMjYuMjM0LTI4Ljk1MkMyMTMuMTc5LDE0OS4yODYsMjUwLjYzNSwxMjUuMDgzLDI1MC42MzUsMTI1LjA4M3oiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
            className="nav-icon"
            alt="About icon"
          />
        </div>
      </li>
      <li
        className="menu__item"
        onClick={() => scrollController.scrollToSection(footerSectionReference)}
      >
        <div>
          <p className="menu__link">Contact Me</p>
          <img
            src="data:image/png;base64,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"
            className="nav-icon"
            alt="Contact icon"
          />
        </div>
      </li>
    </ul>
  </NavigationWrapper>
);

export default Navigation;