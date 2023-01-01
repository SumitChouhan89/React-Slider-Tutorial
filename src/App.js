import {
  Animator,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import "./App.css";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

const FadeUp = batch(Fade(), Sticky(), Move());

function App() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
          <h2>Let me show you scroll animation</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <h2>I'm, FadeoutscrollOut</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <h2>I'm, FadeUp</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <div className="section-3">
          <h2>
            <Animator animation={MoveIn(-1000, 0)}>Hello Guys</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to Meet you</Animator>
            <Animator animation={MoveOut(1000, 0)}>Good Bye</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you</Animator>
          </h2>
        </div>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
          <h2>Done!</h2>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
