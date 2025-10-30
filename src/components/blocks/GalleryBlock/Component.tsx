'use client'

import { useEffect, useRef, useState } from 'react'
import { GalleryBlock as GalleryBlockType, Media } from '@/payload-types'
import createJustifiedLayout, { JustifiedLayoutItem, JustifiedLayoutResult} from 'justified-layout'
import { cn } from '@/utilities/ui'
import Image from 'next/image'

//import LightGallery from 'lightgallery/react'

type GalleryImages = NonNullable<GalleryBlockType['images']>
type Props = {
  images: GalleryImages
}
export const GalleryBlock: React.FC<Props> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerLayout, setContainerLayout] = useState<JustifiedLayoutResult | null>(null)
  const [containerHeight, setContainerHeight] = useState<number>(0)
  const [containerWidth, setContainerWidth] = useState<number>(0)


  // useEffect(() => {
  //   setContainerWidth(containerRef.current?.clientWidth || 0)
  // }, [])

  useEffect(() => {
    const resizeObserver = new ResizeObserver((elements) => {
      if (elements.length === 1) {
        console.log('container resized: ', elements[0])
        setContainerWidth(elements[0].contentRect.width)
      }
    })
    resizeObserver.observe(containerRef.current!)
    return function() {
      resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    if (containerWidth === 0) return

    // build a layout configuration
    const items: JustifiedLayoutItem[] = []
    images.forEach((image) => {
      const imageMedia = image.media as Media
      items.push({
        width: imageMedia.width!,
        height: imageMedia.height!,
      })
    })
    const layoutResult = createJustifiedLayout(items, {
      containerWidth: containerRef.current?.clientWidth,
      targetRowHeight: 150,
      targetRowHeightTolerance: 0.5,
      containerPadding: 0,
    })
    console.log(layoutResult)
    setContainerLayout(layoutResult)
    setContainerHeight(layoutResult.containerHeight)
  }, [containerWidth])

  const onInit = () => {
    console.log('light gallery initialized')
  }

  const innerContainerStyle = { height: `${containerHeight}px` }
  return (
    <div ref={containerRef} className="grid-cols-4 relative">
      {containerLayout && (
        <div className="relative block" style={innerContainerStyle}>
          {images.map((image, idx) => {
            const imageMedia = image.media as Media
            const imageLayout = containerLayout.boxes[idx]
            if (imageLayout) {
              const imageStyle: React.CSSProperties = {
                top: imageLayout.top,
                left: imageLayout.left,
              }
              return (
                <Image
                  key={idx}
                  style={imageStyle}
                  className="absolute inline-block overflow-hidden"
                  alt={imageMedia.alt}
                  src={imageMedia.url!}
                  width={imageLayout.width}
                  height={imageLayout.height}
                />
              )
            }
          })}
        </div>
      )}
    </div>
  )

  // return (
  //   <LightGallery onInit={onInit} speed={500} toggleThumb={true}>
  //     {images.map((image) => {
  //       const imageMedia = image.media as Media
  //       return (
  //         <a key={image.id} href={imageMedia.url!}>
  //           <img alt={imageMedia.alt} src={imageMedia.url!} />
  //         </a>
  //       )
  //     })}
  //   </LightGallery>
  // )
}
