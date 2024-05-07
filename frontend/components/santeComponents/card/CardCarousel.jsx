'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import { Card, CardBody, Image, CardHeader } from '@nextui-org/react'

const CardCarousel = ({ contacts }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      scrollbar={{ draggable: true }}
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      modules={[Autoplay]}
    >
      {contacts.map((contact) => (
        <SwiperSlide key={contact.id}>
          <Card className='py-4 border border-gray-700 rounded-xl'>
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
              <h4 className='font-bold text-large text-center'>{contact.attributes.Nom}</h4>
              <small className='pt-3  text-default-500 text-center'>{contact.attributes.Metier}</small>
              <small className=' text-default-500 text-center'>{contact.attributes.Mail}</small>
              <small className='pb-3 text-default-500 text-center'>{contact.attributes.Telephone}</small>
            </CardHeader>
            <CardBody className='overflow-visible py-2 flex items-center'>
              <Image
                alt='Card background'
                className='object-cover rounded-xl'
                src={'http://localhost:1337' + contact?.attributes?.image?.data?.attributes?.url}
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
