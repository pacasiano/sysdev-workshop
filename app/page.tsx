import Image from 'next/image';
import image from "@/public/nintendo.webp";

export default function Home() {
  return (
    <div className='container'>
      <Image src={image} alt="image" className='image'/>
      <div className='container_two'>
        <div className='title'>Nintendo Switch</div>
        <div className='description'>Home gaming system. Take it on the go.</div>
        <button className='button'>Play now!</button>
      </div>
    </div>
  );
}