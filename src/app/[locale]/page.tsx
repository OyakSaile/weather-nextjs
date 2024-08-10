import Image from 'next/image'

import { SegmentControl } from '@/components/ui/segment-control'

export default function Home() {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute inset-0 z-10">
        <Image
          quality={100}
          src="/bg-weather.png"
          objectFit="cover"
          fill
          alt="bg-weather"
        />
      </div>

      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center text-center">
        <h1 className="text-4xl text-white">Rio de Janeiro</h1>
        <h2 className="text-8xl text-white">19°</h2>
        <h3 className="text-xl text-[#EBEBF5]/60">Mostly Clear</h3>

        <div className="relative h-[300px] w-full">
          <Image quality={100} alt="House" src="/house.png" fill />
        </div>
      </div>

      <SegmentControl />
    </main>
  )
}
