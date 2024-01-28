import AbbeyRoad from "assets/images/personal/webp/abbey_road.webp";
import Ago from "assets/images/personal/webp/ago.webp";
import DowntownSf from "assets/images/personal/webp/dt_sf.webp";
import EiffelTower from "assets/images/personal/webp/eiffeL_tower.webp";
import GoldenGateBridge from "assets/images/personal/webp/golden_gate_bridge.webp";
import Ion from "assets/images/personal/webp/ion.webp";
import Molinos from "assets/images/personal/webp/molinos.webp";
import Porto from "assets/images/personal/webp/porto.webp";
import SfAfternoon from "assets/images/personal/webp/sf_afternoon.webp";
import SfBoardwalk from "assets/images/personal/webp/sf_boardwalk.webp";

import LondonCalling from "assets/images/personal/webp/london_calling.webp";
import ValleDelCocora from "assets/images/personal/webp/valle_del_cocora.webp";

interface personalItem {
  header: string;
  description: string;
  image?: string;
}

export const personalItems: readonly personalItem[] = [
  {
    header: "Golden Gate Bridge",
    description: "San Francisco, USA",
    image: GoldenGateBridge,
  },
  {
    header: "Golden Hour",
    description: "Waterloo, Canada",
    image: Ion,
  },
  {
    header: "Eiffel Tower",
    description: "Paris, France",
    image: EiffelTower,
  },
  {
    header: "Abbey Road Studios",
    description: "London, UK",
    image: AbbeyRoad,
  },
  {
    header: "AGO",
    description: "Toronto, Canada",
    image: Ago,
  },
  {
    header: "San Francisco Boardwalk",
    description: "San Francisco, USA",
    image: SfBoardwalk,
  },
  {
    header: "Downtown San Francisco",
    description: "San Francisco, USA",
    image: DowntownSf,
  },
  {
    header: "Molinos de Viento",
    description: "Castilla La Mancha, Spain",
    image: Molinos,
  },
  {
    header: "Luis I Bridge",
    description: "Porto, Portugal",
    image: Porto,
  },
  {
    header: "A San Francisco Afternoon",
    description: "San Francisco, USA",
    image: SfAfternoon,
  },
  {
    header: "London Calling",
    description: "London, UK",
    image: LondonCalling,
  },
  {
    header: "Valle del Cocora",
    description: "Quindio, Colombia",
    image: ValleDelCocora,
  },
];
