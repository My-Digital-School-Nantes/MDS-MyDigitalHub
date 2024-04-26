import {
  Card, CardHeader, CardBody, CardFooter, Divider, Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Tooltip,
  Input,
  ScrollShadow,
} from '@nextui-org/react'
import { GET_OFFERS } from '@/graphql/queries/queries'
import client from '@/graphql/apolloClient'
import { LuSearch, LuFilter } from 'react-icons/lu'

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

 const colors = [
    'default', 'primary', 'secondary', 'success', 'warning', 'danger', 'foreground'
  ]

export default async function JobOffers () {
  const data = await getData()
  console.log('data', data)

 
  // const handleSearchChange = e => {
  //   setSearchTerm(e.target.value)
  // }
 
  // const filteredEvents = data.filter(data =>
  //   data.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
  // )
 
  // const handleClear = () => {
  //   setSearchTerm('')
  // }
 
  return (
    <>
      <h1 className='text-4xl text-center my-8'>MDS Job Offers</h1>
      <div>
        <Input
          // value={searchTerm}
          // onChange={handleSearchChange}
          // onClear={handleClear}
          label='Search'
          isClearable
          radius='lg'
          classNames={{
            label: 'text-black/50 dark:text-white/90',
            input: [
              'bg-transparent', 'text-black/90 dark:text-white/90',
              'placeholder:text-default-700/50 dark:placeholder:text-white/60'
            ],
            innerWrapper: 'bg-transparent',
            inputWrapper: [
              'shadow-xl', 'bg-default-200/50', 'dark:bg-default/60',
              'backdrop-blur-xl', 'backdrop-saturate-200',
              'hover:bg-default-200/70', 'dark:hover:bg-default/70',
              'group-data-[focused=true]:bg-default-200/50',
              'dark:group-data-[focused=true]:bg-default/60', '!cursor-text'
            ]
          }}
          placeholder='Type to search...'
          startContent={
            <LuSearch className='text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0' />
          }
        />
      </div>
      <br />
      <div className='cards flex gap-4'>
        {data.map((item, index) => (
          <Card key={index} className='border border-transparent hover:border-primary'>
            <CardHeader className='flex gap-4'>
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
            <CardBody className=''>
              <h2 className='text-xl text-center my-8'>{item.attributes.title}</h2>
              <div className='description flex flex-col gap-3 justify-normal'>
                <p><strong>Description:</strong></p>
                <ScrollShadow className='w-[400px] h-[200px] overflow-auto'>
                  <div>
                    {item.attributes.description && item.attributes.description.map((paragraph, index) => (
                      <p key={index}>{(paragraph.children.map(child => child.text))}</p>
                    ))}
                  </div>
                </ScrollShadow>
                <p><strong>Skills:</strong></p>
                <div className='flex flex-wrap gap-4'>
                  {item.attributes.skills.map((skill, index) => (
                    <Tooltip key={index} content={skill}>
                      <Button variant='flat' color={colors[index % colors.length]} className='capitalize'>
                        {skill}
                      </Button>
                    </Tooltip>
                  ))}
                </div>
                <p><strong>Education:</strong> {item.attributes.education.join(', ')}</p>
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