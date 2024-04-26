import {
  Card, CardHeader, CardBody, CardFooter, Divider, Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  ScrollShadow
} from '@nextui-org/react'
import { GET_OFFERS } from '@/graphql/queries/queries'
import client from '@/graphql/apolloClient'

export const getData = async () => {
  try {
    const response = await client.query({
      query: GET_OFFERS
    })
    return response.data.offers.data
  } catch (error) {
    console.error(error)
  }
}

export default async function JobOffers () {
  const data = await getData()
  console.log('data', data)

  return (
    <>
      <h1 className='text-4xl text-center my-8'>MDS Job Offers</h1>
      <div>
        {/* Votre code pour la barre de recherche */}
      </div>
      <br />
      <div className='cards flex gap-4'>
        {data.map((item, index) => (
          <Card key={index} className='max-w-[400px]'>
            <CardHeader className='flex gap-3'>
              <Image
                alt='mds logo'
                height={40}
                radius='sm'
                src='http://localhost:1337/uploads/logomds_c5516472bc.webp'
                width={40}
              />
              <div className='flex flex-col'>
                <p className='text-md'>My Digital School</p>
                <p className='text-small text-default-500'>mydigitalschool.com</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <h2 className='text-xl text-center my-8'>{item.attributes.title}</h2>
              <div className='description flex flex-col gap-3 justify-normal'>
                <p><strong>Description:</strong></p>
                <ScrollShadow className='w-[300px] h-[400px] overflow-auto'>
                  <div>
                    {item.attributes.description.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph.children[0].text}</p>
                    ))}
                  </div>
                </ScrollShadow>
                <p><strong>Skills:</strong></p>
                <div className='flex flex-wrap gap-4'>
                  {item.attributes.skills.map((skill, skillIndex) => (
                    <span key={skillIndex}>{skill}</span>
                  ))}
                </div>
                <p><strong>Education:</strong>
                  {item.attributes.education.map((education, educationIndex) => (
                    <span key={educationIndex}>{education}</span>
                  ))}
                </p>
                <p><strong>Start Date:</strong> {item.attributes.start_date}</p>
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant='bordered'>Actions</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label='Static Actions'>
                  <DropdownItem key='new'>Apply</DropdownItem>
                  <DropdownItem key='copy'>Add to favorite</DropdownItem>
                  <DropdownItem key='edit'>Share offer</DropdownItem>
                  <DropdownItem key='delete' className='text-danger' color='danger'>
                    Hide offer
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
