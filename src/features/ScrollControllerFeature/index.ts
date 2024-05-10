import { MutableRefObject } from "react";

class ScrollController {
  scrollToSection(reference: MutableRefObject<any>) {
    window.scrollTo({
      top: reference.current.offsetTop,
      behavior: "smooth",
    });
  }
}

const scrollController = new ScrollController();

export default scrollController;
