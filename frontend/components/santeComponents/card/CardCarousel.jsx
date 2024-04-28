'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import { Card, CardBody, Image, CardHeader } from '@nextui-org/react'

const CardCarousel = ({ cardsData }) => {
  return (
    <Swiper
      spaceBetween={50} // Espace entre les slides
      slidesPerView={3} // Nombre de slides visibles à la fois
      scrollbar={{ draggable: true }}
      loop
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      modules={[Autoplay]}
    >
      {cardsData.map((card, index) => (
        <SwiperSlide key={index}>
          <Card className='py-4 border border-gray-700 rounded-xl'>
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
              <h4 className='font-bold text-large text-center'>{card.title}</h4>
              <small className='pt-3  text-default-500 text-center'>{card.description}</small>
              <small className=' text-default-500 text-center'>{card.mail}</small>
              <small className='pb-3 text-default-500 text-center'>{card.tel}</small>
            </CardHeader>
            <CardBody className='overflow-visible py-2 flex items-center'>
              <Image
                alt='Card background'
                className='object-cover rounded-xl'
                src={card.image}
                width={270}
              />
            </CardBody>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CardCarousel
