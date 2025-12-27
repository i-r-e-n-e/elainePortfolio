import Hero from "../components/Hero"
import rue from "../assets/restingPlace/rue.png"
import shuyin from "../assets/restingPlace/shuyin.png"
import cats from "../assets/restingPlace/cats.png"
import gamePlay from "../assets/restingPlace/gameplay.png"
import gamePlayUI from "../assets/restingPlace/gameplayui.png"
import facades from "../assets/restingPlace/facades.png"
import blueSkySketches from "../assets/restingPlace/blueskysketches.png"


export default function Home() {
  return (
    <main>
        <Hero/>
        <img
            src={rue}
            alt="Rue"
        />
        <img
            src={shuyin}
            alt="Shuyin"
        />
        <img
            src={cats}
            alt="Cats"
        />
        <img
            src={gamePlay}
            alt="Game Play"
        />
        <img
            src={gamePlayUI}
            alt="Game Play UI"
        />
        <img
            src={facades}
            alt="Facades"
        />
        <img
            src={blueSkySketches}
            alt="Blue Sky Sketches"
        />
    </main>
  );
}
