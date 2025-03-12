import Image from 'next/image';
import image from "@/public/nintendo.png";
import background from "@/public/shadow.png";

export default function Home() {
  return (
    <div className='container'>
      <div className='image'>
        <Image src={image} alt="image" className="main-image"/>
        <Image src={background} alt="background" className="background-image"/>
      </div>
      <div className='container_two'>
        <div className='title'>Nintendo Switch</div>
        <div className='description'>Home gaming system. Take it on the go.</div>
        <button className='button'>Play now!</button>
      </div>
    </div>
  );
}