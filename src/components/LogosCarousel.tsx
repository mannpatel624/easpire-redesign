import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AGL from '@/assets/companies/agl.png';
import Airolam from '@/assets/companies/airolam.png';
import AjantaPharma from '@/assets/companies/ajantaPharma.png';
import APNAR from '@/assets/companies/apnar.png';
import Apothecon from '@/assets/companies/apothecon.png';
import BandhanBank from '@/assets/companies/bandhanBank.png';
import Britannia from '@/assets/companies/britannia.png';
import Cipla from '@/assets/companies/cipla.png';
import Einfochips from '@/assets/companies/einfochips.png';
import GSPC from '@/assets/companies/gspc.png';
import Hikal from '@/assets/companies/hikal.png';
import HindustanPetroleum from '@/assets/companies/hindustanPetroleum.png';
import Hoonar from '@/assets/companies/hoonar.png';
import Infostretch from '@/assets/companies/infostretch.png';
import Intas from '@/assets/companies/intas.png';
import Jobello from '@/assets/companies/jobello.png';
import Kirloskar from '@/assets/companies/kirloskar.png';
import ManInfra from '@/assets/companies/manInfra.png';
import MitsuiKinzoku from '@/assets/companies/mitsuiKizoku.png';
import Mobiquity from '@/assets/companies/mobiquity.png';
import MotilalOswal from '@/assets/companies/motilalOswal.png';
import NeoSoft from '@/assets/companies/neoSoft.png';
import POSCO from '@/assets/companies/posco.png';
import Praj from '@/assets/companies/praj.png';
import Priasoft from '@/assets/companies/priasoft.png';
import Religare from '@/assets/companies/religare.png';
import SEE from '@/assets/companies/see.png';
import Shapoorji from '@/assets/companies/shapoorji.png';
import Simpolo from '@/assets/companies/simpolo.png';
import Superware from '@/assets/companies/superware.png';
import TCS from '@/assets/companies/tcs.png';
import TechMahindra from '@/assets/companies/techMahindra.png';
import ToyotaTsusho from '@/assets/companies/toyotaTsusho.png';
import V2Soft from '@/assets/companies/v2soft.png';
import Varmora from '@/assets/companies/varmora.png';
import VeeRubber from '@/assets/companies/veeRubber.png';
import Virtusa from '@/assets/companies/virtusa.png';
import Voltas from '@/assets/companies/voltas.png';
import Xoriant from '@/assets/companies/Xoriant.png';
import Zensar from '@/assets/companies/zensar.png';


const logos = [
  { name: "AGL", src: AGL },
  { name: "Airolam", src: Airolam },
  { name: "Ajanta Pharma", src: AjantaPharma },
  { name: "APNAR", src: APNAR },
  { name: "Apothecon", src: Apothecon },
  { name: "Bandhan Bank", src: BandhanBank },
  { name: "Britannia", src: Britannia },
  { name: "Cipla", src: Cipla },
  { name: "Einfochips", src: Einfochips },
  { name: "GSPC", src: GSPC },
  { name: "Hikal", src: Hikal },
  { name: "Hindustan Petroleum", src: HindustanPetroleum },
  { name: "Hoonar", src: Hoonar },
  { name: "Infostretch", src: Infostretch },
  { name: "Intas", src: Intas },
  { name: "Jobello", src: Jobello },
  { name: "Kirloskar", src: Kirloskar },
  { name: "Man Infra", src: ManInfra },
  { name: "Mitsui Kinzoku", src: MitsuiKinzoku },
  { name: "Mobiquity", src: Mobiquity },
  { name: "Motilal Oswal", src: MotilalOswal },
  { name: "NeoSoft", src: NeoSoft },
  { name: "POSCO", src: POSCO },
  { name: "Praj", src: Praj },
  { name: "Priasoft", src: Priasoft },
  { name: "Religare", src: Religare },
  { name: "SEE", src: SEE },
  { name: "Shapoorji", src: Shapoorji },
  { name: "Simpolo", src: Simpolo },
  { name: "Superware", src: Superware },
  { name: "TCS", src: TCS },
  { name: "Tech Mahindra", src: TechMahindra },
  { name: "Toyota Tsusho", src: ToyotaTsusho },
  { name: "V2Soft", src: V2Soft },
  { name: "Varmora", src: Varmora },
  { name: "Vee Rubber", src: VeeRubber },
  { name: "Virtusa", src: Virtusa },
  { name: "Voltas", src: Voltas },
  { name: "Xoriant", src: Xoriant },
  { name: "Zensar", src: Zensar },
];


export function LogosCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">Trusted by Industry Leaders</h2>
        <div className="relative overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex gap-16 items-center w-max"
            animate={{ x: [-0, -width] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                title={logo.name}
                width={100}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
